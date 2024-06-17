import { FC, createContext, useState } from "react";

//interface
import { Ichildren } from "../types/interface";

export const Context = createContext({});

const ContextProvider: FC<Ichildren> = ({ children }) => {
  const [hideImages, setHideImages] = useState(false);

  const [openSaidbar, setOpenSaidbar] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{ openSaidbar, setOpenSaidbar, hideImages, setHideImages }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
