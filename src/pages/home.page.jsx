import { Link } from 'react-router-dom';
import '../styles/home.page.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Camera Shop</h1>
      <Link to="/products">
        <button>Start by searching products</button>
      </Link>
    </div>
  );
};

export default Home;
