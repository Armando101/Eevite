import { createContext, useState } from "react";

export interface IContext {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export const ShoppingCartContext = createContext<Partial<IContext>>({});

export const ShoppingCartProvider = ({ children }: { children: any }) => {
  const [counter, setCounter] = useState(0);

  return (
    <ShoppingCartContext.Provider value={{ counter, setCounter }}>
      {children};
    </ShoppingCartContext.Provider>
  );
};
