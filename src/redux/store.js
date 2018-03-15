import { applyMiddleware, createStore, combineReducers } from 'redux'
import { todoReducer } from './todoReducer'
import { logger } from 'redux-logger'

const reducers = combineReducers({
    todos: todoReducer,
})

const middleware = applyMiddleware(logger)

export const store = createStore(reducers, {}, middleware)