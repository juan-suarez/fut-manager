import React, { Component } from 'react'
import Playershirt from '../components/Playershirt'
import shirt2 from '../assets/shirt2.png'

const players = [['dida'],['alves','silva','marcelo',],['ronaldinho'],['nazario','garrincha','pele']]

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
                  <Playershirt playername={player} urlimage={shirt2}/>
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
