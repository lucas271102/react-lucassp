import React from 'react'
import "./Button.css"; 
const Button = (props) => {
    const {label: elNombreDeMiBoton}= props;
  return (
    <button className="mi-boton">
    
        {elNombreDeMiBoton}
    </button>
  )
}

export default Button