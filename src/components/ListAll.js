import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap'
import { Todo } from './Todo'

export const ListAll = ({todos, onTodoChecked}) =>
    <ListGroup>
        {todos.map((item) => 
            <Todo key={item.id} id={item.id} text={item.text} 
                completed={item.completed} onTodoChecked={onTodoChecked}/>)
        }    
    </ListGroup>

ListAll.propTypes = {
    todos: PropTypes.array.isRequired,
    onTodoChecked: PropTypes.func,
}