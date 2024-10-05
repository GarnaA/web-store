import product1 from '../assets/products_img/product1.jpeg';
import product2 from '../assets/products_img/product2.jpeg';

const products = [
  {
    id: 1,
    name: 'Product 1',
    image: product1,
  },
  {
    id: 2,
    name: 'Product 2',
    image: product2,
  }
];

const ProductList = () => {
  console.log(products);
  return (
    <div className="product-list">
      <h1>Our Products</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
            <h2>{product.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
