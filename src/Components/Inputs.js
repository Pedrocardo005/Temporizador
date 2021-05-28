import React, { useState } from 'react'
import Buttons from './Buttons'

const Inputs = (props) => {
    const [seg, setSeg] = useState(0)
    const [min, setMin] = useState(0)
    const [hor, setHor] = useState(0)

    const limitSeg = (e) => {
        if (e.target.value < 0){
            setSeg(0)
        } else if(e.target.value > 59){
            setSeg(59);
        } else {
            setSeg(e.target.value);
        }
    }

    const limitMin = (e) => {
        if (e.target.value < 0){
            setMin(0)
        } else if(e.target.value > 59){
            setMin(59);
        } else {
            setMin(e.target.value);
        }
    }

    const limitHor = (e) => {
        if (e.target.value < 0){
            setHor(0)
        } else if(e.target.value > 24){
            setHor(24);
        } else {
            setHor(e.target.value);
        }
    }

    const zerarTempo = () => {
        setSeg(0)
        setMin(0)
        setHor(0)
    }

    const pegarDados = (valores) => {
        valores.preventDefault();

        props.segundos(seg)
        props.minutos(min)
        props.horas(hor)
        
        if(seg !== 0 || min !== 0 || hor !== 0){
            props.stop();
        }

        zerarTempo();
    }

    return(
        <form>
            <input type="number" value={hor} onChange={limitHor} />
            <input type="number" value={min} onChange={limitMin} />
            <input type="number" value={seg} onChange={limitSeg} />
            <button type="submit" onClick={pegarDados}>Adicionar</button>
        </form>
    )
}

export default Inputs