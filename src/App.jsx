import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  // HOOK STATE PA AGREGAR PACIENTE
  const [pacientes, setPacientes] = useState([]);
  // EDITAR
  const [paciente, setPaciente] = useState({});
  // ELIMINAR PACIENTE
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };
  // VERIFICA SI HAY DATOS EN LOCAL STORAGE
  useEffect(() => {
    const obtenerLS = () => {
      const pacienteLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacienteLS);
    };
    obtenerLS();
  }, []);
  // LOCAL STORAGE ALMACENA LOS CAMBIOS QUE SE REALIZEN EN EL ARRAY
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="md:flex mt-10">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
