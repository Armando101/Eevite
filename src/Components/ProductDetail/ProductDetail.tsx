import { useContext } from "react";
import styles from "./ProductDetail.module.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context/Context";

export const ProductDetail = () => {
  const { setShowDetail, showDetail } = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${styles.productDetail} ${
        showDetail ? "flex" : "hidden"
      } flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon
            onClick={() => setShowDetail(false)}
            className="h-6 w-6 text-black cursor-pointer"
          />
        </div>
      </div>
    </aside>
  );
};
