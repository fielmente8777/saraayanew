import { Section } from "../sectionComponants";
import { LazyLoadedVideo } from "../Video";

interface VideoProps {
  video: {
    src: string;
    poster: string;
  };
}
const Video: React.FC<VideoProps> = ({ video }) => {
  return (
    <Section
      defaultPadding={false}
      className="top-0 z-0 overflow-hidden"
    >
      <div className="relative w-full lg:aspect-16/8 aspect-4/3 ">
        <LazyLoadedVideo
          src={video.src}
          poster={video.poster}
          controls={false}
          loop={true}
          autoPlay={true}
          muted
        />
      </div>
    </Section>
  );
};

export default Video;
