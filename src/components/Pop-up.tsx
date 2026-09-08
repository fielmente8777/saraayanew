"use client";

import { UpIcon } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false);

  useEffect(() => {
    if (hasBeenDismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 0);

    return () => clearTimeout(timer);
  }, [hasBeenDismissed]);

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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-[2px]"
      onClick={handleClose}
    >
      <div
        className="relative w-auto max-w-[780px] overflow-hidden bg-[#F8F7ED] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-50 flex h-9 w-9 items-center justify-center text-3xl font-light leading-none text-white transition-transform duration-300 hover:rotate-90"
        >
          ×
        </button>

        {/* IMAGE */}
        <div className="relative aspect-[595/330] w-full">
          <Image
            src="/popup.jpg"
            alt="Luxury retreat"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="relative bg-[#F8F7ED] px-5 pb-4 pt-5 sm:px-7 sm:pb-5 sm:pt-6">
          <div className="absolute bottom-0 left-0 z-10">
            <Image
              src="/home/design.png"
              alt=""
              width={100}
              height={115}
              className="h-auto w-[70px] object-contain"
            />
          </div>

          {/* TOP RIGHT DECORATION */}
          <div className="absolute right-0 top-0 z-10">
            <Image
              src="/home/design.png"
              alt=""
              width={100}
              height={115}
              className="h-auto w-[70px] rotate-180 object-contain"
            />
          </div>
          
       
          <div className="text-center">
            <h2 className="font-ivy md:text-4xl text-2xl  text-[#263D25] ">
              Escape <span className="">THE ORDINARY.</span>
            </h2>

            <p className="mt-1 md:text-2xl text-lg font-light uppercase text-[#C77B32]">
              YOUR PRIVATE RETREAT AWAITS
            </p>
          </div>

          {/* OFFERS */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 py-2  md:py-0 md:divide-x divide-[#C9C5B5]">
        
            <div className="flex items-center justify-center gap-3 py-4 md:py-0 px-2 md:pr-10">
              <Image
                src="/home/offer.png"
                alt=""
                width={60}
                height={60}
                className="h-[60px] w-[60px] shrink-0 object-contain"
              />

              <div className="text-left">
                <p className="whitespace-nowrap font-montserrat text-sm font-semibold uppercase leading-tight text-[#20251E] md:text-lg">
                  PRICES STARTING
                </p>

                <p className="whitespace-nowrap font-montserrat text-xl font-bold text-[#263D25] md:text-2xl">
                  ₹11,999*
                </p>

                <p className="font-montserrat text-[9px] text-[#20251E] md:text-sm">
                  (per night)
                </p>
              </div>
            </div>

         
            <div className="flex items-center justify-center gap-3 py-4 px-4 md:py-0 md:px-6">
              <Image
                src="/home/discount.png"
                alt=""
                width={60}
                height={60}
                className="h-[60px] w-[60px] shrink-0 object-contain"
              />

              <div className="text-left">
                <p className="font-montserrat text-sm font-semibold uppercase leading-tight text-[#20251E] md:text-lg">
                  GET 15%
                </p>

                <p className="font-montserrat text-xl font-bold leading-none text-[#263D25] md:text-2xl">
                  DISCOUNT
                </p>

                <p className="mt-1 font-montserrat text-[9px] uppercase leading-tight text-[#20251E] md:text-sm">
                  ON YOUR STAY
                </p>
              </div>
            </div>

            {/* OFFER 3 */}
            {/* <div className="flex flex-col items-center px-2 text-center sm:px-4">
              <div className="flex items-start gap-3">
                <Image
                  src="/home/spoon.png"
                  alt=""
                  width={60}
                  height={60}
                  className="h-[60px] w-[60px] object-contain shrink-0"
                />
              </div>

              <p className="text-[10px] font-montserrat font-semibold uppercase leading-tight text-[#20251E] md:text-lg">
                COMPLIMENTARY
              </p>

              <p className="text-xl font-bold font-montserrat leading-none text-[#263D25] md:text-2xl">
                BREAKFAST
              </p>

              <p className="mt-1 text-[9px] font-montserrat uppercase leading-tight text-[#20251E] md:text-sm">
                FOR ALL GUESTS
              </p>
            </div> */}
            <div className="flex items-center justify-center gap-3 py-4 md:py-0 px-2 md:pl-8">
              <Image
                src="/home/spoon.png"
                alt=""
                width={60}
                height={60}
                className="h-[60px] w-[60px] shrink-0 object-contain"
              />

              <div className="text-left">
                <p className="font-montserrat text-sm font-semibold uppercase leading-tight text-[#20251E] md:text-lg">
                  COMPLIMENTARY
                </p>

                <p className="font-montserrat text-xl font-bold leading-none text-[#263D25] md:text-2xl">
                  BREAKFAST
                </p>

                <p className="mt-1 font-montserrat text-[9px] uppercase leading-tight text-[#20251E] md:text-sm">
                  FOR ALL GUESTS
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="md:mt-5 flex justify-center">
            <Link
              href="/contact-us"
              onClick={handleClose}
              className="w-full max-w-[450px] rounded-[3px] bg-[#C87528] px-5 py-2.5 text-center text-xs md:text-base font-montserrat uppercase tracking-wide text-white transition-colors duration-300 hover:bg-[#A95F1D] sm:py-3"
            >
              <span className="flex items-center justify-center gap-2">
                PLAN YOUR GLAMPING ADVENTURE NOW
                <UpIcon />
              </span>
            </Link>
          </div>

          {/* DISCLAIMER */}
          <p className="mt-3 text-center text-[8px] font-montserrat text-[#22251F] md:text-[10px]">
            Offer Valid for a Limited Time. T&Cs apply. Direct bookings only.
          </p>

        </div>
      </div>
    </div>
  );
};


export default Popup;
