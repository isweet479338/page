import { LOADING,FAILED, LOGIN, LOGOUT, REDIRECT_FALSE, REG }  from '../constants'

const initialState = {
    loading : false,
    redirect : false,
    errMsg : null,
    sucMsg : null,
    auth : false

}
export default function AuthReducer ( state = initialState, { type, payload} ){

    
switch( type ){
    case LOADING:
        return { ...state, loading: true }
    case FAILED:
        return { ...state, loading: false,  errMsg : payload }

    case REG:
        return { ...state, loading: false,  sucMsg : payload }

        
    case LOGIN:
        return { ...state, loading: false,  redirect : true, auth: true,  sucMsg : payload }
  
    case LOGOUT:
        return { ...state, loading: false, auth: false,  redirect : false }
  
    case REDIRECT_FALSE:
        return { ...state, redirect : false }














default: return state 
}
}











