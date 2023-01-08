import React, { useState, useEffect, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Item from "../Item/Item";
import CartContext from "..//Context/CartContext";

import "./ItemDetail.css";


const ItemDetail = ({ product }) => {
  const { setCart, setQnt } = useContext(CartContext);
  const [article, setArticle] = useState();

  useEffect(() => {
    setArticle(product);
  }, [product]);

  const style = {
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  };

  const styleButtom = {
    width: "86%",
    marginTop: "5px",
    backgroundColor: "green",
    color: "white",
  };

  const [quantity, setQuantity] = useState(1);

  const handleClick = () => {
    setQnt((value) => value + quantity);
    article.quantity = quantity;

    const prod = {
      id: article.id,
      name: article.name,
      description: article.description,
      stock: article.stock,
      price: article.price,
      brand: article.brand,
      model: article.model,
      quantity: article.quantity,
      gender: article.gender,
      image: article.image,
    };

    setCart((value) => [...value, prod]);
  };

  return (
    <div style={style} className="item-detail">
      <Item product={product} />
      <ItemCount
        initial={1}
        min={0}
        max={product.stock}
        setQuantity={setQuantity}
      />
      <button>
        Add
      </button>
    </div>
  );
};

export default ItemDetail;