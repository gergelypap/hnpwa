import React from "react";
import { NavLink as Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./NavLink.scss";

const NavLink = ({ to, children }) => {
  return (
    <Link className="nav-link" activeClassName="nav-link--active" to={to}>
      {children}
    </Link>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default NavLink;
