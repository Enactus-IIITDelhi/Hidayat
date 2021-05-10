import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,  Button, Container } from 'reactstrap';


function Navigation() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Container fluid className="navigation">
      <Navbar light expand="md">
        <NavbarBrand className="mr-5" href="/">
          <img src="HidayatLogo.png" alt="H" height="60" />
        </NavbarBrand>

        <NavbarToggler onClick={toggleNavbar} className="mr-2" />

        <Collapse isOpen={!collapsed} navbar>

          <Nav navbar>
            <NavLink end className="mr-4 mt-2 mb-2 navLinks" to='/'  >HOME</NavLink>
            <NavLink end className="mr-4 mt-2 mb-2 navLinks" to='about' >ABOUT US</NavLink>
            <NavLink end className="mr-4 mt-2 mb-2 navLinks" to='resources' >APTITUDE TEST</NavLink>
            <NavLink end className="mr-4 mt-2 mb-2 navLinks" to='blog' >BLOG</NavLink>
            <NavLink end className="mr-4 mt-2 mb-2 navLinks" to='mentorship' >MENTORSHIP PROGRAM</NavLink>
            <NavLink end className="mr-4 mt-2 mb-2 navLinks" to='joinUs' >JOIN US</NavLink>
          </Nav>

          <Nav className="ml-auto social" navbar>
            <NavItem>
              <Button color="dark" className="rounded-circle">
                <span className="fa fa-twitter"></span>
              </Button>

              <Button color="dark" className="rounded-circle ml-2">
                <span className="fa fa-facebook"></span>
              </Button>

              <a href="https://www.instagram.com/project_hidayat/" target="blank">
              <Button color="dark" className="rounded-circle ml-2">
                <span className="fa fa-instagram"></span>
              </Button>
              </a>
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>
    </Container>
  );
}

export default Navigation;
