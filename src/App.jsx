import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'

function App() {

  return (
    <>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column"> 
          <Form></Form>
          </div>
          <div className="one-half column"> 2</div>
        </div>
      </div>

    
    </>
  )
}

export default App
