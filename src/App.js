import "./App.scss";
import "./common/CommonStyle.scss";
import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/ContainerComponents/Header";
import SearchPage from "./components/ContainerComponents/SearchPage";
import HomePage from "./components/ContainerComponents/HomePage";
import Footer from "./components/ContainerComponents/Footer";
import Product from "./components/ContainerComponents/Product";
import CartContextProvider from "./services/cart/CartContext";
import Cart from "./components/ContainerComponents/Cart";
import Checkout from "./components/ContainerComponents/Checkout";
import { ROUTE } from "./helper/constants";
import WishlistContextProvider from "./services/wishList/Context";
// import FirebaseContext from "./services/firebase/FirebaseContext";
// import Firebase from "./services/firebase/Firebase";
import AddressContextProvider from "./services/address/AddressContext";
import FinalPage from "./components/DesignComponents/FinalPage";
// import SessionContextProvider from "./services/session/SessionContext";
import withAuthentication from "./components/ContainerComponents/Session/withAuthentication";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <WishlistContextProvider>
          {/*<SessionContextProvider>
          <FirebaseContext.Provider value={new Firebase()}>*/}
              <BrowserRouter>
                <Header />
                <Switch>
                  <Route path={ROUTE.ORDER_PLACED}>
                    <FinalPage />
                  </Route>
                  <Route exact path={ROUTE.HOME}>
                    <HomePage />
                  </Route>
                  <Route path={ROUTE.CATEGORY} component={SearchPage} />
                  <Route path={ROUTE.ITEM_PAGE} component={Product} />
                  <Route path={ROUTE.CART}>
                    <Cart />
                  </Route>
                  <AddressContextProvider>
                    <Route path={ROUTE.CHECKOUT} component={Checkout} />
                  </AddressContextProvider>
                </Switch>
                <Footer />
              </BrowserRouter>
            {/*</FirebaseContext.Provider>
            </SessionContextProvider>*/}
        </WishlistContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default withAuthentication(App);
