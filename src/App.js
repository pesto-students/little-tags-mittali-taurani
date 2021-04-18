import './App.scss';
import "./common/CommonStyle.scss"
import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/ContainerComponents/Header";
import SearchPage from "./components/ContainerComponents/SearchPage";
import HomePage from "./components/ContainerComponents/HomePage";
import Footer from "./components/ContainerComponents/Footer";
import Product from './components/ContainerComponents/Product';
import CartContextProvider from "./services/cart/CartContext";
import Cart from "./components/ContainerComponents/Cart";
import { ROUTE } from "./helper/Constants";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path={ROUTE.HOME}>
              <HomePage />
            </Route>
            <Route path={ROUTE.CATEGORY} component={SearchPage} />
            <Route path={ROUTE.ITEM_PAGE} component={Product} />
            <Route path={ROUTE.CART}>
              <Cart/>
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>

    </div>);
}


export default App;
