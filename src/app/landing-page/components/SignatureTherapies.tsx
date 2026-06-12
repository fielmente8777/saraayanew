"use client";
import { SignatureTherapiesDataType } from "@/@types/type";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { BtnNext, BtnPrevIcon } from "@/utils/icons";
import Image from "next/image";
import { EffectFade, Navigation } from "swiper/modules";

const SignatureTherapies: React.FC<SignatureTherapiesDataType> = ({
  title,
  cta,
  therapies,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-background2 pointers-events-none">
      <SwiperCarousel
        data={therapies}
        slidesPerView={1}
        spaceBetween={0}
        modules={[Navigation, EffectFade]}
        navigation={{
          nextEl: ".therapies-next",
          prevEl: ".therapies-prev",
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={800}
        className=""
        renderSlide={(therapie) => (
          <div className="w-full">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-4">
              <div className="w-full relative aspect-4/3.5 image-border max-md:hidden">
                <Image
                  src={therapie.src}
                  alt={therapie.name}
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
              <div className="w-full flex flex-col justify-center space-y-6">
                <SectionHeading title={title} fontPrimary />
                <div className="w-full relative aspect-4/3.75 image-border md:hidden">
                  <Image
                    src={therapie.src}
                    alt={therapie.name}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="w-12 aspect-4/4 relative ">
                  <Image
                    src={therapie.icon}
                    alt={therapie.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="md:text-3xl text-[1.375rem] font-semibold font-primary text-secondary">
                  {therapie.name}
                </p>
                <div className="space-y-2">
                  <p className="text-xl">
                    <b>{therapie.subTitle}</b>
                  </p>
                  <p className="text-light">{therapie.description}</p>
                </div>
                <div className="flex items-center justify-between w-full">
                  <LinkButton
                    href={cta.href}
                    label={cta.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-primary rounded-full uppercase"
                  />
                  <div className="flex items-center gap-4">
                    <button className="therapies-prev text-primary border px-5 py-2 rounded-full hover:bg-white active:scale-95">
                      <BtnPrevIcon />
                      <span className="sr-only">Previous</span>
                    </button>
                    <button className="therapies-next text-primary border px-5 py-2 rounded-full hover:bg-white active:scale-95">
                      <BtnNext />
                      <span className="sr-only">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      />
    </SectionWithContainer>
  );
};

export default SignatureTherapies;
