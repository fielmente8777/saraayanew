"use client";
import { usePathname } from "next/navigation";
import LandingFooter from "./LandingFooter";
import WebSiteFooter from "./WebSiteFooter";

const Footer = () => {
  const pathName = usePathname();
  switch (pathName) {
    case "/thank-you/":
      return null;
    case "/landing-page/":
    case "/winter-landing-page/":
      return <LandingFooter winter={pathName === "/winter-landing-page/"} />;
    default:
      return <WebSiteFooter />;
  }
};

export default Footer;
