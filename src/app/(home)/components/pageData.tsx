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
      src: "/home/bnr-video-new.mp4",
      poster: "/home/Copy-of-Drone-clips.png",
    },
    // images: ["/bnr-1.png", "/bnr-2.png", "/bnr-3.png", "/bnr-4.png"],
  },
  about: {
    image: "/home/about-img.png",
    logo: "/home/Vector-1.png",
    title: "A MOUNTAIN GLAMPING EXPERIENCE SHAPED BY STILLNESS",
    heading:
      'Where The <span class = "italic text-secondary font-primary">Landscape</span>  Sets the Pace',
    description: [
      `<span class="float-left text-4xl md:text-6xl leading-[0.85] mr-3 font-primary">
        S
      </span>et among native deodar, oak, pine and rhododendron forests in a secluded mountain valley near Dharamshala, SARAAYA is a private Himalayan glamping experience created around space, nature and quiet.`,

      "Four private Safari Suites sit within the landscape, surrounded by forest, mountain ridges and a glacier-fed stream whose waters originate from the Kareri Lake region.",
      "Created for those who value privacy and nature over crowded hill destinations, SARAAYA offers a slower way to experience the Kangra Valley.",
      "Wake to shifting mountain light, spend afternoons beside the stream, explore the surrounding forest, or simply stay on your private deck as the valley changes around you.",
    ],
    hostedText: "Thoughtfully hosted in the Kangra Valley since 2019.",
  },

  escapeSection: {
    image: "/home/escape.jpg",
    title: "A PRIVATE GLAMP IN THE MOUNTAINS",
    heading: `Leave the momentum of modern life behind. Surrounded by native Himalayan forests, mountain air and flowing glacier-fed waters, SARAAYA gives you the freedom to shape your days at your own pace.`,
    cta: {
      label: "PLAN YOUR JOURNEY",
      href: contact.WhatsappCta,
    },
  },

  glampsSection: {
    title: "A PRIVATE GLAMP IN THE MOUNTAINS",
    heading: {
      normal: "Four Safari Suites. By",
      highlight: "Design.",
    },
    // description:
    //   "Each glamp is hand-built from cedar, canvas and stone, a private kingdom of one suite, one view, one fireplace.",
    accommodations: [
      {
        id: "01",
        title: "DEVdar — The Keeper",
        image: "/rooms/Mountain-1.png",
        amenities: { title: "SLEEPS 2", icon: <SleepsIcon /> },
        cta: { label: "know more", href: "/rooms" },
      },
      {
        id: "02",
        title: "RAI — The Watcher",
        image: "/rooms/Mountain-2.png",
        amenities: { title: "SLEEPS 2", icon: <SleepsIcon /> },
        cta: { label: "know more", href: "/rooms" },
      },
      {
        id: "03",
        title: "BURANSH — The Nurturer",
        image: "/rooms/Mountain-3.png",
        amenities: { title: "SLEEPS 2", icon: <SleepsIcon /> },
        cta: { label: "know more", href: "/rooms" },
      },
      {
        id: "04",
        title: "KAIL — The Wanderer",
        image: "/rooms/Mountain-4.png",
        amenities: { title: "SLEEPS 2", icon: <SleepsIcon /> },
        cta: { label: "know more", href: "/rooms" },
      },
    ],
  },

  experiencesSection: {
    title: "The SARAAYA Experiences",
    heading:
      'An Unhurried <span class="italic text-secondary ">Mountain Experience</span>',
    description:
      "Some days, the best plan is no plan. SARAAYA is intentionally unstructured. There are no fixed programmes or timetables. Spend the day on your deck, explore the surrounding landscape, sit beside the stream or choose an experience arranged by our team.",
    footerNote:
      "Experiences are arranged in advance and remain subject to weather, season and availability. Experiences, setups and food & beverage arrangements are chargeable separately. Trekking is not included in the stay.",
    experiences: [
      {
        image: "/home/exp-4.png",
        title: "Riverside Picnic",
        timing: "Midday beside the stream",
        price: "",
        description:
          "A thoughtfully arranged outdoor setting beside glacier-fed mountain waters for an unhurried lunch and long conversations.",
      },
      {
        image: "/exp-1.png",
        title: "Guided Hikes & Nature Trails",
        timing: "Through pine, oak and mountain paths",
        price: "",
        description:
          "Explore the surrounding landscape at an easy pace with local guidance.",
      },
      {
        image: "/exp-6.png",
        alt: "Village Walk",
        title: "Village Walk",
        timing: "The rhythm of the valley",
        price: "",
        description:
          "Walk through the neighbouring mountain settlement with a local team member and experience a quieter side of everyday Himalayan life.",
      },
      {
        image: "/home/exp-3.png",
        title: "Sundowner",
        timing: "As the mountain light changes",
        price: "",
        description:
          "A private outdoor setup to watch the evening light move across the surrounding ridges.",
      },
      {
        image: "/home/exp-1.png",
        title: "Bonfire & Open-Air Cinema",
        timing: "Warm fire. Cold mountain air.",
        price: "",
        description:
          "A private outdoor movie setup beneath the open sky, accompanied by a bonfire.",
      },
      {
        image: "/home/exp-2.png",
        title: "Stargazing & Moon Gazing",
        timing: "Look up. Slow down.",
        price: "",
        description:
          "Spend an evening beneath the Himalayan night sky, away from the bright lights of the city.",
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
