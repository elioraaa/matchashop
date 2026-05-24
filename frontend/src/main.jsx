import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import MenuPage from './pages/MenuPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import CartPage from './pages/CartPage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import { OrdersProvider } from './Context/Order';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <OrdersProvider>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </OrdersProvider>
  </BrowserRouter>
)
