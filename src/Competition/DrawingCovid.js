import React from 'react';
import Header from '../Reusable Components/Header';
import NewCarousel from '../Reusable Components/NewCarousel';
import allImages from '../Images';

import '../styles/RecipeCovid.css';

const DrawingCovid = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <NewCarousel allImages={allImages} />
      <div style={{ padding: '20px' }}>
        <h3 className='bolderFonts'>NAV-RAJHANS Drawing COMPETITION</h3>
        <p>
          During this time where everyone is advised to stay at home, we are
          excited to announce a drawing/painting competition for children and
          adults. <br />
          <br />
          <b>Topic: How I fight COVID-19 virus.</b>
          <br />
          <br />
          The idea is to stay at home and explore your creativity. This
          competition is to show our support towards our nation and to all who
          are constantly working to ensure that Indians stay safe. To add to the
          excitement, we'll be giving{' '}
          <b>certificates to children for participation</b> and the best entries
          will be shared on social media and our website. We expect to see a
          healthy participation from all the residents. <br />
          <br />
          <b>End date: 24th March 2020 9 PM.</b>
        </p>
        <br />

        <h2>Thank You for your responses.</h2>
        <p>Note: Responses for this competition has been closed.</p>
      </div>
    </div>
  );
};

export default DrawingCovid;
