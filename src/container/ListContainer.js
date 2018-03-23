import { connect } from 'react-redux'
import { checkTodo } from '../actions'

export const ListContainer = connect(
    state => 
        ({
            todos: state.todos
        }),
    dispatch =>
        ({
            onTodoChecked(todo) {
                dispatch(checkTodo(todo))
            }
        })
)