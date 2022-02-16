import React, { useDebugValue } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import { logout } from '../../services/actions/AuthAction'
import { useDispatch, connect, } from "react-redux";

function Header(props) {
    const dispatch = useDispatch()

    const logOut = () => {
        dispatch( logout() )
        // return <Redirect to='/' />
        //props.history.push('/')
    }

    return (

        <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
                <h1 className="h4 text-gray-900 m-4 text-center">Rajtechteam Mill System </h1>
                <Link className='btn btn-info' to="/add-mase">Add Mase</Link>

{JSON.parse( localStorage.getItem('mane')) === true  && 
                <Link className='btn btn-info' to="/maneger">Maneger</Link>
}
                <Link className='btn btn-info' to="/total-mill">My Total</Link>

                <Link className='btn btn-info' to="/update-mill">Start / Change /Stop Mill</Link>

                <Link className='btn btn-info' to="/gust-mill">Gust Mill</Link>

                <Link className='btn btn-info' to="/lost-mill">Lost Mill</Link>

                <Link className='btn btn-info' to="/bazar-list">Bazar List</Link>

                <Link className='btn btn-info' to="/bazar-input">Bazar Input</Link>
                
                <Link className='btn btn-info' to="/tk-joma-history">Tk Joma History</Link>

                <Link className='btn btn-danger' to="/log-out" 
                onClick={ logOut }
                 >Log Out</Link>

                {/* <Logout /> */}

            </div>
        </div>



    );
}

export default withRouter(Header);