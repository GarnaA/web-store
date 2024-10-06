import { useParams } from 'react-router-dom';
import image1 from '../assets/products_img/product1.jpeg';
import image2 from '../assets/products_img/product2.jpeg';

const products = [
  { 
    id: 34562, 
    name: 'Product 1', 
    description: 'Full description of Product 1', 
    price: '$100.99', 
    image: image1
  },
  { 
    id: 98763, 
    name: 'Product 2', 
    description: 'Full description of Product 2', 
    price: '$199.99', 
    image: image2
  }
];

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '200px' }} />
      <p>{product.description}</p>
      <p><strong>Price:</strong> {product.price}</p>
    </div>
  );
};

export default ProductPage;
