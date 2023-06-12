import { useContext } from "react";
import { Product } from "../../interfaces";
import { ShoppingCartContext } from "../../Context/Context";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";

export const Card = ({ data }: { data: Product }) => {
  const { category, images, title, price } = data;
  const {
    cartProducts,
    setShowDetail,
    setSelectedProduct,
    setCartProducts,
    setCheckoutOpen,
  } = useContext(ShoppingCartContext);

  const addProductToCart = () => {
    setCartProducts([...cartProducts, data]);
    setCheckoutOpen(true);
  };

  const renderIcon = (id: number) => {
    const isInCard = cartProducts.some((product) => product.id === id);
    const containerClass =
      "absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 m-2  rounded-lg";
    return isInCard ? (
      <div className={`${containerClass} p-0`}>
        <CheckIcon className="h-6 w-6 bg-black rounded-lg text-white" />
      </div>
    ) : (
      <div
        onClick={() => {
          addProductToCart();
        }}
        className={containerClass}
      >
        <PlusIcon className="h-6 w-6 text-black" />
      </div>
    );
  };

  return (
    <div
      onClick={() => {
        setShowDetail(true);
        setSelectedProduct(data);
      }}
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category?.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={images[0]}
          alt={title}
        />
        {renderIcon(data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  );
};
