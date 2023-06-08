import { createContext, useState } from "react";
import { Product } from "../interfaces";

export interface IContext {
  showDetail: boolean;
  selectedProduct: Product;
  cartProducts: Product[];
  setShowDetail: React.Dispatch<React.SetStateAction<IContext["showDetail"]>>;
  setSelectedProduct: React.Dispatch<
    React.SetStateAction<IContext["selectedProduct"]>
  >;
  setCartProducts: React.Dispatch<
    React.SetStateAction<IContext["cartProducts"]>
  >;
}

export const ShoppingCartContext = createContext<IContext>({} as IContext);

export const ShoppingCartProvider = ({ children }: { children: any }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    {} as Product
  );

  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        showDetail,
        selectedProduct,
        cartProducts,
        setSelectedProduct,
        setShowDetail,
        setCartProducts,
      }}
    >
      {children};
    </ShoppingCartContext.Provider>
  );
};
