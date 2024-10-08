import { Link } from 'react-router-dom';
import '../Header/header.scss';
import logo from '../../assets/logo/logo.svg';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Site Logo" className="logo" />
      </Link>
        <div className="buttons">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/products">
        <button>Catalog</button>
      </Link>
      <Link to="/cart">
          <button>Cart</button>
      </Link>
    </div>
  </div>
  );
};

export default Header;
