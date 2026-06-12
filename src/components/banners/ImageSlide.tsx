import { Container, Section } from "../sectionComponants";
import BannerSlider from "../sliders/BannerSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
interface ImageSlideProps {
  images: string[];
}

const ImageSlide = ({ images }: ImageSlideProps) => {
  return (
    <Section defaultPadding={false} className="relative overflow-hidden">
      <BannerSlider images={images} />
        <div className="absolute inset-0 bg-black opacity-30 z-10" />
      <div className="absolute inset-0 flex flex-col items-center justify-center  z-20">
        <Container className="text-center flex flex-col items-center gap-4">
          <h1 className="font-primary md:text-5xl text-2xl text-white">
            360° Mountain Views • Pure Nature • Slow Living
          </h1>
          <p className="md:text-lg text-white capitalize tracking-widest">
            Where mountains surround and time slows down.
          </p>
        </Container>
      </div>

      <div className="md:flex hidden items-center gap-4 absolute bottom-5 md:right-20 right-10 z-20">
        <button
          className={`text-white lg:text-4xl text-xl px-1 py-1 active:scale-95 banner-prev`}
        >
          <IoIosArrowBack />
          <span className="sr-only">Previous</span>
        </button>
        <button
          className={`text-white lg:text-4xl text-xl px-1 py-1 active:scale-95 banner-next`}
        >
          <IoIosArrowForward />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </Section>
  );
};

export default ImageSlide;
