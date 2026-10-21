"use client";
import { TestimonialType } from "@/@types/type";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { FC, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
interface TestimonialsSliderProps {
  cards: TestimonialType["testimonials"];
  onSwiper?: (swiper: any) => void;
  onSlideChange?: (swiper: any) => void;
}

const ReviewsSlider: FC<TestimonialsSliderProps> = ({
  cards,
  onSwiper,
  onSlideChange,
}) => {
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
          prevEl: "#reviews-prev",
          nextEl: "#reviews-next",
        }}
        onSlideChange={onSlideChange}
        onSwiper={onSwiper}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        speed={800}
        allowTouchMove={true}
        className="w-full"
        renderSlide={(card) => (
          <div className="text-white space-y-4">
            <p className="text-xl md:block hidden leading-relaxed">{card.text}</p>
            <p className="text-xl md:hidden leading-relaxed">
              {card.text.slice(0, readMore ? card.text.length : 120)}
              {card.text.length > 120 && (
                <span
                  className="text-secondary cursor-pointer font-medium ml-1 inline-block"
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? " ...show less" : " ...read more"}
                </span>
              )}
            </p>
            <p className="capitalize font-medium text-white/90">{card.name}</p>
          </div>
        )}
      />
    </div>
  );
};

export default ReviewsSlider;
