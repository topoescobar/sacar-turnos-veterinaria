import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types';

const Form = (props) => {

    const [turno, actualizarTurno] = useState ({
        mascota: '',
        dueño: '',
        fecha: '',
        hora: '',   
        sintomas: ''
    })

    const [error, actualizarError] = useState(null)

    const actualizarState = event => {
        console.log('valor ingresado' , event.target.value);
        actualizarTurno({
            //spread operator para no sobreescribir todo el objeto con cada modificacion
            ...turno, 
            //con array destructuring obtenemos el nombre del input que hicimos coincidir con el nombre de las propuedades del objeto para no tener que escribir cada input name
            [event.target.name]: event.target.value
        })
    }

    const {mascota, dueño, fecha, hora, sintomas} = turno

    const agendarTurno = (e) => {
        e.preventDefault() //para que no envie el querystring
        //validacion
        if (mascota.trim() == '' || dueño.trim() == '' ||
         fecha.trim() == '' || hora.trim() == '' || sintomas.trim() == ''  ) {
            actualizarError(true)
            return
        }

        turno.id = uuidv4();
        actualizarError(false) //para borrar el cartel 
        // console.log(turno);

        //mando el objeto con el id al array principal
        props.crearTurno(turno) 

        //dejar los campos del form en blanco
        actualizarTurno({
            mascota: '',
            dueño: '',
            fecha: '',
            hora: '',   
            sintomas: ''
        })
    }

    return (
        <div>
            <h2>Crear cita</h2>
            <form onSubmit={agendarTurno} >
                <label>Nombre mascota
                    <input
                        type='text'
                        name='mascota'
                        className='u-full-width'
                        placeholder='Nombre mascota'
                        onChange ={actualizarState}
                        //pongo el value para poder resetear el form
                        value = {mascota}
                    />
                </label>

                <label>Nombre dueño
                    <input
                        type='text'
                        name='dueño'
                        className='u-full-width'
                        placeholder='Nombre del dueño'
                        onChange={actualizarState}
                        value={dueño}
                    />
                </label>

                <label> Fecha ingreso
                    <input
                        type='date'
                        name='fecha'
                        className='u-full-width'
                        onChange={actualizarState}
                        value={fecha}
                    />
                </label>

                <label> Hora
                    <input
                        type='time'
                        name='hora'
                        className='u-full-width'
                        onChange={actualizarState}
                        value={hora}
                    />
                </label>

                <label> Sintomas 
                    <textarea name="sintomas" 
                    id="" cols="30" rows="10" 
                    className='u-full-width' 
                    onChange={actualizarState}
                    value={sintomas}
                    >
                    </textarea>
                </label>

                <button type="submit" className='u-full-width button-primary'> Agendar turno </button>
                {error === true ? <p className='alerta-error'> Completar todos los datos</p> : error === false ? <p className='alerta-exito'> Turno agendado</p> : null}

            </form>
        </div>
    )
}

Form.propTypes ={
    agendarTurno: PropTypes.func

}   

export default Form