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
import Header from './Reusable Components/Header';
// import styled, { keyframes } from 'styled-components';
// import { zoomIn } from 'react-animations';
import './styles/ContactUs.css';
import { Button } from 'antd';

// const ZoomInAnimation = keyframes`${zoomIn}`;
// const ZoomInDiv = styled.div`
//   animation: 5s ${ZoomInAnimation};
// `;

const Home = () => {
  return (
    <>
      <Header />
      <div
        className='FullScreen justifyAlignCenter'
        style={{ flexDirection: 'column' }}
      >
        <h3>Contact Us:</h3>
        {/* <ZoomInDiv>
            <img
              src='https://res.cloudinary.com/dx0wpoeyu/image/upload/v1584280791/Dashboard%20Online/JMMLogoTransparent.png'
              className='JMM-logo'
              alt='logo'
            />
          </ZoomInDiv> */}
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSfR9xmutOGu46-InPdeiT-k2QqB-IhN55MKQEkgqKCNb7S5nQ/viewform?embedded=true'
          width='100%'
          height='100%'
          //   style={{ position: 'absolute', top: 0, left: 0 }}
          frameborder='0'
          marginHeight='0'
          marginWidth='0'
        >
          Loading…
        </iframe>
        {/* <NavLink
          href='https://forms.gle/jz7ipEtyuKvReeFD9'
          target='#'
          style={{ paddingLeft: '0px' }}
        >
          <Button type='primary'>Click Me!</Button>
        </NavLink> */}
      </div>
    </>
  );
};

export default Home;

// Under construction

{
  /* <div className='App'>
      <header className='JMM-header'>
        <ZoomInDiv>
          <img
            src='https://res.cloudinary.com/dx0wpoeyu/image/upload/v1584280791/Dashboard%20Online/JMMLogoTransparent.png'
            className='JMM-logo'
            alt='logo'
          />
        </ZoomInDiv>
        <p>Jai Mitra Mandal's Home Page will be loaded soon.</p>
      </header>
    </div> */
}
