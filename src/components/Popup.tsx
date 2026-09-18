"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BedIcon, SpoonIcon } from "@/utils/icons";
import { usePathname } from "next/navigation";
import { contact } from "@/utils/constent";
import LinkButton from "./buttons/LinkButton";
import { MdClose, MdOutlineCalendarToday } from "react-icons/md";

const Popup = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false);

  const isThankYouPage =
    pathname === "/thank-you" ||
    pathname === "/landing-page/" ||
    pathname === "/thankyou" ||
    pathname?.includes("thank-you") ||
    pathname?.includes("thankyou");

  useEffect(() => {
    if (hasBeenDismissed || isThankYouPage) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasBeenDismissed, isThankYouPage]);

  const handleClose = () => {
    setIsOpen(false);
    setHasBeenDismissed(true);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (isThankYouPage || !isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/65 px-3 py-4 backdrop-blur-[2px]"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-[580px] overflow-hidden aspect-4/6 md:aspect-4/4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* BACKGROUND IMAGE */}
        <Image
          src="/popup1.jpg"
          alt="Saraaya September Couple Offer"
          fill
          priority
          className="object-cover"
        />
        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 z-10 bg-linear-to-b from-black/25 via-black/25 to-black/60" />

        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close popup"
          className="
            absolute
           top-3
            right-3
            z-50
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#263D25]
            text-white
            transition-all
            duration-300
            hover:rotate-90
          "
        >
          <MdClose />
        </button>

        {/* CONTENT */}
        <div className="absolute inset-0 z-10">
          {/* ================= LOGO ================= */}
          <div className="absolute left-1/2 top-[5.5%] -translate-x-1/2 text-center">
            <div className="mx-auto h-[16px] w-[45px]" />

            <h1
              className="
                whitespace-nowrap
                font-serif
                text-[20px]
                md:text-[27px]
                leading-none
                font-normal
                text-[#263D25]
              "
            >
              SARAAYA
            </h1>

            <p
              className="
              
                whitespace-nowrap
                text-[7px]
                md:text-[10px]
                font-medium
                text-[#263D25]
              "
            >
              GLAMPS IN NATURE
            </p>
          </div>

          {/* ================= TITLE ================= */}
          <div
            className="
              absolute
              left-1/2
              top-[16.8%]
              w-[94%]
              -translate-x-1/2
              text-center
            "
          >
            <div className="flex items-center justify-center md:gap-[14px]">
              <span className="h-[1px] w-[43px] bg-[#263D25]" />

              <p
                className="
                  whitespace-nowrap
                  
                  md:text-[17px]
                  text-xs
                  font-medium
                  text-[#263D25]
                "
              >
                SEPTEMBER
              </p>

              <span className="h-[1px] w-[43px] bg-[#263D25]" />
            </div>

            <h2
              className="
                mt-[7px]
                whitespace-nowrap
                font-serif
                text-xl
                md:text-[38px]
                font-semibold
                uppercase
                text-white
              "
            >
              COUPLE OFFER
            </h2>

            <p
              className="
                md:mt-[10px]
                whitespace-nowrap
                md:text-base
                text-sm
                font-medium
                uppercase
                text-white
                drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]
              "
            >
              SLOWER DAYS. CLOSER MOMENTS.
            </p>
          </div>

          <div
            className="
              absolute
              left-1/2
              md:top-[38%]
              top-[36%]
              flex
              md:w-[260px]
              w-[200px]
              -translate-x-1/2
              md:gap-[10px]
              
            "
          >
            <div
              className="
                flex
                min-w-0
                flex-1
                flex-col
                items-center
                rounded-[9px]
                bg-[#F8F6E9]/95
                py-[12px]
                text-center
              "
            >
              <div className=" items-center justify-center">
                <BedIcon />
              </div>

              <p
                className="
                  whitespace-nowrap
                  font-serif
                  text-sm
                  md:text-[16px]
                  text-[#263D25]
                "
              >
                Stay for two
              </p>

              <p
                className="
                  md:mt-[5px]
                  whitespace-nowrap
                  font-serif
                  md:text-[29px]
                  text-lg
                  font-bold
                  text-[#7A471B]
                "
              >
                ₹10,500
              </p>

              <div className="my-[8px] h-[1px] w-[88%] bg-[#BDB8A7]" />

              <p
                className="
                  whitespace-nowrap
                  md:text-xs
                  text-[10px]
                  font-medium
                  text-[#263D25]
                "
              >
                Inclusive of breakfast.
              </p>
            </div>

            {/* <div
              className="
                flex
                min-w-0
                flex-1
                flex-col
                items-center
                rounded-[9px]
                bg-[#F8F6E9]/95
                 max-md:h-[138px]
                px-[8px]
                py-[13px]
                text-center
              "
            >
          
              <div className=" items-center justify-center text-[#263D25]">
                <SpoonIcon />
              </div>

              <p
                className="
mt-2
                  whitespace-nowrap
                  font-serif
                  text-sm
                  md:text-[16px]
                  text-[#263D25]
                "
              >
                Stay with meals
              </p>

              <p
                className="
                  mt-[5px]
                  whitespace-nowrap
                  font-serif
                  text-lg
                  md:text-[29px]
                  font-bold
                  text-[#7A471B]
                "
              >
                ₹12,500
              </p>

              <div className="my-[8px] h-[1px] w-[88%] bg-[#BDB8A7]" />

              <p
                className="
                text-[10px]
                  md:text-xs
                  font-medium
                  text-[#263D25]
                "
              >
                Inclusive of breakfast and
                <br />
                simple, home-style
                <br />
                vegetarian meals.
              </p>
            </div> */}
          </div>

          <div
            className="
    absolute
    left-1/2
    top-[78%]
    md:top-[72%]
    flex
    -translate-x-1/2
    items-center
    gap-[7px]
    whitespace-nowrap
"
          >
            {/* CALENDAR */}
            {/* <div className="relative h-[14px] w-[14px] border-[1.5px] border-white">
              <span className="absolute left-[3px] top-[-4px] h-[5px] w-[1.5px] bg-white" />
              <span className="absolute right-[3px] top-[-4px] h-[5px] w-[1.5px] bg-white" />
              <span className="absolute left-0 top-[3px] w-full border-t border-white" />
            </div> */}
            <span className="text-white">
              <MdOutlineCalendarToday />
            </span>
            <p
              className="
      font-serif
      md:text-sm
      text-xs
      text-white
    "
            >
              Valid for stays throughout September only.
            </p>
          </div>

          <div
            className="absolute    left-1/2    top-[83%]    md:top-[76%]    -translate-x-1/2    flex    flex-col    items-center    gap-2    text-center "
          >
            <LinkButton
              href={contact.WhatsappCta}
              label="BOOK NOW"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-white border-none rounded-sm uppercase bg-[#263D25] px-7 py-2.5 md:px-10 md:py-3 text-[10px] md:text-[12px] font-medium tracking-[0.2em] transition-all duration-300 hover:bg-[#7A471B] hover:scale-105"
            />
          </div>

          <p className="absolute bottom-[1.5%] left-1/2 -translate-x-1/2 whitespace-nowrap font-semibold text-xs md:text-sm text-white">
            *Subject to Availability
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
