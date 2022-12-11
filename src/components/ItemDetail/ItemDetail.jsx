import React from 'react'
import "./ItemDetail.css";
export const ItemDetail = ({data}) => {
  return (
    <div className="container">
      <div className="detail">
      <div className="content">
          <h1>{data.title}/${data.price}</h1>
          
        </div>
        <img className="detail_image" src={data.image}alt=""/>
        <p className="description">{data.desc}</p>
    </div>
    </div>
  )
}

export default ItemDetail