import React from 'react';
import './Cart.css'
import { FaShoppingCart } from "react-icons/fa";
import { FcRight } from "react-icons/fc";

const Cart = ({cart}) => {
  // const {cart} = props;
  console.log(cart);
  let totalPrice=0;
  let totalShipping =0;

  for(const product of cart){
    totalPrice = totalPrice + product.price;
    totalShipping=totalShipping + product.shipping;
  }
  const tax = totalPrice*7/100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className='cart'>
      <h4>Order Summary</h4>
        <p>Selected items: {cart.length}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping: ${totalShipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
         <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
         <button className='btn-carts'>Clear cart <FaShoppingCart></FaShoppingCart></button>
         <button className='btn-order'>Review Order <FcRight></FcRight></button>
    </div>
  );
};

export default Cart;