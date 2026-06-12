"use client";
import { ExperiencesProps } from "@/@types/type";
import ExperiencesCard from "@/components/cards/ExperiencesCard";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { BtnNext, BtnPrevIcon } from "@/utils/icons";
import { Navigation } from "swiper/modules";

const ExperiencesSliders: React.FC<{ cards: ExperiencesProps["cards"] }> = ({
  cards,
}) => {
  return (
    <div className="w-full">
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={16}
        modules={[Navigation]}
        navigation={{
          nextEl: ".experiences-next",
          prevEl: ".experiences-prev",
        }}
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
      <div className="flex justify-center gap-4 mt-8 items-center">
        <button className="experiences-prev text-primary border px-5 py-2 rounded-full hover:bg-white active:scale-95">
          <span className="sr-only">Previous</span>
          <BtnPrevIcon />
        </button>
        <button className="experiences-next text-primary border px-5 py-2 rounded-full hover:bg-white active:scale-95">
          <span className="sr-only">Next</span>
          <BtnNext />
        </button>
      </div>
    </div>
  );
};

export default ExperiencesSliders;
