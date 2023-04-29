import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext); 
  const navigate = useNavigate();
  const handleLogOut = ()=>{
    logOut()
    .then(result =>{
      
       navigate('/login');
    })
    .catch(error=>console.error(error));

  }
  return (
    <nav className="header">
     <Link to='/'> <img className="img" src={logo} alt="" /></Link>
      <div className="align">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/Login">Login</Link>
        <Link to="/signup">Signup</Link>
        {
          user && <span>Welcome {user.email} <button className="btn-signout" onClick={handleLogOut}>SignOut</button> </span>
        }
      </div>
    </nav>
  );
};

export default Header;
