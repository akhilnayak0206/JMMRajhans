import React, { useState, useEffect } from 'react';
import { notification, Card, Button, Popover } from 'antd';
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';
import './styles/Receipt.css';

const month = [];
month[0] = 'January';
month[1] = 'February';
month[2] = 'March';
month[3] = 'April';
month[4] = 'May';
month[5] = 'June';
month[6] = 'July';
month[7] = 'August';
month[8] = 'September';
month[9] = 'October';
month[10] = 'November';
month[11] = 'December';

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
            src='https://assets3.lottiefiles.com/packages/lf20_LfkCsp.json'
            mode='bounce'
            background='transparent'
            speed='1'
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
            style={{ width: '600px', height: '600px' }}
            loop
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
            <Card
              hoverable
              style={{ width: 240 }}
              bodyStyle={{
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                padding: 0
              }}
            >
              <lottie-player
                src='https://assets1.lottiefiles.com/packages/lf20_41nvak.json'
                background='transparent'
                speed='3'
                className='displayFlex'
                loop
                autoplay
              />

              <div className='displayFlex'>
                <lottie-player
                  src='https://assets1.lottiefiles.com/packages/lf20_I9GBQj.json'
                  speed='1'
                  style={{ position: 'relative', zIndex: 5, width: '100%' }}
                  loop
                  autoplay
                />

                <lottie-player
                  src='https://assets10.lottiefiles.com/packages/lf20_7W0ppe.json'
                  background='transparent'
                  speed='1'
                  style={{ position: 'absolute', zIndex: 6 }}
                  loop
                  autoplay
                />
              </div>
              <div className='displayFlex marginTop10'>
                <lottie-player
                  src='https://assets5.lottiefiles.com/packages/lf20_TgAHwk.json'
                  speed='1'
                  style={{ position: 'relative', zIndex: 5, width: '100%' }}
                  loop
                  autoplay
                />
                <div className='dataReceipt'>
                  {verifiedToken.timestamp && (
                    <>
                      <div className='justifyRowBetween'>
                        <p className='titles'>Date</p>

                        <p className='titles'>Time</p>
                      </div>
                      <div className='justifyRowBetween'>
                        <h3
                          style={{
                            fontWeight: 'bolder',
                            justifySelf: 'flex-start'
                          }}
                        >
                          {new Date(
                            verifiedToken.timestamp.seconds * 1000
                          ).getDate()}{' '}
                          {
                            month[
                              new Date(
                                verifiedToken.timestamp.seconds * 1000
                              ).getMonth()
                            ]
                          }
                          ,{' '}
                          {new Date(
                            verifiedToken.timestamp.seconds * 1000
                          ).getFullYear()}
                        </h3>
                        <h3 className='bolderFonts'>
                          {new Date(
                            verifiedToken.timestamp.seconds * 1000
                          ).getHours()}
                          :
                          {new Date(
                            verifiedToken.timestamp.seconds * 1000
                          ).getMinutes()}
                        </h3>
                      </div>
                    </>
                  )}
                  {verifiedToken.verified && (
                    <div className='alignColumnStart'>
                      <p className='titles'>From</p>
                      <h3
                        style={{
                          fontWeight: 'bolder'
                        }}
                      >
                        {verifiedToken.received}
                      </h3>
                      <p className='titles'>Amount</p>

                      <div className='justifyRowBetween width100'>
                        <h2 className='bolderFonts'>₹{verifiedToken.amount}</h2>
                        <Popover
                          content={
                            <p>
                              The verification is done using Hash-based Message
                              Authentication(HMAC) and SHA-256. In that way no
                              one can duplicate receipt made by JMM.
                            </p>
                          }
                          title='Verified'
                        >
                          <Button className='verifiedButton' shape='round'>
                            verified
                          </Button>
                        </Popover>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
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
