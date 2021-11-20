import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../image/logo.png"

const Header = () => {
  return (
    <>
      <div className="ui inverted menu">
        <NavLink to="/home"  className="item">
          <img style={{padding:'0px'}} src={logo} />
        </NavLink>
        <NavLink to="/about"  className="item">About us</NavLink>
        <NavLink  to="/blog" className="item">Blogs</NavLink>
      </div>
    </>
  );
};

export default Header;
