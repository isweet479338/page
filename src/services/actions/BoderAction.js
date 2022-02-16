import axios from 'axios'
import local from '../../Route/Url'

import { LOADING, FAILED, CHECK_MASEE, UPDATE_MILL, STOP_MILL, MY_ALL_GUST_MILL, DELETE_MY_GUST_MILL, GUST_MILL_START,
     TODAY_MILL_STATUS, DELETE_MY_LOST_MILL, LOST_MILL_REQUEST, MY_MILL_SYMMARY, BAZAR_THIS_MONTH, BAZAR_BOOK_REQ, ADD_MASE, TK_JOMA_HISTORY, BODER }  from '../constants'


     const URL = local;

     export const checkMass = (id) => async dispatch =>  {
    dispatch({type: LOADING})
    await axios.get(`${URL}/add_mase_status/`, { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res )
         dispatch({
            type: CHECK_MASEE,
            payload: {
                massage : res.data.msg,
                status : res.data.status
            }
        })
    })
    .catch(err => {
        // console.log( err )
        dispatch({
            type: FAILED,
            payload: err.response.data.error
        })
    })
}

export const addMase = (id) => async dispatch =>  {
    dispatch({type: LOADING})
    await axios.post(`${URL}/add_mase/`,  id, { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res )
         dispatch({
            type: ADD_MASE,
            payload: {
                massage : res.data.msg,
                status : res.data.status
            }
        })
    })
    .catch(err => {
        console.log( err )
        dispatch({
            type: FAILED,
            payload: err.response.data.error
        })
    })
}




export const updateMill = (value) => async dispatch =>  {
    dispatch({type: LOADING})
    await axios.post(`${URL}/start_update/`, value ,{ 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res )
         dispatch({
            type: UPDATE_MILL,
            payload: res.data.msg
        })
    })
    .catch(err => {
        console.log( err )
        dispatch({
            type: FAILED,
            payload: err.response.data.error
        })
    })
}

export const stopMill = (id) => async dispatch =>  {
    dispatch({type: LOADING})
    // console.log(id)
    await axios.get(`${URL}/stop_my_mill/`, { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        // console.log( res )
         dispatch({
            type: STOP_MILL,
            payload:  res.data.msg
        })
    })
    .catch(err => {
        // console.log( err )
        dispatch({
            type: FAILED,
            payload: err.response.data.error
        })
    })
}


export const myAllGustMill = (id) => async dispatch =>  {
    dispatch({type: LOADING})
    // console.log(id)
    await axios.get(`${URL}/my_all_gust_mill/`, { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res )
         dispatch({
            type: MY_ALL_GUST_MILL,
            payload:  res.data.gust
        })
    })
    .catch(err => {
        console.log( err )
        dispatch({
            type: FAILED,
            payload: err.response.data.error
        })
    })
}

export const DeleteGustMill = (id) => async dispatch =>  {
    dispatch({type: LOADING})
    // console.log(id)
    await axios.delete(`${URL}/delete_my_gust_mill_request/` + id  , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res )
         dispatch({
            type: DELETE_MY_GUST_MILL,
            payload : {
                id : id,
                massage : res.data.msg,
            }
        })
    })
    .catch(err => {
        console.log( err )
        dispatch({
            type: FAILED,
            payload: err.response.data.error
        })
    })
}



export const GustMillStart = (value) => async dispatch =>  {
    dispatch({type: LOADING})

    await axios.post(`${URL}/gust_start/`, value  , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res )
         dispatch({
            type: GUST_MILL_START,
            payload :  res.data.msg
        })
    })
    .catch(err => {
        console.log( err )
        dispatch({
            type: FAILED,
            payload: err.data.status
        })
    })
}

export const TodayMillStatus = ( value ) => async dispatch =>  {
    dispatch({type: LOADING})
    // console.log(id)
    await axios.get(`${URL}/today_mill_status/`, { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res )
         dispatch({
            type: TODAY_MILL_STATUS,
            payload : res.data
        })
    })
    .catch(err => {

        dispatch({
            type: FAILED,
            payload: 'dd'
        })
    })
}
export const DeleteLostMill = (id) => async dispatch =>  {
    dispatch({type: LOADING})
    // console.log(id)
    await axios.delete(`${URL}/delete_my_lost_mill_request/` + id  , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res )
         dispatch({
            type: DELETE_MY_LOST_MILL,
            payload : {
                id : id,
                massage : res.data.msg,
            }
        })
    })
    .catch(err => {
        console.log( err )
        dispatch({
            type: FAILED,
            payload: err.response.data.error
        })
    })
}
export const lostMIllRequest = (value) => async dispatch =>  {
    dispatch({type: LOADING})

    await axios.post(`${URL}/lost_mill_request/`, value  , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res )
         dispatch({
            type: LOST_MILL_REQUEST,
            payload :  res.data.msg
        })
    })
    .catch(err => {
        console.log( err )
        dispatch({
            type: FAILED,
            payload: err.data.status
        })
    })
}

export const myMillSummary = (value) => async dispatch =>  {
    dispatch({type: LOADING})

    await axios.get(`${URL}/total_mill_boder_request/`, { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        
         dispatch({
            type: MY_MILL_SYMMARY,
            payload :  res.data
        })
    })
    .catch(err => {
        console.log( err )
        dispatch({
            type: FAILED,
            payload: err.data.status
        })
    })
}

export const bazarThisMonth = (value) => async dispatch =>  {
    dispatch({type: LOADING})

    await axios.get(`${URL}/bazar_list_this_month/`, { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res )
         dispatch({
            type: BAZAR_THIS_MONTH,
            payload :  res.data.bazar
        })
    })
    .catch(err => {
        console.log( err )
        dispatch({
            type: FAILED,
            payload: err.data.status
        })
    })
}

export const bazarBookReq = (value) => async dispatch =>  {
    dispatch({type: LOADING})
    console.log( value )
    await axios.put (`${URL}/bazar_book_req/`, value  , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res )
         dispatch({
            type: BAZAR_BOOK_REQ,
            payload :  { massage : res.data.msg, date : value.date }
        })
    })
    .catch(err => {
        console.log( err )
        dispatch({
            type: FAILED,
            payload: err.data.status
        })
    })
}

export const bazarBookppppp = (value) => async dispatch =>  {
    dispatch({type: LOADING})

    await axios.put (`${URL}/bazar_book_req/`, value  , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res )
        //  dispatch({
        //     type: BAZAR_BOOK_REQ,
        //     payload :  res.data.bazar
        // })
    })
    .catch(err => {
        console.log( err )
        // dispatch({
        //     type: FAILED,
        //     payload: err.data.status
        // })
    })
}

export const tkJomaHistory = (value) => async dispatch =>  {
    dispatch({type: LOADING})

    await axios.get(`${URL}/tk_joma_history/` , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res )
         dispatch({
            type: TK_JOMA_HISTORY,
            payload :  res.data.tk
        })
    })
    .catch(err => {
        console.log( err )
        // dispatch({
        //     type: FAILED,
        //     payload: err.data.status
        // })
    })
}


export const boder = () => async dispatch =>  {
    // dispatch({type: LOADING})

    await axios.get(`${URL}/boder_data`  , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res )
         dispatch({
            type: BODER,
            payload :  res.data.array
        })
    })
    .catch(err => {
        console.log( err )
        // dispatch({
        //     type: FAILED,
        //     payload: err.data.status
        // })
    })
}












