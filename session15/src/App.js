import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import LayoutClient from './pages/LayoutClient';
import LayoutAdmin from './admin/pages/LayoutAdmin';
import ProductComponent from './pages/ProductComponent'
import HomeComponent from './pages/HomeComponent';
import Dashboard from './admin/pages/Dashboard';
import ProductManager from './admin/pages/ProductManager';
import OrderManager from './admin/pages/OrderManager';

function App() {
  return (
    <>
      <Link to={'/'}>Home</Link> | 
      <Link to={'/admin'}>Admin</Link>
      <Routes>
        <Route path='/' element={<LayoutClient />}>
          <Route index element={<HomeComponent />} />
          <Route path='product' element={<ProductComponent />} />
        </Route>
        <Route path='/admin' element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path='product' element={<ProductManager />} />
          <Route path='order' element={<OrderManager />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
