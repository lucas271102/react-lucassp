import React , {useState, useEffect}from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import audia3 from "..//assets/img/audia3.jpg"
const autos={
    id:1, image:"https://autotest.com.ar/wp-content/uploads/2020/12/AUDI-A3-SPORTBACK-2021.jpg", title: "Audi A3", price:50000, desc:"Un gran motor alemán de 300 caballos de fuerza",
    
};
export const ItemDetailContainer = () => {
    const[ data, setData]=useState({})
    useEffect(()=>{
        const getData= new Promise (resolve=>{
            setTimeout(()=>{
                resolve(autos);
            },
            2000);
        });
        getData.then(res=> setData(res));
    },[]
    )
  return (
    <div><ItemDetail data={data}/></div>
  )
}

export default ItemDetailContainer