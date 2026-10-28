"use client";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { winterWhatsappCta } from "@/app/landing-page/components/winterCtas";
import { enCodeText } from "@/utils/constent";

function Whatsapp({ whatsAppNumber }: { whatsAppNumber: string }) {
  const pathName = usePathname();
  if (pathName === "/thank-you/") {
    return null;
  }

  return (
    <div className={`fixed bottom-10 lg:right-3 right-4 z-20 cursor-pointer`}>
      {" "}
      <Link
        href={
          pathName.startsWith("/winter-landing-page")
            ? winterWhatsappCta
            : `https://wa.me/${whatsAppNumber.replace(/[^0-9]/g, "")}?text=${enCodeText}`
        }
        onClick={() => {
          if (!pathName.startsWith("/winter-landing-page")) return;
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "whatsapp_click",
            button_text: "Floating WhatsApp",
            section: "floating",
            page_path: pathName,
          });
        }}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center bg-green-500 hover:bg-green-600 transition-all hover:shadow-2xl"
      >
        <FaWhatsapp size={29} color="white" />
        <span className="sr-only">WhatsApp</span>
      </Link>
    </div>
  );
}

export default Whatsapp;
