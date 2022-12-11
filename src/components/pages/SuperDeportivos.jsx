import React from 'react'
import mustang from "..//assets/img/mustang.jpg"
import bmwm3 from "..//assets/img/bmwm3.jpg"
import civic from "..//assets/img/civic.jpg"
import "./SuperDeportivos.css"
const SuperDeportivos = () => {
  return (
    <div className="card-Container">

        <img src={mustang}  className="img-card" alt=""/>
        <h5 className="title">Ford Mustang GT</h5>
        <button className="add">Detalle</button>
        
        <img src={bmwm3}  className="img-card" alt=""/>
        <h5 className="title">BMW M3</h5>
        <button className="add">Detalle</button>

        
        <img src={civic}  className="img-card" alt=""/>
        <h5 className="title">Ford Mustang GT</h5>
        <button className="add">Detalle</button>

    </div>
  )
}

export default SuperDeportivos