"use client";

import Image from "next/image";
import { Container } from "../sectionComponants";
import LinkButton from "../buttons/LinkButton";
import { contact } from "@/utils/constent";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { winterWhatsappCta } from "@/app/landing-page/components/winterCtas";

const LandingNav = () => {
  const isWinter = usePathname().startsWith("/winter-landing-page");
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
        scrolled ? "bg-primary backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="py-2">
        <Container className="flex w-full items-center justify-between">
          {/* Logo */}
          <div className="relative aspect-[4/2] w-30 md:w-40.25">
            <Image
              src="/logo-1.png"
              alt="Saraaya Glamps Dharamshala"
              fill
              priority
              sizes="(min-width: 768px) 161px, 120px"
              className="rounded-md object-cover"
            />
          </div>

          {/* Book Now */}
          <LinkButton
            href={isWinter ? winterWhatsappCta : contact.WhatsappCta}
            label="Enquire Now"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded-full uppercase border-secondary bg-secondary text-white"
          />
        </Container>
      </nav>
    </header>
  );
};

export default LandingNav;
