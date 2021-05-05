import "./style.scss";
import React, { useContext } from "react";
import { CartContext } from "../../../services/cart/CartContext";
import PastOrderItem from "../PastOrderItems";

const PastOrders = () => {
  const { pastOrders } = useContext(CartContext);

  return (
    <div className={"past-orders"}>
      <h1 style={{padding:"10px"}}>Order History</h1>
      {pastOrders.length > 0 &&
        (pastOrders.map((item) => {
          if (item.orderItems.length > 0) {
            return item.orderItems.map((product,index) => {
              return <PastOrderItem key={index} product={product}/>;
            });
          }
          return (null);
        }))}
      {pastOrders.length === 0 && <h1>No past orders</h1>}
    </div>
  );
};

export default PastOrders;