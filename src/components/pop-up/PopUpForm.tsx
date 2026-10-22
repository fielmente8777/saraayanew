"use client";
import { useWebContext } from "@/context-api/WebContext";
import { MdClose } from "react-icons/md";
import dynamic from "next/dynamic";

const Form2 = dynamic(() => import("../forms/Form2"), {
  ssr: false,
});

const PopUpForm = () => {
  const { isOpenFormPopUp, setIsOpenFormPopUp } = useWebContext();
  if (!isOpenFormPopUp) return null;

  return (
    <section
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm visible opacity-100 transition-opacity duration-200"
    >
      <div className="max-w-md w-full p-4 bg-primary text-black relative rounded-2xl">
        <button
          onClick={() => setIsOpenFormPopUp(false)}
          className="absolute top-4 right-4 text-2xl text-white"
          aria-label="Close dialog"
        >
          <MdClose />
        </button>
        <div className="max-md:overflow-y-scroll hide-scroll mt-6">
          <Form2 gridView />
        </div>
      </div>
    </section>
  );
};

export default PopUpForm;
