import React, { useState } from 'react'

const Form = () => {

    const {turno, actualizarTurno } = useState ({
        mascota: '',
        dueño: '',
        fecha: '',
        hora: '',   
        sintomas: ''
    })

    const actualizarState = () => {
        console.log("escriendo");
    }
    return (
        <div>
            <h2>Crear cita</h2>
            <form action="">
                <label>Nombre mascota
                    <input
                        type='text'
                        name='mascota'
                        className='u-full-width'
                        placeholder='Nombre mascota'
                        onChange={actualizarState}
                    />
                </label>

                <label>Nombre dueño
                    <input
                        type='text'
                        name='dueño'
                        className='u-full-width'
                        placeholder='Nombre del dueño'
                        onChange={actualizarState}

                    />
                </label>

                <label> Fecha ingreso
                    <input
                        type='date'
                        name='fecha'
                        className='u-full-width'
                        onChange={actualizarState}

                    />
                </label>

                <label> Hora
                    <input
                        type='time'
                        name='hora'
                        className='u-full-width'
                        onChange={actualizarState}

                    />
                </label>

                <label> Sintomas 
                    <textarea name="sintomas" 
                    id="" cols="30" rows="10" 
                    className='u-full-width' 
                    onChange={actualizarState} >

                    </textarea>
                </label>

                <button type="submit" className='u-full-width button-primary'> Pedir turno </button>
            </form>
        </div>
    )
}

export default Form