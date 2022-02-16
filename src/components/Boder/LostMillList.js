import React, { Component } from 'react'
import {connect} from 'react-redux'
import { DeleteLostMill } from '../../services/actions/BoderAction'

 class LostMillList extends Component {
    
    constructor(){
        super();
      
    }

    DeleteLostReq(){

        // axios.get('http://127.0.0.1:8000/api/delete_my_lost_mill_request/'+ this.props.obj.id)
		// .then(
		// 	this.setState({ redirect : true })
		//  )
		// .catch(err => console.log(err))
    }

    render() {
  
        const stutas = this.props.obj.confirm === 0 ? <span className='text-warning' > Pending <br /> <button className='btn btn-danger' onClick={ () =>  this.props.DeleteLoststMill( this.props.obj.id ) } > Cancel </button> </span> : <span className='text-info' >Confirm</span>
        return (
            <tr><td> { this.props.obj.d } </td><td>{ this.props.obj.morning } </td><td>{ this.props.obj.noon }</td><td>{ this.props.obj.night }</td><td>
            { stutas }</td>
            </tr>
        )
    }
}
const mapStateToProps = (state) => {
    return {
       
    }
}

const mapDispatchToProps = dispatch => ({
    DeleteLoststMill: data => dispatch( DeleteLostMill(data)),
  
})


export default connect( mapStateToProps,  mapDispatchToProps )(LostMillList);