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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sodales porttitor. Quisque sit amet magna sed dui pretium aliquam. Fusce leo tortor, sollicitudin nec pharetra non, vehicula vel elit. In nisl dui, faucibus quis sem et, iaculis iaculis neque. Donec non mi congue, tempor enim vitae, tincidunt lorem. Cras facilisis vel dolor sed scelerisque. Curabitur viverra augue ut pretium hendrerit. Sed auctor tellus sit amet iaculis pellentesque. Maecenas ultrices neque elit, et elementum purus mollis nec.
          </p>
          <div className='d-flex mt-5'>
            <div className='team1 me-5'></div>
            <div className='team2 ms-5'></div>
          </div>
          <p className='mt-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sodales porttitor. Quisque sit amet magna sed dui pretium aliquam. Fusce leo tortor, sollicitudin nec pharetra non, vehicula vel elit. In nisl dui, faucibus quis sem et, iaculis iaculis neque. Donec non mi congue, tempor enim vitae, tincidunt lorem. Cras facilisis vel dolor sed scelerisque. Curabitur viverra augue ut pretium hendrerit. Sed auctor tellus sit amet iaculis pellentesque. Maecenas ultrices neque elit, et elementum purus mollis nec.
          </p>
          <div className='d-flex justify-content-center mt-5 mb-5'>
            <Button variant="success" size="lg">Crear Partido</Button>
          </div>
          <p className='mt-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sodales porttitor. Quisque sit amet magna sed dui pretium aliquam. Fusce leo tortor, sollicitudin nec pharetra non, vehicula vel elit. In nisl dui, faucibus quis sem et, iaculis iaculis neque. Donec non mi congue, tempor enim vitae, tincidunt lorem. Cras facilisis vel dolor sed scelerisque. Curabitur viverra augue ut pretium hendrerit. Sed auctor tellus sit amet iaculis pellentesque. Maecenas ultrices neque elit, et elementum purus mollis nec.
          </p>
        </div>
      </main>
    )
  }
}
