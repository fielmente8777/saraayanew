import { contact } from "@/utils/constent";

export const couplesPageData = {
  hero: {
    image: "/couples/banner.jpg",
    eyebrow: "COUPLES & PRIVATE GROUPS",
    heading: "Time and Space to Be Together",
    subheading: "Away From The Crowd. Shaped Around You",
  },

  couples: {
    eyebrow: "FOR COUPLES",
    heading: "Time, Just for\nYourselves.",
    emblem: "/home/Vector-1.png",
    paragraphs: [
      "A weekend away, an anniversary, a quiet celebration or simply a few days with nowhere else to be.",
      "SARAAYA gives couples the space to slow down and spend meaningful time together, surrounded by forest, mountain air, flowing water and open skies.",
      "Choose an experience, explore the valley or simply stay on your private deck and let the day unfold.",
    ],
    image: "/couples/couple.png",
    imageAlt: "Romantic riverside dining experience for couples at SARAAYA",
    cta: {
      label: "ENQUIRE FOR YOUR STAY",
      href: contact.WhatsappCta,
    },
  },

  groups: {
    eyebrow: "FOR FAMILIES & PRIVATE GROUPS",
    heading: "Space to Be\nTogether.",
    paragraphs: [
      "For families and small groups looking to reconnect, SARAAYA offers a private mountain setting where the day can unfold at your own pace.",
      "With only four Safari Suites, the entire SARAAYA glamp can be reserved exclusively for your group, giving you private access to the property and its outdoor spaces.",
      "Private group stays can also include customised dining and selected experiences arranged in advance.",
    ],
    note: "Private buyouts are subject to seasonal availability and prior confirmation with the SARAAYA team.",
    image: "/couples/family.jpg",
    imageAlt: "Family and group hiking through Himalayan village near SARAAYA",
    cta: {
      label: "ENQUIRE FOR A PRIVATE STAY",
      href: contact.WhatsappCta,
    },
  },
};
