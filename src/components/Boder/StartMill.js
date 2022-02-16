import React from 'react';
import { connect } from 'react-redux';

import Footer from '../Auth/Footer';
import Header from '../Auth/Header';

import { updateMill, stopMill } from '../../services/actions/BoderAction'
import '../../style/loader.css'




class StartMill extends React.Component {
    constructor(){
		super();
		this.onChangemorning = this.onChangemorning.bind(this);
		this.state = {
            morning: false,
            noon: false,
            night: false,
            date: '',
            msg:'',
            local: '',
            form : true
           
        }
    }


    onChangemorning(e) {
        const { name, checked, value, type } = e.target
        type === 'checkbox' ? this.setState({ [name] : checked }) : this.setState({ [name] : value })
        
     
	}

    onSubmit = e => {
        e.preventDefault();

        const obj = {
            morning : this.state.morning,
            noon : this.state.noon,
            night : this.state.night,
            date : this.state.date,
            local : JSON.parse( localStorage.getItem('user')).id
        };

        this.props.updateMill( obj )

        // axios.post('http://127.0.0.1:8000/api/start_update', obj).then(res => {
            
        //     this.setState({
        //         msg : res.data.msg,
        //         form:false
        //     }) 
        // });

       console.log( obj )

    }


    render() {

        if(this.props.loader == true){
            return <div className="loader"></div>;
        }
    

        return (
            <>
            <Header />
            <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-12">
         


              <div className="p-5">
                <div className="text-center">

                           <div className="card-header"  >
                            <h2>Mill Restart Page</h2>
                            <p>{ this.props.sucMsg }</p>
                        </div>
               
                        
                        <form onSubmit={this.onSubmit} >
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Select day (Current Month)</label>
                            
                                <select value={this.state.date}  onChange={this.onChangemorning} name="date" className='form-control' >
                                    <option >-- Select a Day --</option>
                                    <option value='01'>Date 01</option>
                                    <option value='02'>Date 02</option>
                                    <option value='03'>Date 03</option>
                                    <option value='04'>Date 04</option>
                                    <option value='05'>Date 05</option>
                                    <option value='06'>Date 06</option>
                                    <option value='07'>Date 07</option>
                                    <option value='21'>Date 21</option>
                                    <option value='25'>Date 25</option>
                                </select>

                            </div>



                            <div className="form-group">
                                <label className='btn btn-success' htmlFor='morning' style={ { display: 'inline-flex' } } >
                                <input  
                                   id='morning'
                                    type='checkbox' 
                                    className="form-control" 
                                    name='morning' 
                                
                                    onClick={this.onChangemorning}
                                    style={ { marginTop: '-5px' } }
                                />Morning &nbsp; &nbsp; </label>    
                            </div>
                            <div className="form-group">
                                <label className='btn btn-warning' htmlFor='noon' style={ { display: 'inline-flex' } } >
                                <input  
                                   id='noon'
                                    type='checkbox' 
                                    className="form-control" 
                                    name='noon' 
                           
                                    onClick={this.onChangemorning}
                                    style={ { marginTop: '-5px' } }
                                />Noon &nbsp; &nbsp; </label>    
                            </div>
                            <div className="form-group">
                                <label className='btn btn-dark' htmlFor='night' style={ { display: 'inline-flex' } } >
                                <input  
                                   id='night'
                                    type='checkbox' 
                                    className="form-control" 
                                    name='night' 
                          
                                    onClick={this.onChangemorning}
                                    style={ { marginTop: '-5px' } }
                                />Night &nbsp; &nbsp; </label>    
                            </div>
                            <button className="btn btn-primary">Set My Mill </button>
                            </form>
                        
                           

                            <p>Mind it if you Click Stop my mill your mill will stop form tomorrow </p>
                            <button onClick={ () => this.props.stopMill( JSON.parse( localStorage.getItem('user')).id ) } className="btn btn-danger">Stop my mill</button>
                            </div>
                
    
                </div>
              </div>
            </div>
          </div>
        </div>
                <Footer />
                </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loader : state.boder.loading, 
        errMsg : state.boder.errMsg,
        sucMsg : state.boder.sucMsg,
    }
}

const mapDispatchToProps = dispatch => ({
    stopMill: data => dispatch( stopMill(data)),
    updateMill : data => dispatch( updateMill(data) )
})


export default  connect(mapStateToProps, mapDispatchToProps ) (StartMill);