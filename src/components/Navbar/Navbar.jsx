import React from "react";
import User from "../ContactInf/images/User.jpg";
import Cart from "../ContactInf/images/Cart.jpg";
import { NavLink } from "react-router-dom";
import { ImgElipse, NavWrapper } from "./Navbar.styled";
export default function Navbar() {
  return (
    <NavWrapper>
      <h2>Logo Here</h2>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Blog">Blog</NavLink>
      <NavLink to="/Shop">Shop</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
      <NavLink to="/Profile">
        <ImgElipse>
          <img src={User} alt="user" />
        </ImgElipse>
      </NavLink>
      <NavLink to="/Cart">
        {" "}
        <ImgElipse>
          <img src={Cart} alt="cart" />
        </ImgElipse>
      </NavLink>
    </NavWrapper>
  );
}
