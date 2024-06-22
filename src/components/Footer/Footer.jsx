import React, { useState } from 'react'
import './Footer.css'

import logo from '../assets/logo_black.png'
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='Footer'>
        <div>
            <div className='foot-logo'>
                <img src={logo} alt=''/>
                <p>Winoume</p>
            </div>
            
        </div>
        <p>Все права защищены &copy;</p>
    </div>
  )
}
export default Footer