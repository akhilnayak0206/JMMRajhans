import React from 'react';
import Header from './Reusable Components/Header';
import './styles/ContactUs.css';

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className='FullScreen justifyAlignCenter column'>
        <lottie-player
          src='https://assets7.lottiefiles.com/packages/lf20_HxqVQ4.json'
          background='transparent'
          speed='1'
          style={{ width: '300px', height: '150px' }}
          loop
          autoplay
        />
        <iframe
          title='Contact Us'
          src='https://docs.google.com/forms/d/e/1FAIpQLSfR9xmutOGu46-InPdeiT-k2QqB-IhN55MKQEkgqKCNb7S5nQ/viewform?embedded=true'
          width='100%'
          height='100%'
          frameBorder='0'
          marginHeight='0'
          marginWidth='0'
        >
          Loading…
        </iframe>
      </div>
    </>
  );
};

export default ContactUs;
