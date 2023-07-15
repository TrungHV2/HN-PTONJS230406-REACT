import './App.css'
import {Routes, Route} from 'react-router-dom'

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from './pages/Home';
import Shop from './pages/Shop';
import ShopDetails from './pages/ShopDetails';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/shop/details/:id/:name' element={<ShopDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
