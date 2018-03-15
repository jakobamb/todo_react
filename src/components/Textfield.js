import React from 'react'
import { FormControl } from 'react-bootstrap'
import { addTodo } from '../actions'

export const Textfield = () =>
    <div className="Textfield">
        <FormControl
            id="formControlsText"
            type="text"
            label="Text"
            placeholder="Add todo"
            onChange={() => {
                addTodo(this.props.value)
            }}
        />
    </div>