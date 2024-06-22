import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { SearchBar } from '../SearchBar/SearchBar';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/" className="logo-link">
          <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p>Winoume</p>
          </div>
        </Link>
        <SearchBar/>
        <ul className='navigation'>
          <li><Link to="/" style={{textDecoration: "none"}}>Главная</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/contacts" style={{textDecoration: "none"}}>Контакты</Link></li>
          <li><Link to="/cart" style={{textDecoration: "none", textDecorationColor: "none"}}>Корзина</Link></li>
        </ul>
    </div>
  );
};

export default Navbar;
