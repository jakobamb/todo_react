import React from 'react'
import { Checkbox, ListGroupItem } from 'react-bootstrap'
import PropTypes from 'prop-types'

export const Todo = ({text, completed, onTodoChecked, id}) => 
    <ListGroupItem>
        <Checkbox onChange={() => onTodoChecked(id)} checked={completed}>{text}</Checkbox>
    </ListGroupItem>

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}