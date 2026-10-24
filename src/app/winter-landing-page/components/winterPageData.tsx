import { landingPageData } from "@/app/landing-page/components/landingPageData";

const winterWhatsappText = encodeURIComponent(
  "Hello Saraaya Team\nI'd like to check winter dates for your heated tents."
);
const warmUpWhatsappText = encodeURIComponent(
  "Hello Saraaya Team\nI'm interested in the Winter Warm-Up package."
);
const takeoverWhatsappText = encodeURIComponent(
  "Hello Saraaya Team\nWe'd like to book all four tents this winter."
);

export const winterWhatsappCta = `https://wa.me/+918988334372?text=${winterWhatsappText}`;
const warmUpWhatsappCta = `https://wa.me/+918988334372?text=${warmUpWhatsappText}`;
const takeoverWhatsappCta = `https://wa.me/+918988334372?text=${takeoverWhatsappText}`;

// Items in [square brackets] are still to be confirmed with the property before going live.
export const winterPageData = {
  hero: {
    image: "/winter/hero-night-suite.webp",
    alt: "A Saraaya tent glowing warm at blue hour under the Himalayan night sky",
    location: "Saraaya Glamps Dharamshala · Winter 2026–27",
    title: "Heated Tents for a Himalayan <i>Winter</i>",
    description:
      "Leave the city smog for single-digit Himalayan air, cedar breeze and skies full of stars. Four heated, insulated safari tents beside a glacier-fed stream — warm inside, however cold the night.",
    note: "Only four tents a night · Christmas & New Year fill first",
    cta: { label: "Check Winter Dates", href: winterWhatsappCta },
  },

  formNote:
    "No payment to ask. Share your dates and we'll reply with availability and your winter rate.",

  titles: [
    "HEATED TENTS",
    "ESCAPE THE SMOG",
    "ONLY FOUR TENTS AVAILABLE PER NIGHT",
    "CHRISTMAS & NEW YEAR",
  ],

  smog: {
    label: "SWAP THE AQI FOR ALTITUDE",
    title: "Escape the Smog. Skip the <i>Crowds.</i>",
    description:
      "From November the plains fill with smog, and the popular hill towns fill with holiday traffic. Saraaya sits in a quiet fold of the Kangra Valley, beyond both.",
    points: [
      {
        title: "Single-digit Himalayan air",
        text: "cedar and pine breeze in place of city AQI",
      },
      {
        title: "No lobbies, no tour buses",
        text: "just four tents across the valley",
      },
      {
        title: "Skies you can actually see",
        text: "180° views by day, stars by night",
      },
    ],
    image: "/winter/valley-snow-peaks.webp",
    alt: "Snow-capped Dhauladhar peaks above the forested Kangra Valley",
    cta: { label: "Book Now", href: winterWhatsappCta },
  },

  warmth: {
    label: "“Won't a tent be freezing?”",
    title: "Built for <i>Winter</i>, Not Just Summer",
    description:
      "It's the first thing everyone asks. Here's exactly what keeps you warm, from the canvas to the bed.",
    features: [
      {
        icon: "flame",
        title: "A heater in every tent",
        text: "All-season climate control, with a dedicated winter heater in each tent.",
      },
      {
        icon: "home",
        title: "Insulated & wind-proofed",
        text: "Insulated canvas and solid timber-framed, lockable doors that keep the mountain wind outside.",
      },
      {
        icon: "bed",
        title: "A bed for cold nights",
        text: "King-size bed with layered linens and cold-weather down blankets.",
      },
      {
        icon: "drop",
        title: "Hot water, round the clock",
        text: "Private attached bathroom with a walk-in shower and hot water 24/7.",
      },
    ],
    images: [
      {
        src: "/winter/interior-warm.webp",
        alt: "Tent interior with warm lamps, canopy drapes and a made-up king bed",
      },
      {
        src: "/winter/interior-lamp.webp",
        alt: "Bedside lamp glowing beside a heavy duvet",
      },
    ],
    power: {
      title: "Warmth that doesn't depend on the weather",
      text: "Mountain power can dip in winter storms. Saraaya runs on [generator / inverter] backup that keeps heaters, lights and hot water going through an outage.",
      outside: { label: "Outside, a January night", value: "[Y°C]" },
      inside: { label: "Inside your tent", value: "[X°C]" },
    },
  },

  rooms: {
    ...landingPageData.rooms,
    title: "Your Winter <i>Tent</i>",
    subtitle:
      "Winter rates from [₹X,XXX] per night for two, home-style meals included",
    cta: { label: "Book Now", href: winterWhatsappCta },
  },

  offers: {
    warmUp: {
      label: "WINTER OFFER · VALID TILL [28 FEB 2027]",
      title: "The Winter <i>Warm-Up</i>",
      description:
        "Everything for a cold-weather escape in one price, so there's nothing left to plan.",
      includes: [
        "Heated, insulated tent",
        "Home-style vegetarian meals",
        "A bonfire evening under the stars",
        "Movie night, wrapped in blankets",
        "4x4 pickup & porter",
        "[Stay 3 nights, pay for 2]",
      ],
      priceLabel: "For two, per night",
      price: "[₹X,XXX]",
      priceNote: "[Taxes extra]",
      cta: { label: "Reserve the Warm-Up", href: warmUpWhatsappCta },
    },
    takeover: {
      image: "/winter/lounge-blue-hour.webp",
      label: "FOR NEW YEAR & GROUPS",
      title: "Have the valley to yourselves",
      description:
        "Book all four tents for a private takeover — family, friends, or a New Year with no strangers in sight.",
      cta: { label: "Ask About a Takeover", href: takeoverWhatsappCta },
    },
  },

  experiences: {
    label: "Winter Experiences",
    title: "Crisp Mornings. <i>Warm Evenings.</i>",
    cards: [
      {
        image: "/winter/snow-peaks.webp",
        alt: "Snowline Views",
        desc: "The Dhauladhar ridge turns white. Watch the light move across it from your veranda, chai in hand.",
      },
      {
        image: "/winter/bonfire.webp",
        alt: "Bonfire Nights",
        desc: "Cold mountain air, a crackling fire and nowhere you need to be.",
      },
      {
        image: "/winter/stargazing.webp",
        alt: "The Clearest Skies of the Year",
        desc: "Dry winter air and no city glow for miles — stargazing at its best.",
      },
      {
        image: "/winter/riverside-grill.webp",
        alt: "Mountain Meals",
        desc: "Home-style vegetarian meals included; trout, mutton and chicken à la carte. Bring your own bottle.",
      },
      {
        image: "/winter/movie-night.webp",
        alt: "Movie Under the Stars",
        desc: "The open-air screening by the fire, wrapped in heavy throws.",
      },
      {
        image: "/winter/cultural-night.webp",
        alt: "Cultural Night",
        desc: "Folk dance and valley stories from Nauhali, home of the Gaddi shepherds.",
      },
    ],
    cta: { label: "Book Now", href: winterWhatsappCta },
  },

  hosts: {
    image: "/winter/aerial-night.webp",
    label: "Serenity in Wilderness",
    title: "Built by a Fam<span>ily Who Came H</span>ome",
    description: [
      {
        text: "After years in corporate Dubai, Sabhay brought his family back to the Dhauladhar and built Saraaya beside the stream near Nauhali. Guests mention him by name — for answering every question before the trip, and for being at the pickup point when they arrive.",
      },
      {
        text: "“I had everything Dubai could give. But every morning I woke up thinking about the smell of deodar after rain.” — Sabhay, founder",
        italic: true,
      },
    ],
    cta: { label: "Book Now", href: winterWhatsappCta },
  },

  gettingHere: {
    image: "/winter/tents-in-valley.webp",
    alt: "Saraaya's tents among terraced fields and forest",
    label: "Getting Here in Winter",
    title: "We Handle the <i>Last Stretch</i>",
    steps: [
      {
        title: "Fly into Kangra airport",
        text: "about 1 hr 15 min by road, or drive in via Dharamshala.",
      },
      {
        title: "Meet us at the pickup point",
        text: "on the Hydro Project road, about 1 km from Morya Kareri hotel. [Roads open through winter — confirm.]",
      },
      {
        title: "A 2-minute 4x4 ride",
        text: "then a 5–10 minute walk through the fields with a porter for your bags.",
      },
      {
        title: "Your tent, already warm.",
        text: "Check-in from 2 pm; check-out by 12 noon.",
      },
    ],
    pack: {
      title: "What to pack",
      text: "A warm jacket, thermals and a beanie; shoes with grip for the field walk; sunglasses for bright winter days. There's only a small village shop nearby, so bring anything specific you need. Mobile signal is mainly BSNL.",
    },
  },

  testimonialData: {
    ...landingPageData.testimonialData,
    cta: { label: "Book Now", href: winterWhatsappCta },
  },

  faq: {
    title: "Winter <i>Questions</i>, Answered",
    items: [
      {
        q: "How warm is the tent at night?",
        a: "Each tent has its own winter heater, insulated canvas and timber-framed doors that keep the wind out, plus cold-weather down blankets on a king-size bed. With the heater on it stays around [X°C] inside when it's [Y°C] outside.",
      },
      {
        q: "What happens if the power goes out?",
        a: "Our [generator / inverter] backup takes over, so heaters, lights and hot water keep running.",
      },
      {
        q: "Can we still get there if it snows?",
        a: "Snow usually stays on the higher ridges, and our team meets you at the pickup point with a 4x4. [Confirm winter road access, and what happens if weather blocks it — e.g. a free date change.]",
      },
      {
        q: "What are the meals like?",
        a: "Home-style vegetarian meals are included, made with local ingredients. Trout, mutton and chicken are available à la carte, and you're welcome to bring your own drinks.",
      },
      {
        q: "Is it comfortable for kids and older parents?",
        a: "Yes. Tents are heated, bathrooms are private with hot water round the clock, and the walk in is short with a porter for your bags. Tell us who's coming and we'll prepare the tent for them.",
      },
      {
        q: "What's the cancellation policy, and how do we pay?",
        a: "You can cancel up to 48 hours before your arrival date [confirm refund terms]. Payment is by UPI.",
      },
      {
        q: "Can we bring our pet?",
        a: "We're sorry, pets aren't allowed at Saraaya.",
      },
    ],
  },

  closing: {
    image: "/winter/final-bonfire.webp",
    label: "Limited Stays · High Demand",
    title: "Four Tents. On<span>e Short Wi</span>nter.",
    description: [
      {
        text: "Send us your dates and we'll come back with availability and your winter rate. No payment needed to ask.",
      },
    ],
    cta: { label: "Check Winter Dates", href: winterWhatsappCta },
  },
};
