import React, { useEffect, useState } from 'react'
import Title from './Title'
import Inputs from './Inputs'

const Temporizador = (props) => {
    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [horas, setHoras] = useState(0);
    const [stop, setStop] = useState(true)

    const addSegundos = (tempo) =>{
        setSegundos(tempo);
    }
    const addMinutos = (tempo) =>{
        setMinutos(tempo);
    }
    const addHoras = (tempo) =>{
        setHoras(tempo);
    }
    const altStop = () => {
        setStop(!stop);
    }

    const addZero = (tempo) => tempo < 10? "0"+tempo : tempo;

    let tempo = `${addZero(horas)} : ${addZero(minutos)} : ${addZero(segundos)}`

    return(
        <div>
            <Title texto={tempo} />
            <Inputs 
                segundos={addSegundos}
                minutos={addMinutos}
                horas={addHoras}
                stop={altStop}
             />
        </div>
    )
}

export default Temporizador;