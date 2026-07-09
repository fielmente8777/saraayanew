"use client";
import { contact } from "@/utils/constent";
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
  WhatsAppClick: () => Promise<void>;

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
  WhatsAppClick: () => Promise.resolve(),
});

interface WebProviderProps {
  children: React.ReactNode;
}
export const WebProvider: React.FC<WebProviderProps> = ({ children }) => {
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);
  const [openInfoPopup, setOpenInfoPopup] = useState(false);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1);
  const WhatsAppClick = async () => {
    const enCodedText =
    "Hello Saraaya Team I’m interested to know more about Saraaya.";
    try {
      const payload = {
        widget: "whatsapp",
        ndid: "e50d8dc6-4cfc-4c87-b6c0-145ccdeb4121",
        hid: "56369483",
        pageUrl: window.location.href,
        websiteName: window.location.hostname,
        phoneNumber: contact.whatsappNumber,
        message: enCodedText,
      };

      const response = await fetch(
        "https://gian-1eve.onrender.com/api/v1/widget/click",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      const whatsappUrl = data?.result?.doc?.whatsappUrl;

      if (whatsappUrl) {
        window.open(whatsappUrl, "_blank");
      }
    } catch (error) {
      console.error("WhatsApp Click Error:", error);
    }
  };
  const value = {
    WhatsAppClick,
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
