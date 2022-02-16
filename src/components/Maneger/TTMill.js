import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import  {Link } from 'react-router-dom';
class TTMill extends Component{

	constructor(props){
		super(props);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
		this.state = {
			redirect: false
		}
	}

	delete(){
		axios.get('http://127.0.0.1:8000/api/delete_request/'+ this.props.obj.id)
		.then(
			this.setState({ redirect : true })
		 )
		.catch(err => console.log(err))
	}

    add(){
        axios.get('http://127.0.0.1:8000/api/add_accept/'+ this.props.obj.id)
		.then(
			this.setState({ redirect : true })
		 )
		.catch(err => console.log(err))
    }

	render(){
		const { redirect } = this.state;
		if (redirect) {
			return < Redirect to='/boder-request'  />
		} 

		return (
			
            <tr key={this.props.obj.id} >
                <td>1</td>
                <td>{this.props.obj.name}</td>
                <td>
                    <button 
                        className='btn btn-info' 
                        onClick={ () => this.add(this.props.obj.id) }
                    >Add</button>
                    <button 
                        className='btn btn-danger' 
                        onClick={ () => this.delete(this.props.obj.id) }
                    >Cancel</button>

                </td>
            </tr>
		)
	}
}
export default TTMill;