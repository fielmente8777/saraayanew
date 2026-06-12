import Image from "next/image";
import { Container } from "../sectionComponants";
import { socialMedia, websiteFooterData } from "./footerdata";
import Link from "next/link";

const WebSiteFooter = () => {
  return (
    <footer className="max_screen_width bg-background">
      <div className="w-full h-20" />
      <div className="relative w-full aspect-[16/1.79]">
        <Image src="/footer.png" alt="Image" fill className="object-contain" />
      </div>
      <div className="w-full bg-primary py-10 lg:py-18 mt-[-0.8px] border-b border-white">
        <Container className="grid lg:grid-cols-[auto_1fr_auto] grid-cols-1 gap-4 text-sm">
          <div className="flex flex-col gap-4">
            <h2 className="text-white uppercase tracking-widest text-lg">
              {websiteFooterData.lists[0].title}
            </h2>

            <ul className="space-y-2">
              {websiteFooterData.lists[0].links.map((item, index) => (
                <li className="text-white" key={index}>
                  {item.href && <Link href={item.href}>{item.label}</Link>}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex flex-col items-center gap-8 max-lg:order-first">
            <div className="w-65 relative aspect-4/2 lg:ml-50">
              <Image
                src={websiteFooterData.logo}
                alt="Image"
                fill
                className="object-contain"
              />
            </div>
            <div className="lg:absolute lg:-bottom-16 lg:left-[65%] lg:translate-x-[-65%]">
              <div className="w-85 relative aspect-[4/.8] mx-auto">
                <Image
                  src="/Vector-5.png"
                  alt="Image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-white uppercase tracking-widest text-lg">
              {websiteFooterData.lists[1].title}
            </h2>
            <ul className="flex flex-col gap-2">
              {websiteFooterData.lists[1].links.map((item, index) => (
                <li className="text-white  flex items-center" key={index}>
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.href && (
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.href2 && <span className="mr-2">,</span>}
                  {item.label2 && (
                    <Link
                      href={item.href2 || ""}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label2}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <ul className="flex items-center gap-8 text-secondary">
              {socialMedia.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center border border-white rounded-md w-10 h-10 justify-center"
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
      <div className="bg-primary">
        <Container className="py-4 flex max-md:flex-col items-center gap-3.5 justify-between">
          <div className="md:flex max-md:space-x-2 text-center flex-wrap items-end justify-center gap-2 text-white md:text-sm">
            {" "}
            <span className="text-white">
              © {new Date().getFullYear()}{" "}
              <span className="font-primary uppercase text-xl">Saraaya</span>
            </span>
            <span className="md:block hidden text-xl">|</span>
            <span className="text-white">All Rights Reserved</span>
            {/* <span className="md:block hidden">|</span> */}
          </div>
          <p className="text-white! text-sm">
            Crafted with care by{" "}
            <Link
              href="https://www.fielmente.com/"
              className="font-bold"
              target="_blank"
            >
              Fielmente
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default WebSiteFooter;
