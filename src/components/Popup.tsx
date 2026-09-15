"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BedIcon, SpoonIcon } from "@/utils/icons";
import { usePathname } from "next/navigation";

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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 px-3 py-4 backdrop-blur-[2px]"
      onClick={handleClose}
    >
      <div
        className="relative w-full md:max-w-[580px] max-w-[380px] overflow-hidden aspect-[1161/1249] "
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
        <div
          className="
    absolute
    inset-x-0
    top-0
    z-[1]
    h-[45%]
    bg-gradient-to-b
    from-black/50
    via-black/25
    to-transparent
    md:from-black/40
    md:via-black/20
  "
        />

        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close popup"
          className="
            absolute
            right-[3.5%]
            top-[3.5%]
            z-50
            flex
            h-[30px]
            w-[30px]
            md:h-[42px]
            md:w-[42px]
            items-center
            justify-center
            rounded-full
            bg-[#263D25]
            md:text-[28px]
            text-[20px]
            font-light
            text-white
            transition-all
            duration-300
            hover:rotate-90
            hover:scale-105
          "
        >
          ×
        </button>

        {/* CONTENT */}
        <div className="absolute inset-0 z-10">
          {/* ================= LOGO ================= */}
          <div className="absolute left-1/2 md:top-[5.5%] -translate-x-1/2 text-center">
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
            {/* SEPTEMBER + LINES */}
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

            {/* COUPLE OFFER */}
            <h2
              className="
                mt-[7px]
                whitespace-nowrap
                font-serif
                text-xl
                md:text-[38px]
                font-semibold
                uppercase
                text-[#7A471B]
              "
            >
              COUPLE OFFER
            </h2>

            {/* SUBTITLE */}
            <p
              className="
                mt-[10px]
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

          {/* ================= OFFER CARDS ================= */}
          <div
            className="
              absolute
              left-1/2
              md:top-[35.7%]
              top-[40%]
              flex
              w-[72%]
              -translate-x-1/2
              md:gap-[10px]
              gap-[6px]
            "
          >
            {/* CARD 1 */}
            <div
              className="
                flex
                min-w-0
                flex-1
                flex-col
                items-center
                rounded-[9px]
                bg-[#F8F6E9]/95
                max-md:h-[138px]
                px-[10px]
                py-[13px]
                text-center
              "
            >
              {/* BED ICON */}
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
                  mt-[5px]
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

            {/* CARD 2 */}
            <div
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
              {/* FOOD ICON */}
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
            </div>
          </div>

          {/* ================= VALIDITY ================= */}
          <div
            className="
    absolute
    left-1/2
    top-[75%]
    md:top-[74%]
    flex
    -translate-x-1/2
    items-center
    gap-[7px]
    whitespace-nowrap
"
          >
            {/* CALENDAR */}
            <div className="relative h-[14px] w-[14px] border-[1.5px] border-white">
              <span className="absolute left-[3px] top-[-4px] h-[5px] w-[1.5px] bg-white" />
              <span className="absolute right-[3px] top-[-4px] h-[5px] w-[1.5px] bg-white" />
              <span className="absolute left-0 top-[3px] w-full border-t border-white" />
            </div>

            <p
              className="
      font-serif
      md:text-sm
      text-[10px]
      text-white
    "
            >
              Valid for stays throughout September.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
