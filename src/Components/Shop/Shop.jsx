import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link, useLoaderData } from "react-router-dom";
import { FcRight } from "react-icons/fc";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [cart, setCart] = useState([]);
  const { totalProducts } = useLoaderData();

  // const itemsPerPage = 10;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const pageNumbers = [...Array(totalPages).keys()];

  // useEffect(() => {
  //   fetch("http://localhost:5000/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`
      );
      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const ids = Object.keys(storedCart);

    fetch(`http://localhost:5000/productsByIds`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((cartProducts) => {
        // console.log('only products in the shopping cart', cartProducts);
        const savedCart = [];
        // step 1 : get id
        for (const id in storedCart) {
          // step 2 get the product by using id
          const addedProduct = cartProducts.find((product) => product._id === id);
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
      })
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product._id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  const options = [5, 10, 20];
  function handleSelectChange(event) {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  }
  return (
    <>
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
          <Cart handleClearCart={handleClearCart} cart={cart}>
            <Link to="/orders">
              <button className="btn-order">
                Review Order <FcRight></FcRight>
              </button>
            </Link>
          </Cart>
        </div>
      </div>
      {/* pagination code  */}
      <div className="pagination">
        <p>
          Current page: {currentPage} and items per page: {itemsPerPage}
        </p>
        {pageNumbers.map((number) => (
          <button
            // className="pag-btn"
            className={currentPage === number ? "selected" : ""}
            onClick={() => setCurrentPage(number)}
            key={number}
          >
            {" "}
            {number + 1}{" "}
          </button>
        ))}
        <select value={itemsPerPage} onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Shop;
