import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.scss';
import image1 from '../assets/products_img/product1.jpeg';
import image2 from '../assets/products_img/product2.jpeg';

// Update products array to include image URLs
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
  // Add more products here with images
];

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on search
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Product Catalog</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Display product cards */}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} /> {/* Render the product image */}
            <h2>{product.name}</h2>
            <p>{product.description}</p>

            {/* Link to Product Detail Page */}
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
