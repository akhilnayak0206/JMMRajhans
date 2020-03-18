import React, { useState, useEffect } from 'react';
import { notification } from 'antd';
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';
import './styles/Receipt.css';

const ZoomInAnimation = keyframes`${zoomIn}`;
const ZoomInDiv = styled.div`
  animation: 5s ${ZoomInAnimation};
`;

const Receipt = ({ match }) => {
  const [verifiedToken, setVerifiedToken] = useState({});
  const [receiptAnimation, setReceiptAnimation] = useState(true);
  const [successful, setSuccessful] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

  useEffect(() => {
    checkToken(match.params.token);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (verifiedToken.verified) {
      setTimeout(() => {
        setReceiptAnimation(false);
        setSuccessful(true);
      }, 1300);
      // notification['success']({
      //   message: 'Thank You for Donating',
      //   description: `Check Your Receipt.`
      // });
    } else if (verifiedToken.verified === false) {
      setReceiptAnimation(false);
    }
  }, [verifiedToken]);

  useEffect(() => {
    if (successful) {
      setTimeout(() => {
        setSuccessful(false);
        setShowReceipt(true);
      }, 2500);
    }
  }, [successful]);

  const checkToken = async token => {
    if (token) {
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // prettier-ignore
        },
        body: JSON.stringify({ token })
      };
      try {
        const fetchResponse = await fetch(
          'https://us-central1-akhilprivateapis.cloudfunctions.net/app/jwtrajhans',
          config
        );
        const dataVerifyToken = await fetchResponse.json();
        setVerifiedToken(dataVerifyToken);
      } catch (e) {
        console.log(e, 'error fetching');
      }
    } else {
      notification['error']({
        message: 'Error',
        description: `Click on the Receipt link of the message provided by the JMM member.`
      });
    }
  };
  if (receiptAnimation) {
    return (
      <div className='App'>
        <header className='Success-header'>
          <lottie-player
            src='https://assets9.lottiefiles.com/packages/lf20_LfkCsp.json'
            direction='2'
            background='transparent'
            speed='1'
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
          />
        </header>
      </div>
    );
  } else if (successful) {
    return (
      <div className='App'>
        <header className='Success-header'>
          <lottie-player
            src='https://assets6.lottiefiles.com/packages/lf20_5GRn9X.json'
            background='transparent'
            speed='1'
            style={{ width: '300px', height: '300px' }}
            // loop
            // controls
            autoplay
          />
        </header>
      </div>
    );
  } else if (showReceipt) {
    return (
      <div className='App'>
        <header className='Success-header'>
          <ZoomInDiv>
            <>
              <p>Receipt Design yet to be made.</p>
              {verifiedToken.flatNo && (
                <p>Flat Number: {verifiedToken.flatNo}</p>
              )}
              {/* <p>{JSON.stringify(verifiedToken)}</p> */}
              {verifiedToken.verified && (
                <>
                  <p>Received From: {verifiedToken.received}</p>
                  <p>Collected By: {verifiedToken.collected}</p>
                  <p>Amount: {verifiedToken.amount}</p>
                </>
              )}
              {verifiedToken.timestamp && (
                <p>
                  Date: {Date(new Date(verifiedToken.timestamp.seconds * 1000))}
                </p>
              )}
            </>
          </ZoomInDiv>
        </header>
      </div>
    );
  } else {
    return (
      <div className='App'>
        <header className='Success-header'>
          <ZoomInDiv>
            <img
              src='https://res.cloudinary.com/dx0wpoeyu/image/upload/v1584280791/Dashboard%20Online/JMMLogoTransparent.png'
              className='JMM-logo'
              alt='logo'
            />
            <p>
              Sorry, But due to internal server error or verification issue the
              receipt couldn't be shown.
            </p>
          </ZoomInDiv>
        </header>
      </div>
    );
  }
};

export default Receipt;
