import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import Turno from './components/Turno'

function App() {

  let turnosGuardados = JSON.parse(localStorage.getItem('turnitos'))
  if (!turnosGuardados) {
    turnosGuardados = []
  }
  const [turnosArray, setTurnosArray] = useState(turnosGuardados)

  //si hay cambios en el state lo guarda en localstorage
  useEffect( ()=> {
    if(turnosGuardados) {
      localStorage.setItem('turnitos', JSON.stringify(turnosArray))
    } else {
      localStorage.setItem('turnitos', JSON.stringify([]))
    }
  }, [turnosArray] )

  const tituloTurnos = turnosArray.length === 0 ? 'Sin turnos agendados' : 'Administrar turnos'

  const crearTurno = (turno) => {
    setTurnosArray([...turnosArray, turno])
  }

  const eliminarTurno= id => {
    let turnosModificado = turnosArray.filter(tur=> tur.id !== id)
    setTurnosArray(turnosModificado) //no hace falta el spread op xq filter crea un array nuevo
  }


  return (
    <>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              crearTurno={crearTurno}
            ></Form>
          </div>
          <div className="one-half column">
            <h2>{tituloTurnos}</h2>
            {turnosArray.map(turn => (
              <Turno
                key={turn.id}
                turno={turn}
                eliminarTurno= {eliminarTurno}

              ></Turno>
            ))}
          </div>
        </div>
      </div>


    </>
  )
}

export default App
