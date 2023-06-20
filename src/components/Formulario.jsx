import React from 'react'

const Formulario = () => {
  return (
    <div className="block md:w-1/3 text-center">
      <h2 className="text-3xl font-bold my-3" >Seguimientos Pacientes</h2>
      <p>
        Añade Paceintes y {""}
        <span className='text-indigo-600'>Administralos</span>
      </p>
      {/* MASCOTA */}
      <div className="bg-white block">
        <label 
            className="uppercase block text-left mt-2"
            htmlFor='nombre'
        >
            Nombre de la mascota
        </label>
        <input
            className="w-full my-3 rounded-xl px-3"
            id='nombre'
            placeholder='Nombre de la mascota'
        />
      </div>
      {/* PROPIETARIO */}
      <div className="bg-white block">
        <label 
            className="uppercase block text-left mt-2"
            htmlFor='propietario'
        >
            Nombre del propietario
        </label>
        <input
            className="w-full my-3 rounded-xl px-3"
            id='propietario'
            placeholder='Propietario'
        />
      </div>
      {/* EMAIL */}
      <div className="bg-white block">
        <label 
            className="uppercase block text-left mt-2"
            htmlFor='email'
        >
            Email
        </label>
        <input
            className="w-full my-3 rounded-xl px-3"
            id='propietario'
            placeholder='email'
        />
      </div>
      {/* ALTA */}
      <div className="bg-white block">
        <label 
            className="uppercase block text-left mt-2"
            htmlFor='alta'
        >
            Alta
        </label>
        <input
            type='date'
            className="w-full my-3 rounded-xl px-3"
            id='alta'
        />
      </div>
      {/* SINTOMAS */}
      <div className="bg-white block">
        <label 
            className="uppercase block text-left mt-2"
            htmlFor='sintomas'
        >
            Sintomas
        </label>
        <textarea
            className="w-full my-3 rounded-xl px-3"
            id='sintomas'
            
        />
      </div>
      {/* BOTON */}
      <button
        className='bg-indigo-600 uppercase text-center font-bold text-white text-sm p-3 rounded-xl w-full'
      >
        Agregar Pacientes
      </button>
    </div>
  )
}   

export default Formulario
