import { createStore } from "redux";
import AuthReducer from "../services/reducers/AuthReducer";

const Store = createStore( AuthReducer );
const state = Store.getState();
const isTrueee = state.auth;

const isTrue = localStorage.getItem('isLogin')

export default isTrue;