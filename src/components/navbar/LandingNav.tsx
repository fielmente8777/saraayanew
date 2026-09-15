"use client";

import Image from "next/image";
import { Container } from "../sectionComponants";
import LinkButton from "../buttons/LinkButton";
import { contact } from "@/utils/constent";
import { useEffect, useState } from "react";

const LandingNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 max_screen_width ${
        scrolled
          ? "bg-primary backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className=" py-8">
        <Container className="flex w-full items-center justify-between">
          
          {/* Logo */}
          <div className="relative aspect-[4/2] w-30 md:w-40.25">
            <Image
              src="/logo-1.png"
              alt="Logo"
              fill
              priority
              className="rounded-md object-cover"
            />
          </div>

          {/* Book Now */}
          <LinkButton
            href={contact.WhatsappCta}
            label="Book Now"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded-full border-none bg-white uppercase text-secondary"
          />

        </Container>
      </nav>
    </header>
  );
};

export default LandingNav;
