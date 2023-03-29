import { Field, Formik } from "formik";
import React from "react";
import { ContactUsFormWrapper, StyledForm } from "./ContactUsForm.styled";

export default function ContactUsForm() {
  const initialValues = {
    fname: "",
    lname: "",
    mail: "",
    phone: "",
    SelectSubject: "",
    message: "",
  };

  const onSubmit = (value, { resetForm }) => {
    console.log("first", value);
    resetForm();
  };
  return (
    <ContactUsFormWrapper>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <StyledForm>
          <div className="contacts-header">
            {" "}
            <span className="contacts-header__el">
              <label htmlFor="fname">First Name</label>
              <Field type="text" name="fname" />
            </span>
            <span className="contacts-header__el">
              <label htmlFor="lname">Last Name</label>
              <Field type="text" name="lname" id="lname" />
            </span>
            <span className="contacts-header__el">
              <label htmlFor="mail">Email</label>
              <Field type="text" name="mail" id="mail" />
            </span>
            <span className="contacts-header__el">
              {" "}
              <label htmlFor="phone">Phone Number</label>
              <Field type="text" name="phone" id="phone" placeholder="" />
            </span>
          </div>
          <div className="contacts-middle">
            <p>Select Subject?</p>
            <div className="contacts-middle__radioPart">
              <label className="contacts-middle__radioPart__radio__el">
                <Field type="radio" name="SelectSubject" value="1" />
                <span className="contacts-middle__radio__custom"></span>
                <span className="radio-label">General Inquiry</span>
              </label>
              <label className="contacts-middle__radioPart__radio__el">
                <Field type="radio" name="SelectSubject" value="2" />
                <span className="contacts-middle__radio__custom"></span>
                <span className="radio-label">General Inquiry</span>
              </label>
              <label className="contacts-middle__radioPart__radio__el">
                <Field type="radio" name="SelectSubject" value="3" />
                <span className="contacts-middle__radio__custom"></span>
                <span className="radio-label">General Inquiry</span>
              </label>
              <label className="contacts-middle__radioPart__radio__el">
                <Field type="radio" name="SelectSubject" value="4" />
                <span className="contacts-middle__radio__custom"></span>
                <span className="radio-label">General Inquiry</span>
              </label>
            </div>
          </div>
          <div className="contacts-footer">
            {" "}
            <label htmlFor="message">Message</label>
            <Field
              type="text"
              name="message"
              placeholder="Write your message.."
            />
          </div>
          <button type="submit">Send Message</button>
        </StyledForm>
      </Formik>
    </ContactUsFormWrapper>
  );
}
