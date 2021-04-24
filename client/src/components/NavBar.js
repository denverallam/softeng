import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem
} from 'reactstrap';

import { Link } from 'react-router-dom';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  return (
    <Navbar color="light" className="navbar-light" expand="md">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar >
          <NavItem className="mx-3 my-auto li">
            <Link to="/" className="li">
              <span>
                Home
                </span>
            </Link>
          </NavItem>
          <NavItem className="mx-3 my-auto li">
            <Link to="/news" className="li">
              <span>News</span>
            </Link>
          </NavItem>
          <UncontrolledDropdown nav inNavbar className="mx-3  li ">
            <DropdownToggle nav >
              <span className="li">
                Features
                </span>
            </DropdownToggle>
            <DropdownMenu left>
              <DropdownItem >
                <Link to="/features" className="li">
                  Features
                  </Link>
              </DropdownItem>
              <DropdownItem >
                <Link to="/literary" className="li">
                  Literary
                  </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem className="mx-3 my-auto li">
            <Link to="/opinion" className="li">
              <span> Opinion</span>
            </Link>
          </NavItem>
          <NavItem className="mx-3 my-auto li">
            <Link to="/beyond-espana" className="li">
              <span> Beyond Espana</span>
            </Link>
          </NavItem>
          <UncontrolledDropdown nav inNavbar className="mx-3 my-auto li ">
            <DropdownToggle nav >
              <span className="li">
                About
                </span>
            </DropdownToggle>
            <DropdownMenu left>
              <DropdownItem >
                <Link to="/about" className="li">
                  Escolario
                  </Link>
              </DropdownItem>
              <DropdownItem >
                <Link to="/about-best" className=" li">
                  Becarios De Santo Tomas
                  </Link>
              </DropdownItem>
              <DropdownItem >
                <Link to="/about-best-officers-history" className=" li">
                  BeST Officers History
                  </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBar