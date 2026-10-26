"use client";
import { useWebContext } from "@/context-api/WebContext";
import { MdClose } from "react-icons/md";
import Form2 from "../forms/Form2";
import { usePathname } from "next/navigation";

const PopUpForm = () => {
  const isWinter = usePathname().startsWith("/winter-landing-page");
  const { isOpenFormPopUp, setIsOpenFormPopUp } = useWebContext();
  return (
    <section
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm ${isOpenFormPopUp ? "visible opacity-100" : "invisible opacity-0"} `}
    >
      <div className="max-w-md w-full p-4 bg-primary text-black relative rounded-2xl">
        <button
          onClick={() => setIsOpenFormPopUp(false)}
          className="absolute top-4 right-4 text-2xl text-white"
        >
          <MdClose />
        </button>
        <div className="max-md:overflow-y-scroll hide-scroll mt-6">
          <Form2
            gridView
            submitLabel={isWinter ? "Get Winter Quote" : "Enquire Now"}
          />
        </div>
      </div>
    </section>
  );
};

export default PopUpForm;
