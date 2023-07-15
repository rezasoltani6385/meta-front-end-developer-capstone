import React from 'react';
import logo from './icons_assets/Logo.svg';

function Header() {
  return (
    <div className='d-flex justify-content-center bg-light'>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <a className='navbar-brand' href='#'>
          <img src={logo} alt='Logo' />
        </a>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Menu
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Reservations
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Order Online
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
