import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';

export default function Addplayer(){
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log(event);
    if (form.checkValidity() === false) {
      event.stopPropagation();
      event.preventDefault();
    }
    
    setValidated(true);
  };
  return (
    <div className='addplayer'>
      <div className='addpform'>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className='row'>
            <Form.Group md="4" controlId="validationCustom01">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom01" className='mt-3'>
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom01" className='mt-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="futbol@fifa.com"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group  md="4" controlId="validationCustomUsername">
              <Form.Label>celular</Form.Label>
              <Form.Control
                  type="number"
                  placeholder="+57"
                  aria-describedby="inputGroupPrepend"
                  required
                />
            </Form.Group>
          </div>
          <div className='d-flex justify-content-end'>
            <Button variant="success" className='mt-5' type="submit">Añadir jugador</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
