import React, { Component } from 'react'
import Playershirt from '../components/Playershirt'
import shirt1 from '../assets/shirt1.png'

const players = [['neuer'],['soto','suarez','daniel',],['pesca','quintero'],['l. de jong','solarte']]

export default function Team1(props){
  return(
    <React.Fragment>
      {players.map(line=>{
        return(
          <React.Fragment>
          <div className='row justify-content-center text-white'>
            {
              line.map(player=>{
                return(
                  <Playershirt playername={player} urlimage={shirt1}/>
                )
              })
            }
          </div>
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}
