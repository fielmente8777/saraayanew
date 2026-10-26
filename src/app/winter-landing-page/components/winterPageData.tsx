import { landingPageData } from "@/app/landing-page/components/landingPageData";
import {
  winterWhatsappCta,
  warmUpWhatsappCta,
  takeoverWhatsappCta,
} from "./winterCtas";

// Amenities and arrival information follow Saraaya's published accommodation
// and contact pages. Date-specific rates and inclusions are quoted by the team.
export const winterPageData = {
  hero: {
    image: "/winter/hero-night-suite.webp",
    alt: "Saraaya's luxury tents illuminated on a Himalayan evening",
    location: "Nauhali, near Dharamshala · Winter 2026–27",
    title: "Heated Tents. <i>Cosy Himalayan Winters.</i>",
    description:
      "Trade the city rush for slow mountain mornings and cosy nights. Discover four private safari tents with heaters, king-size beds and attached bathrooms — your winter hideaway near Dharamshala.",
    note: "Just four tents · Couples, families & small groups",
    cta: { label: "Check Winter Availability", href: winterWhatsappCta },
  },

  formNote:
    "Request availability and a quote for your dates. An enquiry does not confirm a booking or require payment.",

  titles: [
    "HEATED SAFARI TENTS",
    "A QUIETER WINTER ESCAPE",
    "JUST FOUR PRIVATE TENTS",
    "PLAN CHRISTMAS & NEW YEAR",
  ],

  smog: {
    label: "A CHANGE OF PACE, A CHANGE OF SCENERY",
    title: "Less City Rush. <i>More Mountain Time.</i>",
    description:
      "Make room for an unhurried winter break. Tucked away in Nauhali in the Kangra Valley, Saraaya brings together forest surroundings, Himalayan views and the privacy of a small retreat.",
    points: [
      {
        title: "A quieter setting",
        text: "forest surroundings away from busy town centres",
      },
      {
        title: "Room to slow down",
        text: "just four tents for a more intimate stay",
      },
      {
        title: "Your kind of winter",
        text: "mountain views by day and cosy evenings together",
      },
    ],
    image: "/winter/valley-snow-peaks.webp",
    alt: "The Dhauladhar mountain range above the forested Kangra Valley",
    cta: { label: "Plan My Winter Stay", href: winterWhatsappCta },
  },

  warmth: {
    label: "MOUNTAIN ADVENTURE, THOUGHTFUL COMFORTS",
    title: "Your Cosy <i>Winter Hideaway</i>",
    description:
      "Enjoy the character of a safari tent with the everyday comforts that make a winter break feel inviting.",
    features: [
      {
        icon: "flame",
        title: "Heaters for winter",
        text: "Heaters in the tents help you settle in after a day in the mountain air.",
      },
      {
        icon: "home",
        title: "Your own private space",
        text: "A furnished safari tent with secure, lockable doors and a private deck.",
      },
      {
        icon: "bed",
        title: "A bed to linger in",
        text: "A king-size bed, premium linens and cosy blankets for slow mornings.",
      },
      {
        icon: "drop",
        title: "A private bathroom",
        text: "An attached bathroom with a spacious shower and hot water.",
      },
    ],
    images: [
      {
        src: "/winter/interior-warm.webp",
        alt: "A furnished Saraaya safari tent with a king-size bed and warm lighting",
      },
      {
        src: "/winter/interior-lamp.webp",
        alt: "Bedside lighting and soft bedding inside a Saraaya tent",
      },
    ],
    planning: {
      title: "A little planning for a mountain winter",
      text: "Pack warm layers and shoes with grip. Mountain weather can affect electricity and Wi-Fi, so speak with our team about current conditions and any specific comfort or access needs before travelling.",
      highlights: [
        { label: "Your space", value: "A private tent" },
        { label: "Your comfort", value: "Heater & cosy bedding" },
      ],
    },
  },

  rooms: {
    ...landingPageData.rooms,
    title: "Find Your <i>Winter Hideaway</i>",
    subtitle:
      "Four private tents, two view categories. Share your dates and guest details for availability, rates and meal-plan options.",
    cta: { label: "Ask About Tent Options", href: winterWhatsappCta },
  },

  offers: {
    warmUp: {
      label: "PLAN YOUR WINTER BREAK",
      title: "Make It a <i>Cosy Escape</i>",
      description:
        "A weekend for two or a longer mountain break? Tell us your dates and who is coming. Our team will help you choose a tent and plan your stay.",
      includes: [
        "A private safari tent with a heater",
        "King-size bed & cosy bedding",
        "Attached bathroom with hot water",
        "A private deck with mountain views",
        "Arrival pickup & luggage assistance",
        "Ask about meals & curated experiences",
      ],
      priceLabel: "Your winter stay",
      price: "Request a quote",
      priceNote:
        "Rates depend on your dates, tent and guest count. Confirm meal plans, experience charges, taxes and booking terms with our team before paying.",
      cta: { label: "Get My Winter Quote", href: warmUpWhatsappCta },
    },
    takeover: {
      image: "/winter/lounge-blue-hour.webp",
      label: "FAMILY REUNIONS · FRIENDS · FESTIVE BREAKS",
      title: "Bring your favourite people",
      description:
        "Planning Christmas, New Year or a small group getaway? Ask about reserving all four tents together, subject to availability.",
      cta: { label: "Enquire for All Four Tents", href: takeoverWhatsappCta },
    },
  },

  experiences: {
    label: "Ideas for Your Winter Stay",
    title: "Slow Mornings. <i>Memorable Evenings.</i>",
    cards: [
      {
        image: "/winter/snow-peaks.webp",
        alt: "Mountain Views",
        desc: "Take in the Dhauladhar landscape from your deck. Views and snow conditions vary with the weather.",
      },
      {
        image: "/winter/bonfire.webp",
        alt: "Bonfire Evenings",
        desc: "Ask our hosts to arrange a bonfire for a cosy evening together, subject to weather and availability.",
      },
      {
        image: "/winter/stargazing.webp",
        alt: "Stargazing",
        desc: "On a clear night, look up from the city lights. Ask about a guided stargazing session during your stay.",
      },
      {
        image: "/winter/riverside-grill.webp",
        alt: "Meals at Saraaya",
        desc: "Discuss meal plans and dietary preferences with the team. Food and beverages for experience setups are charged separately.",
      },
      {
        image: "/winter/movie-night.webp",
        alt: "Outdoor Movie Setup",
        desc: "Make an evening of it with a private outdoor movie setup. Confirm arrangements and charges in advance.",
      },
      {
        image: "/winter/cultural-night.webp",
        alt: "Local Culture",
        desc: "Ask about a village tour or cultural evening to discover more of the surrounding area.",
      },
    ],
    cta: { label: "Ask About Winter Experiences", href: winterWhatsappCta },
  },

  hosts: {
    image: "/winter/aerial-night.webp",
    label: "HOSTED BY THE SARAAYA FAMILY",
    title: "Four Tents. <span>Thoughtful Hospitality.</span>",
    description: [
      {
        text: "A small retreat makes room for personal attention. Speak with our hosts before you arrive, from choosing your tent to planning the final stretch of your journey.",
      },
      {
        text: "Come for a quiet weekend, time together or a slower festive break. Let us know what would make your stay special.",
      },
    ],
    cta: { label: "Speak to Our Hosts", href: winterWhatsappCta },
  },

  gettingHere: {
    image: "/winter/tents-in-valley.webp",
    alt: "Saraaya's tents among terraced fields and forest",
    label: "Getting Here in Winter",
    title: "A Little Adventure. <i>A Warm Welcome.</i>",
    steps: [
      {
        title: "Plan your journey",
        text: "Fly into Kangra Airport or drive towards Dharamshala. Ask our team for the recommended route and pickup location.",
      },
      {
        title: "Check conditions before travelling",
        text: "Mountain weather can affect road access. Confirm the latest route and arrival arrangements with us before setting off.",
      },
      {
        title: "A short 4x4 transfer",
        text: "Our team meets you at the pickup point for an approximately 2-minute ride, followed by a 5–10 minute walk through the fields.",
      },
      {
        title: "Help with the final stretch",
        text: "A porter assists with your luggage. Tell us about any mobility needs in advance so we can help you assess the walk.",
      },
    ],
    pack: {
      title: "Pack for a mountain winter",
      text: "Bring a warm jacket, layers, a beanie and shoes with grip. Carry personal essentials and medicines. Wi-Fi and mobile connectivity can vary in this remote setting.",
    },
  },

  testimonialData: {
    ...landingPageData.testimonialData,
    cta: { label: "Plan Your Stay", href: winterWhatsappCta },
  },

  faq: {
    title: "Your Winter <i>Questions</i>",
    items: [
      {
        q: "Are the tents heated for winter?",
        a: "Yes. Saraaya's tents have heaters, king-size beds and cosy bedding. Bring warm clothing for outdoor time. Indoor comfort depends on the weather and power supply; our team can advise on conditions for your dates.",
      },
      {
        q: "What is the winter tariff?",
        a: "Rates vary by date, tent, guest count and meal plan. Send your preferred dates on WhatsApp or through the enquiry form for a quote with inclusions, taxes and booking terms.",
      },
      {
        q: "What happens if the power goes out?",
        a: "Electricity interruptions can occur during adverse mountain weather, and Wi-Fi may also be affected. Contact the team before arrival to discuss current conditions and any essential power or comfort requirements.",
      },
      {
        q: "Can we reach Saraaya in winter?",
        a: "Arrival includes a short 4x4 transfer and a 5–10 minute walk with luggage assistance. Road access and outdoor conditions depend on the weather. Confirm your route and pickup arrangements with our team before travelling.",
      },
      {
        q: "Are meals and experiences included?",
        a: "Inclusions depend on the plan you book. Ask for your meal plan and any experience charges in your quote. Food and beverages for experience setups are charged separately, and outdoor activities depend on weather and availability.",
      },
      {
        q: "Is the stay suitable for children and older guests?",
        a: "The tents have private bathrooms and heaters, but reaching the property includes a walk through the fields and uneven terrain. Discuss the ages and mobility needs of your group with our hosts before booking.",
      },
      {
        q: "What are the cancellation and payment terms?",
        a: "Ask our team for the cancellation, refund, date-change and payment terms that apply to your dates and selected plan. Review these details in your booking confirmation before making payment.",
      },
      {
        q: "Can we bring a pet?",
        a: "Please check directly with our team before planning a stay with a pet. Any pet arrangements must be confirmed before booking.",
      },
    ],
  },

  closing: {
    image: "/winter/final-bonfire.webp",
    label: "JUST FOUR TENTS · PLAN YOUR WINTER BREAK",
    title: "Your Cosy <span>Winter Escape Awaits.</span>",
    description: [
      {
        text: "Send your dates and guest count. We'll help you find your tent, share a quote and plan the details of your winter stay.",
      },
    ],
    cta: { label: "Check Winter Availability", href: winterWhatsappCta },
  },
};
