import './App.css';
import Home from './pages/home.page.jsx';
import Products from './pages/product.page.jsx';
import Navbar from './components/navbar.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
