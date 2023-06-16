import React from 'react'
import { useEffect, useState } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import Home from '../Home/Home';
import Login from '../Login/Login';
import Customer from '../Customer/Customer';
const Header = () => {
    const location = useLocation();
    const usenavigate = useNavigate();
    const [displayusername, displayusernameupdate] = useState('');
    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
            usenavigate('/login')
        }
    }, []);
    return (
        <div>
            <div className='header'>
                <Link to='/' >Home</Link>
                <span style={{ marginLeft: '70%' }}>Welcome <b>{displayusername}</b></span>
                <Link to='/customer' >Customer</Link>
                <Link to='/login' >Logout</Link>

            </div>
        </div>
    )
}

export default Header