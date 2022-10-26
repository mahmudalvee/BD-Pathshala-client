import React from 'react';
import './Footer.css';
import logo from '../../../image/logo/logo.png';

const Footer = () => {
    return (
        <div className='footer-bg mt-5'>
            <footer className="footer-bg text-center text-white">
      <div className="container p-1 pb-0">
        <div className="text-center my-3 mt-1">
          <div>
          <img
              src={logo}
              width="50"
              height="50"
              className=" align-top"
              alt="logo"
            />
            <h2 className='mt-2 my-auto nav-title'>পাঠশালা</h2>
          </div>
          <h6>Office- 60/1 Greenroad,
            Dhaka, Bangladesh</h6>
          <h6>Find us on:</h6>
        </div>

        <section className="mb-4">
          
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/" role="button"
            ><i className="bi bi-facebook"></i></a>
          <a className="btn btn-outline-light btn-floating m-1" href="https://youtube.com/" role="button"
            ><i className="bi bi-youtube"></i></a>
          <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/" role="button"
            ><i className="bi bi-twitter"></i></a>
          <a className="btn btn-outline-light btn-floating m-1" href="https://linkedin.com/" role="button"
            ><i className="bi bi-linkedin"></i></a>
        </section>
      </div>
    </footer>
        </div>
    );
};

export default Footer;