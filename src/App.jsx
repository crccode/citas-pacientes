import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="md:flex mt-10">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
    
    
  )
}

export default App
