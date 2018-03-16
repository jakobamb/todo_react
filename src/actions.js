/**
 * 
 * @param {string} text 
 */
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    text: text,
    id: Date.now()
})

export const modifyTodo = (todo) => {
    
}