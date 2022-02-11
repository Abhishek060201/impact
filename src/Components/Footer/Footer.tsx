import React from 'react';
import './Footer.css';

const Footer: React.FC = (): JSX.Element => {
  return (
    <div className='row d-flex justify-content-center' style={{ color: 'white', backgroundColor: 'black', width: '100%', padding: '80px' }}>

      <div className="col-4">
        <h6 className='about fw-bold mb-5'>About Impact</h6>
        <p style={{ color: '#6D6D6D', marginBottom: '25px', fontFamily: 'Open Sans', fontSize: '0.9rem' }}>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </p>
        <div className="social d-flex justify-content-start">
          <a>
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a>
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a>
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a>
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a>
            <i className="fa-brands fa-pinterest"></i>
          </a>
          <a>
            <i className="fa-solid fa-globe"></i>
          </a>
        </div>
      </div>

      <div className="col-2">
        <h6 className='fw-bold mb-5'>Links</h6>
        <ul style={{ padding: '0', listStyle: 'none' }}>
          <li>About Us</li>
          <li>Services</li>
          <li>News</li>
          <li>Careers</li>
          <li>Contacts</li>
        </ul>
      </div>

      <div className="col-2">
        <h6 className='fw-bold mb-5'>Company</h6>
        <ul style={{ padding: '0', listStyle: 'none' }}>
          <li>About Us</li>
          <li>Services</li>
          <li>News</li>
          <li>Careers</li>
          <li>Contacts</li>
        </ul>
      </div>

      <div className="col-4" style={{ padding: '0 0 0 100px' }}>
        <h6 className='fw-bold mb-5'>Contact</h6>
        <ul style={{ padding: '0', listStyle: 'none' }}>
          <li>43 Raymouth Rd. Baltemoer, London 3910</li>
          <li>+1(123)-456-7890</li>
          <li>+1(123)-456-7890</li>
          <li>Careers</li>
          <li>info@mydomain.com</li>
        </ul>
      </div>

      <span className='mx-auto pt-5' style={{ color: '#6D6D6D', fontFamily: 'Open Sans', fontSize: '0.9rem' }}>
        Copyright ©2022. All Rights Reserved. — Designed with love by <span style={{ color: 'white' }}>Untree.co</span> • <span style={{ color: 'white' }}>License</span>
      </span>
    </div>
  );
}

export default Footer;