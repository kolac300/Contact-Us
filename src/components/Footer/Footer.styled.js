import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin: auto;
  max-width: 1440px;
  background-color: black;
  color: white;
  box-sizing: border-box;
  padding-top: 80px;
  padding-bottom: 66px;
  margin-top: 50px;
  h1 {
    text-align: center;
    margin: 0 auto 44px auto;
  }
  hr {
    max-width: 1280px;
    margin: auto;
    margin-bottom: 19px;
  }
  svg {
    padding-right: 25px;
  }
  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 24px;
  }
  ul,
  a {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: white;
  }
  .main_content {
    max-width: 1280px;
    margin: 0 auto 0 auto;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: 1fr 0.3fr 0.3fr 0.3fr 1fr;
    box-sizing: border-box;
    @media screen and (max-width: 1050px) {
      grid-template-columns: 1fr 1fr;
      .form_wrapper {
        grid-column: 3/1;
      }
      gap: 0 20%;
    }
  }

  .form_content {
    margin: auto;
    max-width: 320px;
    background-color: #131313;
    border-radius: 10px;
    padding: 14px;
    margin-top: 23px;
    h3 {
      margin-bottom: 29px;
    }

    input {
      height: 43px;
      background-color: #1e1e1e;
      color: white;
      border: none;
      border-radius: 5px 0 0 5px;
      padding-left: 10px;
      box-sizing: border-box;
    }
    p {
      font-family: "Manrope";
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 18px;
      color: #616161;
    }
    button {
      border: none;
      text-align: center;
      background-color: black;
      padding: 12px 22px;
      color: white;
      border-radius: 0 5px 5px 0;
    }
  }

  @media screen and (max-width: 490px) {
    padding-top: 19px;
    hr {
      width: 89%;
      margin: auto;
    }
    h3 {
      margin: 30px auto 20px auto;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 26px;
    }
    a,
    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      margin: 17px auto;
    }
    svg,
    li {
      display: block;
      margin-bottom: 12px;
    }
    .form_content {
      padding: 14px;
      background-color: #0d0d0d;
      button {
        padding: 12px 23px;
      }
      input {
        width: 150px;
      }
    }

    h1 {
      font-weight: 800;
      font-size: 36px;
      margin-bottom: 19px;
    }
  }
`;
