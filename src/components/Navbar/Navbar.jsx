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
        id="menu-toggle"
        type="checkbox"
        name="menu-toggle"
      />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li className="logo">
          {" "}
          <h4>Logo Here</h4>
        </li>
        <li>
          {" "}
          <NavLink onClick={onCloseBurgerMenu} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={onCloseBurgerMenu} to="/About">
            About
          </NavLink>
        </li>
        <li>
          <NavLink onClick={onCloseBurgerMenu} to="/Blog">
            Blog
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink onClick={onCloseBurgerMenu} to="/Shop">
            Shop
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink onClick={onCloseBurgerMenu} to="/Contact">
            Contact
          </NavLink>
        </li>
        <li id="user">
          <NavLink onClick={onCloseBurgerMenu} to="/Profile">
            <ImgElipse>
              <img src={User} alt="user" />
            </ImgElipse>
          </NavLink>
        </li>
        <li id="cart">
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
