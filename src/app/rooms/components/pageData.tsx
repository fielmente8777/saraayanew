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
    subtitle: "Experience Luxury ",
    title: "Himalayan Glamping Escapes!",
  },
  about: {
    subtitle: "Built for those who prefer hidden places over popular ones.",
    logo: "/home/Vector-1.png",
    title: {
      normal1: "Four Luxury ",
      highlight1: "Tents",
      normal2: ". Endless ",
      highlight2: "Mountains",
      normal3: ". Complete ",
      highlight3: "Silence",
      normal4: ".",
    },
    description: [
      "Designed for people seeking privacy, stillness, and nature without compromising comfort. Where mornings begin with mist and evenings end under a billion stars.",

      "Saraaya was created for people who no longer seek crowded luxury, but meaningful stillness.",
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
        "/rooms/Mountain-4.png",
        "/rooms/Mountain-2.png",
        "/rooms/Mountain-1.png",
        "/rooms/Mountain-3.png",
        "/rooms/Mountain-5.png",
        "/rooms/Mountain-6.png",
      ],

      description:
        'Named after the sacred Deodar cedar, known as the "Wood of the Gods," Devdar "The Keeper" symbolizes strength, protection, resilience, and timeless wisdom. Like the majestic Himalayan tree that has sheltered generations, it offers a peaceful sanctuary where guests can slow down, reconnect, and embrace nature. Experience the perfect blend of luxury, comfort, and wilderness in our fully furnished Ultra-Luxury Safari Tent. Spacious interiors open to breathtaking Himalayan mountain and forest views, creating a serene retreat. Thoughtfully designed with a plush king-size bed, premium bedding, wardrobe, study table, ambient lighting, cozy blankets, and secure lockable doors, every detail ensures privacy and relaxation. The private attached bathroom features modern fittings, a spacious shower, running water, and 24/7 hot water. With heaters, coolers, and fans for year-round comfort, Devdar "The Keeper" combines safari-inspired charm with boutique luxury for an unforgettable mountain escape.',

      amenities: [
        { title: "Spacious luxury tents", icon: <SpaciousLuxuryIcon /> },
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
        { label: "RESERVE", href: contact.WhatsappCta },
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
        `Named after the resilient Himalayan Oak (Rai), a tree that stands watch over mountain forests through changing seasons, Rai "The Watcher" symbolizes awareness, stability, and quiet strength. Rooted in nature, it invites you to slow down, observe, and experience the mountains at their most peaceful. Wake up to panoramic Himalayan views, the soothing sounds of the nearby stream, and crisp mountain air from your elegantly designed Ultra-Luxury Safari Tent. Thoughtfully crafted to blend modern comfort with the charm of glamping, it features a plush king-size bed with premium linens, cozy blankets, a spacious wardrobe, study desk, warm ambient lighting, bedside lamps, and secure lockable doors. The private attached bathroom includes modern fittings, a spacious shower, running water, and 24/7 hot water. Whether watching the sunrise over mist-covered peaks or relaxing beneath a sky full of stars, Rai "The Watcher" offers an unforgettable luxury retreat immersed in nature.`,
      amenities: [
        { title: "Spacious luxury tents", icon: <SpaciousLuxuryIcon /> },
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
        { label: "RESERVE", href: contact.WhatsappCta },
        { label: "CALL NOW", href: contact.callCta },
      ],
    },
    {
      id: "03",
      images: [
        "/rooms/Mountain-1.png",
        "/rooms/Mountain-2.png",
        "/rooms/Mountain-3.png",
        "/rooms/Mountain-4.png",
        "/rooms/Mountain-5.png",
        "/rooms/Mountain-6.png",
      ],
      title: 'Buransh "The Nurturer"',
      description:
        `Inspired by the vibrant Buransh (Rhododendron), the beloved flowering tree of the Himalayas, Buransh "The Nurturer" symbolizes warmth, renewal, and the vibrant spirit of mountain life. Surrounded by breathtaking Himalayan views and lush forests, this Ultra-Luxury Safari Tent offers a peaceful retreat designed to refresh both body and mind. Thoughtfully furnished with a plush king-size bed, premium bedding, elegant interiors, and a private attached bathroom with modern amenities and 24/7 hot water, it blends safari-style charm with boutique luxury. With year-round comfort and nature all around, Buransh "The Nurturer" promises a truly relaxing mountain escape.`,
      amenities: [
        { title: "Spacious luxury tents", icon: <SpaciousLuxuryIcon /> },
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
        { label: "RESERVE", href: contact.WhatsappCta },
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
        `Named after the graceful Himalayan Blue Pine (Kail), Kail "The Wanderer" celebrates curiosity, exploration, and the spirit of adventure. Surrounded by breathtaking Himalayan views and the soothing sounds of a nearby glacier stream, this Ultra-Luxury Safari Tent offers the perfect balance of wilderness and refined comfort. Featuring a plush king-size bed, premium furnishings, elegant interiors, and a private attached bathroom with modern amenities and 24/7 hot water, every detail is designed for a luxurious stay. With year-round comfort and stunning natural surroundings, Kail "The Wanderer" is the ideal retreat for unforgettable mountain escapes.`,
      amenities: [
        { title: "Spacious luxury tents", icon: <SpaciousLuxuryIcon /> },
        {
          title: "Attached modern bathrooms",
          icon: <AttachedModernBathroomsIcon />,
        },
        { title: "Premium linens & amenities", icon: <PremiumLinensIcon /> },
        { title: "Heaters & fans all seasons", icon: <HeatersIcon /> },
        { title: "Private decks", icon: <PrivateDeckIcon /> },
      ],

      ctas: [
        { label: "RESERVE", href: contact.WhatsappCta },
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
      "Staying at Saraaya was nothing short of magical. Tucked away in the serene beauty it offers the perfect blend of untouched nature and refined luxury, something you rarely come across . hat stood out the most was how effortlessly the property combines comfort with wilderness. What truly makes this place special is that it delivers luxury that feels rare and unexpected in such a remote setting. You get the best of both worlds complete serenity and privacy without compromising on comfort. If you’re looking to disconnect from the chaos and reconnect with nature without giving up on the finer things this place is an absolute must visit.",
    currentSlide: "01",
    totalSlides: "09",
  },

  title: [
    {
      icon: <RoomTentIcon />,
      title: "SPACIOUS LUXURY TENTS",
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
