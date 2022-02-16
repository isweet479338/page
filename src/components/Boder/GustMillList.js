import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { DeleteGustMill } from '../../services/actions/BoderAction'

class GustMillList extends Component {
    constructor(props) {
        super(props);
        this.state = { redirect : false };
    }


    render() {

        let now = new Date()
        let month = now.getMonth() + 1
   
        let DBdate = new Date( this.props.obj.y + ' ' + this.props.obj.m + ' ' + this.props.obj.d )
        let Jsdate = new Date( now.getFullYear() + ' ' + month + ' ' + now.getDate() )
        
        let view;
        if( DBdate.getTime() > Jsdate.getTime() ){
            view  = <button onClick={ () => this.props.DeleteGustMill( this.props.obj.id ) } className='btn btn-warning' >Delete</button>
        }else{
            view = "Past, No Change"
        }
        

    return (

        <tr><td> { this.props.obj.d } </td><td>{ this.props.obj.noon } </td><td>{ this.props.obj.night }</td><td> { view } </td></tr>
 

        );
    }
}



const mapStateToProps = (state) => {
    return {
        redirect : state.boder.redirect
    }
}

const mapDispatchToProps = dispatch => ({
    DeleteGustMill: data => dispatch( DeleteGustMill(data)),
  
})


export default connect( mapStateToProps,  mapDispatchToProps )(GustMillList);
