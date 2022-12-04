import React from 'react'
import "./ItemListContainer.css"; 
import mustang from '../assets/img/mustang.jpg';
import audia3 from '../assets/img/audia3.jpg'
import bmwm3 from '../assets/img/bmwm3.jpg';
import civic from '../assets/img/civic.jpg';
const ItemListContainer = (props) => {
    const {label: elNombreDeMiBoton}= props;
  return (
    <div className="cards">
<img src={mustang} alt=""/>
<button className="mi-boton">
    
  <button>+</button>  {elNombreDeMiBoton}  <button>-</button> 
</button>
<img src={audia3} alt=""/>
<button className="mi-boton">
    
    {elNombreDeMiBoton}   
</button>
<img src={bmwm3} alt=""/>
<button className="mi-boton">
    
    {elNombreDeMiBoton}   
</button>
<img src={civic} alt=""/>
<button className="mi-boton">
    
    {elNombreDeMiBoton}   
</button>
<img src={mustang} alt=""/>
<button className="mi-boton">
    
    {elNombreDeMiBoton}   
</button>
    </div>
   
  )
}

export default ItemListContainer