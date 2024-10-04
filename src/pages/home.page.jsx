import { Link } from 'react-router-dom';
//import ProductList from '../components/productsList'; // Import ProductList

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Camera Shop</h1>
      <Link to="/products">
        <button>Start by searching products</button>
      </Link>
      {/*<ProductList />*/}
    </div>
  );
};

export default Home;
