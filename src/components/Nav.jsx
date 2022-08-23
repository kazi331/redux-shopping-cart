import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import '../styles/nav.css';
import { bagIcon } from './Icons';
const Nav = () => {
    const {amount} = useSelector(store => store.cart)
    return (
        <div className='navigation'>
            <header className='App'>
                <nav>
                    <NavLink className="nav-link" to="/" >Home</NavLink>
                    <NavLink className="nav-link" to="about">About</NavLink>
                    <NavLink className="nav-link" to="works">Works</NavLink>
                    <NavLink className="nav-link" to="blog">Blogs</NavLink>
                    <NavLink className="nav-link" to="contact">Contact</NavLink>
                </nav>
                <Link className="cart" to="cart">
                    {bagIcon}  <sup>{amount}</sup>
                </Link>
            </header>
        </div>
    );
};

export default Nav;

