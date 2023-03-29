import styled from "styled-components";

export const NavWrapper = styled.section`
  max-width: 1440px;
  margin: auto;
  justify-items: center;
  margin-top: 41px;
  flex-direction: row;
  align-items: center;
  h2 {
    margin-left: 1rem;
  }
  .menu {
    display: grid;
    grid-template-columns: 5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    .logo {
      font-family: "Inter";
      font-style: normal;
      font-weight: 800;
      font-size: 24px;
      line-height: 29px;
    }
    li {
      padding: 4px;
    }
  }

  .menu-button-container {
    display: none;
    height: 30px;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
  }

  #menu-toggle {
    display: none;
  }

  .menu-button,
  .menu-button::before,
  .menu-button::after {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 3px;
    width: 18px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 3px;
    background-color: #1f1f1f;
  }

  .menu-button::before {
    content: "";
    margin-top: -6px;
  }

  .menu-button::after {
    content: "";
    margin-top: 5px;
    margin-left: 8px;
    width: 10px;
    text-align: right;
  }

  #menu-toggle:checked + .menu-button-container {
    background-color: silver;
  }
  a {
    text-align: center;
    text-decoration: none;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #1f1f1f;
  }
  @media screen and (max-width: 600px) {
    h2 {
      display: none;
    }
    justify-content: space-around;
  }

  @media screen and (max-width: 490px) {
    ul li a {
      color: white;
      text-decoration: none;
      display: inline-block;
      width: 100%;
      height: 100%;
      text-align: left;
    }
    .menu-button-container {
      display: flex;
      position: absolute;
      top: 4%;
      left: 90%;
      z-index: 2;
    }
    ul li.logo {
      justify-content: left;
    }
    ul.menu {
      position: absolute;
      top: 0;
      left: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;
      border: 1px solid silver;
      li {
        grid-column: 1/3;
        div {
          margin: auto;
        }
      }
      #user {
        grid-column: 1/2;
      }
      #cart {
        grid-row: 7/8;
        grid-column: 2/2;
      }
    }

    #menu-toggle ~ .menu li {
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
      div {
        display: none;
      }
    }

    #menu-toggle:checked ~ .menu li {
      border: 2px solid black;
      height: 2.9em;
      padding-left: 1rem;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
      div {
        display: block;
        margin-top: -30px;
      }
    }

    .menu > li {
      margin: 0;
      padding: 0.5em 0;
      width: 100%;
      color: white;
      background-color: #000000;
    }

    .menu > li:not(:last-child) {
      border-bottom: 1px solid #444;
    }
  }
`;

export const ImgElipse = styled.div`
  margin: 0px;
  border: 1px solid black;
  border-radius: 50%;
  height: 31px;
  width: 31px;
  img {
    height: 16px;
    width: 16px;
    margin: 0;
    margin-top: 7px;
  }
  @media screen and (max-width: 490px) {
    border: 1px solid white;
    img {
      filter: contrast(0%);
      margin-left: 7px;
    }
  }
`;
