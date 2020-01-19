import React from 'react';
import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import './NavLink.scss';

const NavLink = ({ to, children }) => {
  return (
    <ReactRouterNavLink
      className="nav-link"
      activeClassName="nav-link--active"
      to={to}
    >
      {children}
    </ReactRouterNavLink>
  );
};

export default NavLink;
