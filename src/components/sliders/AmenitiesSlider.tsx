import { Props } from "@/@types/type";
import "./sliding.title.scss";

const AmenitiesSlider: React.FC<{ amenities: Props["amenities"] }> = ({
  amenities,
}) => {
  return (
    <div className="relative overflow-hidden border-y-[0.5px] border-[#cacaca] py-0.5 text-primary w-full">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {amenities.map((t, i) => (
            <span
              key={i}
              className="marquee-item font-primary text-xl"
            >
              <span className="separator">{t.icon}</span>
              <span>{t.title}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesSlider;
