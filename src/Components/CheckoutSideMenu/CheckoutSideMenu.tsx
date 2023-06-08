import { useContext } from "react";
import styles from "./CheckoutSideMenu.module.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context/Context";

export const CheckoutSideMenu = () => {
  const { setCheckoutOpen, checkoutOpen, selectedProduct } =
    useContext(ShoppingCartContext);
  return (
    selectedProduct.title && (
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
      </aside>
    )
  );
};
