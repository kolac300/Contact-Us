import { Field, Formik, Form } from "formik";
import React from "react";
import { StyledForm } from "../../pages/styles/Contact.styled";
import { ContactUsFormWrapper } from "./ContactUsForm.styled";

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
          <div className="from_header">
            {" "}
            <span>
              <label htmlFor="fname">First Name</label>
              <Field type="text" name="fname" />
            </span>
            <span>
              <label htmlFor="lname">Last Name</label>
              <Field type="text" name="lname" id="lname" />
            </span>
            <span>
              <label htmlFor="mail">Email</label>
              <Field type="text" name="mail" id="mail" />
            </span>
            <span>
              {" "}
              <label htmlFor="phone">Phone Number</label>
              <Field
                type="text"
                name="phone"
                id="phone"
                placeholder="+380931010907"
              />
            </span>
          </div>

          <div className="form_footer">
            <p>Select Subject?</p>
            <span className="radio_part">
              <label className="radio">
                <Field type="radio" name="SelectSubject" value="1" />
                <span className="radio-custom"></span>
                <span className="radio-label">General Inquiry</span>
              </label>
              <label className="radio">
                <Field type="radio" name="SelectSubject" value="2" />
                <span className="radio-custom"></span>
                <span className="radio-label">General Inquiry</span>
              </label>
              <label className="radio">
                <Field type="radio" name="SelectSubject" value="3" />
                <span className="radio-custom"></span>
                <span className="radio-label">General Inquiry</span>
              </label>
              <label className="radio">
                <Field type="radio" name="SelectSubject" value="4" />
                <span className="radio-custom"></span>
                <span className="radio-label">General Inquiry</span>
              </label>
            </span>
          </div>

          <div className="message">
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
