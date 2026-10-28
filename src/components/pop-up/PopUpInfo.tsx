"use client";
import { useWebContext } from "@/context-api/WebContext";
import { stayInformation } from "@/content/stayInformation";
import { MdClose } from "react-icons/md";

const PopUpInfo = () => {
  const { openInfoPopup, setOpenInfoPopup } = useWebContext();
  const data = [
    {
      title: "Important Information Before Arrival",
      list: [
        "Once you reach the pickup location, our team will receive you and transfer you to the property via a short 2-minute 4x4 drive.",
        "After the drive, a scenic 5–10 minute walk through the fields leads to the site.",
        stayInformation.arrival,
      ],
    },
    {
      title: "Connectivity & Utilities",
      list: [
        stayInformation.wifi,
        stayInformation.power,
      ],
    },
  ];
  return (
    <div
      className={`fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ease-in-out ${openInfoPopup ? "visible scale-100" : "hidden scale-0"}`}
    >
      <div className="max-h-[85dvh] overflow-y-auto max-w-2xl w-full bg-white relative space-y-3.5 rounded-2xl p-6">
        <button
          onClick={() => setOpenInfoPopup(false)}
          className="absolute top-2 right-2 w-8 text-4xl aspect-square flex items-center justify-center bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
        >
          <span className="sr-only">Close</span>
          <MdClose />
        </button>

        {data.map((item, i) => (
          <div key={i} className="">
            <h2 className="text-2xl font-primary mb-4">{item.title}</h2>
            <ul className="list-disc pl-4">
              {item.list.map((list, i) => (
                <li key={i} className="mb-2">
                  {list}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopUpInfo;
