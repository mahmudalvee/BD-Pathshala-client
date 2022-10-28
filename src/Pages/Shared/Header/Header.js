import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../image/logo/logo.png";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Image from "react-bootstrap/Image";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => console.error(console.error(error)));
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`header-bg shadow-lg p-1 mb-5 bg-body ${theme}`}
    >
      <Container className="text-primary">
        <Link to="/" className="link">
          <Navbar.Brand className="d-flex ">
            <img
              src={logo}
              width="45"
              height="45"
              className=" align-top"
              alt="logo"
            />
            <h2 className="ms-2 my-auto nav-title">পাঠশালা</h2>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          className="header-txt"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse className="header-txt mx-sm-auto" id="responsive-navbar-nav">
          <Nav className="ms-auto me-auto">
            <Link
              to="/allcourses"
              className="link nav-txt-title fw-semibold m-auto me-lg-3"
            >
              Courses
            </Link>
            <Link
              to="/faq"
              className="link nav-txt-title fw-semibold m-auto me-lg-3"
            >
              FAQ
            </Link>
            <Link to="/blog" className="link nav-txt-title fw-semibold m-auto">
              Blog
            </Link>
          </Nav>
          <Nav>
            <Nav className="header-txt mx-auto mt-sm-4 me-lg-1 my-auto">
            <>
            {
                user?.uid ?
                    <>
                        <span className="mx-auto my-auto">
                        {user?.photoURL ?
                            <Dropdown as={ButtonGroup}>
                              <Image
                                className="me-lg-1"
                                style={{ height: '40px' }}
                                roundedCircle
                                src={user?.photoURL}>
                            </Image>
                            <Dropdown.Toggle split variant="warning" id="dropdown-split-basic" />
                            <Dropdown.Menu className="bg-warning">
                            <Dropdown.Item>{user?.displayName}</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                            
                            : <i className="bi bi-person-bounding-box"></i>
                        }
                        </span>
                        
                        <Button
                          className="ms-lg-2 my-lg-auto mx-auto link my-sm-2 fw-bold btn-width"
                          variant="warning" onClick={handleLogOut}>
                            Log out
                        </Button>
                    </>
                    :
                    <>
                        <Button
                          className="my-lg-auto mx-auto link my-sm-2 fw-bold shadow rounded btn-width"
                          variant="warning"
                        >
                          <Link to="/login" className="link">
                            Login
                          </Link>
                        </Button>
                    </>
            }
              </>
              
              
            </Nav>
            <Button
              variant="outline-dark"
              onClick={toggleTheme}
              className=" my-lg-auto mx-auto link my-sm-5 fw-bold shadow rounded btn-width fs-3 bi bi-toggles"
            ></Button>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
