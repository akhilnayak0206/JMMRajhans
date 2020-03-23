import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color='light' light expand='md' fixed='top'>
      <NavbarBrand href='/'>
        <img
          src='https://res.cloudinary.com/dx0wpoeyu/image/upload/v1584280791/Dashboard%20Online/JMMLogoTransparent.png'
          alt='JMM Rajhans'
          style={{
            height: '30px'
          }}
        />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='ml-auto align-items-flex-end' navbar>
          <NavItem>
            <NavLink href='/home'>Home</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Ongoing Competition
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink href='/fight-covid19'>Fight Covid-19</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Past Competition
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
              <NavLink href='/fight-covid19'>Fight Covid-19</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
          <NavItem>
            <NavLink href='/receipt/zc'>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/contactus'>Contact Us</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
