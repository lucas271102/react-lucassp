import React from 'react'
import yarisgr from "..//assets/img/yarisgr.jpg";
import golfgti from "..//assets/img/golfgti.jpg"
import impreza from "..//assets/img/impreza.jpg"
import { Link } from 'react-router-dom';
import "./Deportivos.css";

const Deportivos = () => {
  return (
    <div>
      <header className="header">Deportivos </header>
<><div className="card" style={{ width: '18rem', display:'flex'} }>
      <img src={yarisgr} className="card-img-top" style={{ width: '18rem' }} alt="" />
      <div className="card-body" style={{width: '18rem'}}>
        <h5 className="card-title">Yaris GR </h5>
        <p className="card-text">Desde U$D -.50000</p>
        <a href="" className="btn btn-primary">Comprar</a>
      </div>
    </div><div className="card" style={{ width: '18rem', display:'flex', justifyContent:'center' }}>
        <img src={golfgti} className="card-img-top" style={{ width: '18rem'}} alt="" />
        <div className="card-body">
          <h5 className="card-title">Volkswagen Golf R</h5>
          <p className="card-text"></p>
          <a href="" className="btn btn-danger" style={{textDecoration:'none', color:'white'}}>Comprar</a>
        </div>
      </div><div className="card" style={{ width: '18rem', display:'flex' }}>
        <img src={impreza} className="card-img-top" style={{ width: '18rem' }} alt="" />
        <div className="card-body">
          <h5 className="card-title">Subaru Impreza</h5>
          <p className="card-text"></p>
          <a href="" className="btn btn-danger">Comprar</a>
        </div>
      </div></>

    </div>
  )
}

export default Deportivos