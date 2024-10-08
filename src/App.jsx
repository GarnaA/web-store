import './App.css';
import Home from './pages/HomePage.jsx';
import Products from './pages/ProductPage.jsx';
import Cart from './pages/CartPage.jsx';
import Header from './components/Header/index.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app-container'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="/catalog/:id" element={<ProductPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
