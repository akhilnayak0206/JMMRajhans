import React, { useState } from 'react';
import Header from '../Reusable Components/Header';
import JumbotronMask from '../Reusable Components/JumbotronMask';
import { Button, Card } from 'antd';
import '../styles/MaskForAll.css';

const { Meta } = Card;

const MaskForAll = () => {
  const [mapping, setMapping] = useState([1, 2, 3, 4, 5, 6]); // eslint-disable-line no-unused-vars

  return (
    <div className='displayFlex column'>
      <Header />
      <JumbotronMask />
      <div style={{ padding: '20px', paddingTop: '0px' }}>
        <h3 className='bolderFonts'>NAV-RAJHANS Mask Making Competition</h3>
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
          <b>End date: 4th April 2020 9 PM.</b>
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px'
        }}
      >
        {mapping &&
          mapping.map((a, key) => (
            <Card
              key={key}
              title={'Title'}
              hoverable
              style={{
                width: 300,
                margin: '10px',
                borderRadius: 5,
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
              }}
              actions={[
                <Button
                  type='primary'
                  shape='round'
                  style={{ width: '80%', margin: '0 15px' }}
                >
                  First
                </Button>,
                <Button
                  type='primary'
                  shape='round'
                  style={{ width: '80%', margin: '0 15px' }}
                >
                  Second
                </Button>
              ]}
              cover={
                <img
                  alt='Food'
                  src='https://res.cloudinary.com/dx0wpoeyu/image/upload/v1584885921/Covid19JMM/32.jpg'
                />
              }
            >
              <Meta
                // title='Europe Street beat'
                description={`Description should not be bigger than this. Make description smaller or bigger?`}
              />
            </Card>
          ))}
      </div>
    </div>
  );
};

export default MaskForAll;
