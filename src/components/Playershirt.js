import React, { Component } from 'react'

export default function Playershirt(props){
  const {playername,urlimage} = props
  return (
    <div className='row justify-content-center col-2 m-4'>
      <img src={urlimage} width={80}></img>
      <h4 style={{fontSize:"13px",fontWeight:"bold"}} >{playername}</h4>
    </div>
  )
}
