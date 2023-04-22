import React from 'react'

const Turno = (props) => {

  const { turno, eliminarTurno } = props

  return (
    <div className='cita'>
      {/* <p>Mascota props: <span> {props.turno.mascota} </span> </p> */}
      <p>Mascota : <span> {turno.mascota} </span> </p>
      <p>Dueño: <span> {turno.dueño} </span> </p>
      <p>Fecha: <span> {turno.fecha} </span> </p>
      <p>Hora: <span> {turno.hora} </span> </p>
      <p>Sintomas: <span> {turno.sintomas} </span> </p>

      <button
        className='button eliminar'
        onClick={() => eliminarTurno(turno.id)}
      >Eliminar &times; </button>
    </div>
  )
}

export default Turno