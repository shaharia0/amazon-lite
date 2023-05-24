import React from 'react';
import './ReviewItem.css'
import { TrashIcon } from '@heroicons/react/24/solid'

const ReviewItem = ({product, handleRemoveFromCart}) => {
  const {_id, name , img, price , quantity} = product;
  return (
    <div className='review-item'>
      <img src={img} alt="" />
      <div className="review-details">
        <p className='product-title'>{name}</p>
        <p>Price: <span className='price-class'>${price}</span></p>
        <p>Order Quantity: <span className='price-class'>{quantity}</span></p>
      </div>
      <button onClick={()=>handleRemoveFromCart(_id)} className='btn-delete'><TrashIcon className='icon'></TrashIcon></button>
    </div>
  );
};

export default ReviewItem;