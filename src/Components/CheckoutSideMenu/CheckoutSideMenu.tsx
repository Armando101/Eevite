import { useContext } from "react";
import styles from "./CheckoutSideMenu.module.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context/Context";
import { OrderCard } from "../OrderCard/OrderCard";
import { totalPrice } from "../../utils/utils";

export const CheckoutSideMenu = () => {
  const { setCheckoutOpen, setCartProducts, checkoutOpen, cartProducts } =
    useContext(ShoppingCartContext);

  const handleDelete = (id: number) => {
    const filteredProducts = cartProducts.filter(
      (product) => product.id !== id
    );
    setCartProducts(filteredProducts);
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
      <div className="px-6 overflow-y-scroll">
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            product={product}
            handleDelete={() => handleDelete(product.id)}
          />
        ))}
      </div>
      <div className="px-6">
        <p className="flex justify-between items-center">
          <span className="font-light">Total: </span>
          <span className="font-medium text-2xl">
            ${totalPrice(cartProducts)}
          </span>
        </p>
      </div>
    </aside>
  );
};
