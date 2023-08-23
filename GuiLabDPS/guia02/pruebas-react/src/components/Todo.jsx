import React from "react"

const Product = ({ product }) => {
    return (
      <div className="product">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>${product.price.toFixed(2)}</p>
      </div>
    );
  };
  
  export default Product;