import { Props } from "@/@types/type";
import { SectionWithContainer } from "@/components/sectionComponants";
import AmenitiesSlider from "@/components/sliders/AmenitiesSlider";
import ImageSlider from "@/components/sliders/ImageSlider";
import Link from "next/link";




const RoomCardSection: React.FC<{ cards: Props[] }> = ({ cards }) => {
  return (
    <>
      {cards.map((card, index) => (
        <SectionWithContainer
          key={index}
          sectionClassName="bg-background relative"
          containerClassName={`xl:max-w-[1410px]! ${index % 2 === 0 ? "lg:mr-0!" : "lg:ml-0!"}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
            <div
              className={`flex flex-col gap-4 lg:col-span-3 justify-between w-full ${index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"}`}
            >
              <h2 className="lg:text-[2.5rem] text-2xl text-primary flex items-center gap-4">
                <span className="text-secondary text-lg">{card.id}</span>
                <span className="font-primary">{card.title}</span>
              </h2>
              <div
                className={`w-full lg:col-span-4 lg:hidden relative aspect-4/3 `}
              >
                <ImageSlider images={card.images} />
              </div>
              <p className="text-primary lg:text-lg">{card.description}</p>
              {/* <ul className="flex flex-wrap items-center justify-between border-y-[0.5px] border-[#cacaca]">
                {card.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center gap-2 py-2">
                    {amenity.icon}
                    <span className="text-primary">{amenity.title}</span>
                  </li>
                ))}
              </ul> */}
              <div className="overflow-hidden!">
                <AmenitiesSlider amenities={card.amenities} />
              </div>
              <div className="flex max-lg:flex-col gap-6 items-center justify-between">
                {card.ctas.map((cta, index) => (
                  <Link
                    key={index}
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg flex items-center gap-2 ${index === 0 ? "text-primary border-b border-secondary" : "text-secondary border border-secondary rounded-lg px-4 py-2"}`}
                  >
                    {index === 1 && (
                      <span>
                        <CallIcon />
                      </span>
                    )}
                    {cta.label}
                  </Link>
                ))}
              </div>
            </div>
            <div
              className={`w-full lg:col-span-4 lg:block hidden relative aspect-4/3 ${index % 2 === 0 ? "lg:order-last" : "lg:order-first"}`}
            >
              <ImageSlider images={card.images} />
            </div>
          </div>
        </SectionWithContainer>
      ))}
    </>
  );
};

export default RoomCardSection;

export const CallIcon = () => (
  <svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.3535 18.3332C15.8082 18.3332 14.224 17.9463 12.6011 17.1724C10.9781 16.3985 9.47026 15.3122 8.07753 13.9137C6.68496 12.5153 5.60169 11.0076 4.82772 9.3904C4.0539 7.77325 3.66699 6.192 3.66699 4.64665C3.66699 4.36661 3.75866 4.13324 3.94199 3.94654C4.12533 3.75985 4.35449 3.6665 4.62949 3.6665H6.89641C7.14559 3.6665 7.36299 3.74496 7.54862 3.90186C7.7344 4.05876 7.86021 4.26005 7.92605 4.50571L8.38072 6.6915C8.42304 6.94771 8.4154 7.17161 8.3578 7.36319C8.30021 7.55477 8.19853 7.71168 8.05278 7.8339L6.04162 9.7094C6.4176 10.3922 6.83331 11.0265 7.28874 11.6124C7.74417 12.1983 8.22985 12.7533 8.74578 13.2773C9.27806 13.8097 9.85098 14.3048 10.4645 14.7625C11.0779 15.2202 11.7513 15.6525 12.4846 16.0591L14.4449 14.0636C14.5942 13.9025 14.7619 13.7965 14.9482 13.7455C15.1344 13.6943 15.3404 13.684 15.566 13.7145L17.4944 14.1094C17.7436 14.1705 17.9458 14.296 18.1011 14.4859C18.2561 14.6757 18.3337 14.8934 18.3337 15.139V17.3707C18.3337 17.6457 18.2403 17.8748 18.0536 18.0582C17.8669 18.2415 17.6336 18.3332 17.3535 18.3332ZM5.61147 8.84911L7.37078 7.23096C7.42945 7.18391 7.46764 7.11928 7.48537 7.03709C7.50294 6.95474 7.49996 6.87835 7.47643 6.80792L7.0692 4.86527C7.04567 4.77116 7.00458 4.70066 6.94591 4.65375C6.88709 4.6067 6.8107 4.58317 6.71674 4.58317H4.83574C4.76516 4.58317 4.70642 4.6067 4.65951 4.65375C4.61246 4.70066 4.58893 4.7594 4.58893 4.82998C4.6065 5.45637 4.70466 6.11034 4.88341 6.79188C5.06201 7.47357 5.30469 8.15932 5.61147 8.84911ZM13.3573 16.4893C13.9765 16.7961 14.6367 17.0229 15.3378 17.1697C16.0387 17.3167 16.6495 17.3954 17.1702 17.406C17.2408 17.406 17.2995 17.3824 17.3464 17.3354C17.3935 17.2883 17.417 17.2296 17.417 17.1591V15.3187C17.417 15.2248 17.3935 15.1484 17.3464 15.0895C17.2995 15.0309 17.229 14.9898 17.1349 14.9663L15.4391 14.6188C15.3686 14.5953 15.307 14.5924 15.2541 14.6101C15.2011 14.6277 15.1453 14.6659 15.0866 14.7247L13.3573 16.4893Z"
      fill="#BE6D28"
    />
  </svg>
);
