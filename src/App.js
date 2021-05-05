import "./App.scss";
import "./common/CommonStyle.scss";
import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/ContainerComponents/Header";
import SearchPage from "./components/ContainerComponents/SearchPage";
import HomePage from "./components/ContainerComponents/HomePage";
import PastOrders from "./components/ContainerComponents/PastOrder";
import Footer from "./components/ContainerComponents/Footer";
import Product from "./components/ContainerComponents/Product";
import CartContextProvider from "./services/cart/CartContext";
import Cart from "./components/ContainerComponents/Cart";
import Checkout from "./components/ContainerComponents/Checkout";
import Payment from "./components/ContainerComponents/Payment";
import FinalPage from "./components/DesignComponents/FinalPage";
import { ROUTE } from "./helper/constants";
import WishlistContextProvider from "./services/wishList/Context";
import AddressContextProvider from "./services/address/AddressContext";
import CurrencyContextProvider from "./services/currency/CurrencyContext";
import Wishlist from "./components/ContainerComponents/Wishlist";
import withAuthentication from "./components/ContainerComponents/Session/withAuthentication";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <WishlistContextProvider>
          <CurrencyContextProvider>
            {/*<SessionContextProvider>
          <FirebaseContext.Provider value={new Firebase()}>*/}
            <BrowserRouter>
              <Header />
              <Switch>
                <Route exact path={ROUTE.HOME}>
                  <HomePage />
                </Route>
                <Route path={ROUTE.CATEGORY} component={SearchPage} />
                <Route path={ROUTE.ITEM_PAGE} component={Product} />
                <Route path={ROUTE.WISHLIST} component={Wishlist} />
                <Route path={ROUTE.CART}>
                  <Cart />
                </Route>
                <Route path={ROUTE.PAST_ORDERS} component={PastOrders} />
                <AddressContextProvider>
                  <Route path={ROUTE.SHIPPING_ADDRESS} component={Checkout} />
                  <Route path={ROUTE.PAYMENT} component={Payment} />
                </AddressContextProvider>
                <Route path={ROUTE.ORDER_PLACED}>
                  <FinalPage />
                </Route>
                {/*<Route path={ROUTE.ORDER_PLACED} component={FinalPage} />*/}
              </Switch>
              <Footer />
            </BrowserRouter>
            {/*</FirebaseContext.Provider>
            </SessionContextProvider>*/}
          </CurrencyContextProvider>
        </WishlistContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default withAuthentication(App);
