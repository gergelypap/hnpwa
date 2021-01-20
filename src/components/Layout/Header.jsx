import { Link } from 'react-router-dom';

import NavLink from './NavLink';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">
        <Link to="/">HackerNews</Link>
      </h1>
      <nav className="header-nav">
        <NavLink to="/latest">latest</NavLink>
        <NavLink to="/past">past</NavLink>
      </nav>
    </header>
  );
};

export default Header;
