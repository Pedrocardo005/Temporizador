import React from 'react'
import './App.css';
import Title from './Components/Title'
import Temporizador from './Components/Temporizador'

function App(){
  return (
    <div class="App">
      <Title texto="Temporizador" />
      <Temporizador/>
    </div>
  )
}

export default App;