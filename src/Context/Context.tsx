import { createContext, useEffect, useState } from "react";
import { Order, Product } from "../interfaces";
import { API } from "../constants/endpoints.constant";

export interface IContext {
  showDetail: boolean;
  selectedProduct: Product;
  cartProducts: Product[];
  items: Product[];
  filteredItems: Product[];
  searchByTitle: string;
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
  setItems: React.Dispatch<React.SetStateAction<IContext["items"]>>;
  setSearchByTitle: React.Dispatch<
    React.SetStateAction<IContext["searchByTitle"]>
  >;
  setFilteredItems: React.Dispatch<
    React.SetStateAction<IContext["filteredItems"]>
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

  // Get products
  const [items, setItems] = useState<Product[]>([]);
  const [filteredItems, setFilteredItems] = useState<Product[]>([]);

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${API}/products`);
      const data = await response.json();
      setItems(data);
    };

    getData();
  }, []);

  const filtereItemsByTitle = (items: Product[], query: string) => {
    return items?.filter((item) =>
      item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
  };

  useEffect(() => {
    if (searchByTitle) {
      setFilteredItems(filtereItemsByTitle(items, searchByTitle));
    }
  }, [items, searchByTitle]);

  return (
    <ShoppingCartContext.Provider
      value={{
        showDetail,
        selectedProduct,
        cartProducts,
        checkoutOpen,
        order,
        items,
        searchByTitle,
        filteredItems,
        setCheckoutOpen,
        setSelectedProduct,
        setShowDetail,
        setCartProducts,
        setOrder,
        setItems,
        setSearchByTitle,
        setFilteredItems,
      }}
    >
      {children};
    </ShoppingCartContext.Provider>
  );
};
