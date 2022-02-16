import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bazarTkEdit, tkEditSave,  } from '../../services/actions/ManegerAction'
import ManFoot from '../Auth/ManFoot';
import ManHead from '../Auth/ManHead';

 class BazarTkEdit extends Component{

	constructor(props){
        super(props);
     
        this.onChangeCheck = this.onChangeCheck.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
		this.state = {
           boder : '',
           date : '',
           msg : '',
           newMsg : '',
           data : '',
           boder1 : '',
           boder2 : ''
        }
    }

    onChangeCheck(e){
        const { name, value } = e.target
         this.setState({ [name] : value })
    }

    componentDidMount(){
        this.props.bazarTkEdit( this.props.match.params.date )
    }

    onSubmit(e){
        e.preventDefault();
            const obj = {
                date : this.props.match.params.date,
                boder1 : this.state.boder1,
                boder2 : this.state.boder2,
            };
this.props.tkEditSave(obj)
    }

	render(){
		return(

            <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
            <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                <h2>Boder Request</h2><p> {this.props.sucMsg}</p></div>

                <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >
                    
                    <br />
                        You Cannot Chenge Bazar date, if Bazar Date was a mistake, Please go back and delete this.
                         <br />
                        Selected Date is  { this.state.boder.d !== '' ? this.state.boder.d : '0' } 
                        <br />
                        { this.state.newMsg }
                    { this.state.newMsg === '' &&
                    <form onSubmit={this.onSubmit} >
                    { this.props.boder.boder1 != null ?
                        <div className="form-group">
                            <label htmlFor='night' style={ { display: 'inline-block' } } > {`Boder Name 
                           ${ this.props.boder.boder1 }`}
                            </label>    
                            <input  
                                id='night'
                                type='text' 
                                className="form-control" 
                                name='boder1'
                                placeholder =  {`Previous amount for his was  ${this.props.boder.bazarkari === 'boder1' ?  this.props.boder.tk : '0'}  write new amount `}
                                value = { this.state.boder1 }
                                onChange={ this.onChangeCheck }
                                style={ { marginTop: '-5px' } }
                            />
                           
                        </div>
                        : 'Boder 1 not booked' } 
                        { this.props.boder.boder2 != null ?
                        <div className="form-group">
                            <label  htmlFor='night2' style={ { display: 'inline-block' } } >{` Boder Name 
                            ${ this.props.boder.boder2 } `}

                            </label>  
                            
                            <input  
                                id='night2'
                                type='text' 
                                className="form-control" 
                                name='boder2' 
                                placeholder = {`Previous amount  for his was  ${this.props.boder.bazarkari === 'boder2' ?  this.props.boder.tk : '0'} write new amount `}
                                value =  {  this.state.boder2 }
                                onChange={ this.onChangeCheck }
                                style={ { marginTop: '-5px' } }
                            />
                              
                        </div>
                        : 'Boder 2 not booked' } 
                  
                       
                        <br />
                        <button className="btn btn-primary">Request </button>
                    </form>
                    }

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

        boder: state.maneger.tkEdit
    }
}
const mapDispatchToProps = dispatch => ({
    bazarTkEdit: (data) => dispatch( bazarTkEdit(data) ),
    tkEditSave: data => dispatch( tkEditSave(data) )
})
export default connect(mapStateToProps, mapDispatchToProps)(BazarTkEdit);
