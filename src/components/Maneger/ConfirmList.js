import React, { Component } from 'react';
import { connect } from 'react-redux'
import { lostRequAccept, lostRequDelete } from '../../services/actions/ManegerAction';

class ConfirmList extends Component{
    
	render(){
	
        let now = new Date( this.props.obj.datetime * 1000 )
		return (
			
            <tr key={this.props.obj.id} >
                <td>1</td>
                <td>{this.props.obj.name}</td>
                <td>
                    Morning: {this.props.obj.morning } <br />
                    Noon: {this.props.obj.noon } <br />
                    Night: {this.props.obj.night } <br />
                </td>
                <td>
                    Date : {this.props.obj.d } <br />
                    Requested Time : { now.toLocaleString() }
                
                </td>
                <td>
                    <button 
                        className='btn btn-info' 
                        onClick={ () => this.props.lostRequAccept(this.props.obj.id) }
                    >Confirm</button>
                    <button 
                        className='btn btn-danger' 
                        onClick={ () => this.props.lostRequDelete(this.props.obj.id) }
                    >Delete</button>

                </td>
            </tr>
		)
	}
}
const mapStateToProps = (state) => {
    return {
      
    }
}

const mapDispatchToProps = dispatch => ({
    lostRequDelete: (data) => dispatch( lostRequDelete(data)),
    lostRequAccept: (data) => dispatch( lostRequAccept(data)),
    
})


export default  connect(mapStateToProps, mapDispatchToProps ) (ConfirmList);