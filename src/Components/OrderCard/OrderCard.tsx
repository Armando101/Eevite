import { XMarkIcon } from "@heroicons/react/24/solid";
import { Product } from "../../interfaces";

export const OrderCard = ({ product }: { product: Product }) => {
  const { images, title, price } = product;
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={images[0]}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex">
        <p className="text-lg font-medium">${price}</p>
        <XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
      </div>
    </div>
  );
};
