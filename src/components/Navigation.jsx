import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button, Container } from 'reactstrap';


function Navigation() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Container fluid className="navigation">
      <Navbar light expand="md">
        <NavbarBrand className="mr-5" href="/">
          <img src="logo.svg" alt="H" height="50" />
        </NavbarBrand>

        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className>
            <NavItem className="mr-4 mt-2 mb-2">
              <Link to="/">ABOUT</Link>
            </NavItem>
            <NavItem className="mr-4 mt-2 mb-2">
              <Link to="/">BLOG</Link>
            </NavItem>
            <NavItem className="mr-4 mt-2 mb-2">
              <Link to="/">CONTACT</Link>
            </NavItem>
          </Nav>

          <Nav className="ml-auto social" navbar>
            <NavItem>
              <Button color="dark" className="rounded-circle">
                <span className="fa fa-twitter"></span>
              </Button>

              <Button color="dark" className="rounded-circle">
                <span className="fa fa-facebook"></span>
              </Button>

              <Button color="dark" className="rounded-circle">
                <span className="fa fa-instagram"></span>
              </Button>
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>
    </Container>
  );
}

export default Navigation;