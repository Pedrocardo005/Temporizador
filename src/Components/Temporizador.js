import React, { useEffect, useState } from 'react'
import Botao from './Botao'
import Title from './Title'
import Inputs from './Inputs'
import Parciais from './Parciais'

const Temporizador = (props) => {
    const [pararTempo, setPararTempo] = useState("Iniciar");
    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [horas, setHoras] = useState(0);
    const [stop, setStop] = useState(true);
    const [parcial, setParcial] = useState([]);

    const addSegundos = (tempo) =>{
        setSegundos(tempo);
    }
    const addMinutos = (tempo) =>{
        setMinutos(tempo);
    }
    const addHoras = (tempo) =>{
        setHoras(tempo);
    }

    const addParciais = () => {
        setParcial([...parcial, tempo])//permite ir adicionando na array.
    }

    const zerarTempo = () => {
        setSegundos(0)
        setMinutos(0)
        setHoras(0)
    }

    const altStop = () => {
        if(segundos !== 0 || minutos !== 0 || horas !== 0 || pararTempo === "Parar"){
            setStop(!stop)//a primeira vez não está funcionando e está invertido o estado do botão.
            if(stop){
                setPararTempo("Parar");
            } else {
                setPararTempo("Iniciar");
            }
        }
    }

    const decrementar = () =>{
        if(!stop){
                if(segundos > 0){
                setSegundos(segundos - 1);
                } else if(segundos === 0){
                if(minutos > 0){
                    setMinutos(minutos - 1);
                    setSegundos(59);
                } else if(horas > 0){
                    setHoras(horas - 1)
                    setMinutos(59)
                    setSegundos(59)
                }else{//se tudo for zero, então pare o cronômetro
                    altStop();
                }
            }
        }
    }

    useEffect( () => {
        let arm = setInterval(() => {
            decrementar()
        }, 1000)
        return () => clearInterval(arm);
    }, [segundos, minutos, horas,pararTempo])
    
    useEffect( () => {
        if(segundos === 0 && minutos === 0 && horas === 0)
            altStop();
    }, [segundos])
    
    const addZero = (tempo) => tempo < 10? "0"+tempo : tempo;

    let tempo = `${addZero(horas)} : ${addZero(minutos)} : ${addZero(segundos)}`

    return(
        <div>
            <Title texto={tempo} />
            <Inputs 
                segundos={addSegundos}
                minutos={addMinutos}
                horas={addHoras}
             />
            <Botao efeito={altStop} name={pararTempo} />
            <Botao efeito={addParciais} name={"Parciais"} />
            <Botao efeito={zerarTempo} name={"Zerar"} />
            <Parciais valores={parcial} />
        </div>
    )
}

export default Temporizador;