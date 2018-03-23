import React from 'react'
import PropTypes from 'prop-types'
import { FormControl } from 'react-bootstrap'

export const Textfield = ({onTodoAdd}) =>
    <div className="Textfield">
        <FormControl
            id="formControlsText"
            type="text"
            label="Text"
            placeholder="Add todo"
            onKeyPress={(e) => {
                if (e.which === 13 && e.target.value !== '') {
                    const text = e.target.value
                    e.target.value = ''
                    return onTodoAdd(text)
                }
            }}
        />
    </div>

Textfield.propTypes = {
    onTodoAdd: PropTypes.func.isRequired
}