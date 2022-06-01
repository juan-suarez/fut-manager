import React, { Component } from 'react'
import Navigator from '../components/navigator'
import Button from 'react-bootstrap/Button';
export default class Firstview extends Component {
  render() {
    return (
      <main >
        <div className='banner'>
          <Navigator/>
          <div className='d-flex justify-content-center mt-5'>
            <h1 className='text-white'>Bienvenido a tu administrador de torneos</h1>
          </div>
        </div>
        <div className='contain'>
          <p>
            Esta página web fue diseñada con la finalidad de generar un control y una optimización en el tiempo estimado para generar un desarrollo eficaz de un torneo en específico.
            Mediante esta página web podremos encontrar las opciones de crear, agregar, editar partidos, donde para la creación de cada partido es necesario cumplir una clase de requisitos las cuales son las normas del torneo.
          </p>
          <div className='d-flex mt-5'>
            <div className='team1 me-5'></div>
            <div className='team2 ms-5'></div>
          </div>
          <p className='mt-5'>
            Entre ellas están una creación de equipos en aleatorio para generar equipos nivelados y no presentar beneficios para algún equipo integrante del torneo.
            Las calificaciones de cada jugador será la base de nuestro análisis para poder elegir equipos nivelados, estas calificaciones las darán los mismos jugadores del torneo para tener una neutralidad.
          </p>
          <div className='d-flex justify-content-center mt-5 mb-5'>
            <Button href="/teamview" variant="success" size="lg">Crear Partido</Button>
          </div>
          <p className='mt-5'>
            Se tendrán en cuenta las sanciones y penalidades, así como las incapacidades para generar la alineación de los equipos.
            En el siguiente botón podremos iniciar a crear nuestro partido.
          </p>
        </div>
      </main>
    )
  }
}
