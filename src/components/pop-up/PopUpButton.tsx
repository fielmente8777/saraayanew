"use client";

import { useEffect, useState } from "react";
import { useWebContext } from "@/context-api/WebContext";

const PopUpButton = () => {
  const { setOpenInfoPopup } = useWebContext();

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => setOpenInfoPopup(true);

  return (
    <button
      onClick={handleClick}
      className={`
        group
        fixed bottom-1/3 left-1 z-20
        flex items-center
        overflow-hidden
        rounded-lg
        bg-secondary
        shadow-lg
        transition-all duration-300 ease-in-out
        active:scale-95
        ${
          showIntro
            ? "w-52"
            : "w-12 hover:w-52"
        }
      `}
    >
      {/* Icon */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center">
        <Foo />
      </div>

      {/* Text */}
      <span
        className={`
          text-white
          whitespace-nowrap
          font-medium
          pr-4
          transition-all duration-300
          ${
            showIntro
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100"
          }
        `}
      >
        IMPORTANT INFO*
      </span>

      <span className="sr-only">Info</span>
    </button>
  );
};

export default PopUpButton;

export const Foo = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-transform duration-300 group-hover:translate-x-1"
  >
    <path d="M8 19L15 12L8 5L8 19Z" fill="white" />
  </svg>
);