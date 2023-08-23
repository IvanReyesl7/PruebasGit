import React,{useState} from 'react';
import Todo from "./todo"

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
    image: './1.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 1',
    price: 19.99,
    image: './1.jpg',
  },
  // Agrega más productos aquí
];

const Form = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <Todo key={product.id} product={product} />
      ))}
    </div>
  );
};
   export default Form