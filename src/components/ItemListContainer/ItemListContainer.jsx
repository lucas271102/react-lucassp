import React, {useEffect, useState} from 'react'
import{useParams} from 'react-router-dom';




const cars =[
  {id:1, image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fautotest.com.ar%2Fnoticias%2Fvolkswagen-golf-gti-hatchback-deportivos%2F&psig=AOvVaw2g1Dqbdet9Hszt5kjfkogL&ust=1673114852386000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLjyndXEs_wCFQAAAAAdAAAAABAE ",
category: "deportivos", title:"Volkswagen Golf"},
{id: 2, image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.caranddriver.com%2Fes%2Fcoches%2Fplaneta-motor%2Fa35225055%2Ftoyota-gr-yaris-litchfield%2F&psig=AOvVaw2jKPtxTTWMJAol02dwyaZx&ust=1673115043801000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCawLDFs_wCFQAAAAAdAAAAABAE",
category:"deportivos", title:"Toyota Gr Yaris"},
{id:3, image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.chevrolet.com.ar%2Fdeportivos-0km%2Fcamaro-coupe-auto-deportivo&psig=AOvVaw2DKnKOI1yGIwkD2iInUEEv&ust=1673115136620000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNj92dzFs_wCFQAAAAAdAAAAABAE",
category:"superdeportivos", title:"Chevrolet Camaro"},
{id:4, image:"https://www.carscoops.com/wp-content/uploads/2019/06/4481623b-ferrari-california-t-00.jpg", category:" superdeportivos ", title:" Ferrari California "}
]
export const ItemListContainer = ({texto}) => {
  const [data, setData]=useState([]);
  const {categoriaId}= useParams();
  useEffect(()=>{
    const getData = new Promise (resolve=>{
      setTimeout(()=>{
        resolve(cars);
      }, 3000);

    });
    if (categoriaId){
      getData.then(res=>res.filter(cars=> cars.category===categoriaId));
    }else{
      getData.then(res=> setData(res));
    }
    
  })
  return (
    <ItemListContainer/>
    
  )
}

export default ItemListContainer