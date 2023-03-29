import React from "react";
import { FooterWrapper } from "./Footer.styled";
import { ReactComponent as PhoneSVG } from "../ContactInf/images/phone.svg";
import { ReactComponent as EmailSVG } from "../ContactInf/images/email.svg";
import { ReactComponent as LocationSVG } from "../ContactInf/images/location.svg";
import { Field, Form, Formik } from "formik";
export default function Footer() {
  const initialValues = {
    mail: "",
  };

  const onSubmit = (value, { resetForm }) => {
    console.log("first", value);
    resetForm();
  };
  return (
    <FooterWrapper>
      <h1 className="Footer_logo">Logo Here</h1>
      <hr />
      <div className="Footer_content">
        <div>
          <h3>Reach us</h3>
          <ul className="Footer_content__contactsList"> 
            <li>
              <PhoneSVG /> <a href="tel:+1012 3456 789">+1012 3456 789</a>
            </li>
            <li>
              <EmailSVG /> <a href="mailto:demo@gmail.com">demo@gmail.com</a>
            </li>
            <li>
              <LocationSVG />
              <a href="https://www.google.com/maps/place/132+Dartmouth+St,+Boston,+MA+02116,+%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96+%D0%A8%D1%82%D0%B0%D1%82%D0%B8+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8/@42.3467604,-71.0761182,17z/data=!3m1!4b1!4m6!3m5!1s0x89e37a0d715622b3:0x5b2af19970952585!8m2!3d42.3467604!4d-71.0761182!16s%2Fg%2F11c1zptc6r">
                132 Dartmouth Street Boston,
                <br />
                Massachusetts 02156 United States
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <p>About</p>
          <p>Contact</p>
          <p>Blogs</p>
        </div>
        <div>
          <h3>Legal</h3>
          <p>Privacy Policy</p>
          <p>Terms & Services</p>
          <p>Terms of Use</p>
          <p>Refund Policy</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <p>Techlabz Keybox</p>
          <p>Downloads</p>
          <p>Forum</p>
        </div>
        <div className="Footer_content__form__wrapper">
          <div className="Footer_content__form__content">
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              <Form>
                <h3>Join Our Newsletter</h3>
                <Field
                  type="text"
                  name="mail"
                  placeholder="Your email address"
                />

                <button type="submit">Send Message</button>
              </Form>
            </Formik>
            <p>
              * Will send you weekly updates for your <br />
              better tool management.
            </p>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}
