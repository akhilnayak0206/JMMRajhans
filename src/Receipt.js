import React, { useState, useEffect } from 'react';
import { notification } from 'antd';

const Receipt = ({ match }) => {
  const [verifiedToken, setVerifiedToken] = useState({});

  useEffect(() => {
    checkToken(match.params.token);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (verifiedToken.verified) {
      notification['success']({
        message: 'Thank You for Donating',
        description: `Check Your Receipt.`
      });
    }
  }, [verifiedToken]);

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
  return (
    <>
      {verifiedToken.flatNo && <p>Flat Number: {verifiedToken.flatNo}</p>}
      {/* <p>{JSON.stringify(verifiedToken)}</p> */}
      {verifiedToken.verified && (
        <>
          <p>Received From: {verifiedToken.received}</p>
          <p>Collected By: {verifiedToken.collected}</p>
          <p>Amount: {verifiedToken.amount}</p>
        </>
      )}
      {verifiedToken.timestamp && (
        <p>Date: {Date(new Date(verifiedToken.timestamp.seconds * 1000))}</p>
      )}
    </>
  );
};

export default Receipt;
