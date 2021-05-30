import React from 'react'

const Inputs = (props) => {

    const pegarDados = (valores) => {
        valores.preventDefault();
        let dados = document.getElementById("tempo").value;
        
        if(dados !== ""){
            let hora = parseInt(dados.slice(0,2));
            let minuto = parseInt(dados.slice(3,5));
            let segundo = parseInt(dados.slice(6,8));

            props.segundos(segundo)
            props.minutos(minuto)
            props.horas(hora)
        }
    }

    return(
        <form>
            <input
                type="time"
                step="3"
                id="tempo" 
                min="0"
            />
            <button type="submit" onClick={pegarDados} id="botao-input4" >Adicionar</button>
        </form>
    )
}

export default Inputs