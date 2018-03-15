import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap'
import { Todo } from './Todo'

export const List = ({todos}) =>
    <ListGroup>
        {todos.map((item, i) => 
            <Todo key={i} text={item.text} completed={item.completed}/>)
        }    
    </ListGroup>

List.propTypes = {
    todos: PropTypes.object.isRequired,
}