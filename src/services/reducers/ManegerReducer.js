import { LOADING, FAILED, BODER_REQUEST, DELETE_REQUEST, ACCEPT_REQUEST, LOST_MILL_LIST, LOST_REQU_DELETE, LOST_REQU_ACCEPT, LIST_FROM_MILL, TK_JOMA_REQ, TOTAL_TK_BY_DATE, DAY_DETAILS, TK_DELETE, LIST_THIS_DAY, BAZAR_TK_PRODAN, TK_HISTORY, TK_EDIT, TK_EDIT_SAVE, GUEST_MILL_SAVE, GUEST_MILL_LIST, GUEST_MILL_EDIT, GUEST_MILL_EDIT_SAVE, SINGEL_MILL_STATUS, RE_SINGEL_MILL_STATUS, LOST_MILL_SAVE, MILL_COUNT, MONTH_INPUT, DAY_INPUT, MANAGER, MILL_CHECK, MANAGER_INFO, } from '../constants'

const initialState = {
    loading: false,
    form: true,
    redirect: false,
    errMsg: null,
    sucMsg: null,
    input: [],

    type: null,
    target: null,
    req: [],
    requestList :[],
    lostList :[],
    millList :[],
    tk :[],
    tkByDate :[],
    bazar : [],
    tkHistory : [],
    tkEdit : [],
    guestList : [],
    guestId : [],
    guest : [],
    date : '',
    noon : '',
    night: '',
    mill: '',
    guestMill: '',
    list : [],
    manager : [],










}
export default function ManegerReducer(state = initialState, { type, payload }) {
    switch (type) {
        case LOADING:
            return { ...state, loading: true }

        case BODER_REQUEST:
            return { ...state, loading: false, requestList : payload }
    
        case MANAGER:
            return { ...state, loading: false, input : payload }

        case MILL_CHECK:

            return { ...state, loading: false, 
                input : state.input.filter(i => i.id !== payload ) 
            }
        case MANAGER_INFO:
            return { ...state, loading: false, manager : payload }

        case DELETE_REQUEST:
            return { ...state, loading: false, sucMsg : payload.sucMsg,
                requestList : state.requestList.filter(i => i.id !== payload.id )  
            }
        case ACCEPT_REQUEST:
            return { ...state, loading: false, sucMsg : payload.sucMsg,
                requestList : state.requestList.filter(i => i.id !== payload.id )  
            }
        case LOST_MILL_LIST:
            return { ...state, loading: false, lostList : payload }
          
        case LOST_REQU_DELETE:
            return { ...state, loading: false, sucMsg : payload.msg,
                lostList : state.lostList.filter(i => i.id !== payload.id ) 
            }
        case LOST_REQU_ACCEPT:
            return { ...state, loading: false, sucMsg : payload.sucMsg,
                lostList : state.lostList.filter(i => i.id !== payload.id )  
            }

        case LIST_FROM_MILL:
            return { ...state, loading: false, millList : payload }

        case TK_JOMA_REQ:
            return { ...state, loading: false, sucMsg : payload }

        case TOTAL_TK_BY_DATE:
            return { ...state, loading: false, tk : payload }

        case DAY_DETAILS:
            return { ...state, loading: false, tkByDate : payload }
  
        case TK_DELETE:
            return { ...state, loading: false, sucMsg : payload.sucMsg,
                tkByDate : state.tkByDate.filter(i => i.id !== payload.id )  
            }

        case LIST_THIS_DAY:
            return { ...state, loading: false, bazar : payload }

        case BAZAR_TK_PRODAN:
            return { ...state, loading: false, sucMsg : payload }

         case TK_HISTORY:
            return { ...state, loading: false, tkHistory : payload }
       
        case TK_EDIT:
            return { ...state, loading: false, tkEdit : payload }

        case TK_EDIT_SAVE:
            return { ...state, loading: false, sucMsg : payload }

        case GUEST_MILL_SAVE:
            return { ...state, loading: false, sucMsg : payload }

        case GUEST_MILL_LIST:
            return { ...state, loading: false, guestList : payload }

        case GUEST_MILL_EDIT:
            return { ...state, loading: false, guestId : payload.boderList, date : payload.guest.d, noon: payload.guest.noon, night: payload.guest.night }
        
        case GUEST_MILL_EDIT_SAVE:
            return { ...state, loading: false, sucMsg : payload }
       
        case SINGEL_MILL_STATUS:
            return { ...state, loading: false, noon : payload.guest.noon, night : payload.guest.night, mill : payload.mill }
    
        case RE_SINGEL_MILL_STATUS:
            return { ...state, loading: false, noon : payload.guest.noon, night : payload.guest.night, mill : payload.mill }
    
        case LOST_MILL_SAVE:
            return { ...state, loading: false, sucMsg : payload }
         
        case MILL_COUNT:
            return { ...state, 
                loading: false, 
                sucMsg : payload.msg, 
                list : payload.list, 
                type : payload.type, 
                target : payload.target, 
                req : payload.req
              }
        case MONTH_INPUT:
            return { ...state, loading: false, sucMsg : payload.msg, type : payload.type }
        
        case DAY_INPUT:
            return { ...state, loading: false, sucMsg : payload.msg, type : payload.type }

        default: return state
    }
}
