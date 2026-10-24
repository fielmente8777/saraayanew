"use client";

import { useWebContext } from "@/context-api/WebContext";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  label: string;
  className?: string;
  whatsAppIcon?: boolean;
  arrowIcon?: boolean;
  getDirectionIcon?: boolean;
  [key: string]: unknown;
  showSecureBadge?: boolean;
  secureBadgeText?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  label,
  className = "",
  arrowIcon = true,
  ...props
}) => {
  const { WhatsAppClick, setIsOpenFormPopUp } = useWebContext();

  const handleWhatsAppClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    WhatsAppClick(event.currentTarget, label);
  };

  const handleFormClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (href === "#form") {
      event.preventDefault();
      setIsOpenFormPopUp(true);
    }
    if (href.startsWith("https://wa.me/")) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "whatsapp_click",
        button_text: label,
        page_path: window.location.pathname,
        whatsapp_url: href,
      });
    }
  };

  return (
    <>
      {href === "whatsapp" ? (
        <button
          onClick={handleWhatsAppClick}
          className={`flex items-center gap-6 border w-fit px-4 py-2 font-semibold hover:scale-95 transition-all duration-300 ease-in-out active:scale-95 ${className}`}
          {...props}
        >
          {label}

          {arrowIcon && (
            <span>
              <ArrowIcon />
            </span>
          )}
        </button>
      ) : (
        <Link
          href={href}
          onClick={handleFormClick}
          className={`flex items-center gap-6 border w-fit px-4 py-2 font-semibold hover:scale-95 transition-all duration-300 ease-in-out active:scale-95 ${className}`}
          {...props}
        >
          {label}

          {arrowIcon && (
            <span>
              <ArrowIcon />
            </span>
          )}
        </Link>
      )}
    </>
  );
};

export default LinkButton;

export const ArrowIcon = () => (
  <svg
    width={11}
    height={12}
    viewBox="0 0 11 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.7695 0.634306C11.0763 0.946722 11.0763 1.45326 10.7695 1.76567L1.86473 10.8323C1.5579 11.1447 1.06041 11.1447 0.753565 10.8323C0.446728 10.5199 0.446728 10.0134 0.753565 9.70103L9.65838 0.634306C9.9652 0.32189 10.4626 0.32189 10.7695 0.634306Z"
      fill="currentColor"
    />
    <path
      d="M0 1.19999C0 0.75817 0.35178 0.399994 0.785714 0.399994H10.2143C10.6482 0.399994 11 0.75817 11 1.19999V10.8C11 11.2418 10.6482 11.6 10.2143 11.6C9.78034 11.6 9.42857 11.2418 9.42857 10.8V1.99999H0.785714C0.35178 0.399994 0 0.75817 0 1.19999Z"
      fill="currentColor"
    />
  </svg>
);
