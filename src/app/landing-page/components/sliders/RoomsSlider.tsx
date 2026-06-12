"use client";
import { RoomsType } from "@/@types/type";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { BtnNext, BtnPrevIcon } from "@/utils/icons";
import Image from "next/image";
import { Navigation } from "swiper/modules";

const RoomsSlider: React.FC<RoomsType["cards"][0] & { index: number }> = ({
  images,
  title,
  index,
}) => {
  return (
    <div className="w-full relative ">
      <SwiperCarousel
        data={images}
        slidesPerView={1}
        spaceBetween={0}
        modules={[Navigation]}
        navigation={{
          nextEl: ".rooms-next" + index,
          prevEl: ".rooms-prev" + index,
        }}
        loop={true}
        speed={800}
        renderSlide={(image) => (
          <div className="relative w-full aspect-4/3.5 md:rounded-3xl rounded-2xl overflow-hidden">
            <Image src={image} alt="Image" className="object-cover" fill />
          </div>
        )}
      />
      <div className="absolute inset-x-4 bottom-4 z-10 flex items-center justify-between">
        <p className="bg-primary rounded-3xl px-4 py-2 text-white max-sm:w-full max-sm:text-center">
          {title}
        </p>
      </div>
      <div className="absolute md:right-4 max-md:-inset-x-3 md:bottom-4 max-md:top-1/2 max-md:-translate-y-1/2 z-10 flex items-center max-md:justify-between gap-4">
        <button
          className={`text-primary box-shadow px-5 py-2 rounded-full bg-white active:scale-95 rooms-prev${index}`}
        >
          <BtnPrevIcon />
          <span className="sr-only">Previous</span>
        </button>
        <button
          className={`text-primary box-shadow px-5 py-2 rounded-full bg-white active:scale-95 rooms-next${index}`}
        >
          <BtnNext />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default RoomsSlider;
