export const todoReducer = (
    state = [
        {
            text: 'Nummer eins',
            completed: false
        }
    ],
    action) => {

    const newState = state.slice()

    if (action.type === 'ADD_TODO') {
        newState.push({ text: 'new todo', completed: false })
        return newState
    }
    return state
}