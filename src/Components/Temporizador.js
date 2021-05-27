import React, { useEffect, useState } from 'react'
import Title from './Title'

const Temporizador = (props) => {
    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [horas, setHoras] = useState(0);

    const addZero = (tempo) => tempo < 10? "0"+tempo : tempo;

    let tempo = `${addZero(horas)} : ${addZero(minutos)} : ${addZero(segundos)}`

    return(
        <div>
            <Title texto={tempo} />
        </div>
    )
}

export default Temporizador;