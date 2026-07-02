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
    { title: "32.2190° N 76.3234° E", icon: <GpsIcon /> },
    { title: "Misty · 14°6", icon: <CloudIcon /> },
    { title: "6 km/h", icon: <WindIcon /> },
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
    title: "A LUXURY GLAMPING Retreat",
    heading:
      'Where The <span class = "italic text-secondary font-primary">Mountains</span> Learn To Whisper',
    description: [
      `<span class="float-left text-4xl md:text-6xl leading-[0.85] mr-3 font-primary">
        S
      </span>araaya is more than a retreat, it is a sanctuary for the soul. Perched beside a crystalline glacier stream born from sacred alpine peaks, we have harmonized the untamed spirit of the Himalayas with the sophisticated comforts of a premier estate. With only four exclusive glamp suites, your stay is a private communion with the wilderness.,Escape the Noise. Rediscover Your Center.,Leave the city lights behind for a canopy of a billion stars.`,

      "Saraaya was created for people who no longer seek crowded luxury, but meaningful stillness.",
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
        cta: { label: "know more", href: "/rooms" },
      },
      {
        id: "02",
        title: 'Rai "The Watcher"',
        image: "/rooms/Mountain-2.png",
        amenities: { title: "SLEEPS 2", icon: <SleepsIcon /> },
        cta: { label: "know more", href: "/rooms" },
      },
      {
        id: "03",
        title: 'Buransh  "The Nurturer" ',
        image: "/rooms/Mountain-3.png",
        amenities: { title: "SLEEPS 2", icon: <SleepsIcon /> },
        cta: { label: "know more", href: "/rooms" },
      },
      {
        id: "04",
        title: 'Kail " The Wanderer" ',
        image: "/rooms/Mountain-4.png",
        amenities: { title: "SLEEPS 2", icon: <SleepsIcon /> },
        cta: { label: "know more", href: "/rooms" },
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
        timing: "Sunrise · In-tent",
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
        timing: "Sunrise · In-tent",
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
