import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Textfield } from '../components/Textfield'

export const TextfieldContainer = connect(
    null,
    dispatch =>
        ({
            onTodoAdd: (text) => {
                dispatch(addTodo(text))
            }
        })
)(Textfield)