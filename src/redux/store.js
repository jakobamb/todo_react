import { applyMiddleware, createStore, combineReducers } from 'redux'
import { todoReducer } from './todoReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    todos: todoReducer,
})

const middleware = applyMiddleware(thunk, logger)

export const store = createStore(reducers, {}, middleware)