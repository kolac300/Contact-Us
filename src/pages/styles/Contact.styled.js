import { Form, Field } from "formik";
import styled from "styled-components";
import checked from "../images/checked.svg";

export const ContactWrapper = styled.div`
  max-width: 1196px;
  height: 667px;
  padding: 10px;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 1fr 1fr;
  margin: auto;

  input[type="text"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid black;

    @media screen and (max-width: 1025px) {
      margin: 0;
      padding: 0;
    }
  }

  .radio_part {
    max-width: 520px;
    font-size: 12px;
    .radio {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      font-size: 14px;
      color: #333;
      margin-right: 10px;
    }

    .radio input[type="radio"] {
      display: none;
    }

    .radio-custom {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #bbb;
      margin-right: 8px;
    }

    .radio input[type="radio"]:checked + .radio-custom {
      border-color: white;
      background-color: white;
      background-image: url(${checked});
      background-repeat: no-repeat;
      background-position: center;
    }

    .radio-label {
      font-weight: 500;
    }
    label {
      margin: 5px;
      @media screen and (max-width: 1025px) {
        margin: 2px;
      }
    }
    @media screen and (max-width: 1200px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 720px) {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;
export const StyledForm = styled(Form)`
  .from_header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 39px;

    @media screen and (max-width: 1025px) {
      grid-template-columns: 1fr;
    }
  }

  .form_footer {
    margin-top: 45px;
  }

  button[type="submit"] {
    padding: 15px 45px;
    width: 214px;
    height: 54px;
    background: #000000;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    margin: auto;
    margin-right: 0;
    display: block;
  }
  button:hover {
    cursor: pointer;
    background-color: silver;
    transition: 0.3s linear;
  }
  .message {
    margin: 45px auto;
    @media screen and (max-width: 1025px) {
      margin: 7px auto;
    }
  }
  @media screen and (max-width: 1025px) {
    margin-left: 20px;
  }
`;
