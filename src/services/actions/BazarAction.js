import axios from 'axios'
import local from '../../Route/Url'


import { LOADING, FAILED, BAZARKARI_LIST, DATE_WISE, DATE_WISE_SHOW, MY_BAZAR_DETAILS, ROW_ADD, ROW_REMOVE, SAVE_BAZAR_LIST, BODER_BAZAR_JOMA, BAZAR_BACK2MANEGER, INPUTED_LIST, INPUT_BY_DATE, GOT_BAZAR, GET_MILL_RATE, SET_MILL_RATE, GET_MANEGER, SET_MANEGER, ALL_COST, ADD_COST, EDIT_COST } from '../constants'

const URL = local;

export const bazarkari = () => async dispatch => {
    // dispatch({type: LOADING})

    await axios.get(`${URL}/bazarkari_list/`, { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res )
        dispatch({
            type: BAZARKARI_LIST,
            payload: res.data.list
        })
    })
    .catch(err => {
        console.log( err )
        // dispatch({
        //     type: FAILED,
        //     payload: err.response.data.error
        // })

    })
}

export const dateWiseBazarkari = (id) => async dispatch => {
    // dispatch({type: LOADING})

    await axios.get(`${URL}/date_wise_bazarkari/` + id , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res )
        dispatch({
            type: DATE_WISE,
            payload: res.data.list
        })
    })
    .catch(err => {
        console.log( err )
        // dispatch({
        //     type: FAILED,
        //     payload: err.response.data.error
        // })

    })
}
export const changeBazarkari = (id) => async dispatch => {
    // dispatch({type: LOADING})

    await axios.get(`${URL}/change_bazarkari/` + id , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res )
        dispatch({
            type: DATE_WISE_SHOW,
            payload: res.data.msg
        })
    })
    .catch(err => {
        console.log( err )
        // dispatch({
        //     type: FAILED,
        //     payload: err.response.data.error
        // })

    })
}


export const bazarkariStore = (id) => async dispatch => {
    // dispatch({type: LOADING})

    await axios.post(`${URL}/bazarkari_store/` , id , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res )
        // dispatch({
        //     type: DATE_WISE_SHOW,
        //     payload: res.data.msg
        // })
    })
    .catch(err => {
        console.log( err )
        // dispatch({
        //     type: FAILED,
        //     payload: err.response.data.error
        // })

    })
}

