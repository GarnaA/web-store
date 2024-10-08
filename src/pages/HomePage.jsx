import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/ProductList/productList.scss';
import image1 from '../assets/products_img/product1.jpeg';
import image2 from '../assets/products_img/product2.jpeg';

const products = [
  { 
    id: 34562, 
    name: 'Product 1', 
    description: 'Description of Product 1',
    image: image1
  },
  { 
    id: 98763, 
    name: 'Product 2', 
    description: 'Description of Product 2',
    image: image2
  },
];

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>

            <Link to={`/catalog/${product.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
