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

  console.log(user)

  return (
    <div>
      <Navbar color="dark" dark expand="sm" >
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <UncontrolledDropdown nav inNavbar className="mx-3 my-auto">
              <DropdownToggle nav caret className="text-white">
                Articles
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                  <Link to="/admin/" className="text-dark">
                    View All
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/admin/new" className="text-dark">
                    Add new
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

          <NavItem className="mx-3 my-auto">
            <Link to='/admin/response' className="text-white">
                Responses
            </Link>
          </NavItem>
            <UncontrolledDropdown nav inNavbar className="mx-3 my-auto ">
              <DropdownToggle nav caret className="text-white">
                {user?.result.username || 'Account'}
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                  <Link to="/change-password" className="text-dark">
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