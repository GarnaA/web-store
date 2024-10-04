import './App.css';
import Home from './pages/home.page.jsx';
import Products from './pages/product.page.jsx';
import Cart from './pages/cart.page.jsx';
import Navbar from './components/navbar.jsx';
import { Provider } from 'react-redux';
import store from './store.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
