import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
     <Link to='/'> <img className="img" src={logo} alt="" /></Link>
      <div className="align">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/Login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
