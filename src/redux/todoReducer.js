export const todoReducer = (
    todos = [
        {
            text: 'Nummer eins',
            completed: false
        }
    ],
    action) => {

    const newTodos = todos.slice()

    switch (action.type) {
        case 'ADD_TODO':
            newTodos.push({ text: action.text, completed: false })
            return newTodos
        default:
            new Error('Unknown action', action)
    }
    return todos
}