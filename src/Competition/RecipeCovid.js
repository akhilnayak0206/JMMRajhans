import React, { useState } from 'react';
import Header from '../Reusable Components/Header';
import NewJumbotron from '../Reusable Components/JumbotronRecipe';
import { Button, Card } from 'antd';
import '../styles/RecipeCovid.css';

const { Meta } = Card;

const RecipeCovid = () => {
  const [mapping, setMapping] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div className='displayFlex column'>
      <Header />
      <NewJumbotron />
      <div style={{ padding: '20px', paddingTop: '0px' }}>
        <h3 className='bolderFonts'>NAV-RAJHANS Recipe Competition</h3>
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
          <p style={{ fontWeight: 'bolder' }}>End date: 4th April 2020 9 PM.</p>
        </p>
        <br />
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
              style={{ width: 240, margin: '10px' }}
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
                  alt='example'
                  src='https://res.cloudinary.com/dx0wpoeyu/image/upload/v1584885921/Covid19JMM/32.jpg'
                />
              }
            >
              <Meta
                title='Europe Street beat'
                description={`The idea is to stay at home and explore your creativity. This
          competition is to show our support towards our nation and to all who
          are constantly working to ensure that Indians stay safe. To add to the
          excitement, we'll be giving
          certificates to children for participation and the best entries
          will be shared on social media and our website. We expect to see a
          healthy participation from all the residents.`}
              />
            </Card>
          ))}
      </div>
    </div>
  );
};

export default RecipeCovid;

// eslint-disable-next-line
{
  /* 
  import { Upload, notification, Form, Input, InputNumber, Button } from 'antd';
  import firebase from '../config/fbConfig';
  
  const validateMessages = {
  required: 'This field is required!',
  types: {
    email: 'Not a validate email!',
    number: 'Not a validate number!'
  },
  number: {
    // eslint-disable-next-line
    range: 'Must be between ${min} and ${max}'
  }
};
  
const listRef = firebase.storage().ref();

  const [info, setInfo] = useState();
  const [submitLoading, setSubmitLoading] = useState(false);

  const props = {
    name: 'file',
    headers: {
      authorization: 'authorization-text'
    },
    customRequest: valueInfo => {
      console.log(valueInfo);
      valueInfo.onSuccess();
      setInfo(valueInfo);
    },
    showUploadList: false,
    directory: false
  };

  const onFinish = values => {
    setSubmitLoading(true);
    console.log(values);
    if (info) {
      listRef
        .child(`${values.user.name}-${values.user.email}-${values.user.flat}`)
        .put(info.file)
        .then(function(snapshot) {
          setSubmitLoading(false);
          notification['success']({
            message: 'Successful',
            description: 'You have successfully entered the competition.'
          });
        })
        .catch(function(error) {
          setSubmitLoading(false);
          console.log(error);
          notification['error']({
            message: 'Error',
            description: 'Please upload again.'
          });
        });
    } else {
      setSubmitLoading(false);
      notification['error']({
        message: 'Error',
        description: 'Please upload file.'
      });
    }
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  };
  
  
  <Form
{...layout}
name='nest-messages'
onFinish={onFinish}
validateMessages={validateMessages}
>
<Form.Item
  name={['user', 'name']}
  label='Name'
  rules={[{ required: true }]}
>
  <Input />
</Form.Item>
<Form.Item
  name={['user', 'email']}
  label='Email'
  rules={[{ type: 'email', required: true }]}
>
  <Input />
</Form.Item>
<Form.Item
  name={['user', 'flat']}
  label='Flat No.'
  rules={[{ type: 'number', min: 1, max: 500, required: true }]}
>
  <InputNumber />
</Form.Item>
<Form.Item name={['user', 'file']} label='File'>
  {info ? (
    <>
      <Upload {...props}>
        <Button type='ghost' style={{ backgroundColor: '#00ff99' }}>
          <p>Select File</p>
        </Button>
        <p>File selected: {JSON.stringify(info.file.name)}</p>
      </Upload>
    </>
  ) : (
    <Upload {...props}>
      <Button type='ghost'>
        <p>Select File</p>
      </Button>
    </Upload>
  )}
</Form.Item>
<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
  <Button
    size='large'
    type='primary'
    htmlType='submit'
    style={{ marginTop: '10px', backgroundColor: '#001529' }}
    loading={submitLoading}
  >
    {'  '}Submit{'  '}
  </Button>
</Form.Item>
</Form> */
}
