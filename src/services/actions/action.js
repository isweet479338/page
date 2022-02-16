import axios from 'axios'
import { ADD_TO_CART, REMOVE_TO_CART, SIGN_UP_ERROR, SIGN_UP, USER } from '../constants'


export const addToCarttttttttttttttttttttt = (data) => {
   
    return {
        type : ADD_TO_CART,
        data : data
    }
} 
export const removeToCart = () => {
   
    return {
        type : REMOVE_TO_CART,
    }
}
export const dataLoad = () => async dispatch =>  {

    await axios.get('http://127.0.0.1:8000/api/try')
    .then( res => 

        dispatch({
            type: USER,
            payload: res.data.user
        })
    )
    .catch(err => {
        console.log(err.message)
        console.log("Daci")
        dispatch({
            type: 'SIGN_UP_ERROR',
            payload: {
                message : "Email Password Have Problem"
            }
        })
    })



}
export const dataInputAction = (value) => async dispatch => {

// console log a data show hoy
// console.log( value )

// dispatch({
//     type: SIGN_UP,
//     payload : value
// })

await axios.post('/api/users/signup', value)
    .then(res => 
        dispatch({
            type: 'SIGN_UP',
            payload: {
                message : "Success"
            }
        })
    )
    .catch(err => {
        console.log(err.message)
        console.log("Daci")
        dispatch({
            type: 'SIGN_UP_ERROR',
            payload: {
                message : "Email Password Have Problem"
            }
        })
    })




    // return {
    //         type: ADD_TO_CART,
    //         payload : 'success'
    // }
}
export const balerAction = (data) => {

    return {
        type : ADD_TO_CART,
        data : data
    }

}

export const validation = (value) => async dispatch => {

    console.log( value )

    return {
        type : 'VALID',
        data : value
    }

}

