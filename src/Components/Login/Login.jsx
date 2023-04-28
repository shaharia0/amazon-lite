import React from 'react';
import './Login.css'
const Login = () => {
  return (
    <div className='form-container'>
      <h2 className='form-title'>Login</h2>
      <form>
        <div className='form-control'>
          <label htmlFor="email">Email</label>
           <input type="email" name="email" id="email" required/>
        </div>
        <div className='form-control'>
          <label htmlFor="password">Password</label>
           <input type="password" name="password" id="password" required/>
        </div>
        <input className='btn-submit' type="submit" value="Login" />
        <div>
        <span><small>New to Amazon ?</small></span>
        </div>
      </form>
    </div>
  );
};

export default Login;