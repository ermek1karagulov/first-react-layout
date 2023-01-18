import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarr">
      <NavLink className="navlinkk" to="/contact">
        Login Page
      </NavLink>
      <NavLink className="navlinkk" to="/about">
        About us
      </NavLink>
      <NavLink className="navlinkk" to="/users">
        Users Page
      </NavLink>
      <NavLink className="navlinkk" to="/">
        Academic Evaluation
      </NavLink>
    </div>
  );
};

export default Navbar;
