import React from 'react'

const Botao = (props) => {

    return(
        <button onClick={props.efeito}>{props.name}</button>
    )
}

export default Botao