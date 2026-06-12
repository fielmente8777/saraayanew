import { ExperiencesProps } from "@/@types/type";
import Image from "next/image";

const ExperiencesCard: React.FC<ExperiencesProps["cards"][0]> = ({
  image,
  alt,
}) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full relative aspect-4/4.5 ">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover rounded-3xl"
          sizes="100%"
        />
      </div>
      <p className="text-center font-medium font-primary md:text-2xl text-xl">{alt}</p>
    </div>
  );
};

export default ExperiencesCard;
