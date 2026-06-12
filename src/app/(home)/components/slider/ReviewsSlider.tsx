"use client";
import { TestimonialType } from "@/@types/type";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { useWebContext } from "@/context-api/WebContext";
import { FC, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
interface TestimonialsSliderProps {
  cards: TestimonialType["testimonials"];
}
const ReviewsSlider: FC<TestimonialsSliderProps> = ({ cards }) => {
  const { setCurrent, setTotal } = useWebContext();
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={24}
        loop
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: ".testimonials-next",
          prevEl: ".testimonials-prev",
        }}
        onSlideChange={(swiper) => setCurrent(swiper.realIndex + 1)}
        onSwiper={(swiper) => setTotal(swiper.slides.length)}
        autoplay={{ delay: 2500 }}
        speed={1000}
        className="w-full"
        renderSlide={(card) => (
          <div className=" text-white space-y-4">
            <p className="text-xl md:block hidden">{card.text}</p>
            <p className="text-xl md:hidden">
              {card.text.slice(0, readMore ? card.text.length : 100)}
              {card.text.length > 100 && <span className="" onClick={() => setReadMore(!readMore)}>  ...read more</span>}
            </p>
            <p className="capitalize">{card.name}</p>
          </div>
        )}
      />
    </div>
  );
};

export default ReviewsSlider;
