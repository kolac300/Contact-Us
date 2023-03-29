import React from "react";
import ContactInf from "../components/ContactInf/ContactInf";
import ContactUsForm from "../components/ContactUsForm/ContactUsForm";
import PageHeader from "../components/PageHeader/PageHeader";
import { ContactWrapper } from "./styles/Contact.styled";

export default function Contact() {
  return (
    <>
      <PageHeader head="Contact Us" />
      <ContactWrapper>
        <ContactInf />
        <ContactUsForm />
      </ContactWrapper>
    </>
  );
}
