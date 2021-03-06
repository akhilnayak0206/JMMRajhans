import React from 'react';
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';
import Header from './Reusable Components/Header';
import './styles/Home.css';

const ZoomInAnimation = keyframes`${zoomIn}`;
const ZoomInDiv = styled.div`
  animation: 5s ${ZoomInAnimation};
`;

const Home = () => {
  return (
    <>
      <Header />
      <div className='App'>
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
      </div>
    </>
  );
};

export default Home;
