import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import  {Link } from 'react-router-dom';

class TotalMillList extends Component{

	constructor(props){
		super(props);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
		this.state = {
			redirect: false
		}

	// console.log( this.props.gust )

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

	
			
            <tr key={ this.props.obj } ><td>{  this.props.index }</td><td>{  this.props.obj }</td><td>{  this.props.val }</td><td>{  this.props.gust }</td><td>{  this.props.lost }</td></tr>
           
           
            
   
		
            
		)
	}
}
export default TotalMillList;