import React, { useEffect, useState } from "react";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from "react-router-dom";
import { FcRight } from "react-icons/fc";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product._id);
  };

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1 : get id
    for (const id in storedCart) {
      // step 2 get the product by using id
      const addedProduct = products.find((product) => product._id === id);
      // step 3: addProducts
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        //step 4: add the added product to the saved cart
        savedCart.push(addedProduct);
      }
      console.log(addedProduct);
    }
    //step 5: set the cart
    setCart(savedCart);
  }, [products]);
   
  const handleClearCart = ()=>{
    setCart([]);
    deleteShoppingCart();
  }
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart
         handleClearCart={handleClearCart}
        cart={cart}>
          <Link to='/orders'>
          <button className='btn-order'>Review Order <FcRight></FcRight></button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
