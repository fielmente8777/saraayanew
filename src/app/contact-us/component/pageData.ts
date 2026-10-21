import { contact } from "@/utils/constent";

import { EmailIcon, LocationIcon, PhoneIcon } from "@/utils/icons";

// import { CallIcon, LocationIcon,MailIcon } from "@/utils/icons";
export const contactPageData = {
  visitData: {
    sectionLabel: "Enquire",

    title: {
      normal: "Come Away to ",
      highlighted: "SARAAYA",
    },
    description: [
      "Four private Safari Suites.",
      "A secluded mountain setting.",
      "The Kangra Valley beyond the crowds.",
      "Tell us when you would like to arrive, and let us help you plan your stay.",
    ],
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
        href: contact.addressLink,
      },
    ],
  },

  reservationsData: {
    title: "RESERVATIONS & ENQUIRIES",
    items: [
      "Four Private Safari Suites",
      "Secluded Mountain Valley Setting",
      "Glacier-Fed Stream & Forest Trails",
      "Private Group Buyouts & Celebrations",
    ],
  },

  enquiryForm: {
    title: "ENQUIRE NOW",
    subtitle: {
      normal: "Come Away to",
      highlighted: "Saraaya",
    },
    privacyNote:
      "Tell us when you would like to arrive, and let us help you plan your stay. We respect your privacy.",
  },

  img: {
    src: "/contactbg.jpg",
    alt: "contact-bg",
  },
  travelInfo: {
    mapUrl: contact.mapUrl,
  },
};