export const myBazarDetails = () => async dispatch =>  {
    // dispatch({type: LOADING})
    await axios.get(`${URL}/my_bazar_details/` , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res.data )
         dispatch({
            type: MY_BAZAR_DETAILS,
            payload: { status : res.data.status, array : res.data.array }
        })
    })
    .catch(err => {
        console.log( err )
        // dispatch({ type: FAILED, payload: err.response.data.error })
    })
  }


  export const rowAdd = (id) => async dispatch =>  {
    dispatch({
      type : ROW_ADD,
      payload : id
    })
  }

  export const rowRemove = (id) => async dispatch =>  {
    dispatch({
      type : ROW_REMOVE,
      payload : id
    })
  }



  export const saveBazarList = (id) => async dispatch =>  {
    // dispatch({type: LOADING})
    await axios.post(`${URL}/save_bazar_list/`, id , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res.data )
         dispatch({
            type: SAVE_BAZAR_LIST,
            payload: res.data.msg
        })
    })
    .catch(err => {
        console.log( err )
        // dispatch({ type: FAILED, payload: err.response.data.error })
    })
  }
 
 
  export const boderBazarJoma = (  ) => async dispatch =>  {
    // dispatch({type: LOADING})
    await axios.get(`${URL}/personal_bazar_details/` , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res.data )
         dispatch({
            type: BODER_BAZAR_JOMA,
            payload: { msg : res.data.msg, form : res.data.form }
        })
    })
    .catch(err => {
        console.log( err )
        // dispatch({ type: FAILED, payload: err.response.data.error })
    })
  }



  export const bazarBack2Maneger = (id) => async dispatch =>  {
    // dispatch({type: LOADING})
    await axios.post(`${URL}/bazar_back2manager/`, id , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res.data )
         dispatch({
            type: BAZAR_BACK2MANEGER,
            payload: res.data.msg
        })
    })
    .catch(err => {
        console.log( err )
        // dispatch({ type: FAILED, payload: err.response.data.error })
    })
  }


  export const inputedList = () => async dispatch =>  {
    // dispatch({type: LOADING})
    await axios.get(`${URL}/all_inputed/` , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res.data )
         dispatch({
            type: INPUTED_LIST,
            payload: res.data.input
        })
    })
    .catch(err => {
        console.log( err )
        // dispatch({ type: FAILED, payload: err.response.data.error })
    })
  }


  export const inputByDate = (id) => async dispatch =>  {
    // dispatch({type: LOADING})
    await axios.get(`${URL}/bazar_details_by_date/` + id , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res.data.status )
         dispatch({
            type: INPUT_BY_DATE,
            payload: { array : res.data.array, status : res.data.status, msg : res.data.msg }
        })
    })
    .catch(err => {
        console.log( err )
        // dispatch({ type: FAILED, payload: err.response.data.error })
    })
  }


  export const gotBazar = (id) => async dispatch =>  {
    // dispatch({type: LOADING})
    await axios.get(`${URL}/got_bazar/` + id , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res.data )
         dispatch({
            type: GOT_BAZAR,
            payload: res.data.msg
        })
    })
    .catch(err => {
        console.log( err )
        // dispatch({ type: FAILED, payload: err.response.data.error })
    })
  }

  export const getMillRate = () => async dispatch =>  {
    // dispatch({type: LOADING})
    await axios.get(`${URL}/get_mill_rate/` , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res.data )
         dispatch({
            type: GET_MILL_RATE,
            payload: res.data.mill
        })
    })
    .catch(err => {
        console.log( err )
        // dispatch({ type: FAILED, payload: err.response.data.error })
    })
  }


  export const setMillRate = (id) => async dispatch =>  {
    // dispatch({type: LOADING})
    await axios.post(`${URL}/set_mill_rate/` , id , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res.data )
         dispatch({
            type: SET_MILL_RATE,
            payload: {mill : res.data.mill, msg : res.data.msg }
        })
    })
    .catch(err => {
        console.log( err )
        // dispatch({ type: FAILED, payload: err.response.data.error })
    })
  }


  export const getManeger = () => async dispatch =>  {
    // dispatch({type: LOADING})
    await axios.get(`${URL}/get_maneger/` , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res.data )
         dispatch({
            type: GET_MANEGER,
            payload: res.data.mill
        })
    })
    .catch(err => {
        console.log( err )
        // dispatch({ type: FAILED, payload: err.response.data.error })
    })
  }


  export const setManeger = (id) => async dispatch =>  {
    // dispatch({type: LOADING})
    await axios.post(`${URL}/set_maneger/` , id , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        
         dispatch({
            type: SET_MANEGER,
            payload: { msg : res.data.msg, status : res.data.status }
        })
    })
    .catch(err => {
        console.log( err )
        // dispatch({ type: FAILED, payload: err.response.data.error })
    })
  }





  export const costList = () => async dispatch =>  {
    // dispatch({type: LOADING})
    await axios.get(`${URL}/all_cost/` , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res.data.cost )
         dispatch({
            type: ALL_COST,
            payload: res.data.cost
        })
    })
    .catch(err => {
        console.log( err )
        // dispatch({ type: FAILED, payload: err.response.data.error })
    })
  }


  export const addCost = (id) => async dispatch =>  {
    // dispatch({type: LOADING})
    await axios.post(`${URL}/add_cost/`, id , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res.data )
         dispatch({
            type: ADD_COST,
            payload: res.data.msg
        })
    })
    .catch(err => {
        console.log( err )
        // dispatch({ type: FAILED, payload: err.response.data.error })
    })
  }

  export const costById = (id) => async dispatch =>  {
    // dispatch({type: LOADING})
    await axios.get(`${URL}/cost_by_id/` + id , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res.data )
         dispatch({
            type: EDIT_COST,
            payload: { msg : res.data.msg, status : res.data.status }
        })
    })
    .catch(err => {
        console.log( err )
        // dispatch({ type: FAILED, payload: err.response.data.error })
    })
  }

  export const editById = (id) => async dispatch =>  {
    // dispatch({type: LOADING})
    await axios.post(`${URL}/edit_by_id/`, id , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res.data )
        //  dispatch({
        //     type: EDIT_COST_SAVE,
        //     payload: res.data.requ_list
        // })
    })
    .catch(err => {
        console.log( err )
        // dispatch({ type: FAILED, payload: err.response.data.error })
    })
  }


  export const demo = (id) => async dispatch =>  {
    // dispatch({type: LOADING})
    await axios.get(`${URL}/add_request/` + id , { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res.data )
        //  dispatch({
        //     type: BODER_REQUEST,
        //     payload: res.data.requ_list
        // })
    })
    .catch(err => {
        console.log( err )
        // dispatch({ type: FAILED, payload: err.response.data.error })
    })
  }






