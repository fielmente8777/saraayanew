"use client";

import Link from "next/link";
import { useWebContext } from "@/context-api/WebContext";
import { navData } from "./navData";

const NavMenu = () => {
  const { isOpenNavBar, setIsOpenNavBar } = useWebContext();

  // useEffect(() => {
  //   if (isOpenNavBar) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isOpenNavBar]);

  return (
    <div
      className={`
        absolute top-full left-0 w-full z-40
        bg-primary text-white
        transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]
        overflow-y-auto
        ${
          isOpenNavBar
            ? "max-h-[calc(100dvh-80px)] opacity-100"
            : "max-h-0 opacity-0"
        }
      `}
    >
      {/* Menu Content */}
      <nav className="max_width py-8 md:py-10">
        <ul className="flex flex-col items-center gap-4 md:gap-5">
          {navData.links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setIsOpenNavBar(false)}
                className="
                  text-xl md:text-3xl
                  font-primary
                  uppercase tracking-[0.12em]
                  text-white/90
                  transition-colors duration-300
                  hover:text-white
                "
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
