import axios from 'axios'
import local from '../../Route/Url'

import { LOADING, FAILED, BODER_REQUEST, DELETE_REQUEST, ACCEPT_REQUEST, LOST_MILL_LIST, LOST_REQU_DELETE, LOST_REQU_ACCEPT, LIST_FROM_MILL, TK_JOMA_REQ, TOTAL_TK_BY_DATE, DAY_DETAILS, TK_DELETE, LIST_THIS_DAY, BAZAR_TK_PRODAN, TK_HISTORY, TK_EDIT, TK_EDIT_SAVE, GUEST_MILL_SAVE, GUEST_MILL_LIST, GUEST_MILL_EDIT, GUEST_MILL_EDIT_SAVE, SINGEL_MILL_STATUS, RE_SINGEL_MILL_STATUS, LOST_MILL_SAVE, MILL_COUNT, MONTH_INPUT, DAY_INPUT, MANAGER, MILL_CHECK, MANAGER_INFO,  }  from '../constants'

const URL = local;

export const managerData = () => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.get(`${URL}/manager_data/`, { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: MANAGER,
          payload: res.data.input
      })
  })
  .catch(err => {
      console.log( err )
      // dispatch({ type: FAILED, payload: err.response.data.error })
  })
}

export const millCheck = (value) => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.post(`${URL}/mill_check/`,value, { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: MILL_CHECK,
          payload: res.data.status
      })
  })
  .catch(err => {
      console.log( err )
      // dispatch({ type: FAILED, payload: err.response.data.error })
  })
}


export const managerInfo = () => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.get(`${URL}/manager_info/`, { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: MANAGER_INFO,
          payload: res.data.array
      })
  })
  .catch(err => {
      console.log( err )
      // dispatch({ type: FAILED, payload: err.response.data.error })
  })
}




export const boderRequest = () => async dispatch =>  {
    // dispatch({type: LOADING})
    await axios.get(`${URL}/add_request`, { 
        headers: {
          'Authorization' : localStorage.getItem("token")
        } 
      })
    .then( res => {
        console.log( res.data )
         dispatch({
            type: BODER_REQUEST,
            payload: res.data.requ_list
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

export const deleteRequest = ( id ) => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.get(`${URL}/delete_request/` + id , { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: DELETE_REQUEST,
          payload: { sucMsg : res.data.msg, id : id  }
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


export const acceptRequest = ( id ) => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.get(`${URL}/add_accept/` + id, { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: ACCEPT_REQUEST,
          payload: { sucMsg : res.data.msg, id : id  }
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


export const lostMillList = () => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.get(`${URL}/lost_mill_waiting_list/`, { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: LOST_MILL_LIST,
          payload: res.data.lost_list
      })
  })
  .catch(err => {
      console.log( err )
      dispatch({ type: FAILED, payload: err.response.data.error })
  })
}

export const lostRequAccept = (id) => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.put(`${URL}/lost_mill_requ_confirm/` , id , { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: LOST_REQU_ACCEPT,
          payload: {sucMsg : res.data.msg, id : id }
      })
  })
  .catch(err => {
      console.log( err )
      dispatch({ type: FAILED, payload: err.response.data.error })
  })
}


export const lostRequDelete = (id) => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.delete(`${URL}/lost_mill_requ_delete/` + id , { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: LOST_REQU_DELETE,
          payload: { msg : res.data.lost_list, id : id }
      })
  })
  .catch(err => {
      console.log( err )
      dispatch({ type: FAILED, payload: err.response.data.error })
  })
}


export const listFromMill = () => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.get(`${URL}/boder_list_form_mill/` , { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: LIST_FROM_MILL,
          payload: res.data.boder_list
      })
  })
  .catch(err => {
      console.log( err )
     dispatch({ type: FAILED, payload: err.response.data.error })
  })
}

export const tkJomaReq = (value) => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.post(`${URL}/tk_joma_req/` , value , { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: TK_JOMA_REQ,
          payload: res.data.msg
      })
  })
  .catch(err => {
      console.log( err )
      dispatch({ type: FAILED, payload: err.response.data.error })
  })
}

export const totalTkByDate = () => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.get(`${URL}/total_tk_list_by_date/`, { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: TOTAL_TK_BY_DATE,
          payload: res.data.tk
      })
  })
  .catch(err => {
      console.log( err )
      dispatch({ type: FAILED, payload: err.response.data.error })
  })
}

export const dayDetails = (date) => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.get(`${URL}/dey_details_tk/` + date , { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: DAY_DETAILS,
          payload: res.data.days
      })
  })
  .catch(err => {
      console.log( err )
      dispatch({ type: FAILED, payload: err.response.data.error })
  })
}


export const tkDelete = (id) => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.delete(`${URL}/tk_delete/` + id , { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: TK_DELETE,
          payload: { sucMsg: res.data.msg, id : id }
      })
  })
  .catch(err => {
      console.log( err )
      dispatch({ type: FAILED, payload: err.response.data.error })
  })
}


export const listThisDay = (id) => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.get(`${URL}/bazar_list_this_day/` + id , { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: LIST_THIS_DAY,
          payload: res.data.bazar
      })
  })
  .catch(err => {
      console.log( err )
      // dispatch({ type: FAILED, payload: err.response.data.error })
  })
}


