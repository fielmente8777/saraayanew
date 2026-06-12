// WebSiteNav.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MenuButton from "./MenuButton";
import Image from "next/image";
import LinkButton from "../buttons/LinkButton";
import NavMenu from "./NavMenu";
import { contact } from "@/utils/constent";

const WebSiteNav = () => {
  const pathname = usePathname();

  const paths = ["/", "/rooms/"];
  const isTransparent = paths.includes(pathname);

  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateNavbar = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateNavbar);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`
        fixed top-0 left-0 z-50 w-full
        transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]
        will-change-transform
        ${visible ? "translate-y-0" : "-translate-y-full"}
        ${
          isTransparent
            ? scrolled
              ? "bg-primary backdrop-blur-xl"
              : "bg-transparent"
            : "bg-background"
        }
      `}
      >
        {/* Top Navbar */}
        <nav className="max_width flex max-lg:flex-row-reverse items-center justify-between py-4">
          <MenuButton color={isTransparent ? "white" : "primary"} />

          <div className="relative aspect-[4/.89] w-full max-w-40 lg:ml-20 ">
            <Image
              src={isTransparent ? "/logo-white.png" : "/logo-green.png"}
              alt="Logo"
              fill
              priority
              className="object-contain"
            />
          </div>

          <LinkButton
            href={contact.WhatsappCta}
            label="reserve"
            target="_blank"
            rel="noopener noreferrer"
            className={`
            w-fit rounded-lg
            max-md:hidden
            uppercase
            ${
              isTransparent
                ? "bg-transparent text-white"
                : " text-primary border border-primary"
            }
            `}
          />
        </nav>

        <NavMenu />
      </header>
      {!isTransparent && <div className="h-[80px] w-full" />}
    </>
  );
};

export default WebSiteNav;
