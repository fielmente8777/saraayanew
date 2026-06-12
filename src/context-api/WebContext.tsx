"use client";
import { createContext, useContext, useState } from "react";

interface WebContextProps {
  current: number;
  total: number;
  isOpenNavBar: boolean;
  setCurrent: (value: number) => void;
  setTotal: (value: number) => void;
  setIsOpenNavBar: React.Dispatch<React.SetStateAction<boolean>>;
  openInfoPopup: boolean;
  setOpenInfoPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WebContext = createContext<WebContextProps>({
  current: 1,
  total: 0,
  setCurrent: () => {},
  setTotal: () => {},
  isOpenNavBar: false,
  setIsOpenNavBar: () => {},
  openInfoPopup: false,
  setOpenInfoPopup: () => {},
});

interface WebProviderProps {
  children: React.ReactNode;
}
export const WebProvider: React.FC<WebProviderProps> = ({ children }) => {
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);
  const [openInfoPopup, setOpenInfoPopup] = useState(false);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1);

  const value = {
    total,
    setTotal,
    current,
    setCurrent,
    isOpenNavBar,
    setIsOpenNavBar,
    openInfoPopup,
    setOpenInfoPopup,
  };
  return <WebContext.Provider value={value}>{children}</WebContext.Provider>;
};

export const useWebContext = () => {
  const context = useContext(WebContext);
  if (!context) {
    throw new Error("useWebContext must be used within a WebProvider");
  }
  return context;
};
