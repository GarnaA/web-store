import './App.css';
import Home from './pages/HomePage.jsx';
import Products from './pages/ProductPage.jsx';
import Cart from './pages/CartPage.jsx';
import Header from './components/Header.jsx';
import { Provider } from 'react-redux';
import store from './store.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
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
