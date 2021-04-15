import "./App.scss";
import "./common/CommonStyle.scss"
import React from "react";
import Header from "./components/ContainerComponents/Header";
import Footer from "./components/ContainerComponents/Footer";
import Product from "./components/ContainerComponents/Product"

function App() {
  return (
    <div className="App">
      <Header />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
