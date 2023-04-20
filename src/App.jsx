import { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {

  const [turnosArray, setTurnosArray] = useState([])

  const crearTurno = (turno) => {
    setTurnosArray([...turnosArray, turno])
  }

  return (
    <>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column"> 
          <Form 
          crearTurno = {crearTurno}
          ></Form>
          </div>
          <div className="one-half column"> 2</div>
        </div>
      </div>

    
    </>
  )
}

export default App
