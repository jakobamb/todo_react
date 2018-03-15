import React from 'react'
import { Checkbox, ListGroupItem } from 'react-bootstrap'
import PropTypes from 'prop-types'

export const Todo = ({text, completed}) => 
    <ListGroupItem>
        {completed ? 
            <Checkbox checked>{text}</Checkbox> :
            <Checkbox>{text}</Checkbox>
        }
    </ListGroupItem>

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}