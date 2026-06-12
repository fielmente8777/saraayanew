"use client";
import { LazyLoadedVideo } from "@/components/Video";
import { Container, Section } from "@/components/sectionComponants";
import { useWebContext } from "@/context-api/WebContext";
import Image from "next/image";
import ReviewsSlider from "./slider/ReviewsSlider";

interface ReviewsSectionProps {
  title: string;
  reviews: {
    text: string;
    name: string;
  }[];
}
const ReviewsSection: React.FC<ReviewsSectionProps> = ({ title, reviews }) => {
  const { current, total } = useWebContext();

  return (
    <Section className="relative" defaultPadding={false}>
      <div className="relative reviews-bg bg-[#1F2D2A]">
        <Image
          src="/home/reviews-bg.png"
          alt="Image"
          fill
          className="object-cover"
        />
        <div className="md:py-20 py-10">
          <Container className="grid lg:grid-cols-2 grid-cols-1 gap-16 h-full items-center ">
            <div className="relative aspect-square w-full lg:block hidden">
              <LazyLoadedVideo
                src="/video/Saraya-Room-reel-2.mp4"
                poster="/video/Saraya-Room-reel-2.png"
                controls={false}
                muted
                autoPlay
              />
            </div>
            <div className="flex items-center justify-center ">
              <Container className="space-y-8">
                <div className="md:space-y-10 space-y-8">
                  <h2
                    className="text-3xl md:text-5xl text-white font-primary"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                  <div className="relative aspect-square w-full lg:hidden">
                    <LazyLoadedVideo
                      src="/video/Saraya-Room-reel-2.mp4"
                      poster="/video/Saraya-Room-reel-2.png"
                      controls={false}
                      muted
                      autoPlay
                    />
                  </div>
                  <span className="block">
                    <Foo />
                  </span>
                  <ReviewsSlider cards={reviews} />
                </div>
                <div className="flex items-center gap-6">
                  <button className="text-white border flex items-center justify-center gap-2 testimonials-prev px-5 py-5 active:scale-95 pointer-events-auto">
                    <PrevIcon />
                    <span className="sr-only">Previous</span>
                  </button>
                  <span className="text-white">
                    0{current} - 0{total}
                  </span>
                  <button className="text-white border flex items-center justify-center gap-2 testimonials-next px-5 py-5 active:scale-95 pointer-events-auto">
                    <span className="sr-only">Next</span>
                    <NextIcon />
                  </button>
                </div>
              </Container>
            </div>
          </Container>
        </div>
      </div>
    </Section>
  );
};

export default ReviewsSection;

export const NextIcon = () => (
  <svg
    width={8}
    height={14}
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.700012 12.7002L6.70001 6.7002L0.700012 0.700195"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PrevIcon = () => (
  <svg
    width={8}
    height={14}
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.7 12.7002L0.699997 6.7002L6.7 0.700195"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Foo = () => (
  <svg
    width={56}
    height={56}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M37.3337 7C36.096 7 34.909 7.49167 34.0338 8.36683C33.1587 9.242 32.667 10.429 32.667 11.6667V25.6667C32.667 26.9043 33.1587 28.0913 34.0338 28.9665C34.909 29.8417 36.096 30.3333 37.3337 30.3333C37.9525 30.3333 38.546 30.5792 38.9836 31.0168C39.4212 31.4543 39.667 32.0478 39.667 32.6667V35C39.667 36.2377 39.1753 37.4247 38.3002 38.2998C37.425 39.175 36.238 39.6667 35.0003 39.6667C34.3815 39.6667 33.788 39.9125 33.3504 40.3501C32.9128 40.7877 32.667 41.3812 32.667 42V46.6667C32.667 47.2855 32.9128 47.879 33.3504 48.3166C33.788 48.7542 34.3815 49 35.0003 49C38.7134 49 42.2743 47.525 44.8998 44.8995C47.5253 42.274 49.0003 38.713 49.0003 35V11.6667C49.0003 10.429 48.5087 9.242 47.6335 8.36683C46.7583 7.49167 45.5713 7 44.3337 7H37.3337Z"
      stroke="#BE6D28"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.6667 7C10.429 7 9.242 7.49167 8.36683 8.36683C7.49167 9.242 7 10.429 7 11.6667V25.6667C7 26.9043 7.49167 28.0913 8.36683 28.9665C9.242 29.8417 10.429 30.3333 11.6667 30.3333C12.2855 30.3333 12.879 30.5792 13.3166 31.0168C13.7542 31.4543 14 32.0478 14 32.6667V35C14 36.2377 13.5083 37.4247 12.6332 38.2998C11.758 39.175 10.571 39.6667 9.33333 39.6667C8.71449 39.6667 8.121 39.9125 7.68342 40.3501C7.24583 40.7877 7 41.3812 7 42V46.6667C7 47.2855 7.24583 47.879 7.68342 48.3166C8.121 48.7542 8.71449 49 9.33333 49C13.0464 49 16.6073 47.525 19.2328 44.8995C21.8583 42.274 23.3333 38.713 23.3333 35V11.6667C23.3333 10.429 22.8417 9.242 21.9665 8.36683C21.0913 7.49167 19.9043 7 18.6667 7H11.6667Z"
      stroke="#BE6D28"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
