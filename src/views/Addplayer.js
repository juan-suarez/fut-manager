import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';

export default function Addplayer(){
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div>
      <div className='addpform'>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className='row'>
            <Form.Group md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </div>
        </Form>
      </div>
    </div>
  )
}
