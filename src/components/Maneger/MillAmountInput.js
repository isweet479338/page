import React, { Component } from 'react';
import axios from 'axios'; 
import BoderListFormill from './BoderListFormill'

export default class MillAmountInput extends Component{

	constructor(){
		super();
        this.onChangeQuery = this.onChangeQuery.bind(this)
        this.onChangeReQuery = this.onChangeReQuery.bind(this)
        
        this.onSubmit = this.onSubmit.bind(this);
		this.state = {
            boder : [],
            names : [],
            mill : [],
            msg   : '',
            reQueryMsg   : '',
            inputType : '',
            needDate : false,
            needDateValue : '',
            date : new Date().getDate(),
            form : false,
            botton : false,
            lateMsg : ''
        }

      

    }

    componentDidMount(){
    

    // axios.get('http://127.0.0.1:8000/api/mill_data_query/'+ JSON.parse( localStorage.getItem('boder')).id +'/'+ this.state.date ).then(res => {

    axios.get('http://127.0.0.1:8000/api/mill_about_demo/' ).then(res => {
            
           console.log( res )
            if( (res.data.status === 'maneger_nai') || (res.data.status === 'last_month_nai') ){
               this.setState({
                form : false,
                msg : res.data.msg
               })
            }else{

                if (res.data.status === 'first_day') {
                    // input this month need checkbox
                    this.setState({
                        form : true,
                        inputType : 'first_day',
                        msg : res.data.msg,
                        boder : res.data.array
                    }) 
                }
               
                if (res.data.status === 'first_at_mill') {
                    // input this month need checkbox
                    this.setState({
                        form : true,
                        inputType : 'first_at_mill',
                        msg : res.data.msg,
                        boder : res.data.array
                    }) 
                }

                if (res.data.status === 'month_inputed_try_TT') {
                    // try on am pm need checkbox
                    this.setState({
                        form : true,
                        needDate : true,
                        inputType : 'month_inputed_try_TT',
                        msg : res.data.msg,
                        boder : res.data.array
                    }) 
                }

                if (res.data.status === 'last_day') {
                    // input agami month need checkbox
                    this.setState({
                        form : true,
                        inputType : 'last_day',
                        msg : res.data.msg,
                        boder : res.data.array
                    }) 
                }

                if (res.data.status === 'tomorrow') {
                    // input tomorrow no check box
                    this.setState({
                        botton : true,
                        inputType : 'tomorrow',
                        msg : res.data.msg
                    }) 
                }
              
                if (res.data.status === 'today') {
                    // input today no check box
                    this.setState({
                        botton : true,
                        inputType : 'today',
                        msg : res.data.msg
                    }) 
                }


                
            }

        });

    }

    onChangeQuery(e){
        this.setState({ boderId : e.target.value })

        // axios.get('http://127.0.0.1:8000/api/singel_mill_status/'+ e.target.value + '/' + this.state.date  ).then(res => {
        //     this.setState({ mill: res.data.mill, gust : res.data.noon });
        // });
    }
    onChangeReQuery(e){
        this.setState({ needDateValue  : e.target.value })
       
        // just view not more
       
        axios.get('http://127.0.0.1:8000/api/day_wise_mill/'+ JSON.parse( localStorage.getItem('boder')).id + '/' + e.target.value  ).then(res => {
            
            if (res.data.status === true  ) {
                this.setState({ mill: res.data.mill, reQueryMsg : res.data.msg, });      
               
            }else{
                this.setState({ mill: [], reQueryMsg : res.data.msg, });  
            }

        });
        
    }
    
    handelChangeName = (data, e, i) => {

       const name = this.state.names
        if(data === 'push'){
            name.push(+e)
        }else{
            i = name.indexOf(+e)
            name.splice(i, 1)
        }
        this.setState( {names : name } )
    }


