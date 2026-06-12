import { TestimonialType } from "@/@types/type";

const TestimonialCard: React.FC<TestimonialType["testimonials"][0]> = ({
  name,
  text: description,
}) => {
  return (
    <div className="space-y-4">
      <p className="text-light">{description}</p>
      <p className="text-secondary font-semibold text-[1.063rem]" >{name}</p>
    </div>
  );
};

export default TestimonialCard;
