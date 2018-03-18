
export const todoReducer = (todos = [], action) => {
    const newTodos = todos.slice()

    switch (action.type) {
        case 'ADD_TODO':
            newTodos.push({ id: action.id, text: action.text, completed: false })
            return newTodos
        case 'CHECK_TODO': 
        case 'REMOVE_TODO':
            return newTodos.filter((todo) => todo.id !== action.id)
        default:
            new Error('Unknown action', action)
    }
    return todos
}