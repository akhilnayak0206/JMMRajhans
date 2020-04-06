import React, { useState } from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { Modal, notification, Input, InputNumber } from 'antd'; // eslint-disable-line no-unused-vars
import firebase from '../config/fbConfig';
import '../styles/EssayCovid.css';
import EssayModalCovid from './EssayModalCovid';

const { TextArea } = Input; // eslint-disable-line no-unused-vars

const JumbotronEssay = (props) => {
  const [learnMore, setLearnMore] = useState(false);
  const [submitModal, setSubmitModal] = useState(false); // eslint-disable-line no-unused-vars
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [flatNo, setFlatNo] = useState(0); // eslint-disable-line no-unused-vars
  const [age, setAge] = useState('NA');
  const [essay, setEssay] = useState('');
  const [loadingSubmit, setLoadingSubmit] = useState(false); // eslint-disable-line no-unused-vars

  // eslint-disable-next-line no-unused-vars
  const onFinish = () => {
    if (!name.length) {
      notification['error']({
        message: 'Error in name',
        description: 'You need to enter name.',
      });
    }
    // eslint-disable-next-line no-useless-escape
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      notification['error']({
        message: 'Error in email',
        description: 'You have to enter a valid email.',
      });
    }
    if (!flatNo) {
      notification['error']({
        message: 'Error in Flat Number',
        description: 'You have to enter valid Flat Number.',
      });
    }
    if (essay.length <= 80) {
      notification['error']({
        message: 'Error in Essay',
        description: 'You have to enter at least 81 words.',
      });
    }
    if (
      name.length &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && // eslint-disable-line no-useless-escape
      flatNo &&
      essay.length > 80
    ) {
      setLoadingSubmit(true);
      firebase
        .firestore()
        .collection('essay-covid19')
        .add({
          name,
          email,
          flatNo,
          age,
          essay,
          approved: false,
          timestamp: new Date(Date.now()),
        })
        .then((ref) => {
          setLoadingSubmit(false);
          setSubmitModal(false);
          setName('');
          setEmail('');
          setAge('NA');
          setEssay('');
          notification['success']({
            message: 'Congratulations',
            description:
              'You have successfully entered the competition. Admin will soon approve your essay.',
          });
        })
        .catch((err) => {
          setLoadingSubmit(false);

          notification['Error']({
            message: 'Sorry',
            description: 'Error in entering the competition. Please try again.',
          });
        });
    }
  };

  return (
    <>
      <Modal
        title='Details'
        visible={learnMore}
        onOk={() => setLearnMore(false)}
        confirmLoading={!learnMore}
        onCancel={() => setLearnMore(false)}
        footer={[
          <Button
            key='ok'
            onClick={() => {
              setLearnMore(false);
            }}
          >
            OK
          </Button>,
        ]}
      >
        <EssayModalCovid />
      </Modal>
      {/* <Modal
        title='Submit Essay'
        visible={submitModal}
        onOk={onFinish}
        confirmLoading={loadingSubmit}
        onCancel={() => setSubmitModal(false)}
        footer={[
          <Button key='cancel' onClick={() => setSubmitModal(false)}>
            Cancel
          </Button>,
          <Button color='success' key='ok' onClick={onFinish}>
            OK
          </Button>,
        ]}
      >
        <h6>Name:</h6>
        <Input
          allowClear={true}
          placeholder='Enter Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <h6>Email:</h6>
        <Input
          allowClear={true}
          value={email}
          placeholder='Enter Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <h6>Flat No.:</h6>
        <InputNumber
          max={418}
          min={1}
          placeholder='Enter Flat Number'
          onChange={(value) => setFlatNo(value)}
        />
        <br />
        <br />
        <h6>Age:</h6>
        <InputNumber
          max={130}
          min={1}
          placeholder='NA'
          onChange={(value) => setAge(value)}
        />
        <br />
        <br />
        <h6>Essay:</h6>
        <TextArea
          rows={10}
          value={essay}
          placeholder='Enter your Essay. No need to format. Just start typing.'
          onChange={(e) => setEssay(e.target.value)}
        />
      </Modal> */}
      <Jumbotron fluid className='heroImage displayFlex alignFlexEnd'>
        <Container fluid className='displayFlex column'>
          {/* <h4 className='display-3 colorWhite bolderFonts'>Fight Covid-19!</h4>
          <p className='lead colorWhite bolderFonts'>
            NAV-RAJHANS fights COVID-19 boredom with essay.
          </p> */}
          <p className='lead'>
            <Button
              style={{ backgroundColor: 'black' }}
              onClick={() => setLearnMore(true)}
            >
              Details
            </Button>
            {/* <Button
              style={{ backgroundColor: 'black' }}
              className='marginLeft10'
              onClick={() => setSubmitModal(true)}
            >
              Submit Essay
            </Button> */}
          </p>
        </Container>
      </Jumbotron>
    </>
  );
};

export default JumbotronEssay;
