import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { logout } from '../actions/userActions';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const localUser = JSON.parse(localStorage.getItem("admin"))


  return (
    <div>
      <Navbar color="dark" dark expand="sm">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem className="mx-3 my-auto">
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem className="mx-3 my-auto">
              <Link to="/news">
                News
              </Link>
            </NavItem>
            <NavItem className="mx-3 my-auto">
              <Link to="/features">
                Features
              </Link>
            </NavItem>
            <NavItem className="mx-3 my-auto">
              <Link to="/literary">
                Literary
              </Link>
            </NavItem >
            <NavItem className="mx-3 my-auto">
              <Link to="/opinion">
                Opinion
              </Link>
            </NavItem>
            <NavItem className="mx-3 my-auto">
              <Link to="/beyond-espana">
                Beyond Espana
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                About
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/about">
                    Escolario
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/about-best">
                    The BeST
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/about-best-officers-history">
                    BeST Officers History
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/about-projects">
                    Projects
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