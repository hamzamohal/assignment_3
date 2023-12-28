import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1>
      <Link to="/">Math Magicians</Link>
    </h1>
    <nav className="header-nav">
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quotes">Quotes</Link>
    </nav>
  </header>
);

export default Header;
