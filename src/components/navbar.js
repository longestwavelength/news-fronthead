import React from 'react';
//import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
            <div className='navbar'>
                <a href='#politics'>
                    Politics
                </a>
                <a href='#opinions'>
                    Opinions
                </a>
                <a href='#sports'>
                    Sports
                </a>
                <a href='#tech'>
                    Tech
                </a>
                <a href='#investigations'>
                    Investigations
                </a>
                <a href='#arts'>
                    Arts
                </a>
                <button className='sign-in' onClick=''>Sign in</button>
                <button className='subscribe' onClick=''>Subscribe</button>
            </div>
               
    );
  };
    
  export default Navbar;