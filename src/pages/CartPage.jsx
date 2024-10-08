import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../core/actions/CartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const { items = [], loading = false, error = null } = useSelector((state) => state.cart || {});
  const Product = { id: 1, name: "Product" };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Cart</h1>
      <button onClick={() => handleAddToCart(Product)}>Add Product</button>
      {items.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id}>
              <span>{item.name}</span>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <button onClick={handleClearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
