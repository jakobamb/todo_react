/**
 * Add a todo to the list
 * 
 * @param {string} text 
 */
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    text: text,
    id: Date.now()
})

/**
 * Todo has been checked as completed
 * 
 * @param {object} todo 
 */
export const checkTodo = (id) => ({
    type: 'CHECK_TODO',
    id: id
})

/**
 * Remove a todo
 * 
 * @param {number} id 
 */
export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    id: id
})