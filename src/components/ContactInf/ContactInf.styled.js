import styled from "styled-components";

export const ContactInfWrapper = styled.div`
  max-height: 647px;
  width: 82%;
  background-color: black;
  color: white;
  border-radius: 10px;
  margin: auto;

  h2 {
    margin: 30px auto auto 40px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
  }
  p {
    margin-left: 40px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #c9c9c9;
  }
  ol {
    display: flex;
    justify-content: left;
    align-items: flex-end;
    li {
      margin-bottom: 10px;
    }
  }

  li {
    padding: 0;
    margin: 50px 0 50px 0;
    display: flex;
    a {
      text-decoration: none;
      color: white;
    }
    svg {
      margin-right: 25px;
    }
    svg:hover {
      cursor: pointer;
    }
  }
  li {
    margin-right: 24px;
  }
  svg {
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 490px) {
    h2 {
      text-align: center;
      margin: 30px auto 0 auto;
      font-weight: 600;
      font-size: 28px;
    }
    p {
      text-align: center;
      margin: auto;
      margin-top: 6px;
    }
    ul,
    li,
    a,
    ol {
      display: block;
      text-align: center;
      margin: auto;
      padding: 0;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      svg {
        padding: 0;
        margin: 13px auto;
      }
    }
    ol {
      display: grid;
      max-width: 138px;
      grid-template-columns: 1fr 1fr 1fr;
      margin-top: 50px;
    }
    width: 100%;
  }
`;
