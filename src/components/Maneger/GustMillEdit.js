import React, { Component } from 'react';
import { connect } from 'react-redux'
import { guestMillEdit, guestMillEditSave } from '../../services/actions/ManegerAction'
import ManFoot from '../Auth/ManFoot';
import ManHead from '../Auth/ManHead';

class BoderGustMillStart extends Component{

	constructor(props){
        super(props);
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
		this.state = {
           boder : [],
         
           boderId : '',
           date : '',
           noon : '',
           night : '',
           msg : ''
        }
    }

    onChangeDate(e){
        const { name, value } = e.target
        this.setState({ [name] : value })
    }

    componentDidMount(){
        this.props.guestMillEdit( this.props.match.params.id )
    }

    onSubmit(e){
        e.preventDefault();
            const obj = {
                guestId : this.props.match.params.id,
                date : this.state.date === '' ? this.props.date : this.state.date ,
                noon : this.state.noon === '' ? this.props.noon : this.state.noon,
                night : this.state.night === '' ? this.props.night : this.state.night,
            };

       this.props.guestMillEditSave( obj )
       this.props.history.push('/guest-mill-list')

    }

	render(){

    function fff( rr  ){
        let now = new Date()
        let pp = []
        let today = now.getDate()
        let last = new Date( now.getFullYear(), now.getMonth() + 1, 0 ).getDate()
        for (let i = today ; i < last+1; i++) {
            pp.push( <option key={ i } value={ i }>Date { i } </option>)
        }
        return pp
    }

        
		return(

            <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
            <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                <h2>Boder Request</h2><p> {this.props.sucMsg}</p></div>

                <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >

                    <form onSubmit={this.onSubmit} >

                    <div className="row" >
                        <div className="col-sm-6" >

                            <div className="form-group">
                                { this.props.guestId.name }
                            </div>
                        </div>
                        <div className="col-sm-6" >

                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Select Date</label>
                    
                                <select  onChange={this.onChangeDate}  value ={ this.state.date === '' ? this.props.date : this.state.date } name="date"  className='form-control' >
                                    <option value=''>Select One</option>

                                    {  fff() }

                                </select>

                            </div>
                        </div>
                        </div>
                        
                        <div className="row" >
                            <div className="col-sm-6" >
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Noon mill</label>
                                    <input  
                                        type='text' 
                                        className="form-control" 
                                        name='noon'
                                     
                                        placeholder={this.props.noon}
                                        value = { this.state.noon }
                                        onChange={ this.onChangeDate }
                                    />
                              </div>
                            </div>
                            <div className="col-sm-6" >
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Night mill</label>
                                    <input  
                                        type='text' 
                                        className="form-control" 
                                        name='night'
                                  
                                        placeholder={this.props.night}
                                        value = { this.state.night }
                                        onChange={ this.onChangeDate }
                                    />
                                </div>
                            </div>
                        </div>

    

                        <button className="btn btn-primary">Request </button>
                    </form>
                
                    </div><div className="card-footer"  >
                            <p>jar hate tk deben sudu take check kore tk amount din. onno jon k check korar dorkar nai, 2 jon k check korben na</p>
                        </div>
                    </div> </div>
                </div></div></div> </div></div>  <ManFoot /> </>


		)
	}

} 


const mapStateToProps = (state) => {
    return {
        loader: state.maneger.loading,
        errMsg: state.maneger.errMsg,
        sucMsg: state.maneger.sucMsg,

        guestId : state.maneger.guestId,
        date : state.maneger.date,
        noon : state.maneger.noon,
        night : state.maneger.night,
    }
}
const mapDispatchToProps = dispatch => ({
    guestMillEdit: (data) => dispatch( guestMillEdit(data) ),
    guestMillEditSave: data => dispatch( guestMillEditSave(data) )
})
export default connect(mapStateToProps, mapDispatchToProps)(BoderGustMillStart);
