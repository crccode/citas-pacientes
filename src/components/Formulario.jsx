import { useState, useEffect } from 'react'
import React from "react";
import Error from './Error';


const Formulario = ({ pacientes,setPacientes, paciente, setPaciente}) => {
  // ALMACENA LOS DATOS INTRODUCIDOS POR EL USUARIO
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  //COMPONENTE ERROR
  const [error, setError] = useState(false)
  // VALIDACION DE FORMULARIO
  const handleSubmit= (e) => {
    e.preventDefault();
    if ([nombre, propietario, email, alta, sintomas].includes("")){
      setError(true)
      return
    }
    setError(false);

    // GENERAR ID
    const generarId = () => {
      const random = Math.random().toString(36).substr(2);
      const fecha = Date.now().toString(36);
      return random + fecha
    }
    // CREAMOS UN OBJETO Y ALMACENAMOS 
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas
    }
    // SI PACIENTE TIENE UN ELEMENTO
    if(paciente.id){
      // COLOCAMOS EL ID AL OBJETO QUE ESTA EN EL FORMULARIO
      objetoPaciente.id = paciente.id
      // CREAMOS UN NUEVOS ARRAY Y COLOCAMOS EL OBJETO EDITADO
      const pacienteActualizados = pacientes.map( pacienteState => paciente.id === pacienteState.id?
        objetoPaciente: pacienteState)

      setPacientes(pacienteActualizados);
      setPaciente({})
    }else{
      // NUEVO REGISTRO
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }
    // REINICIAMOS TODOS LOS COMPONENTES
    setNombre('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')
  
  }
  // USE EFFECT SE VA A EJECUTAR CADA VEZ QUE SE SELECCIONE UN PACIENTE
  useEffect( () => {
    //VERIFICAMOS QUE EL ELEMENTO SELECCIONADO NO ESTE VACIO
    if (Object.keys(paciente).length>0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  return (
    <div className="block md:w-1/3 text-center">
      <h2 className="text-3xl font-bold my-3">Seguimientos Pacientes</h2>
      <p>
        Añade Paceintes y {""}
        <span className="text-indigo-600">Administralos</span>
      </p>
      <form
        className="bg-white shadow-md rounded-lg py-10 px-3 mb-10 mx-5"
        onSubmit={handleSubmit}
      >
        {/* ERROR  */}
        { error && <Error 
          mensaje = {'Todos los campos son obligatorios'}
        />}
        {/* MASCOTA */}
        <div className="bg-white block">
          <label className="uppercase block text-left mt-2" htmlFor="nombre">
            Nombre de la mascota
          </label>
          <input
            className="w-full my-3 rounded-xl px-3"
            id="nombre"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value) }
            placeholder="Nombre de la mascota"
          />
        </div>
        {/* PROPIETARIO */}
        <div className="bg-white block">
          <label
            className="uppercase block text-left mt-2"
            htmlFor="propietario"
          >
            Nombre del propietario
          </label>
          <input
            className="w-full my-3 rounded-xl px-3"
            id="propietario"
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value) }
            placeholder="Propietario"
          />
        </div>
        {/* EMAIL */}
        <div className="bg-white block">
          <label className="uppercase block text-left mt-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full my-3 rounded-xl px-3"
            id="email"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
            placeholder="email"
          />
        </div>
        {/* ALTA */}
        <div className="bg-white block">
          <label className="uppercase block text-left mt-2" htmlFor="alta">
            Alta
          </label>
          <input
            type="date"
            className="w-full my-3 rounded-xl px-3"
            id="alta"
            value={alta}
            onChange={ (e) => setAlta(e.target.value) }
          />
        </div>
        {/* SINTOMAS */}
        <div className="bg-white block">
          <label 
            htmlFor="sintomas" 
            className="uppercase block text-left mt-2"
          >
            Sintomas
          </label>
          <textarea 
            id= "sintomas" 
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) }
            className="w-full my-3 rounded-xl px-3"
          />
        </div>
        {/* BOTON */}
        <input
          type='submit'
          className="uppercase bg-indigo-600 w-full text-white text-center p-2 hover:bg-indigo-700 cursor-pointer transition-colors"
          value= { paciente.id ? 'Editar paciente' : 'Agregar paciente'}
        />
   
      </form>
    </div>
  );
};

export default Formulario;
