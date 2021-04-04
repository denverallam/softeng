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
              <DropdownToggle nav caret className=" my-auto">
                <span className="li">
                  Articles
                </span>
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                  <Link to="/admin/" className="li">
                    View All
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/admin/new" className="li">
                    Add new
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem className="mx-3 my-auto li">
              <Link to='/admin/response' className="li">
                Responses
            </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="mx-3 my-auto li">
              <DropdownToggle nav caret className="">
                <span className="li">
                  {localUser && localUser?.result.username || 'Account'}
                </span>
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem className="li">
                  <Link to="/change-password" className="li">
                    Change Password
                  </Link>
                </DropdownItem>
                <DropdownItem onClick={() => dispatch(logout())} className=" li">
                  <p className="my-auto li">Logout</p>
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