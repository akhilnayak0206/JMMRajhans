import React, { useState } from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { Modal } from 'antd';
import '../styles/MaskForAll.css';

const JumbotronRecipe = props => {
  const [learnMore, setLearnMore] = useState(false);
  const [submitMask, setSubmitMask] = useState(false);

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
        title='Learn More'
        visible={submitMask}
        onOk={() => setSubmitMask(false)}
        confirmLoading={!submitMask}
        onCancel={() => setSubmitMask(false)}
      >
        <p>Submit Recipe</p>
      </Modal>
      <Jumbotron fluid className='heroImage displayFlex alignFlexEnd'>
        <Container fluid className='displayFlex alignFlexEnd'>
          {/* <h4 className='display-3 colorBlack bolderFonts'>Fight Covid-19!</h4>
          <p className='lead colorBlack bolderFonts'>
            NAV-RAJHANS fights COVID-19 with masks.
          </p> */}
          <p className='lead'>
            <Button color='primary' onClick={() => setLearnMore(true)}>
              Learn More
            </Button>
            <Button
              color='primary'
              className='marginLeft10'
              onClick={() => setSubmitMask(true)}
            >
              Submit Mask
            </Button>
          </p>
        </Container>
      </Jumbotron>
    </>
  );
};

export default JumbotronRecipe;
