import React from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'

function NewEntryForm() {
    return (
       
        <Form unstackable>
          <Form.Group>
            <Form.Input icon='tags' width={12} Label='Description' placeholder="new shiny thing"></Form.Input>
            <Form.Input width={4} Label='Value' placeholder="100.00" icon='dollar' iconPosition='left'></Form.Input>
          </Form.Group>
        <ButtonSaveOrCancel></ButtonSaveOrCancel>
        </Form>

    )
}

export default NewEntryForm
