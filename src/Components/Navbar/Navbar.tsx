import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = (): JSX.Element => {
  return (
    <div className="navbar navbar-expand-lg">
      {/* logo */}
      <a className="navbar-brand">Impact</a>
      {/* collapse button */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* link container */}
      <div className='collapse navbar-collapse' id='mynavbar'>
        <ul className='navbar-nav ms-auto'>
          <li className="nav-item">
            <Link
              className='nav-link active'
              to='/'
            >
              Home
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a className='nav-link'>Dropdown&nbsp;&nbsp;<i className="fa-solid fa-angle-down fa-xs"></i></a>
            {/* <img src='src/assets/icons/down.png'/> */}
          </li>
          <li className="nav-item">
            <Link
              className='nav-link'
              to='/'
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className='nav-link'
              to='/'
            >
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className='nav-link'
              to='/'
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className='nav-link'
              to='/'
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;