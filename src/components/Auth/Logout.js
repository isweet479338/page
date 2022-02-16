import React, { Component } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { logout } from '../../services/actions/AuthAction'
import { useDispatch, connect } from "react-redux";

class Logout extends Component {
  
    render(){

        return (
           <div>
               <h1>Succesfully Logout</h1>
               <Link to='/'  > Want to login</Link>
           </div>
        );
        }
}

export default connect( null , { logout } )(Logout);