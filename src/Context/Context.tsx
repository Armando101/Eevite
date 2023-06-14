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
  searchByCategory: string;
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
  setSearchByCategory: React.Dispatch<
    React.SetStateAction<IContext["searchByCategory"]>
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
  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState<string>("");
  const [filteredByCategory, setFilteredByCategory] = useState<Product[]>([]);

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

  const filtereItemsByCategory = (items: Product[], query: string) => {
    return items?.filter((item) =>
      item.category.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
  };

  useEffect(() => {
    const filteredItems = searchByCategory ? filteredByCategory : items;
    if (searchByTitle) {
      setFilteredItems(filtereItemsByTitle(filteredItems, searchByTitle));
    }
  }, [items, searchByTitle]);

  useEffect(() => {
    if (searchByCategory) {
      setFilteredItems(filtereItemsByCategory(items, searchByCategory));
      setFilteredByCategory(filtereItemsByCategory(items, searchByCategory));
      return;
    }
  }, [items, searchByCategory]);

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
        searchByCategory,
        setCheckoutOpen,
        setSelectedProduct,
        setShowDetail,
        setCartProducts,
        setOrder,
        setItems,
        setSearchByTitle,
        setFilteredItems,
        setSearchByCategory,
      }}
    >
      {children};
    </ShoppingCartContext.Provider>
  );
};
