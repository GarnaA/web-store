import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assets/logo/logo.svg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src={logo} alt="Site Logo" className="logo" />
            </Link>
            <div className="nav-links">
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
        </nav>
    );
};

export default Navbar;
