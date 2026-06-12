import { contact } from "@/utils/constent";

import { EmailIcon, LocationIcon, PhoneIcon } from "@/utils/icons";

// import { CallIcon, LocationIcon,MailIcon } from "@/utils/icons";
export const contactPageData = {
  visitData: {
    sectionLabel: "Contact",

    title: {
      normal: "Get In ",
      highlighted: "TOUCH",
    },
    links: [
      {
        icon: PhoneIcon,
        label: contact.phone[0],
        href: "tel:" + contact.phone[0],
        label2: contact.phone[1],
        href2: "tel:" + contact.phone[1],
      },
      {
        icon: EmailIcon,
        label: "info@saraayaglamps.com",
        href: "mailto:info@saraayaglamps.com",
      },
      {
        icon: LocationIcon,
        label: "Village Nauhali, Dharamshala 176217",
        href: "#",
      },
    ],
  },

  reservationsData: {
    title: "RESERVATIONS & ENQUIRIES",
    items: [
      "Room Bookings",
      "Restaurant Bookings",
      "Private Events",
      "On-site Parking Available",
    ],
  },

  enquiryForm: {
    title: "ENQUIRE NOW ",
    subtitle: {
      normal: "Let's Plan your Stay at",
      highlighted: "Saraaya",
    },
    privacyNote: "We respect your privacy. Your information is never shared.",
  },

  img: {
    src: "/contactbg.jpg",
    alt: "contact-bg",
  },
  travelInfo: {
    mapUrl: contact.mapUrl,
  },
};
