import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import BannerSlider from "@/components/sliders/BannerSlider";
import { contact } from "@/utils/constent";
import { BtnNext, BtnPrevIcon } from "@/utils/icons";
import Image from "next/image";

interface BannerProps {
  images: string[];
}
const Banner: React.FC<BannerProps> = ({ images }) => {
  return (
    <Section
      defaultPadding={false}
      className="banner relative overflow-hidden lg:rounded-b-[56px] rounded-b-3xl"
    >
      <BannerSlider images={images} />
     
      <div className="md:flex hidden items-center gap-4 absolute bottom-5 md:right-20 right-10 z-20">
        <button
          className={`text-primary px-5 py-2 rounded-full bg-white active:scale-95 banner-prev`}
        >
          <BtnPrevIcon />
          <span className="sr-only">Previous</span>
        </button>
        <button
          className={`text-primary px-5 py-2 rounded-full bg-white active:scale-95 banner-next`}
        >
          <BtnNext />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </Section>
  );
};

export default Banner;
