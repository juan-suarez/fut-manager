import React, { Component } from 'react'
import Team1 from '../components/team1'
import Team2 from '../components/team2'
export default function Teamview(props) {
    return (
      <div className='row teamview'>
        <div className='col-5 cancha m-5 pt-2 ' style={{borderRadius:"5px"}}>
          <Team1/>
        </div>
        <div className='col-5 cancha m-5 pt-2' style={{borderRadius:"5px"}}>
          <Team2/>
        </div>
      </div>
    )
}
