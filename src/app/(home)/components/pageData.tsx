import { landingPageData } from "@/app/landing-page/components/landingPageData";
import { contact } from "@/utils/constent";
import {
  CloudIcon,
  GpsIcon,
  OutlineLOcationIcon,
  SleepsIcon,
  WindIcon,
} from "@/utils/webSiteIcon";

export const homePageData = {
  titles: [
    { title: "Nauhali NEAR Dharamshala", icon: <OutlineLOcationIcon /> },
    { title: "FOUR PRIVATE SAFARI SUITES", icon: <GpsIcon /> },
    { title: "HEATERS & PRIVATE BATHROOMS", icon: <CloudIcon /> },
    { title: "HOSTED BY THE SARAAYA FAMILY", icon: <WindIcon /> },
  ],

  banner: {
    video: {
      src: "/home/Copy-of-Drone-clips.mp4",
      poster: "/home/Copy-of-Drone-clips.png",
    },
    // images: ["/bnr-1.png", "/bnr-2.png", "/bnr-3.png", "/bnr-4.png"],
  },
  about: {
    image: "/home/about-img.png",
    logo: "/home/Vector-1.png",
    title: "A DISTINCTIVE BOUTIQUE STAY",
    heading: "Luxury Glamping in <i>Dharamshala</i>",
    description: [
      "Saraaya is a distinctive boutique stay in Nauhali near Dharamshala, Himachal Pradesh. Four private safari suites bring together Himalayan views, forest surroundings and the comforts of a thoughtfully furnished stay.",
      "Unwind on your private deck, settle into a king-size bed and enjoy a quieter pace in the Kangra Valley. With attached bathrooms, heaters and personal attention from our hosts, this is a mountain escape for couples, families and small groups.",
    ],
    hostedText: "Hosted by the Saraaya family, since 2019",
  },

  escapeSection: {
    image: "/home/escape.jpg",
    title: "FAR AWAY FROM DUTY, CROWDS, AND CHAOS.",
    heading: `Experience slow luxury in the heart of nature, with panoramic mountain views, nearby rivers, & endless trails to explore.`,
    cta: {
      label: "PLAN YOUR EXCAPE",
      href: contact.WhatsappCta,
    },
  },

  glampsSection: {
    title: "THE GLAMPS",
    heading: {
      normal: "Four Suites. One forest. Endless ways to",
      highlight: "Disappear.",
    },
    // description:
    //   "Each glamp is hand-built from cedar, canvas and stone, a private kingdom of one suite, one view, one fireplace.",
    accommodations: [
      {
        id: "01",
        title: 'Devdar "The Keeper" ',
        image: "/rooms/Mountain-1.png",
        amenities: { title: "SLEEPS 2", icon: <SleepsIcon /> },
        cta: { label: "Explore Devdar safari suite", href: "/rooms/#devdar" },
      },
      {
        id: "02",
        title: 'Rai "The Watcher"',
        image: "/rooms/Mountain-2.png",
        amenities: { title: "SLEEPS 2", icon: <SleepsIcon /> },
        cta: { label: "Explore Rai safari suite", href: "/rooms/#rai" },
      },
      {
        id: "03",
        title: 'Buransh  "The Nurturer" ',
        image: "/rooms/Mountain-3.png",
        amenities: { title: "SLEEPS 2", icon: <SleepsIcon /> },
        cta: { label: "Explore Buransh safari suite", href: "/rooms/#buransh" },
      },
      {
        id: "04",
        title: 'Kail " The Wanderer" ',
        image: "/rooms/Mountain-4.png",
        amenities: { title: "SLEEPS 2", icon: <SleepsIcon /> },
        cta: { label: "Explore Kail safari suite", href: "/rooms/#kail" },
      },
    ],
  },

  experiencesSection: {
    title: "The Saraaya EXPERIENCES",
    heading:
      'Days arranged like <span class="italic text-secondary "> Stories! </span>',
    description:
      "Curated rituals designed by our hosts, none of them on a schedule, all of them on the slow side of time.",
    footerNote:
      "**Food and beverages are chargeable separately for all setups and experiences.",
    experiences: [
      {
        image: "/home/exp-1.png",
        title: "Bonfire",
        timing: "Dusk · Daily",
        price: "₹2,500 onwards",
        description:
          "Private outdoor movie setup with cozy bonfire ambience under the stars.",
      },
      {
        image: "/home/exp-2.png",
        title: "Star Gazing Session",
        timing: "Sunrise · In-suite",
        price: "₹1,500 onwards",
        description:
          "Guided star gazing experience in the peaceful Himalayan night sky.",
      },
      {
        image: "/home/exp-3.png",
        title: "Sun Downer Setup",
        timing: "Dusk · Daily",
        price: "₹3,500 onwards",
        description:
          "Beautiful sunset setup at a scenic spot perfect for couples and small groups.",
      },
      {
        image: "/home/exp-4.png",
        title: "Picnic Setup",
        timing: "Sunrise · In-suite",
        price: "₹3,000 onwards",
        description:
          "Curated outdoor picnic setup surrounded by nature for a relaxed experience.",
      },
      {
        image: "/exp-6.png",
        alt: "Village tour",
        title: "Village Tour",
        timing: "Morning · Daily",
        price: "",
        description:
          "Guided village tour of the surrounding village with a local guide.",
      },
      {
        image: "/exp-4.png",
        alt: "Cultural night",
        title: "Cultural Night",
        timing: "Evening · Daily",
        price: "",
        description:
          "A cultural night with a local guide to explore the culture of the village.",
      },
    ],
  },

  // feelingSection: {
  //   image: "/home/feeling-img.png",
  //   title: "The Saraaya Feeling",
  //   heading:
  //     "Mornings Wrapped in Mist. Evenings Lit by Fire. Nights Filled with Stars.",
  //   cta: {
  //     label: "PLAN YOUR EXCAPE",
  //     href: "/about",
  //   },
  // },

  reviewsSection: {
    title: "Guests <i>Reviews</i>",
    reviews: landingPageData.testimonialData.testimonials,
  },
};
