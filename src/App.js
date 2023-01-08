import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "..//src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import Home from "..//src/components/pages/Home/Home";
import Cart from "..//src/components/pages/Cart/Cart"
import ItemDetailPage from "..//src/components/pages/ItemDetailPage/ItemDetailPage"
import Categories from "..//src/components/pages/Categories/Categories"
import Form from "..//src/components/pages/Form/Form"

import CartContext from "..//src/components/Context/CartContext"

function App() {
  const [cart, setCart] = useState([]);
  const [qnt, setQnt] = useState(0);

  const greeting = "Luxury Motors";

  return (
    <div>
      <CartContext.Provider value={{ cart, setCart, qnt, setQnt }}>
        <Router>
          
            <Navbar />
            
              <Route exact path="/">
                <Home greeting={greeting} />
              </Route>
              <Route path="/form">
                <Form />
              </Route>
              <Route path="/item/:id">
                <ItemDetailPage />
              </Route>
              <Route path="/categories/:categoryId">
                <Categories />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            
            <Footer />
          
        </Router>
      </CartContext.Provider>
    </div>
  );
}

export default App;