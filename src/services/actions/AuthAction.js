import axios from 'axios'
import { Redirect } from 'react-router-dom'
import history from './../History'
import local from '../../Route/Url'


import { LOADING, FAILED, LOGIN, LOGOUT, REDIRECT_FALSE, REG }  from '../constants'

const URL = local;

export const login = (value) => async dispatch => {
    // dispatch({type: LOADING})

    await axios.post(`${URL}/login`, value)
    .then( res => {
        console.log( res )
        dispatch({
            type: LOGIN,
            payload: 'Login Success.'
        })
        const user = {
            id : res.data.user.id,
            massId : res.data.user.mass_id,
            name : res.data.user.name,
        }
        localStorage.setItem('token', 'Bearer ' + res.data.token);
        localStorage.setItem('user', JSON.stringify( user ) );
        localStorage.setItem('mane', res.data.man );
        // dispatch({type: REDIRECT_FALSE}) 
    })
    .catch(err => {
        dispatch({
            type: FAILED,
            payload: err.response.data.error
        })

    })


}


export const register = (value) => async dispatch => {
    // dispatch({type: LOADING})

    await axios.post(`${URL}/register`, value)
    .then( res => {
        console.log( res )
        dispatch({
            type: REG,
            payload: 'Registration Success.'
        })
    })
    .catch(err => {

        dispatch({
            type: FAILED,
            payload: err.response.data
        })

    })


}




export const logout = () => async dispatch => {
    localStorage.clear();
    dispatch({
        type: LOGOUT
    })
}

export const rediretfalse = () => async dispatch => {
    // dispatch({type: LOADING})

    dispatch({
        type: REDIRECT_FALSE
    }) 

}



















