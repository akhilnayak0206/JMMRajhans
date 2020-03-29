import React, { useState, useEffect } from 'react';
import Header from '../Reusable Components/Header';
import JumbotronEssay from '../Reusable Components/JumbotronEssay';
import { Button, Card, notification, Modal } from 'antd'; // eslint-disable-line no-unused-vars
import firebase from '../config/fbConfig';
import '../styles/EssayCovid.css';

const { Meta } = Card;

const EssayCovid = () => {
  const [essayCards, setEssayCards] = useState([]);
  const [modalData, setModalData] = useState();
  const [modalCard, setModalCard] = useState(false);

  useEffect(() => {
    firebase
      .firestore()
      .collection('essay-covid19')
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }
        let essayDocs = [];
        snapshot.forEach(doc => {
          //   console.log('Document data:', doc.data());
          essayDocs.push(doc.data());
        });
        setEssayCards([...essayDocs]);
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
  }, []);

  return (
    <div className='displayFlex column'>
      <Header />
      <JumbotronEssay />
      {modalData && (
        <Modal
          title={modalData.name}
          visible={modalCard}
          onOk={() => {
            setModalCard(false);
            // setModalData({});
          }}
          onCancel={() => {
            setModalCard(false);
          }}
          footer={[
            <Button
              key='ok'
              type='primary'
              onClick={() => {
                setModalCard(false);
              }}
            >
              Ok
            </Button>
          ]}
        >
          <p>{modalData.essay}</p>
        </Modal>
      )}
      <div style={{ padding: '20px', paddingTop: '0px' }}>
        <h3 className='bolderFonts'>NAV-RAJHANS Essay Writing Competition</h3>
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
        {essayCards &&
          essayCards.map(
            (value, key) =>
              value.approved && (
                <Card
                  key={key}
                  title={`${value.name}`}
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
                      onClick={() => {
                        setModalCard(true);
                        setModalData(value);
                      }}
                    >
                      View Essay
                    </Button>
                  ]}
                  onClick={() => {
                    setModalCard(true);
                    setModalData(value);
                  }}
                >
                  <Meta
                    // title='Europe Street beat'
                    description={`${value.essay.slice(0, 81)}...`}
                  />
                </Card>
              )
          )}
      </div>
    </div>
  );
};

export default EssayCovid;
