import { useContext } from "react";
import styles from "./ProductDetail.module.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context/Context";

export const ProductDetail = () => {
  const { setShowDetail, showDetail, selectedProduct } =
    useContext(ShoppingCartContext);
  return selectedProduct.title ? (
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

      <figure className="px-6">
        <img
          className="rounded-lg  w-full"
          src={selectedProduct.images[0]}
          alt={selectedProduct.title}
        />
      </figure>

      <div className="flex flex-col p-6 detailProduct">
        <h3 className="font-medium text-2xl">{selectedProduct.title}</h3>
        <p className="font-medium text-md">{selectedProduct.category.name}</p>
        <p className="font-light text-sm">{selectedProduct.description}</p>
        <p>${selectedProduct.price}</p>
      </div>
    </aside>
  ) : (
    <></>
  );
};
