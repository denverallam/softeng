import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
  const localUser = JSON.parse(localStorage.getItem("admin"))

  return (
    <div>
      <Navbar className="navbar-light" expand="md" >
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <UncontrolledDropdown nav inNavbar className="mx-3 my-auto li">
              <DropdownToggle nav caret className=" my-auto">
                <span className="ntxt li">
                  Articles
                </span>
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                  <Link to="/admin/" className="ntxt li">
                  <span className="ntxt">
                    View All
                    </span>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/admin/new" className="li">
                    <span className="ntxt">
                    Add new
                    </span>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem className="mx-3 my-auto li">
              <Link to='/admin/response' className="ntxt li">
                Responses
            </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="mx-3 my-auto li">
              <DropdownToggle nav caret>
                <span className="ntxt li">
                  {localUser && localUser?.result.username || 'Account'}
                </span>
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem className="li">
                  <Link to="/change-password" className="li ntxt">
                    Change Password
                  </Link>
                </DropdownItem>
                <DropdownItem onClick={() => dispatch(logout())} className=" li ntxt">
                  <p className="my-auto li ntxt">Logout</p>
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