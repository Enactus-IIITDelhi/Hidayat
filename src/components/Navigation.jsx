import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

function Navigation() {
    return (
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Hidayat</NavbarBrand>
        </div>
      </Navbar>
    );
}

export default Navigation;