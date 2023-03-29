import React, { useRef } from "react";
import User from "../ContactInf/images/user.png";
import Cart from "../ContactInf/images/cart.png";
import { NavLink } from "react-router-dom";
import { ImgElipse, NavWrapper } from "./Navbar.styled";
export default function Navbar() {
  const checkboxRef = useRef(null);
  const onCloseBurgerMenu = () => {
    checkboxRef.current.checked = false;
  };
  return (
    <NavWrapper>
      <input
        ref={checkboxRef}
        id="navigation-toggle"
        type="checkbox"
        name="navigation-toggle"
      />
      <label
        className="navigation-button__container"
        htmlFor="navigation-toggle"
      >
        <div className="navigation-button"></div>
      </label>
      <ul className="navigation-list">
        <li className="navigation-logo navigation-list__element">
          {" "}
          <h4 id='navigation-logo__content'>Logo Here</h4>
        </li>
        <li className="navigation-list__element">
          {" "}
          <NavLink onClick={onCloseBurgerMenu} to="/">
            Home
          </NavLink>
        </li>
        <li className="navigation-list__element">
          <NavLink onClick={onCloseBurgerMenu} to="/About">
            About
          </NavLink>
        </li>
        <li className="navigation-list__element">
          <NavLink onClick={onCloseBurgerMenu} to="/Blog">
            Blog
          </NavLink>
        </li>
        <li className="navigation-list__element">
          {" "}
          <NavLink onClick={onCloseBurgerMenu} to="/Shop">
            Shop
          </NavLink>
        </li>
        <li className="navigation-list__element">
          {" "}
          <NavLink onClick={onCloseBurgerMenu} to="/Contact">
            Contact
          </NavLink>
        </li>
        <li className="navigation-list__element" id="navigation-svg__user">
          <NavLink onClick={onCloseBurgerMenu} to="/Profile">
            <ImgElipse>
              <img src={User} alt="user" />
            </ImgElipse>
          </NavLink>
        </li>
        <li className="navigation-list__element" id="navigation-svg__cart">
          {" "}
          <NavLink onClick={() => onCloseBurgerMenu()} to="/Cart">
            {" "}
            <ImgElipse>
              <img src={Cart} alt="cart" />
            </ImgElipse>
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
}
