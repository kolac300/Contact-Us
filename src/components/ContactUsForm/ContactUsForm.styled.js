import { Form } from "formik";
import styled from "styled-components";
import checked from "../ContactInf/images/checked.svg";
export const ContactUsFormWrapper = styled.div`
  max-width: 1196px;
  padding: 0 15px;
  margin: 1rem auto auto auto;
  label {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
  }
  input[type="text"] {
    width: 100%;
    padding: 12px 10px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid silver;
    outline: none;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #8d8d8d;
  }

  input[type="text"]:hover {
    border-bottom: 2px solid black;
    color: black;
  }

  .contacts-middle__radioPart {
    max-width: 520px;
    font-size: 12px;
    .contacts-middle__radioPart__radio__el {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      font-size: 14px;
      color: #333;
      margin-right: 10px;
    }

    .contacts-middle__radioPart__radio__el input[type="radio"] {
      display: none;
    }

    .contacts-middle__radio__custom {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #bbb;
      margin-right: 8px;
    }

    .contacts-middle__radioPart__radio__el
      input[type="radio"]:checked
      + .contacts-middle__radio__custom {
      border-color: white;
      background-color: white;
      background-image: url(${checked});
      background-repeat: no-repeat;
      background-position: center;
    }

    .radio-label {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
    }
  }
`;
export const StyledForm = styled(Form)`
  .contacts-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 7%;
    grid-row-gap: 15px;
  }

  .contacts-middle {
    margin-top: 45px;
    margin-bottom: 30px;
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
    margin-top: 40px;
    display: block;
    border: none;
  }
  button:hover {
    cursor: pointer;
    background-color: silver;
    transition: 0.3s linear;
  }

  @media screen and (max-width: 490px) {
    button[type="submit"] {
      width: 100%;
      margin: auto;
    }

    .contacts-middle__radioPart {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 7%;
      grid-row-gap: 15px;
    }
    .contacts-header {
      grid-template-columns: 1fr;
      margin-top: 30px;
      gap: 2%;
    }
  }
`;
