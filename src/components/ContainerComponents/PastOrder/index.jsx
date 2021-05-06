import "./style.scss";
import React, { useContext } from "react";
import { CartContext } from "../../../services/cart/CartContext";
import PastOrderItem from "../PastOrderItems";
import withAuthorization from "../Session/withAuthorization";

const PastOrders = () => {
  const { pastOrders } = useContext(CartContext);

  return (
    <div className="past-orders__main">
      <h1>Order History</h1>
      <hr className="full-width" />
      {pastOrders.length > 0 &&
        (pastOrders.map((item, index) => {
          if (item.orderItems.length > 0) {
            return (
              <div className="past-orders__content" key={index}>
              <h3 className="past-orders__date">Order Date: {new Date(item.orderDate).toDateString()}</h3>
              {item.orderItems.map((product,index) => {
              return <PastOrderItem key={index} product={product}/>;
            })}
            </div>
            );
          }
          return (null);
        }))}
      {pastOrders.length === 0 && <h1>No past orders</h1>}
    </div>
  );
};

export default withAuthorization(PastOrders);