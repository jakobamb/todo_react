
export const todoReducer = (todos = [], action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return todos.concat([{ id: action.id, text: action.text, completed: false }])
        case 'CHECK_TODO':
            return todos.map((todo) => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
        case 'REMOVE_TODO':
            return todos.filter((todo) => todo.id !== action.id)
        default:
            new Error('Unknown action', action)
    }
    return todos
}