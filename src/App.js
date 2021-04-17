import "./App.scss";
import "./common/CommonStyle.scss";
import React from "react";
import Header from "./components/ContainerComponents/Header";
import Footer from "./components/ContainerComponents/Footer";
import Product from "./components/ContainerComponents/Product";
import CartContextProvider from "./services/cart/CartContext";
import Cart from "./components/ContainerComponents/Cart";

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <Header />
        <hr className="full-width" />
        <Cart />
        <hr className="full-width" />
        <Product />
        <hr className="full-width" />
        <Footer />
      </div>
    </CartContextProvider>
  );
}

export default App;
