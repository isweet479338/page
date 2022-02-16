import { LOADING, FAILED, BAZARKARI_LIST, DATE_WISE, DATE_WISE_SHOW, MY_BAZAR_DETAILS, ROW_REMOVE, ROW_ADD, SAVE_BAZAR_LIST, BODER_BAZAR_JOMA, BAZAR_BACK2MANEGER, INPUTED_LIST, INPUT_BY_DATE, GOT_BAZAR, GET_MILL_RATE, SET_MILL_RATE, GET_MANEGER, SET_MANEGER, ALL_COST, ADD_COST, EDIT_COST, } from '../constants'

const initialState = {
    loading: false,
    form: false,
    errMsg: null,
    sucMsg: null,
    list: [],
    date: null,
    boder1: null,
    boder2: null,
    dayShow: '',
    arrDate: '',

    bazarkari: [],
    guestTotal: [],
    millTotal: [],
    target: '',
    rate : 0,
    row: 1,

    bazar: [],
    bazar_tk: [],
    bazar_list: [],
    bazar_item: [],
    input: [],
    costList: [],

    dbazar: [],
    dbazar_tk: [],
    dbazar_list: [],
    dbazar_item: [],
    dinput: [],
    dbazar_extra: [],
    millRate : [],
    maneger : '',
    newManeger : '',
    editCost : [],


}
export default function BazarReducer(state = initialState, { type, payload }) {


    switch (type) {
        case LOADING:
            return { ...state, loading: true }
        case FAILED:
            return { ...state, loading: false, errMsg: payload }

        case BAZARKARI_LIST:
            return { ...state, loading: false, list: payload }

        case DATE_WISE:
            return {
                ...state,
                loading: false,
                date: payload ? payload.date : null,
                boder1: payload ? payload.boder1 : null,
                boder2: payload ? payload.boder2 : null
            }

        case DATE_WISE_SHOW:
            return { ...state, loading: false, dayShow: payload }

        case MY_BAZAR_DETAILS:

            if (payload.status === false) {

                return {
                    ...state,
                    loading: false,
                    form: false,
                    sucMsg: payload.array.msg,
                    arrDate: payload.array.date
                }
            } else {

                return {
                    ...state,
                    loading: false,
                    form: true,
                    sucMsg: payload.array.msg,
                    arrDate: payload.array.date,
                    bazarkari: payload.array.bazar,
                    guestTotal: payload.array.gust,
                    millTotal: payload.array.mill, 
                    target: payload.array.tergate,
                    rate : payload.array.mill_rate.desc,
                }

            }
        case ROW_ADD:
            return { ...state, row: payload + 1 }

        case ROW_REMOVE:
            return { ...state, row: payload === 0 ? 0 : payload - 1 }

        case SAVE_BAZAR_LIST:
            return { ...state, loading: false, sucMsg: payload, form: false }

        case BODER_BAZAR_JOMA:

            if (payload.form === false) {
                return { ...state, loading: false, sucMsg: payload.msg, form: false }
            } else {
                return {
                    ...state,
                    loading: false,
                    sucMsg: payload.msg.msg,
                    bazar: payload.msg.bazar,
                    bazar_tk: payload.msg.bazar_tk,
                    bazar_list: payload.msg.bazar_list,
                    bazar_item: payload.msg.bazar_item,
                    form: true
                }

            }
        case BAZAR_BACK2MANEGER:
            return { ...state, loading: false, sucMsg: payload, form: false }

        case INPUTED_LIST:
            return { ...state, loading: false, input: payload }

        case INPUT_BY_DATE:
            
            if (payload.status === false) {
                return { ...state, loading: false, sucMsg: payload.msg, form: false}
            } else {
                return {
                    ...state,
                    loading: false,
                    form: true,
                    sucMsg: payload.msg,
                    dinput: payload.array.inputed,
                    dbazar_list: payload.array.bazar_list,
                    dbazar_item: payload.array.bazar_item,
                    dbazar_extra: payload.array.bazar_extra,
                    dbazar: payload.array.bazar,
                    dbazar_tk: payload.array.bazar_tk,
                }
            }

        case GOT_BAZAR:
            return { ...state, loading: false, sucMsg: payload, form: false }
       
        case GET_MILL_RATE:
            return { ...state, loading: false, millRate: payload}
        
        case SET_MILL_RATE:
            return { ...state, loading: false, millRate: payload.mill, sucMsg : payload.msg  }

        case GET_MANEGER:
            return { ...state, loading: false, maneger: payload }
        
        case SET_MANEGER:
            if (payload.status === false ) {
                return { ...state, loading: false, sucMsg : payload.msg  }
            }else{
                return { ...state, loading: false, newManeger: payload.msg, sucMsg : "Maneger Updated."  }
            }

        case ALL_COST:
            return { ...state, loading: false, costList: payload }

        case ADD_COST:
            return { ...state, loading: false, sucMsg: payload }

        case EDIT_COST:
            if (payload.status === false ) {
                return { ...state, loading: false, sucMsg: payload.msg, form : payload.status }
            }else{
                return { ...state, loading: false, editCost: payload.msg, form : payload.status }
            }



















        default: return state
    }
}











