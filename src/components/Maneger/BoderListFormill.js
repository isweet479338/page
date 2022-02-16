import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router';

export default class BoderListFormill extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
            
		}
    }

    // DeleteLostReq(){

    //     axios.get('http://127.0.0.1:8000/api/delete_my_lost_mill_request/'+ this.props.obj.id)
	// 	.then(
	// 		this.setState({ redirect : true })
	// 	 )
	// 	.catch(err => console.log(err))
    // }

    onFieldChangeName = (e ) => {

        if(e.target.checked){
                this.props.onChangeName('push', e.target.value, this.props.bal)
        }else{
            this.props.onChangeName('remove', e.target.value, this.props.bal)
        }
        

    }


    render() {
        // const { redirect } = this.state;
		// if (redirect) {
		// 	return < Redirect to='/lost-mill'  />
		// } 

        // const stutas = this.props.obj.confirm === 0 ? <span className='text-warning' > Pending <br /> <button className='btn btn-danger' onClick={ () =>  this.DeleteLostReq( this.props.obj.id ) } > Cancel </button> </span> : <span className='text-info' >Confirm</span>
        
        return (
            <tr>
                <td> 1 </td>
                <td>
                    <label htmlFor={`a${this.props.obj.bId }`} > {this.props.obj.name } </label>
                    <input 
                    type='checkbox' 
                    name={this.props.obj.bId } 
                    id={`a${this.props.obj.bId }`} 
                    onChange={ this.onFieldChangeName }
                    value={this.props.obj.bId }
                    />
                </td>
               
            </tr>
        )
    }
}
