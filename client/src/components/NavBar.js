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
              <Link to="/" className="text-light">
              <span>
                Home
                </span>
                </Link>
            </NavItem>
            <NavItem className="mx-3 my-auto">
              <Link to="/news" className="text-light">
                <span>News</span>
              </Link>
            </NavItem>
            <NavItem className="mx-3 my-auto">
              <Link to="/features" className="text-light">
              <span>Features</span>
              </Link>
            </NavItem>
            <NavItem className="mx-3 my-auto">
              <Link to="/literary" className="text-light">
              <span>Literary</span>
              </Link>
            </NavItem >
            <NavItem className="mx-3 my-auto">
              <Link to="/opinion" className="text-light">
              <span> Opinion</span>
              </Link>
            </NavItem>
            <NavItem className="mx-3 my-auto">
              <Link to="/beyond-espana" className="text-light">
              <span> Beyond Espana</span>
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="mx-3 my-auto">
              <DropdownToggle nav caret className="text-light">
              <span>About</span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/about" className="text-dark">
                    Escolario
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/about-best" className="text-dark">
                    The BeST
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/about-best-officers-history" className="text-dark">
                    BeST Officers History
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/about-projects" className="text-dark">
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