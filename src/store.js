import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer } from './Reducers/userReducer'
const reducer = combineReducers({
  users: userReducer,
})

const initialState = {}

const store = createStore(reducer, initialState, composeWithDevTools())

export default store
