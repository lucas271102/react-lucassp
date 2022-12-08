import React from 'react'
import mustang from '../assets/img/mustang.jpg';
import audia3 from '../assets/img/audia3.jpg'
import bmwm3 from '../assets/img/bmwm3.jpg';
import civic from '../assets/img/civic.jpg';
import { Link } from 'react-router-dom';
  


const ItemListContainer = () => {
  return (
    
    <><div className="card" style={{ width: '18rem', display:'flex'} }>
      <img src={mustang} className="card-img-top" style={{ width: '18rem' }} alt="" />
      <div className="card-body" style={{width: '18rem'}}>
        <h5 className="card-title">Ford Mustang</h5>
        <p className="card-text">Desde U$D 35.0000/ 600/Mes</p>
        <a href="" className="btn btn-primary">Detalle</a>
      </div>
    </div><div className="card" style={{ width: '18rem', display:'flex', justifyContent:'center' }}>
        <img src={audia3} className="card-img-top" style={{ width: '18rem'}} alt="" />
        <div className="card-body">
          <h5 className="card-title">Audi A3</h5>
          <p className="card-text"></p>
          <a href="" className="btn btn-danger" style={{textDecoration:'none', color:'white'}}><Link to ="/detalle">Detalle</Link></a>
        </div>
      </div><div className="card" style={{ width: '18rem', display:'flex' }}>
        <img src={civic} className="card-img-top" style={{ width: '18rem' }} alt="" />
        <div className="card-body">
          <h5 className="card-title">Honda Civic Type R</h5>
          <p className="card-text"></p>
          <a href="" className="btn btn-danger">Detalle</a>
        </div>
      </div></>
  )
}

export default ItemListContainer
 