import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'

export default class Navigator extends Component {
  styleLinks = {
    color : "white",
    fontWeight:"bold",
    textDecoration:"underline"
  }
  render() {
    return (
      <div className='row pt-2' style={{
        
        fontSize:"20px",
        color:'white',
        position :"sticky"
      }}>
        <div className='col-4 ps-5'>Logo</div>
        <Nav className="justify-content-end col-8 pe-5" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home" style={this.styleLinks}>Agregar jugador</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" style={this.styleLinks}>Ver jugadores</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" disabled style={this.styleLinks}>Agregar sancion</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled style={this.styleLinks} >modificar</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    )
  }
}
