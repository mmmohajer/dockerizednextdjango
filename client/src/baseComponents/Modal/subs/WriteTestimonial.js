import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div, Form } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';
import Close from '@/baseComponents/Close';
import TextBox from '@/baseComponents/TextBox';
import TextArea from '@/baseComponents/TextArea';
import ImagePicker from '@/baseComponents/ImagePicker';
import Card from '@/baseComponents/Card';

import useApiCalls from '@/hooks/useApiCalls';
import { setModalType } from '@/reducers/general/modalType';
import { TESTIMONIAL_API_ROUTE } from '@/constants/apiRoutes';
import { clearModal } from '@/utils/modal';

import {
  nameValidators,
  emailValidators,
  jobTitleValidators,
  messageValidators
} from './validators';
import styles from '../Modal.module.scss';
import { setModalProps } from '@/reducers/general/modalProps';

const WriteTestimonial = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');

  const [jobTitle, setJobTitle] = useState('');
  const [jobTitleErrorMessage, setJobTitleErrorMessage] = useState('');

  const [email, setEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const [profilePhoto, setProfilePhoto] = useState('');
  const [profilePhotoErrorMessage, setProfilePhotoErrorMessage] = useState('');

  const [message, setMessage] = useState('');
  const [messageErrorMessage, setMessageErrorMessage] = useState('');

  const [validatedFields, setValidatedFields] = useState([]);

  const toBeValidatedFields = [
    {
      input_name: 'name',
      validators: nameValidators,
      errorMessageHandler: setNameErrorMessage
    },
    {
      input_name: 'job_title',
      validators: jobTitleValidators,
      errorMessageHandler: setJobTitleErrorMessage
    },
    {
      input_name: 'message',
      validators: messageValidators,
      errorMessageHandler: setMessageErrorMessage
    }
  ];

  useEffect(() => {
    if (email) {
      setValidatedFields([
        ...toBeValidatedFields,
        {
          input_name: 'email',
          validators: emailValidators,
          errorMessageHandler: setEmailErrorMessage
        }
      ]);
    } else {
      setValidatedFields([...toBeValidatedFields]);
    }
  }, [email]);

  const [sendTestimonialReq, setSendTestimonialReq] = useState(false);
  const [bodyData, setBodyData] = useState(new FormData());
  const { data, error } = useApiCalls({
    sendReq: sendTestimonialReq,
    setSendReq: setSendTestimonialReq,
    method: 'POST',
    url: TESTIMONIAL_API_ROUTE,
    bodyData,
    useDefaultHeaders: false
  });
  useEffect(() => {
    if (data) {
      if (data?.id) {
        clearModal(dispatch);
        setTimeout(() => {
          dispatch(setModalProps({ name: name }));
          dispatch(setModalType('testimonial_submitted'));
        }, 100);
      }
    }
  }, [data]);

  const submitHandler = () => {
    const localBodyData = new FormData();
    localBodyData.append('name', name);
    localBodyData.append('email', email);
    localBodyData.append('photo', profilePhoto);
    localBodyData.append('job_title', jobTitle);
    localBodyData.append('message', message);
    setBodyData(localBodyData);
    setSendTestimonialReq(true);
  };

  return (
    <>
      <Div className="mb2">I'm happy to hearing from you! 🥳🤩</Div>
      <Form
        className={cx('w-per-100 br-rad-px-10')}
        onSubmit={submitHandler}
        toBeValidatedFields={validatedFields}
        id="writeTestimonialForm">
        <TextBox
          isRequired
          type="text"
          labelText="Name"
          placeholder="Ex: John Doe"
          val={name}
          setVal={setName}
          errorMessage={nameErrorMessage}
          errorHandler={setNameErrorMessage}
          name="name"
          id="nameWriteTestimonialForm"
        />
        <TextBox
          isRequired
          type="text"
          labelText="Job Title"
          placeholder="Ex: Software Developer"
          val={jobTitle}
          setVal={setJobTitle}
          errorMessage={jobTitleErrorMessage}
          errorHandler={setJobTitleErrorMessage}
          name="job_title"
          id="jobTitleWriteTestimonialForm"
        />
        <TextBox
          type="text"
          labelText="email"
          placeholder="Ex: johndoe@gmail.com"
          val={email}
          setVal={setEmail}
          errorMessage={emailErrorMessage}
          errorHandler={setEmailErrorMessage}
          name="email"
          id="emailWriteTestimonialForm"
        />
        <ImagePicker
          labelText="Your Photo"
          file={profilePhoto}
          setFile={setProfilePhoto}
          errorMessage={profilePhotoErrorMessage}
          errorHandler={setProfilePhotoErrorMessage}
          id="profilePhotoFieldHomePage"
          hasCropper={true}
          hasResizer={true}
          maxWidth={200}
        />
        <TextArea
          isRequired
          labelText="Message"
          placeholder="Please share with us an abstract story about how you know me and how you assess my skills and my personality traits."
          val={message}
          setVal={setMessage}
          errorMessage={messageErrorMessage}
          errorHandler={setMessageErrorMessage}
          id="messageWriteTestimonialForm"
          name="message"
        />
        <Div type="flex" hAlign="start" vAlign="center" className="w-per-100 mb2">
          {message && name && jobTitle ? (
            <Card
              type="testimonial"
              quote={message}
              photo={profilePhoto ? URL.createObjectURL(profilePhoto) : ''}
              name={name}
              career={jobTitle}
              email={email}
              isDraggable={false}
              isPreview={true}
            />
          ) : (
            ''
          )}
        </Div>
        <Button
          className={cx('w-px-200 height-px-40 mb2')}
          type="submit"
          id="testimonialFormSubmit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default WriteTestimonial;