export const bazarTkGive = (id) => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.post(`${URL}/bazar_tk_podan/`, id , { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: BAZAR_TK_PRODAN,
          payload: res.data.msg
      })
  })
  .catch(err => {
      console.log( err )
      dispatch({ type: FAILED, payload: err.response.data.error })
  })
}

export const bazarTkHistory = () => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.get(`${URL}/bazar_tk_history/` , { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: TK_HISTORY,
          payload: res.data.bazar
      })
  })
  .catch(err => {
      console.log( err )
      dispatch({ type: FAILED, payload: err.response.data.error })
  })
}

export const bazarTkEdit = (id) => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.get(`${URL}/bazar_tk_edit_by_date/` + id , { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log(  id )
       dispatch({
          type: TK_EDIT,
          payload: res.data.bazar
      })
  })
  .catch(err => {
      console.log( err )
      dispatch({ type: FAILED, payload: err.response.data.error })
  })
}

export const tkEditSave = (id) => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.post(`${URL}/bazar_tk_edit_save/` , id , { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: TK_EDIT_SAVE,
          payload: res.data.msg
      })
  })
  .catch(err => {
      console.log( err )
      dispatch({ type: FAILED, payload: err.response.data.error })
  })
}


export const guestMillStart = (id) => async dispatch =>  {
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

export const guestMillSave = (id) => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.post(`${URL}/gust_mill_start_save/` , id , { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: GUEST_MILL_SAVE,
          payload: res.data.msg
      })
  })
  .catch(err => {
      console.log( err )
      dispatch({ type: FAILED, payload: err.response.data.error })
  })
}


export const guestMillList = () => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.get(`${URL}/all_gust_mill_list/` , { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: GUEST_MILL_LIST,
          payload: res.data.bazar
      })
  })
  .catch(err => {
      console.log( err )
      dispatch({ type: FAILED, payload: err.response.data.error })
  })
}


export const guestMillEdit = (id) => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.get(`${URL}/gust_mill_edit_data/` + id , { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: GUEST_MILL_EDIT,
          payload: {boderList :  res.data.boder_list, guest : res.data.gust }
      })
  })
  .catch(err => {
      console.log( err )
      // dispatch({ type: FAILED, payload: err.response.data.error })
  })
}


export const guestMillEditSave = (id) => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.put(`${URL}/gust_mill_edit_save/`, id , { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: GUEST_MILL_EDIT_SAVE,
          payload: res.data.msg
      })
  })
  .catch(err => {
      console.log( err )
      dispatch({ type: FAILED, payload: err.response.data.error })
  })
}


export const singelMillStatus = (id, date) => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.get(`${URL}/singel_mill_status/` + id + '/'+ date , { 
      headers: {  'Authorization' : localStorage.getItem("token") } 
    })
  .then( res => {
    console.log( res.data )
       dispatch({
          type: SINGEL_MILL_STATUS,
          payload: { mill : res.data.mill !== null ? res.data.mill : 0,
            guest : res.data.noon !== null ? res.data.noon : 0  }
      })
  })
  .catch(err => {
      console.log( err.response )
      console.log( err.request )
      console.log( err.status )
      // dispatch({ type: FAILED, payload: err.response.data.error })
  })
}


export const resingelMillStatus = (id, date) => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.get(`${URL}/singel_mill_status/` + id + '/'+ date , { 
      headers: {  'Authorization' : localStorage.getItem("token") } 
    })
  .then( res => {
    console.log( res.data )
       dispatch({
          type: RE_SINGEL_MILL_STATUS,
          payload: { mill : res.data.mill !== null ? res.data.mill : 0,
             guest : res.data.noon !== null ? res.data.noon : 0  }
      })
  })
  .catch(err => {
      console.log( err.message )
      // dispatch({ type: FAILED, payload: err.response.data.error })
  })
}


export const lostMillSave = (id) => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.post(`${URL}/lost_mill_save/`, id , { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: LOST_MILL_SAVE,
          payload: res.data.msg
      })
  })
  .catch(err => {
      console.log( err )
      // dispatch({ type: FAILED, payload: err.response.data.error })
  })
}



export const millCount = () => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.get(`${URL}/mill_controller/` , { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: MILL_COUNT,
          payload: { 
            msg : res.data.msg,
            list :  res.data.list,
            type : res.data.type, 
            req :  res.data.requ,
            target :  res.data.target,
           }
      })
  })
  .catch(err => {
      console.log( err )
      // dispatch({ type: FAILED, payload: err.response.data.error })
  })
}

export const monthInput = (id) => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.post(`${URL}/month_input/`, id , { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: MONTH_INPUT,
          payload: { msg : res.data.msg, type :  res.data.type} 
      })
  })
  .catch(err => {
      console.log( err )
      // dispatch({ type: FAILED, payload: err.response.data.error })
  })
}

export const dayInput = (id) => async dispatch =>  {
  // dispatch({type: LOADING})
  await axios.post(`${URL}/day_input/`, id , { 
      headers: {
        'Authorization' : localStorage.getItem("token")
      } 
    })
  .then( res => {
      console.log( res.data )
       dispatch({
          type: DAY_INPUT,
          payload: { msg : res.data.msg, type :  res.data.type} 
      })
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

 








