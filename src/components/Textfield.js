import React from 'react'
import { FormControl } from 'react-bootstrap'

export const Textfield = ({onTodoAdd}) =>
    <div className="Textfield">
        <FormControl
            id="formControlsText"
            type="text"
            label="Text"
            placeholder="Add todo"
            onKeyPress={(e) => {
                if (e.which === 13) {
                    const text = e.target.value
                    e.target.value = ''
                    return onTodoAdd(text)
                }
            }}
        />
    </div>