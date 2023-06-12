import { createContext, useState } from "react";
import { Order, Product } from "../interfaces";

export interface IContext {
  showDetail: boolean;
  selectedProduct: Product;
  cartProducts: Product[];
  order: Order[];
  checkoutOpen: boolean;
  setShowDetail: React.Dispatch<React.SetStateAction<IContext["showDetail"]>>;
  setCheckoutOpen: React.Dispatch<
    React.SetStateAction<IContext["checkoutOpen"]>
  >;
  setSelectedProduct: React.Dispatch<
    React.SetStateAction<IContext["selectedProduct"]>
  >;
  setOrder: React.Dispatch<React.SetStateAction<IContext["order"]>>;
  setCartProducts: React.Dispatch<
    React.SetStateAction<IContext["cartProducts"]>
  >;
}

export const ShoppingCartContext = createContext<IContext>({} as IContext);

export const ShoppingCartProvider = ({ children }: { children: any }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    {} as Product
  );
  const [order, setOrder] = useState<Order[]>([]);

  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        showDetail,
        selectedProduct,
        cartProducts,
        checkoutOpen,
        order,
        setCheckoutOpen,
        setSelectedProduct,
        setShowDetail,
        setCartProducts,
        setOrder,
      }}
    >
      {children};
    </ShoppingCartContext.Provider>
  );
};
