import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
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
