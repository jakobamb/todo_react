import { connect } from 'react-redux'
import { modifyTodo } from '../actions'
import { List } from '../components/List'

export const ListContainer = connect(
    state => 
        ({
            todos: state.todos
        }),
    dispatch =>
        ({
            onTodoModify(todo) {
                dispatch(modifyTodo(todo))
            }
        })
)(List)