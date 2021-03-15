import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button, Container,Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function Navigation() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Container fluid className="navigation">
      <Navbar light expand="md">
        <NavbarBrand className="mr-5" href="/">
          <img src="HidayatLogo.png" alt="H" height="60" />
        </NavbarBrand>

        <NavbarToggler onClick={toggleNavbar} className="mr-2" />

        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem className="mr-4 mt-2 mb-2" >
              <Link className="m-auto text-center" to="/">ABOUT</Link>
            </NavItem>
            <NavItem className="mr-4 mt-2 mb-2">
              <Link to="/resources">RESOURCES</Link>
            </NavItem>
            <NavItem className="mr-4 mt-2 mb-2">
              <Link to="/blog">BLOG</Link>
            </NavItem>
            <NavItem className="mr-4 mt-2 mb-2">
              <Link to="/joinUs">JOIN US</Link>
            </NavItem>
            <NavItem className="mr-4 mt-2 mb-2">
              <Link to="/signup">SIGN UP</Link>
            </NavItem>
            <NavItem className="mr-4 mt-2 mb-2">
              <Link to="/login">LOGIN</Link>
            </NavItem>
            {/* <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
              SIGN UP/LOGIN
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem ><Link to="/signup" className="dropdownStyle">SIGN UP</Link></DropdownItem>
              <DropdownItem><Link to="/login" className="dropdownStyle">LOGIN</Link></DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
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
