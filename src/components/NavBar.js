import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem className="mx-3">
              <Link to="/">
                News
              </Link>
            </NavItem>
            <NavItem className="mx-3">
              <Link to="/features">
                Features
              </Link>
            </NavItem>
            <NavItem className="mx-3">
              <Link to="/literary">
                Literary
              </Link>
            </NavItem >
            <NavItem className="mx-3">
              <Link to="/opinion">
               Opinion
              </Link>
            </NavItem>
            <NavItem className="mx-3">
              <Link to="/beyond-espana">
               Beyond Espana
              </Link>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                About
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Escolario
                </DropdownItem>
                <DropdownItem>
                  Becarios de Santo Tomas
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        </Collapse>
        <NavbarBrand href="/">Escolario</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default NavBar