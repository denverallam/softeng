import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  DropdownItem,
  Nav,
  NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const user = JSON.parse(localStorage.getItem("profile"))

console.log(user)
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
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem className="mx-3">
              <NavLink href="/news">
                News
              </NavLink>
            </NavItem>
            <NavItem className="mx-3">
              <NavLink href="/features">
                Features
              </NavLink>
            </NavItem>
            <NavItem className="mx-3">
              <NavLink href="/literary">
                Literary
              </NavLink>
            </NavItem >
            <NavItem className="mx-3">
              <NavLink href="/opinion">
                Opinion
              </NavLink>
            </NavItem>
            <NavItem className="mx-3">
              <NavLink href="/beyond-espana">
                Beyond Espana
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                About
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/about">
                    Escolario
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/about-best">
                    The BeST
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/about-best-officers-history">
                    BeST Officers History
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/about-projects">
                    Projects
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar