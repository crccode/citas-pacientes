import React from "react";

const Paciente = ({paciente}) => {
  const {nombre, propietario, email, alta, sintomas, id} = paciente
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

    </div>
  );
};

export default Paciente;
