// ItemListContainer.js
import React from "react";
import { products } from "./data";
import "./ItemListContainer.css"; // Importar estilos

const ItemListContainer = () => {
  return (
    <div className="item-list-container">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
