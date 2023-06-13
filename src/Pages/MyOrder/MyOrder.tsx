import { useContext } from "react";
import { Layout } from "../../Components/Layout/Layout";
import { OrderCard } from "../../Components/OrderCard/OrderCard";
import { ShoppingCartContext } from "../../Context/Context";

export const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex flex-col w-80">
        {order?.slice(-1)[0].products.map((product) => (
          <OrderCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
};
