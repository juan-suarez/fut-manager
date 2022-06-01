import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import logo from '../assets/logo.png'

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
        <div className='col-4 ps-5'>
          <img src={logo} height={65}></img>
        </div>
        <Nav className="justify-content-end col-8 pe-5" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/addplayer" style={this.styleLinks}>Agregar jugador</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/allplayers' style={this.styleLinks}>Ver jugadores</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" disabled style={{color:"white"}}>Agregar sancion</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled style={{color:"white"}} >modificar</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    )
  }
}
