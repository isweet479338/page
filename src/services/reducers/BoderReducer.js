import {
    LOADING, FAILED, CHECK_MASEE, UPDATE_MILL, STOP_MILL, MY_ALL_GUST_MILL, DELETE_MY_GUST_MILL, GUST_MILL_START,
    TODAY_MILL_STATUS,
    DELETE_MY_LOST_MILL,
    LOST_MILL_REQUEST,
    MY_MILL_SYMMARY,
    BAZAR_THIS_MONTH,
    BAZAR_BOOK_REQ,
    ADD_MASE,
    TK_JOMA_HISTORY,
    BODER,
} from '../constants'

const initialState = {
    loading: false,
    form: true,
    redirect: false,
    errMsg: null,
    sucMsg: null,
    gustMill: [],
    lostMill: [],
    TotalMill: [],
    mill: [],
    days: [],
    value: [],
    gusts: [],
    losts: [],
    bazarList: [],
    tk: [],
    boder : [],



}
export default function BoderReducer(state = initialState, { type, payload }) {


    switch (type) {
        case LOADING:
            return { ...state, loading: true }
        case FAILED:
            return { ...state, loading: false, errMsg: payload }

        case CHECK_MASEE:
            return { ...state, loading: false, sucMsg: payload.massage, form: payload.status }

        case ADD_MASE:
            return { ...state, loading: false, sucMsg: payload.massage, form: payload.status }

        case UPDATE_MILL:
            return { ...state, loading: false, sucMsg: payload }

        case STOP_MILL:
            return { ...state, loading: false, sucMsg: payload }

        case MY_ALL_GUST_MILL:
            return { ...state, loading: false, gustMill: payload }

        case DELETE_MY_GUST_MILL:
            return {
                ...state, loading: false, sucMsg: payload.massage,
                gustMill: state.gustMill.filter((i) => i.id !== payload.id)
            }

        case GUST_MILL_START:
            return { ...state, loading: false, sucMsg: payload }

        case TODAY_MILL_STATUS:
            return { ...state, loading: false, sucMsg: payload.back.msg, lostMill: payload.back.lost, form: payload.back.status }

        case DELETE_MY_LOST_MILL:
            return {
                ...state, loading: false, sucMsg: payload.massage,
                lostMill: state.lostMill.filter((i) => i.id !== payload.id)
            }

        case LOST_MILL_REQUEST:
            return { ...state, loading: false, sucMsg: payload, form: false }

        case MY_MILL_SYMMARY:
            console.log(payload.mill.keys)
            return {
                ...state, loading: false,
                days: payload.mill.keyss,
                value: payload.mill.values,
                gusts: payload.mill.gust,
                losts: payload.mill.lost,
                TotalMill: payload.total
            }
        case BAZAR_THIS_MONTH:
            return { ...state, loading: false, bazarList: payload }

        case BAZAR_BOOK_REQ:
            return { ...state, loading: false, sucMsg: payload.massage,
                bazarList: state.bazarList.filter((i) => i.date !== payload.date )
            }

        case TK_JOMA_HISTORY:
            return { ...state, loading: false, tk: payload }
        
        case BODER:
            return { ...state, loading: false, boder : payload }
        
        


















        default: return state
    }
}











