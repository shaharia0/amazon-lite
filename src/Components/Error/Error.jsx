import React from 'react';
import './Error.css'
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div className='items'>
      <h1 className='title'>ERROR 404 !!!!</h1>
       <h2 className='description'>Data Not Found</h2>
       <Link to='/'><button className='btn'>Back To Home Page</button></Link>
    </div>
  );
};

export default Error;