import React from 'react';
import './Product.css'
import { FaShoppingCart } from "react-icons/fa";

const Product = (props) => {
  // console.log(props.product);
  const {img, name, seller, quantity, price, ratings} = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className='product'>
      <img src={img} alt="" />
      <h1 className='product-name'>{name}</h1>
      <div className='product-info'>
      <p>Price: ${price}</p>
       <p>Manufacturer: {seller}</p>
       <p>Quantity: {quantity}</p>
       <p>Ratings: {ratings} stars</p>
      </div>
      <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>Add to Cart <FaShoppingCart></FaShoppingCart> </button>
    </div>
  );
};

export default Product;