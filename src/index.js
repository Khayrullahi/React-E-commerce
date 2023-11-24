import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from './pages/Pages';
import Data from './components/flashDeals/Data';
import Sdata from './components/shop/Sdata';
import Cart from "./common/cart/cart";
import "./App.css";
import Header from "./common/header/Header";
import ReactDOM from 'react-dom';
import Footer from "./common/footer/footer"

const App = () => {
  const [shopItems]=useState(Sdata.shopItems);
  const [cartItem, setCartItem] = useState([]);
  const [productItems] = useState(Data.productItems);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  };

  return (
    <Router>
      <Header cartItem={cartItem} />
      <Routes>
        <Route
          path="/"
          element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />}
        />
        <Route
          path="/cart"
          element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />}
        />
      </Routes>
      <Footer/>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
