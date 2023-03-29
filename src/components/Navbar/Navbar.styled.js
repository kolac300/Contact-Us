import styled from "styled-components";

export const NavWrapper = styled.section`
  max-width: 1440px;
  margin: auto;
  justify-items: center;
  flex-direction: row;
  align-items: center;

  .navigation-list {
    display: grid;
    grid-template-columns: 5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    .navigation-logo {
      font-family: "Inter";
      font-style: normal;
      font-weight: 800;
      font-size: 24px;
      line-height: 29px;
    }
    .navigation-list__element {
      padding: 4px;
    }
  }
  // NavLink before burger
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

  .navigation-button__container {
    display: none;
    height: 30px;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 7px;

    .navigation-button,
    .navigation-button::before,
    .navigation-button::after {
      display: block;
      background-color: #fff;
      position: absolute;
      height: 3px;
      width: 18px;
      transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
      border-radius: 3px;
      background-color: #1f1f1f;
    }

    .navigation-button::before {
      content: "";
      margin-top: -6px;
    }

    .navigation-button::after {
      content: "";
      margin-top: 5px;
      margin-left: 8px;
      width: 10px;
      text-align: right;
    }
  }
  #navigation-toggle {
    display: none;
  }
  #navigation-toggle:checked + .navigation-button__container {
    background-color: white;
    color: white;
  }
  @media screen and (max-width: 490px) {
    // NavLink in burger
    a {
      color: white;
      display: inline-block;
      max-width: 490px;
      height: 100%;
      text-align: left;
    }
    .navigation-button__container {
      display: flex;
      position: absolute;
      top: 11%;
      left: 86%;
      z-index: 2;
    }
    .navigation-logo {
      justify-content: left;
    }
    .navigation-list {
      position: absolute;
      top: 0;
      left: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;
      border: 1px solid silver;
      li {
        grid-column: 1/3;
      }

      #navigation-svg__user,
      #navigation-svg__cart {
        position: relative;
      }

      #navigation-svg__user {
        grid-column: 1/2;
        div {
          position: absolute;
          left: 72%;
        }
      }
      #navigation-svg__cart {
        grid-row: 7/8;
        grid-column: 2/2;
        div {
          position: absolute;
          left: 15%;
        }
      }
    }

    #navigation-logo__content {
      color: #000000;
      padding-left: 2rem;
    }

    #navigation-toggle ~ .navigation-list .navigation-list__element {
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
      div {
        display: none;
      }
    }

    #navigation-toggle:checked ~ .navigation-list .navigation-list__element {
      border: 1px solid black;
      height: 2.9em;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
      padding-left: 2rem;
      box-sizing: border-box;
      #navigation-logo__content {
        color: white;
        padding-left: 0rem;
      }
      div {
        display: block;
      }
    }

    .navigation-list > .navigation-list__element {
      margin: 0;
      padding: 0.5em 0;
      width: 100%;
      color: white;
      background-color: #000000;
    }

    .navigation-list > .navigation-list__element:not(:last-child) {
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
