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
    <div>
      <Navbar color="light" className="navbar-light" expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar >
            <NavItem className="mx-3 my-auto li">
              <Link to="/" className="text-dark">
              <span>
                Home
                </span>
                </Link>
            </NavItem>
            <NavItem className="mx-3 my-auto li">
              <Link to="/news" className="text-dark">
                <span>News</span>
              </Link>
            </NavItem>
            <NavItem className="mx-3 my-auto li">
              <Link to="/features" className="text-dark">
              <span>Features</span>
              </Link>
            </NavItem>
            <NavItem className="mx-3 my-auto li">
              <Link to="/literary" className="text-dark">
              <span>Literary</span>
              </Link>
            </NavItem >
            <NavItem className="mx-3 my-auto li">
              <Link to="/opinion" className="text-dark">
              <span> Opinion</span>
              </Link>
            </NavItem>
            <NavItem className="mx-3 my-auto li">
              <Link to="/beyond-espana" className="text-dark">
              <span> Beyond Espana</span>
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="mx-3 my-auto li ">
              <DropdownToggle nav caret className="text-dark li">
              <span>About</span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="dropdown-content1">
                  <Link to="/about" className="text-dark li">
                    Escolario
                  </Link>
                </DropdownItem>
                <DropdownItem className="dropdown-content1">
                  <Link to="/about-best" className="text-dark li">
                    The BeST
                  </Link>
                </DropdownItem>
                <DropdownItem className="dropdown-content1">
                  <Link to="/best-board" className="text-dark li">
                    BeST Board of Officers
                  </Link>
                </DropdownItem>
                <DropdownItem className="dropdown-content1">
                  <Link to="/about-best-officers-history" className="text-dark li">
                    BeST Officers History
                  </Link>
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