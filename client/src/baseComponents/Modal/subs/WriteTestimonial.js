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

import { clearModal } from '@/utils/modal';

import styles from '../Modal.module.scss';

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

  return (
    <>
      <Div type="flex" direction="vertical" hAlign="start" className="">
        <Close onClick={() => clearModal(dispatch)} />
        <Div className="mb2">We're happy to hearing from you! 🥳🤩</Div>
        <Form
          className={cx('w-per-90 p2 br-rad-px-10')}
          // onSubmit={submitHandler}
          // toBeValidatedFields={toBeValidatedFields}
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
            name="jobTitle"
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
            hasCropper={false}
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
          />
          <Div type="flex" hAlign="start" vAlign="center" className="w-per-100">
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
          <Button className={cx('w-px-200 height-px-40')} type="submit" id="testimonialFormSubmit">
            Submit
          </Button>
        </Form>
      </Div>
    </>
  );
};

export default WriteTestimonial;
