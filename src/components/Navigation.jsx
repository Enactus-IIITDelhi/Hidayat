import React, { useState } from 'react';
import { Link,  NavLink} from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,  Button, Container,Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function Navigation() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const isActive = (path, match, location) => !!(match || path === location.pathname);


  return (
    <Container fluid className="navigation">
      <Navbar light expand="md">
        <NavbarBrand className="mr-5" href="/">
          <img src="HidayatLogo.png" alt="H" height="60" />
        </NavbarBrand>

        <NavbarToggler onClick={toggleNavbar} className="mr-2" />

        <Collapse isOpen={!collapsed} navbar>

          <Nav navbar>
            <NavLink to='/'   exact activeClassName="selected"  className="mr-4 mt-2 mb-2 navLinks"  >HOME</NavLink>
            <NavLink to='./resources'  activeClassName="selected" className="mr-4 mt-2 mb-2 navLinks" >RESOURCES</NavLink>
            <NavLink  to='./blog'  activeClassName="selected" className="mr-4 mt-2 mb-2 navLinks">BLOG</NavLink>
            <NavLink  to='./joinUs'  activeClassName="selected" className="mr-4 mt-2 mb-2 navLinks">JOIN US</NavLink>
            <NavLink to='./signup' activeClassName="selected" className="mr-4 mt-2 mb-2 navLinks">SIGN UP</NavLink>
            <NavLink to='./login' activeClassName="selected" className="mr-4 mt-2 mb-2 navLinks">LOGIN</NavLink>
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
