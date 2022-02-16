import React, { Component } from 'react';
import { connect } from 'react-redux';
import { balerAction, dataInputAction, dataLoad } from '../services/actions/action'

class Sweet extends Component {
    

    state = {  name : '' }
     onFormSubmit = event => {
        event.preventDefault();
        this.props.dataInputAction(this.state)
     }

   


    //  componentDidMount(){
    //      this.props.dataLoad()
    //     // console.log(user)
    //  }

     render() { 
         return (
        <div>
            <h1>Hello sweet {this.props.massage} </h1> 

            { console.log(this.props.user) }

            <form onSubmit={this.onFormSubmit} method='post' >
            <input 
                        value = {this.state.name}                        
                        onChange={ e => this.setState({name: e.target.value})}
                        type="text" className="form-control" required placeholder="Enter Your Name" />
                <button  type='submit' >Submit</button>
            </form>
        </div>
         )
    }
}
const mapStateToProps = (state) => {
    return {
        massage : state.cardItems.massage, 
        user : state.cardItems.userRed
    }
}
// const mapDispatchToProps = dispatch => ({
//     onFormSubmit: data => dispatch( dataInputAction(data)),
// })
export default connect( mapStateToProps, {dataInputAction} )(Sweet);