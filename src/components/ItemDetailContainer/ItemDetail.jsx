import React from 'react'
import audia3 from '../assets/img/audia3.jpg'
const ItemDetail = () => {
  return (
    <div className="card" style={{ width: '18rem', display:'flex', justifyContent:'center' }}>
    <img src={audia3} className="card-img-top" style={{ width: '18rem'}} alt="" />
    <div className="card-body">
      <h5 className="card-title">Audi A3</h5>
      <p className="card-text">Motor 3.0 TDI de 333 HP</p>
      <a href="" className="btn btn-primary">Detalle</a>
    </div>
  </div>
  )
}

export default ItemDetail