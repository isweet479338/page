const redux = require('redux')

const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

function buyCake(){

    return {
        type: BUY_CAKE,
        info : 'Shohidul'
    }

}
const initState = {
    num : 10
}


const reducer = (state = initState, actionn) => {

    switch(actionn.type){

        case BUY_CAKE:
            return {
                ...state, 
                num : state.num - 1
            }
        default: return state
    }

}

const store = createStore(reducer)

console.log('1st store', store.getState())


// const unsubscribe = store.subscribe(() => console.log('2nd state', store.getState()))



store.subscribe(() => console.log('2nd state', store.getState()))



store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

