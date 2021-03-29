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
import { logout } from '../../actions/userActions';

const Dashboard = () => {

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
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Manage Articles
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                  <Link to="/admin/">
                    View all articles
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/admin/new">
                    Add new article
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

          <NavItem className="my-auto mx-2">
            <Link to='/admin/response'>
                Manage Responses
            </Link>
          </NavItem>

            <UncontrolledDropdown nav inNavbar className="mr-0">
              <DropdownToggle nav caret>
                Account
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                  <Link to="/change-password">
                    Change Password
                    </Link>
                </DropdownItem>
                <DropdownItem onClick={() => dispatch(logout())}>
                  Logout
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>


    </div>
  );
}

export default Dashboard