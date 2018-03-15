import { store } from './redux/store'

export const addTodo = (text) => {
    store.dispatch({
        type: 'ADD_TODO',
        text: text
    })
}