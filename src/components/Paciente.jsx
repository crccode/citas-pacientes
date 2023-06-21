import React from "react";

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, propietario, email, alta, sintomas, id} = paciente

  //ELIMINAR
  const handleEliminar = () => {
    const respuesta = confirm('Desea eliminarlo?')
    if(respuesta){
      eliminarPaciente(id)
    }
  }
  return (
    <div className="bg-white m-2 px-5 py-10 rounded-xl">
      <p className="font-bold uppercase mb-3">
        Nombre. {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold uppercase mb-3">
        Propietario. {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold uppercase mb-3">
        Email. {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold uppercase mb-3">
        Fecha de alta. {""}
        <span className="font-normal normal-case ">{alta}</span>
      </p>

      <p className="font-bold uppercase mb-3">
        Sintomas. {""}
        <span className="font-normal normal-case ">{sintomas}</span>
      </p>

      {/* BOTON EDITAR Y ELIMINAR */}
      <div className="flex justify-between">
        <button          
          type="button"
          className="px-10 py-2  hover:bg-indigo-950 text-white bg-indigo-600 font-bold
          rounded-md text-center uppercase text-2xl"
          onClick={() => setPaciente(paciente)}
        >Editar</button>
        <button 
          type="button"
          className="px-10 py-2 hover:bg-red-950 text-white bg-red-600 font-bold
          rounded-md text-center uppercase text-2xl "
          // onClick={() => eliminarPaciente(id)}
          onClick={handleEliminar}
        >Eliminar</button>
      </div>

    </div>
  );
};

export default Paciente;
