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
            {/* <Dropdown>
  <DropdownToggle caret color="primary">
    Home
  </DropdownToggle>
  <DropdownMenu>
    <NavLink to="/">
      <DropdownItem>HOME</DropdownItem>
    </NavLink>
    <NavLink to="/">
      <DropdownItem>ABOUT</DropdownItem>
    </NavLink>
  </DropdownMenu>
</Dropdown> */}
            <NavLink end className="mr-4 mt-2 mb-2 navLinks" to='resources' >RESOURCES</NavLink>
            <NavLink end className="mr-4 mt-2 mb-2 navLinks" to='blog' >BLOG</NavLink>
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

              <Button color="dark" className="rounded-circle ml-2">
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
