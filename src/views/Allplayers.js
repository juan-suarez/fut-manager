import React, { Component } from 'react'
import Playercard from '../components/playercard'
const players = ['negro','soto','suarez','daniel','pesca','quintero','rafa','l. de jong','solarte']
export default function Allplayers(props) {
  return (
    <div className='allplayers row'>
      {
        players.map(player=>{
          return(
            <Playercard playername= {player}/>
          )
        })
      }
    </div>
  )
}
