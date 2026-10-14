"use client";

import { ExperiencesProps } from "@/@types/type";
import ExperiencesCard from "@/components/cards/ExperiencesCard";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { BtnNext, BtnPrevIcon } from "@/utils/icons";
import { Autoplay, Navigation } from "swiper/modules";

const ExperiencesSliders: React.FC<{
  cards: ExperiencesProps["cards"];
}> = ({ cards }) => {
  return (
    <div className="w-full relative">
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={16}
        modules={[Navigation , Autoplay]}
        navigation={{
          nextEl: ".experiences-next",
          prevEl: ".experiences-prev",
        }}
        autoplay={{ delay: 2500 }}
        loop={true}
        speed={800}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        renderSlide={(card) => <ExperiencesCard {...card} />}
      />

      {/* Navigation */}
      <div
        className="
          z-10 flex items-center gap-4

          /* Mobile */
          absolute
          max-md:inset-x-[-12px]
          max-md:top-1/2
          max-md:-translate-y-1/2
          max-md:justify-between

          /* md and above */
          md:relative
          md:inset-x-auto
          md:top-auto
          md:translate-y-0
          md:justify-center
          md:mt-8
         
        "
      >
        <button
          className="
            experiences-prev
            text-primary
            box-shadow
            px-5 py-2
            rounded-full
            bg-white
            md:bg-transparent md:hover:bg-white  md:border border-black
            active:scale-95
          "
        >
          <BtnPrevIcon />
          <span className="sr-only">Previous</span>
        </button>

        <button
          className="
            experiences-next
            text-primary
            box-shadow
            px-5 py-2
            rounded-full
            md:bg-transparent md:hover:bg-white  md:border border-black
            bg-white
            active:scale-95
          "
        >
          <BtnNext />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ExperiencesSliders;
