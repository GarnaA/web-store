import { Link } from 'react-router-dom';

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
