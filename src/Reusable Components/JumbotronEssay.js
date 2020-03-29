import React, { useState } from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { Modal, notification, Input, InputNumber } from 'antd';
import firebase from '../config/fbConfig';
import '../styles/EssayCovid.css';

const { TextArea } = Input;

const JumbotronEssay = props => {
  const [learnMore, setLearnMore] = useState(false);
  const [submitModal, setSubmitModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [flatNo, setFlatNo] = useState(0);
  const [essay, setEssay] = useState('');
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const onFinish = () => {
    if (!name.length) {
      notification['error']({
        message: 'Error in name',
        description: 'You need to enter name.'
      });
    }
    // eslint-disable-next-line no-useless-escape
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      notification['error']({
        message: 'Error in email',
        description: 'You have to enter a valid email.'
      });
    }
    if (!flatNo) {
      notification['error']({
        message: 'Error in Flat Number',
        description: 'You have to enter valid Flat Number.'
      });
    }
    if (essay.length <= 80) {
      notification['error']({
        message: 'Error in Essay',
        description: 'You have to enter at least 81 words.'
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
          essay,
          approved: false
        })
        .then(ref => {
          setLoadingSubmit(false);
          setSubmitModal(false);
          setName('');
          setEmail('');
          setEssay('');
          notification['success']({
            message: 'Congratulations',
            description:
              'You have successfully entered the competition. Admin will soon approve your essay.'
          });
        })
        .catch(err => {
          setLoadingSubmit(false);

          notification['Error']({
            message: 'Sorry',
            description: 'Error in entering the competition. Please try again.'
          });
        });
    }
  };

  return (
    <>
      <Modal
        title='Learn More'
        visible={learnMore}
        onOk={() => setLearnMore(false)}
        confirmLoading={!learnMore}
        onCancel={() => setLearnMore(false)}
      >
        <p>Learn more</p>
      </Modal>
      <Modal
        title='Submit Essay'
        visible={submitModal}
        onOk={onFinish}
        confirmLoading={loadingSubmit}
        onCancel={() => setSubmitModal(false)}
      >
        <h6>Name:</h6>
        <Input
          allowClear={true}
          placeholder='Enter Name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <br />
        <h6>Email:</h6>
        <Input
          allowClear={true}
          value={email}
          placeholder='Enter Email'
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <br />
        <h6>Flat No.:</h6>
        <InputNumber
          max={418}
          min={1}
          placeholder='Enter Flat Number'
          onChange={value => setFlatNo(value)}
        />
        <br />
        <br />
        <h6>Essay:</h6>
        <TextArea
          rows={10}
          value={essay}
          placeholder='Enter your Essay. No need to format. Just start typing.'
          onChange={e => setEssay(e.target.value)}
        />
      </Modal>
      <Jumbotron fluid className='heroImage displayFlex alignFlexEnd'>
        <Container fluid className='displayFlex column'>
          {/* <h4 className='display-3 colorWhite bolderFonts'>Fight Covid-19!</h4>
          <p className='lead colorWhite bolderFonts'>
            NAV-RAJHANS fights COVID-19 boredom with essay.
          </p> */}
          <p className='lead'>
            <Button color='primary' onClick={() => setLearnMore(true)}>
              Learn More
            </Button>
            <Button
              color='primary'
              className='marginLeft10'
              onClick={() => setSubmitModal(true)}
            >
              Submit Essay
            </Button>
          </p>
        </Container>
      </Jumbotron>
    </>
  );
};

export default JumbotronEssay;
