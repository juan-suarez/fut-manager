import React, { Component } from 'react'
import randplayer from '../assets/randplayer.png'
export default function Playercard(props) {
  const {playername} = props;
  return (
    <div className='col-2 m-5 cardbody '>
      <img src = {randplayer} height={250} className="ms-3  "></img>
      <br/>
      <h6 >Nombre : {playername}</h6>
      <h6>Sancion : Ninguna</h6>
    </div>
  )
}
