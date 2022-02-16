import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { acceptRequest, deleteRequest } from '../../services/actions/ManegerAction';



class RequestList extends Component{

	constructor(props){
		super(props);
        this.add = this.add.bind(this);
		this.state = {
			redirect: false
		}
	}

    add(){
        axios.get('http://127.0.0.1:8000/api/add_accept/'+ this.props.obj.id)
		.then(
			this.setState({ redirect : true })
		 )
		.catch(err => console.log(err))
    }

	render(){

		return (
			
            <tr key={this.props.obj.id} >
                <td>1</td>
                <td>{this.props.obj.name}</td>
                <td>
                    <button 
                        className='btn btn-info' 
                        onClick={ () => this.props.acceptRequest(this.props.obj.id) }
                    >Add</button>
                    <button 
                        className='btn btn-danger' 
                        onClick={ () => this.props.deleteRequest(this.props.obj.id) }
                    >Cancel</button>

                </td>
            </tr>
		)
	}
}

const mapStateToProps = (state) => {
    return {
      sucMsg : state.maneger.sucMsg
    }
}

const mapDispatchToProps = dispatch => ({
    deleteRequest: data => dispatch( deleteRequest(data)),
    acceptRequest: data => dispatch( acceptRequest(data)),
})


export default  connect(mapStateToProps, mapDispatchToProps ) ( RequestList );