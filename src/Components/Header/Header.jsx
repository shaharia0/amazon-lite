import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="header">
      <img className="img" src={logo} alt="" />
      <div className="align">
        <a href="/oder">Order</a>
        <a href="/order-review">Order Review</a>
        <a href="/manage-inventory">Manage Inventory</a>
        <a href="/Login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
