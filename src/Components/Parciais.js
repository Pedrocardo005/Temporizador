import React from 'react'

const Parciais = (props) => {

    return (
        <ul>
            {props.valores.map((valor) => <li>{valor}</li>)}
        </ul>
    )
}

export default Parciais