    BoderList = () => {
        return this.state.boder.map( (object, i) => { 
                return ( <BoderListFormill  onChangeName={ this.handelChangeName.bind(this) }   obj={object} key={i} bal={ i }  /> );
            });
    }
    millInput = () => {

        const obj = {
            inputType : this.state.inputType,
            local : 2
        };
    
        axios.post('http://127.0.0.1:8000/api/add_them_in_mill', obj).then(res => {

            console.log( res )
            
            // this.setState({
            //     msg : res.data.msg,
            //     form:false
            // }) 
        });

    }
    MillList = () => {

        let jor = 'bg-danger ';
        let bejor = 'bg-info ';

        let mm = this.state.needDateValue
        return this.state.mill.map( (object, i) => { 
                return ( <span className={`btn  text-light ${ i % 2 === 0 ? jor : bejor }`} key={i} >{ object.name } { object.dd } </span> );
            });
    }


    onChangeCode(e) {
		this.setState({
			code : e.target.value
		})
	}
	
    onSubmit(e){
        e.preventDefault();

        const obj = {
            names: this.state.names,
            inputType : this.state.inputType,
            needDateValue : this.state.needDateValue,
            local : 2
        };
    
        axios.post('http://127.0.0.1:8000/api/add_them_in_mill', obj).then(res => {

            console.log( res )
            
            // this.setState({
            //     msg : res.data.msg,
            //     form:false
            // }) 
        });

    }


	render(){
        let today = new Date().getDate()
        let option = []
        for (let index = 0; index < today; index++) {
           let temp = <option key={ index } value={ index+1 }>Date { index+1 } </option>
            option.push( temp )
        }

        

		return(

            <div className="">

                <div className='row' >
                    <div className='col-md-2' ></div>

                    <div className='col-md-8 text-center'  >

                        <div className="card" >
                            <div className="card-header"  >
                                <p>Mill Amount Input</p>
                            </div>

                            <div className="card-body"  >

                                { this.state.msg }
                                { this.state.lateMsg }
                                
                                {/* 1tariq a data pawya gace last month er , input this month an new  */}
                                { this.state.botton === true && 
                                    <p className='btn btn-primary' onClick={ this.millInput } > Input { this.state.inputType } </p>
                                 }

                                { this.state.form === true && 
                                    <form onSubmit={this.onSubmit} >
                                    
                                        <div className="row" >
                                            {/* <div className="col-sm-6" >

                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect1">Select Boder</label>
                                        
                                                </div>
                                            </div> */}
                                            <div className="col-sm-12" >

                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect1">Select Date</label>
                                        
                                                    <select required='required'   value ={ today - 1  } name="date"  className='form-control' >
                                                    { option }
                                                    </select>

                                                </div>
                                            </div>

                                            { this.state.needDate === true &&
                                            
                                                <div className="col-sm-12" >

                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlSelect1">Select Date</label>
                                            
                                                        <select required='required'  onChange={this.onChangeReQuery}  value = { this.state.needDateValue   } name="date"  className='form-control' >
                                                        
                                                            <option value='' > Date Query </option>
                                                            <option value='_01' > Date 1</option>
                                                            <option value='_02' > Date 2</option>
                                                            <option value='_03' > Date 3</option>
                                                            <option value='_04' > Date 4</option>
                                                            <option value='_05' > Date 5</option>
                                                            <option value='_06' > Date 6</option>
                                                            <option value='_07' > Date 7</option>
                                                            <option value='_08' > Date 8</option>
                                                            <option value='_09' > Date 9</option>

                                                        </select>

                                                    </div>
                                                    
                                                    { this.state.reQueryMsg }
                                                    { this.state.mill.length > 0 &&  this.MillList() }




                                                </div>
                                                
                                             }



                                        </div>
                                            
                                        <table className='table' >

                                            <thead>
                                                <tr>
                                                    <td>SL.</td>
                                                    <td>Name</td>
                                            
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {  this.BoderList() }
                                          
                                            </tbody>

                                        </table>

                                        
                                     
                                        <button className="btn btn-primary">Add Them in your This months mill</button>


                                    </form>
                                    }
                            </div>


                            <div className="card-footer"  >
                                <p> Please input your mill, see the personal mill and gust mill </p>
                            </div>

                        </div>
                    <div className='col-md-2' ></div>

                </div>
                    
                </div>

            </div>


		)
	}

} 