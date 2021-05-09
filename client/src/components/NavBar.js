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
    <Navbar className="navbar-light" expand="md">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar >
          <NavItem className="mx-3 my-auto li">
            <Link to="/" className="li">
              <span className="ntxt">
                Home
              </span>
            </Link>
          </NavItem>
          <NavItem className="mx-3 my-auto li">
            <Link to="/news" className="li">
              <span className="ntxt">News</span>
            </Link>
          </NavItem>
          <UncontrolledDropdown nav inNavbar className="mx-3 my-auto li ">
            <DropdownToggle nav >
              <span className="li ntxt">
                Features
              </span>
            </DropdownToggle>
            <DropdownMenu left>
              <DropdownItem >
                <Link to="/features" className="li ntxt">
                  <span className="ntxt li">
                    Feature Articles
                  </span>
                </Link>
              </DropdownItem>
              <DropdownItem >
                <Link to="/literary" className="li ntxt">
                  <span className="ntxt li">
                    Literary
                  </span>
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem className="mx-3 my-auto li">
            <Link to="/opinion" className="li">
              <span className="ntxt"> Opinion</span>
            </Link>
          </NavItem>
          <NavItem className="mx-3 my-auto li">
            <Link to="/beyond-espana" className="li">
              <span className="ntxt"> Beyond Espana</span>
            </Link>
          </NavItem>
          <UncontrolledDropdown nav inNavbar className="mx-3 my-auto li ">
            <DropdownToggle nav >
              <span className="ntxt li">
                About
                </span>
            </DropdownToggle>
            <DropdownMenu left>
              <DropdownItem >
                <Link to="/about" className="li">
                  <span className="ntxt li">
                    Escolario
                  </span>
                </Link>
              </DropdownItem>
              <DropdownItem >
                <Link to="/about-best" className=" li">
                  <span className="ntxt li">
                    Becarios De Santo Tomas
                  </span>
                </Link>
              </DropdownItem>
              <DropdownItem >
                <Link to="/about-best-officers-history" className=" li">
                  <span className="ntxt li">
                    BeST Officers History
                  </span>
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