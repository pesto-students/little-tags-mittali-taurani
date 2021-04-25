import "./style.scss";
import React, { useState, useContext } from "react";
import { CartContext } from "../../../services/cart/CartContext";

const PastOrders = () => {
  const { pastOrders } = useContext(CartContext);

  return (
    <div>
      <h1>Order History</h1>
      {pastOrders.length > 0 &&
        (pastOrders.map((item) => {
          if (item.orderItems.length > 0) {
            item.orderItems.map((product) => {
              return <p>{product.brand}</p>;
            });
          }
          return (null);
        }))}
      {pastOrders.length === 0 && <h1>No past orders</h1>}
    </div>
  );
};

export default PastOrders;
