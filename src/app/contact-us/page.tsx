import { Section, SectionWithContainer } from "@/components/sectionComponants";
import ContactInfo from "./component/contactInfo";
import { contactPageData } from "./component/pageData";
import ContactMap from "./component/contactMap";
import ContactForm from "./component/contactForm";
import Image from "next/image";
import { contact } from "@/utils/constent";
import TitleSection from "@/components/TitleSection";
import { homePageData } from "../(home)/components/pageData";

export default function ContainerPage() {
  return (
    <main>
      <TitleSection titles={homePageData.titles} />
      <SectionWithContainer sectionClassName="bg-background py-12">
        <div className="grid grid-cols-1 xl:grid-cols-[380px_1fr] gap-14 items-start">
          <ContactInfo
            visitData={contactPageData.visitData}
            reservationsData={contactPageData.reservationsData}
          />

          <ContactMap mapUrl={contact.mapUrl} />
        </div>
      </SectionWithContainer>
      <TitleSection titles={homePageData.titles} />
      <Section className=" relative w-full lg:aspect-16/8 aspect-4/8">
        <Image
          src={contactPageData.img.src}
          alt={contactPageData.img.alt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 ">
          <div className="w-full max-w-3xl">
            <ContactForm enquiryForm={contactPageData.enquiryForm} />
          </div>
        </div>
      </Section>
      <TitleSection titles={homePageData.titles} colorChange />
    </main>
  );
}
