import React from "react";
import ItemList from "../../ItemList/ItemList";


import Payments from "../../Payments/Payments";

import "./Home.css";

const Home = ({ greeting, onAdd }) => {
  return (
    <main className="home">
      <div className="home__title">
        <h1>{greeting}</h1>
      </div>
      
      <Payments />
      <ItemList onAdd={onAdd} />
    </main>
  );
};

export default Home;