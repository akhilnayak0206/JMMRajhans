import React, { useState, useEffect } from 'react';
import { notification, Card } from 'antd';
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
            style={{ width: '600px', height: '600px' }}
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
            <Card
              hoverable
              style={{ width: 240 }}
              bodyStyle={{
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                padding: 0
              }}
              // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              {/* <lottie-player
                src='https://assets1.lottiefiles.com/packages/lf20_41nvak.json'
                background='transparent'
                speed='5'
                style={{ display: 'flex' }}
                loop
                autoplay
              /> */}
              {/* <lottie-player
                src='https://assets10.lottiefiles.com/packages/lf20_7W0ppe.json'
                background='transparent'
                speed='1'
                // style={{ width: '300px', height: '300px' }}
                loop
                autoplay
              /> */}

              <div style={{ display: 'flex' }}>
                <lottie-player
                  src='https://assets1.lottiefiles.com/packages/lf20_I9GBQj.json'
                  speed='1'
                  style={{ position: 'absolute', zIndex: 5, width: '100%' }}
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
                {verifiedToken.flatNo ? (
                  <p
                    style={{
                      top: 0,
                      left: 0,
                      zIndex: 7,
                      position: 'relative'
                    }}
                  >
                    ID: {verifiedToken.flatNo}
                  </p>
                ) : (
                  <p
                    style={{
                      top: 0,
                      left: 0,
                      zIndex: 7,
                      position: 'relative'
                    }}
                  >
                    Well-Wisher
                  </p>
                )}
                {verifiedToken.timestamp && (
                  <p
                    style={{
                      top: 0,
                      right: 0,
                      zIndex: 7,
                      position: 'absolute'
                    }}
                  >
                    Date:
                    {new Date(verifiedToken.timestamp.seconds * 1000).getDate()}
                    /
                    {new Date(
                      verifiedToken.timestamp.seconds * 1000
                    ).getMonth() + 1}
                    /
                    {new Date(
                      verifiedToken.timestamp.seconds * 1000
                    ).getFullYear()}
                  </p>
                )}
              </div>
              <div style={{ display: 'flex' }}>
                <lottie-player
                  src='https://assets5.lottiefiles.com/packages/lf20_TgAHwk.json'
                  speed='1'
                  style={{ position: 'relative', zIndex: 5, width: '100%' }}
                  loop
                  autoplay
                />
                <div
                  style={{
                    position: 'absolute',
                    zIndex: 6,
                    bottom: 1,
                    left: 0,
                    right: 0,
                    margin: 'auto'
                  }}
                >
                  {/* <p>{JSON.stringify(verifiedToken)}</p> */}
                  {verifiedToken.verified && (
                    <p>
                      <h3 style={{ fontWeight: 'bolder', padding: 0 }}>
                        ₹ {verifiedToken.amount}
                      </h3>
                      <br />
                      was contributed by
                      <br />
                      <h3 style={{ fontWeight: 'bolder', padding: 0 }}>
                        {verifiedToken.received}
                      </h3>
                      <br />
                      and was collected by
                      <br></br>
                      <h3 style={{ fontWeight: 'bolder', padding: 0 }}>
                        {verifiedToken.collected}
                      </h3>
                    </p>
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
