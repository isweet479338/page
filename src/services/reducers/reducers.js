import { ADD_TO_CART, REMOVE_TO_CART, SIGN_UP, SIGN_UP_ERROR, USER } from '../constants'

const initialState = {
    cardData : [],
    massage : '',
    user : []
}

export default function cardItems ( state = [], action){

    // console.log( action.payload )

    switch( action.type ){
        case ADD_TO_CART:
            return {
                ...state,
                 cardData: action.data 
            }
        case REMOVE_TO_CART:
           state.pop()
            return {
                ...state,
            }

        case SIGN_UP: 
        
                     return {
            ...state,
            massage : action.payload.name }
        
    case USER:     
        return {
            ...state,
            userRed : action.payload
         }
         
        case SIGN_UP_ERROR :
            return {
                ...state
              
            }

        default:
            return state



    }
}