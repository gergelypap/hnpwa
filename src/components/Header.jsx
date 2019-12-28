import React from "react";
import NavLink from "./NavLink";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Hacker News</h1>
      <nav className="header-nav">
        <NavLink to="/">new</NavLink>
        <NavLink to="/past">past</NavLink>
      </nav>
    </header>
  );
};

export default Header;
