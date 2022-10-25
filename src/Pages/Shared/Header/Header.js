import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../image/logo/logo.png';
import './Header.css';

const Header = () => {
    const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
    return (
        <Navbar collapseOnSelect expand="lg" className={`header-bg shadow-lg p-1 mb-5 bg-body ${theme}`}>
      <Container className='text-primary'>
          <Navbar.Brand href="#home" className='d-flex '>
            <img
              src={logo}
              width="45"
              height="45"
              className=" align-top"
              alt="logo"
            />
            <h2 className='ms-2 my-auto nav-title'>পাঠশালা</h2>
          </Navbar.Brand>
        <Navbar.Toggle className='header-txt' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className='header-txt' id="responsive-navbar-nav">
          <Nav className="ms-auto me-auto">
            <Nav.Link href="#features" className='header-txt'>Courses</Nav.Link>
            <Nav.Link href="#pricing" className='header-txt'>FAQ</Nav.Link>
            <Nav.Link href="#pricing" className='header-txt'>Blog</Nav.Link>
            <Button variant="outline-light" onClick={toggleTheme} className='bi bi-palette-fill '></Button>
          </Nav>
          <Nav>
          <Button variant="warning">Log in</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;