"use client";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
const LandingFooter = dynamic(() => import("./LandingFooter"));
import WebSiteFooter from "./WebSiteFooter";

const Footer = () => {
  const pathName = usePathname();
  switch (pathName) {
    case "/thank-you/":
      return null;
    case "/landingpage/":
    case "/landing-page/":
      return <LandingFooter winter={pathName === "/landing-page/"} />;
    default:
      return <WebSiteFooter />;
  }
};

export default Footer;
