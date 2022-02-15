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
        sidebar.style.visibility = 'hidden';
        sidebar.style.display = 'none';
      }, 1000);
    }
  }

  const showSidebar = () => {
    const sidebar = document.getElementById('offcanvas');
    if (sidebar) {
      sidebar.style.display = 'block';
      sidebar.style.visibility = 'visible';
      sidebar.style.transform = 'translateX(0%)';
    }
  }

  return (
    <div className="navbar navbar-expand-lg">
      {/* logo */}
      <a className="navbar-brand">Impact</a>

      {/* OffCanvas */}
      <div className="offcanvas offcanvas-end" id="offcanvas" style={{ zIndex: '10' }}>
        <div className="offcanvas-header d-flex justify-content-end">
          <button onClick={hideSidebar} type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
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
            <li className="nav-item dropdown" style={{ position: 'relative' }} >
              <a className='nav-link text-body'>Dropdown&nbsp;&nbsp;<i className="fa-solid fa-angle-down fa-xs"></i></a>

              <ul className="dropdown-1" style={{ left: '0%', listStyle: 'none' }}>
                <li>Menu One</li>
                <li>
                  <span>Menu Two &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <i className="fa-solid fa-angle-down fa-xs"></i>
                  <ul className="dropdown-2" style={{ position: 'absolute', left: '0px', listStyle: 'none' }}>
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

      {/* Open button */}
      <button className="nav-toggler" type="button" onMouseLeave={buttonUnSqueeze} onMouseOver={buttonSqueeze} onClick={showSidebar} style={{ border: 'none', padding: '0', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
        <div style={{ backgroundColor: 'white', width: '30px', height: '2px', margin: '9px 0' }}></div>
        <div style={{ backgroundColor: 'white', width: '30px', height: '2px', margin: '9px 0' }}></div>
        <div style={{ backgroundColor: 'white', width: '30px', height: '2px', margin: '9px 0' }}></div>
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
          <li className="nav-item dropdown" style={{ position: 'relative' }} >
            <a className='nav-link'>Dropdown&nbsp;&nbsp;<i className="fa-solid fa-angle-down fa-xs"></i></a>

            <ul className="dropdown-1" style={{ listStyle: 'none' }}>
              <li>Menu One</li>
              <li>
                <span>Menu Two &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <i className="fa-solid fa-chevron-right"></i>
                <ul className="dropdown-2" style={{ listStyle: 'none' }}>
                  <li>Sub Menu One</li>
                  <li>Sub Menu Two</li>
                  <li>Sub Menu Three</li>
                </ul>
              </li>
              <li>Menu Three</li>
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
    </div>
  );
}

export default Navbar;