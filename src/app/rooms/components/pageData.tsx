import {
  AttachedModernBathroomsIcon,
  HeatersIcon,
  PremiumLinensIcon,
  PrivateDeckIcon,
  SpaciousLuxuryIcon,
} from "@/utils/amenitiesIcons2";
import { contact } from "@/utils/constent";
import {
  AmenintiesIcon,
  DeckIcon,
  FanIcon,
  OutlineLOcationIcon,
  RoomTentIcon,
  TapeIcon,
} from "@/utils/webSiteIcon";

export const accommodationPageData = {
  hero: {
    image: "/rooms/hero.png",
    subtitle: "Your Private Space in the Mountains",
    title: "Four Private Safari Suites near Dharamshala",
  },
  about: {
    subtitle: "Built for those who prefer hidden places over popular ones.",
    logo: "/home/Vector-1.png",
    title: {
      normal1: "Four Private ",
      highlight1: "Safari Suites",
      normal2: ". Endless ",
      highlight2: "Mountains",
      normal3: ". Complete ",
      highlight3: "Silence",
      normal4: ".",
    },
    description: [
      "Four private Safari suites, each named for a Himalayan tree. Mountain views, your own deck and thoughtfully provided comforts bring you closer to the landscape.",

      "Choose your space in the mountains, then settle into the slower rhythm of Nauhali.",
    ],
  },
  titles: [
    { title: "Nauhali NEAR Dharamshala", icon: <OutlineLOcationIcon /> },
    { title: "32.2190° N 76.3234° E", icon: <OutlineLOcationIcon /> },
    { title: "Misty · 14°6", icon: <OutlineLOcationIcon /> },
    { title: "6 km/h", icon: <OutlineLOcationIcon /> },
  ],

  accommodations: [
    {
      id: "01",
      // title: 'DEVDAR "THE KEEPER"',
      title: 'Devdar "The Keeper"',
      images: [
        "/optimized/mountain-4.webp",
        "/optimized/mountain-2.webp",
        "/optimized/mountain-1.webp",
        "/optimized/mountain-3.webp",
        "/rooms/Mountain-5.png",
        "/rooms/Mountain-6.png",
      ],

      description:
        'Named for the Deodar cedar. Mountain views and a private deck for unhurried mornings.',
      amenities: [
        { title: "Spacious private Safari suites", icon: <SpaciousLuxuryIcon /> },
        {
          title: "Attached modern bathrooms",
          icon: <AttachedModernBathroomsIcon />,
        },
        { title: "Premium linens & amenities", icon: <PremiumLinensIcon /> },
        { title: "Heaters & fans all seasons", icon: <HeatersIcon /> },
        { title: "Private decks", icon: <PrivateDeckIcon /> },
      ],
      price: "From ₹ 12000/-",
      ctas: [
        { label: "RESERVE", href: contact.bookingEngineUrl },
        { label: "CALL NOW", href: contact.callCta },
      ],
    },
    {
      id: "02",
      images: [
        "/rooms/Premium-1.png",
        "/rooms/Premium-2.png",
        "/rooms/Premium-3.png",
        "/rooms/Premium-4.png",
        "/rooms/Premium-5.png",
      ],
      title: 'Rai "The Watcher"',
      description:
        'Named for the Himalayan oak. Wake to mountain views and the sound of the nearby stream.',
      amenities: [
        { title: "Spacious private Safari suites", icon: <SpaciousLuxuryIcon /> },
        {
          title: "Attached modern bathrooms",
          icon: <AttachedModernBathroomsIcon />,
        },
        { title: "Premium linens & amenities", icon: <PremiumLinensIcon /> },
        { title: "Heaters & fans all seasons", icon: <HeatersIcon /> },
        { title: "Private decks", icon: <PrivateDeckIcon /> },
      ],
      price: "From ₹ 12000/-",
      ctas: [
        { label: "RESERVE", href: contact.bookingEngineUrl },
        { label: "CALL NOW", href: contact.callCta },
      ],
    },
    {
      id: "03",
      images: [
        "/optimized/mountain-1.webp",
        "/optimized/mountain-2.webp",
        "/optimized/mountain-3.webp",
        "/optimized/mountain-4.webp",
        "/rooms/Mountain-5.png",
        "/rooms/Mountain-6.png",
      ],
      title: 'Buransh "The Nurturer"',
      description:
        'Inspired by Himalayan rhododendron. Forest views and your own deck for time together.',
      amenities: [
        { title: "Spacious private Safari suites", icon: <SpaciousLuxuryIcon /> },
        {
          title: "Attached modern bathrooms",
          icon: <AttachedModernBathroomsIcon />,
        },
        { title: "Premium linens & amenities", icon: <PremiumLinensIcon /> },
        { title: "Heaters & fans all seasons", icon: <HeatersIcon /> },
        { title: "Private decks", icon: <PrivateDeckIcon /> },
      ],
      price: "From ₹ 12000/-",
      ctas: [
        { label: "RESERVE", href: contact.bookingEngineUrl },
        { label: "CALL NOW", href: contact.callCta },
      ],
    },
    {
      id: "04",
      images: [
        "/rooms/Premium-3.png",
        "/rooms/Premium-2.png",
        "/rooms/Premium-1.png",
        "/rooms/Premium-4.png",
        "/rooms/Premium-5.png",
      ],
      title: 'Kail "The Wanderer"',
      description:
        'A nod to the Himalayan blue pine. Mountain views and a king-size bed after a day on the trails.',
      amenities: [
        { title: "Spacious private Safari suites", icon: <SpaciousLuxuryIcon /> },
        {
          title: "Attached modern bathrooms",
          icon: <AttachedModernBathroomsIcon />,
        },
        { title: "Premium linens & amenities", icon: <PremiumLinensIcon /> },
        { title: "Heaters & fans all seasons", icon: <HeatersIcon /> },
        { title: "Private decks", icon: <PrivateDeckIcon /> },
      ],

      ctas: [
        { label: "RESERVE", href: contact.bookingEngineUrl },
        { label: "CALL NOW", href: contact.callCta },
      ],
    },
  ],

  feelingSection: {
    image: "/home/feeling-img.png",
    title: "The Saraaya Feeling",
    heading:
      "Mornings Wrapped in Mist. Evenings Lit by Fire. Nights Filled with Stars.",
    cta: {
      label: "PLAN YOUR EXCAPE",
      href: contact.WhatsappCta,
    },
  },

  reviewsSection: {
    title: "GUESTS REVIEWS",
    review:
      "You get the best of both worlds complete serenity and privacy without compromising on comfort.",
    currentSlide: "01",
    totalSlides: "09",
  },

  title: [
    {
      icon: <RoomTentIcon />,
      title: "SPACIOUS PRIVATE SAFARI SUITES",
    },
    {
      icon: <TapeIcon />,
      title: "ATTACHED MODERN BATHROOMS",
    },
    {
      icon: <AmenintiesIcon />,
      title: "PREMIUM LINENS & AMENITIES",
    },
    {
      icon: <FanIcon />,
      title: "HEATERS & FANS ALL SEASONS",
    },
    {
      icon: <DeckIcon />,
      title: "PRIVATE DECKS",
    },
  ],
};
