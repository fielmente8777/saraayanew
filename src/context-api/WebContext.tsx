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
  WhatsAppClick: (
    button?: HTMLButtonElement,
    clickText?: string
  ) => Promise<void>;
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
  const WhatsAppClick = async (
    button?: HTMLButtonElement,
    btnClickText?: string
  ) => {
    const enCodedText =
      "Hello Saraaya Team I’m interested to know more about Saraaya.";
    try {
      // GET BUTTON CLICK INFORMATION
      // -----------------------------

      const clickClasses = button?.className || "";
      const clickId = button?.id || "";
      const clickText = btnClickText || button?.innerText || "";
      const clickTarget = button?.getAttribute("target") || "";
      const clickElement = button?.outerHTML || "";

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

      // -----------------------------
      // GTM DATA LAYER
      // -----------------------------

      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        event: "whatsapp_click", // Keep your clean custom event

        // Custom data layer keys for GA4
        button_text: "WhatsApp",
        phone_number: contact.whatsappNumber,
        page_location: window.location.href,
        page_path: window.location.pathname,
        whatsapp_url: whatsappUrl,

        // GTM's built-in variables mapping
        "gtm.elementClasses": clickClasses,
        "gtm.elementId": clickId,
        "gtm.elementUrl": whatsappUrl,
        "gtm.element": clickElement,

        // FIX: Force your dynamic text into GTM's built-in "Click Target" variable slot
        "gtm.elementTarget": clickText,
      });

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
