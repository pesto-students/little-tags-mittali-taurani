import "./style.scss";
import React, { useState, useContext } from "react";
import CartItem from "../CartItem";
import { CartContext } from "../../../services/cart/CartContext";

const PastOrders = () => {
  const { pastOrders } = useContext(CartContext);

  return (
    <div>
      <h1>Order History</h1>
      {pastOrders.length > 0 &&
        (pastOrders.map((item) => {
          if (item.orderItems.length > 0) {
            return item.orderItems.map((product,index) => {
              console.log("product", product);
              return <CartItem key={index} product={product} disableDelete={true} />;
            });
          }
          return (null);
        }))}
      {pastOrders.length === 0 && <h1>No past orders</h1>}
    </div>
  );
};

export default PastOrders;
