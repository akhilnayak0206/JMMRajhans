import React, { useState, useEffect } from 'react';
import Header from '../Reusable Components/Header';
import JumbotronEssay from '../Reusable Components/JumbotronEssay';
import { Button } from 'reactstrap';
import { Card, Modal } from 'antd'; // eslint-disable-line no-unused-vars
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
      .orderBy('timestamp')
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }
        let essayDocs = [];
        snapshot.forEach(doc => {
          // console.log(doc.data());
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
          }}
          onCancel={() => {
            setModalCard(false);
          }}
          footer={[
            <Button
              key='cancel'
              type='primary'
              onClick={() => {
                setModalCard(false);
              }}
            >
              Cancel
            </Button>
          ]}
        >
          <p>{modalData.essay}</p>
          <p>
            Date:{' '}
            {`${new Date(
              modalData.timestamp.seconds * 1000
            ).getDate()}/${new Date(
              modalData.timestamp.seconds * 1000
            ).getMonth() + 1}/${new Date(
              modalData.timestamp.seconds * 1000
            ).getFullYear()} ${new Date(
              modalData.timestamp.seconds * 1000
            ).getHours()}:${new Date(
              modalData.timestamp.seconds * 1000
            ).getMinutes()}`}
          </p>
        </Modal>
      )}
      <div className='paddingHorizontal20'>
        <h2 className='bolderFonts'>
          NAV RAJHANS SHORT STORY WRITING COMPETITION
        </h2>
        <h6>(Open to all society members of all age groups)</h6>
        <h4>
          <b>Topic:</b>
        </h4>
        <h6>
          <b>"I couldn't believe my eyes..."</b>
        </h6>
        <h6>
          <b>
            "मुझे अपनी आँखों पर विश्वास ही नहीं हो रहा था....."
            <br />
            " माझा माझ्या डोळ्यांवर विश्वास बसत नव्हता...."
            <br />
            "હું મારી આંખો પર વિશ્વાસ કરી શક્યો નહીં..."
            <br />
          </b>
        </h6>
      </div>

      <h3 className='paddingHorizontal20 margin0'>Entries:</h3>
      <div className='essayCards'>
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
                      VIEW MORE
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
