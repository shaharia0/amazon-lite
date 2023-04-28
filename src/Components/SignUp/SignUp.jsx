import React from 'react';
import './SignUp.css'

const SignUp = () => {
  return (
    <div className='form-container'>
    <h2 className='form-title'>Sign up</h2>
    <form>
      <div className='form-control'>
        <label htmlFor="email">Email</label>
         <input type="email" name="email" id="email" required/>
      </div>
      <div className='form-control'>
        <label htmlFor="password">Password</label>
         <input type="password" name="password" id="password" required/>
      </div>
      <div className='form-control'>
        <label htmlFor="password">Confirm Password</label>
         <input type="password" name="password" id="password" required/>
      </div>
      <input className='btn-submit' type="submit" value="Sign up" />
    </form>
  </div>
  );
};

export default SignUp;