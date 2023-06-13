import { useContext } from "react";
import styles from "./CheckoutSideMenu.module.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context/Context";
import { OrderCard } from "../OrderCard/OrderCard";
import { totalPrice } from "../../utils/utils";
import { Order } from "../../interfaces";
import { Link } from "react-router-dom";

export const CheckoutSideMenu = () => {
  const {
    setCheckoutOpen,
    setCartProducts,
    setOrder,
    order,
    checkoutOpen,
    cartProducts,
  } = useContext(ShoppingCartContext);

  const handleDelete = (id: number) => {
    const filteredProducts = cartProducts.filter(
      (product) => product.id !== id
    );
    setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd: Order = {
      date: "01.02.23",
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };

    setOrder([...order, orderToAdd]);
    setCartProducts([]);
  };

  return (
    <aside
      className={`${styles.productDetail} ${
        checkoutOpen ? "flex" : "hidden"
      } flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            onClick={() => setCheckoutOpen(false)}
            className="h-6 w-6 text-black cursor-pointer"
          />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            product={product}
            handleDelete={() => handleDelete(product.id)}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total: </span>
          <span className="font-medium text-2xl">
            ${totalPrice(cartProducts)}
          </span>
        </p>
        <Link to={"/my-order/last"}>
          <button
            className="w-full rounded-lg bg-black py-3 text-white"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};
