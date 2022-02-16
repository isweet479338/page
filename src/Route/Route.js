import React from 'react';
import {
    HashRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';

import Login from "../components/Auth/Login";

import AuthenticRoute from './AuthenticRoute';
import Home from "../components/Boder/Home";


class Routes extends React.Component
{
    render()
    {
        return (
            <Router>

 



        <Switch>
       
         <Route exact  path='/home' component={ Home } />
          <Route exact path='/' component={ Login } />

          {/* <Route exact path='home' component={ Home } /> */}


          </Switch>
    </Router>
        )
    }
}

export default Routes;