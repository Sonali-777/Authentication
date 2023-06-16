import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const usenavigate = useNavigate();
  useEffect(() => {
    let username = sessionStorage.getItem('username');
    if(username === ''|| username=== null){
      usenavigate('/login')
    }
}, []);

return (
  <div>
    {/* <div className='header'>
      <Link to='/' >Home</Link>
      <Link to='/login' >Logout</Link>

    </div> */}
    <div>
      <h1>Its home</h1>
    </div>
  </div>
)
}

export default Home