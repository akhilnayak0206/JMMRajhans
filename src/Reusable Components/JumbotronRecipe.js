import React, { useState } from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { Modal } from 'antd';
import '../styles/JumbotronRecipe.css';

const JumbotronRecipe = props => {
  const [learnMore, setLearnMore] = useState(false);

  return (
    <>
      <Modal
        title='Learn More'
        visible={learnMore}
        onOk={() => setLearnMore(false)}
        confirmLoading={!learnMore}
        onCancel={() => setLearnMore(false)}
      >
        <p>hello</p>
      </Modal>
      <Jumbotron fluid className='heroImage'>
        <Container fluid>
          <h1 className='display-3 colorWhite'>Fight Cravings!</h1>
          <p className='lead colorWhite'>
            NAV-RAJHANS fights quarantine cravings.
          </p>
          <p className='lead'>
            <Button color='primary' onClick={() => setLearnMore(true)}>
              Learn More
            </Button>
            <Button color='primary' className='marginLeft10'>
              Submit Recipe
            </Button>
          </p>
        </Container>
      </Jumbotron>
    </>
  );
};

export default JumbotronRecipe;
