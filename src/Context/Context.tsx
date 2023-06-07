import { createContext, useState } from "react";
import { Product } from "../interfaces";

export interface IContext {
  counter: number;
  showDetail: boolean;
  selectedProduct: Product;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product>>;
}

export const ShoppingCartContext = createContext<IContext>({} as IContext);

export const ShoppingCartProvider = ({ children }: { children: any }) => {
  const [counter, setCounter] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    {} as Product
  );

  return (
    <ShoppingCartContext.Provider
      value={{
        counter,
        showDetail,
        selectedProduct,
        setSelectedProduct,
        setCounter,
        setShowDetail,
      }}
    >
      {children};
    </ShoppingCartContext.Provider>
  );
};
