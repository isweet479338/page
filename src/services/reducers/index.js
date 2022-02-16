import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import BazarReducer from './BazarReducer'
import BoderReducer from './BoderReducer'
import ManegerReducer from './ManegerReducer'

export default combineReducers({
    auth : AuthReducer,
    boder : BoderReducer,
    maneger : ManegerReducer,
    bazar : BazarReducer
})