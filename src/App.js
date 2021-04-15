import "./App.scss";
import "./common/CommonStyle.scss";
import React from "react";
import Header from "./components/ContainerComponents/Header";
import Footer from "./components/ContainerComponents/Footer";
import Product from "./components/ContainerComponents/Product";
import CartContextProvider from "./services/cart/CartContext";

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <Header />
        <Product />
        <Footer />
      </div>
    </CartContextProvider>
  );
}

export default App;
