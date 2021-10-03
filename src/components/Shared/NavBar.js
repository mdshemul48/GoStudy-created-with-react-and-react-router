import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
      <Container>
        <Link className='navbar-brand' to='/'>
          <img width='135px' src={logo} alt='website logo' />
        </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto'>
            <NavLink to='/' activeClassName='active' exact className='nav-link'>
              Home
            </NavLink>
            <NavLink
              to='/products'
              activeClassName='active'
              className='nav-link'
            >
              Products
            </NavLink>
            <NavLink
              to='/contact'
              activeClassName='active'
              className='nav-link'
            >
              Contact Us
            </NavLink>
            <NavLink to='/about' activeClassName='active' className='nav-link'>
              About Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
