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
  const user = useSelector(state => state.user.authData)
  const localUser = JSON.parse(localStorage.getItem("admin"))

  return (
    <div>
      <Navbar color="light" className="navbar-light" expand="md" >
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <UncontrolledDropdown nav inNavbar className="mx-3 my-auto li">
              <DropdownToggle nav caret className="text-dark my-auto">
                Articles
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                  <Link to="/admin/" className="text-dark li">
                    View All
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/admin/new" className="text-dark li">
                    Add new
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

          <NavItem className="mx-3 my-auto text-dark li">
            <Link to='/admin/response' className="text-dark li">
                Responses
            </Link>
          </NavItem>
            <UncontrolledDropdown nav inNavbar  className="mx-3 my-auto li">
              <DropdownToggle nav caret className="text-dark">
                {user?.result.username || 'Account'}
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem className="text-dark li">
                  <Link to="/change-password" className="text-dark li">
                    Change Password
                  </Link>
                </DropdownItem>
                <DropdownItem onClick={() => dispatch(logout())} className="text-dark li">
                  <p className="my-auto text-dark li">Logout</p>
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