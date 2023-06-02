import { createContext, useState } from "react";

export interface IContext {
  counter: number;
  showDetail: boolean;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ShoppingCartContext = createContext<IContext>({} as IContext);

export const ShoppingCartProvider = ({ children }: { children: any }) => {
  const [counter, setCounter] = useState(0);
  const [showDetail, setShowDetail] = useState(false);

  return (
    <ShoppingCartContext.Provider
      value={{ counter, showDetail, setCounter, setShowDetail }}
    >
      {children};
    </ShoppingCartContext.Provider>
  );
};
