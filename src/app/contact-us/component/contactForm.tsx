import Form3 from "@/components/forms/Form3";

type Props = {
  enquiryForm: {
    title: string;
    subtitle: {
      normal: string;
      highlighted: string;
    };
    privacyNote: string;
  };
};

export default function ContactForm({ enquiryForm }: Props) {
  return (
    <div className=" rounded-[16px] border-[0.5px] border-white/30 bg-background/70 p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 text-secondary">
          <span className="h-px w-10 bg-current" />
          <h2 className="font-body text-[14px] tracking-[0.1em] uppercase text-secondary">
            {enquiryForm.title}
          </h2>
        </div>

        <p className="font-primary text-[24px] text-primary">
          {enquiryForm.subtitle.normal}{" "}
          <span className="font-primary italic text-secondary">
            {enquiryForm.subtitle.highlighted}
          </span>
        </p>
      </div>

      {/* Form */}
      <Form3 />
    </div>
  );
}
