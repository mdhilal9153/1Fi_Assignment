import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MobileContainer from './components/MobileContainer';
import ShopPage from './pages/ShopPage';
import ProductDetail from './pages/ProductDetail';

export default function App() {
  return (
    <BrowserRouter>
      <MobileContainer>
        <Routes>
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/marketplace/:productId" element={<ProductDetail />} />
          {/* Default and fallback routes redirect to Shop */}
          <Route path="*" element={<Navigate to="/shop" replace />} />
        </Routes>
      </MobileContainer>
    </BrowserRouter>
  );
}
