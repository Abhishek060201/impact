import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = (): JSX.Element => {
  const buttonSqueeze = () => {
    const buttonFragments = document.querySelectorAll<HTMLElement>('.nav-toggler div');
    buttonFragments.forEach(fragment => {
      fragment.style.margin = '6px 0';
    });
  }
  const buttonUnSqueeze = () => {
    const buttonFragments = document.querySelectorAll<HTMLElement>('.nav-toggler div');
    buttonFragments.forEach(fragment => {
      fragment.style.margin = '9px 0';
    });
  }

  const hideSidebar = () => {
    const sidebar = document.getElementById('offcanvas');
    if (sidebar) {
      sidebar.style.transform = 'translateX(100%)';
      setTimeout(() => {
      }, 300);
    }
  }
  const showSidebar = () => {
    const sidebar = document.getElementById('offcanvas');
    if (sidebar) {
      sidebar.classList.add('show');
      sidebar.style.transform = 'translateX(0%)';
    }
  }

  const toggleSidebarDropdown1 = () => {
    const dropdown = document.querySelector<HTMLElement>('.sidebar-dropdown-1');
    if (dropdown) {
      if (dropdown.style.display === 'none')
        dropdown.style.display = 'block';
      else
        dropdown.style.display = 'none';
    }
  }
  const toggleSidebarDropdown2 = () => {
    const dropdown = document.querySelector<HTMLElement>('.sidebar-dropdown-2');
    if (dropdown) {
      if (dropdown.style.display === 'none')
        dropdown.style.display = 'block';
      else
        dropdown.style.display = 'none';
    }
  }

  return (
    <div className="navbar navbar-expand-lg">
      {/* logo */}
      <a className="navbar-brand">Impact</a>


      {/* Open Side Navbar Toggler */}
      <button
        className="nav-toggler"
        type="button"
        onMouseOver={buttonSqueeze}
        onMouseLeave={buttonUnSqueeze}
        onClick={showSidebar}
        style={{ border: 'none', padding: '0', backgroundColor: 'rgba(0, 0, 0, 0)' }}
      >
        <div style={{ backgroundColor: 'white', width: '30px', height: '2px', margin: '9px 0' }}></div>
        <div style={{ backgroundColor: 'white', width: '30px', height: '2px', margin: '9px 0' }}></div>
        <div style={{ backgroundColor: 'white', width: '30px', height: '2px', margin: '9px 0' }}></div>
      </button>

      {/* Navbar for large screens */}
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
          <li className="nav-item dropdown" style={{ position: 'relative' }} >
            <a className='nav-link'>Dropdown&nbsp;&nbsp;<i className="fa-solid fa-angle-down fa-xs"></i></a>

            <ul className="dropdown-1" style={{ listStyle: 'none' }}>
              <li style={{ padding: '0 30px' }}>Menu One</li>
              <li style={{ padding: '0 30px', position: 'relative' }}>
                <span>Menu Two &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <i className="fa-solid fa-chevron-right"></i>
                <ul className="dropdown-2" style={{ listStyle: 'none', width: '200px' }}>
                  <li>Sub Menu One</li>
                  <li>Sub Menu Two</li>
                  <li>Sub Menu Three</li>
                </ul>
              </li>
              <li style={{ padding: '0 30px' }}>Menu Three</li>
            </ul>

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

      {/* OffCanvas (Navbar for smaller screens) */}
      <div
        className="offcanvas offcanvas-end"
        id="offcanvas"
        style={{ zIndex: '10' }}
      >
        <div className="offcanvas-header d-flex justify-content-end">
          <button
            onClick={hideSidebar}
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          />
        </div>
        <div className="offcanvas-body px-4">
          <ul className='navbar-nav ms-auto'>
            <li className="nav-item">
              <Link
                className='nav-link active text-body'
                to='/'
              >
                Home
              </Link>
            </li>
            <li
              className="nav-item dropdown"
              style={{ position: 'relative' }}
            >
              <a
                className='nav-link text-body d-flex justify-content-between align-items-center'
                onClick={toggleSidebarDropdown1}
              >
                <div>Dropdown</div>
                <i className="fa-solid fa-angle-down fa-xs"></i>
              </a>

              <ul
                className="sidebar-dropdown-1"
                style={{ width: '100%', padding: '5px 20px 0 20px', listStyle: 'none', display: 'none' }}>
                <li>Menu One</li>
                <li>
                  <a
                    className='d-flex justify-content-between align-items-center text-body text-decoration-none'
                    onClick={toggleSidebarDropdown2}
                  >
                    <div>Menu Two</div>
                    <i className="fa-solid fa-angle-down fa-xs"></i>
                  </a>
                  <ul
                    className="sidebar-dropdown-2"
                    style={{ padding: '5px 20px 0 20px', listStyle: 'none', display: 'none' }}
                  >
                    <li className='text-body'>Sub Menu One</li>
                    <li>Sub Menu Two</li>
                    <li>Sub Menu Three</li>
                  </ul>
                </li>
                <li>Menu Three</li>
              </ul>

            </li>
            <li className="nav-item">
              <Link
                className='nav-link text-body'
                to='/'
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className='nav-link text-body'
                to='/'
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className='nav-link text-body'
                to='/'
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className='nav-link text-body'
                to='/'
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Navbar;