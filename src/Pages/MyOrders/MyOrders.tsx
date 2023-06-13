import { useContext } from "react";
import { Layout } from "../../Components/Layout/Layout";
import { OrderCardList } from "../../Components/OrderCardList/OrderCardList";
import { ShoppingCartContext } from "../../Context/Context";
import { Link } from "react-router-dom";

export const MyOrders = () => {
  const { order } = useContext(ShoppingCartContext);

  return (
    <Layout>
      {order.map((order, index) => (
        <Link key={index} to={`/my-orders/${order.id}`}>
          <OrderCardList
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
};
