import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = () => {
  return (
    <div className="block md:w-2/3 text-center">
      <h2 className="text-3xl font-bold my-3">No hay pacientes</h2>
      <p>
        Comienza agregando pacientes {""}
        <span className='text-indigo-600'>y apareceran en este lugar</span>
      </p>
      <Paciente />
    </div>
  )
}

export default ListadoPacientes