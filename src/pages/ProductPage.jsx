import { useParams } from 'react-router-dom';

const products = [
  { id: 34562, name: 'Product 1', description: 'Description of Product 1' },
  { id: 98763, name: 'Product 2', description: 'Description of Product 2' },
  { id: 45621, name: 'Product 3', description: 'Description of Product 3' },
  // Add more products here
];

const ProductDetailPage = () => {
  const { id } = useParams(); // Get the product ID from the route
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductDetailPage;
