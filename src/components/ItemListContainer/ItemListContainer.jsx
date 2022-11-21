import React from 'react'
import "./ItemListContainer.css"; 
const ItemListContainer = (props) => {
    const {label: elNombreDeMiBoton}= props;
  return (
    <button className="mi-boton">
    
        {elNombreDeMiBoton}
    </button>
  )
}

export default ItemListContainer