import { XMark } from "../../Icons/XMark";
import styles from "./ProductDetail.module.css";

export const ProductDetail = () => {
  return (
    <aside
      className={`${styles.productDetail} flex flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMark />
        </div>
      </div>
    </aside>
  );
};
