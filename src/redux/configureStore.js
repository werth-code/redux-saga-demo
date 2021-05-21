// redux tools to collect and store our state. The createStore is our state. The combineReducers contains our ducks
import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import counterReducer from "./ducks/counter"
import userReducer from "./ducks/user"
import { watchSaga } from "../saga/sagas"

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const reducer = combineReducers({
    counter: counterReducer,
    user: userReducer
})

// connect/add sagaMiddleware to the store 
const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watchSaga)

const action = type => store.dispatch( {type} )

export default store;