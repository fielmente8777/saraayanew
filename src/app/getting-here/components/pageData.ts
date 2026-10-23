import { contact } from "@/utils/constent";

export const gettingHerePageData = {
  hero: {
    image: "/getting-here/banner1.jpg",
    eyebrow: "A QUIETER SIDE OF DHARAMSHALA",
    title: "The Journey Becomes Part of the Arrival",
  },

  setting: {
    heading:
      'SARAAYA is located in Village Nauhali in the Kangra Valley, near <span class="italic text-secondary">Dharamshala</span>, Himachal Pradesh.',
    emblem: "/home/Vector-1.png",
    text1:
      "Kareri Lake lies beyond the property, and the glacier-fed waters flowing near SARAAYA originate from the surrounding high mountain region.",
    eyebrow: "THE SETTING",
    text2:
      "Away from the more crowded tourist circuits of Dharamshala, Nauhali offers a quieter mountain setting surrounded by forest, valleys and Himalayan landscapes.",
  },

  finalStretch: {
    eyebrow: "THE FINAL STRETCH",
    heading:
      'The Last Part Of The Journey Is Different From Arriving At A <span class="italic">Conventional</span> Hotel.',
    steps: [

      {
        number: "01",
        title: "The Meeting Point",
        description:
          "Arrive at the designated parking/meeting location shared by our team.",
      },
      {
        number: "02",
        title: "The Mountain Transfer",
        description:
          "Depending on weather and road conditions, our team may assist with a short 4x4 transfer.",
      },
      {
        number: "03",
        title: "The Final Walk",
        description:
          "A short walk through the surrounding landscape completes the journey to SARAAYA.",
      },
    ],
    noteLeft: "Our Team Assists With Luggage & Arrival Coordination.",
    noteRight:
      "Please contact us before your journey for the latest directions, weather conditions and arrival instructions.",
  },

  escapeBanner: {
    image: "/getting-here/banner2.jpg",
    title: "FAR AWAY FROM DUTY, CROWDS, AND CHAOS.",
    heading: "Come for the mountains. Stay for the slower pace.",
    cta: {
      label: "PLAN YOUR ESCAPE",
      href: contact.WhatsappCta,
    },
  },

  prepared: {
    eyebrow: "A FEW THINGS TO KNOW",
    heading: "Come Prepared for the Mountains",
    description:
      "SARAAYA is intentionally located away from the usual tourist routes. That seclusion is central to the experience, but it also means that some services can be different from what you would expect at a conventional hotel.",
    items: [
      {
        label: "BSNL",
        detail: "The most reliable mobile network in the area.",
      },
      {
        label: "Wi-Fi",
        detail:
          "Available at SARAAYA, although occasional interruptions can occur.",
      },
      {
        label: "Electricity",
        detail:
          "Power outages can occur, particularly during adverse weather. There is currently no power backup.",
      },
      {
        label: "Arrival",
        detail:
          "The final approach involves a short walk, with team assistance for luggage.",
      },
      {
        label: "Weather",
        detail:
          "Mountain conditions can change quickly, so arrival and outdoor experiences remain weather dependent.",
      },
    ],
  },
};
