import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap'
import { Todo } from './Todo'

export const ListUncompleted = ({todos, onTodoChecked}) =>
    <ListGroup>
        {todos.filter((item) => !item.completed).map((item) => 
            <Todo key={item.id} id={item.id} text={item.text} 
                completed={item.completed} onTodoChecked={onTodoChecked}/>)
        }    
    </ListGroup>

ListUncompleted.propTypes = {
    todos: PropTypes.array.isRequired,
    onTodoChecked: PropTypes.func,
}