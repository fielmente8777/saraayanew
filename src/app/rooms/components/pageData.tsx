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
  BreakFastIcon,
  DeckIcon,
  FanIcon,
  OutlineLOcationIcon,
  RoomTentIcon,
  SleepsIcon,
  SQFTIcon,
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
      'Designed for people seeking privacy, stillness, and nature without compromising comfort. Where mornings begin with mist and evenings end under a billion stars.',
      
      'Saraaya was created for people who no longer seek crowded luxury, but meaningful stillness.',
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
      title: 'DEVDAR "THE KEEPER"',
      images:[ 
        "/rooms/1.jpg",
        "/rooms/2.jpg",
        "/rooms/3.jpg",
        "/rooms/4.jpg",
      ],
   
      
      description:
        "Named after the sacred deodar cedar often called the “wood of the gods”  a tree revered for its strength, resilience, and timeless presence in the Himalayas. Standing tall through centuries of changing seasons, the deodar symbolizes endurance, protection, and a deep connection to nature. Inspired by these qualities, Devdar is more than just a place; it is a sanctuary designed to offer peace, comfort, and belonging. Like the ancient cedar forests that have sheltered travelers for generations, Devdar holds space quietly and graciously, inviting guests to slow down, reconnect, and immerse themselves in the beauty of the natural world. Here, every moment is shaped by tranquility, authenticity, and the enduring spirit of the mountains.",
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
      images: ["/rooms/2.jpg"],
      title: 'Rai "The Watcher"',
      description:
        "Named after the ban oak, rooted deep and still the quiet guardian of the Himalayan forest floor. Strong yet unassuming, the ban oak has long been a symbol of stability, resilience, and quiet wisdom in the mountain landscape. Rai embodies these qualities, offering a space that feels grounded, warm, and enduring. Like the ancient oaks that shelter countless forms of life beneath their canopy, Rai provides comfort, protection, and a sense of belonging. It is a place where nature’s calm presence can be felt in every detail, inviting guests to slow down, breathe deeply, and find peace in the simplicity of the surroundings. Steady, timeless, and deeply connected to the land, Rai is a retreat that nurtures both rest and reflection.",
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
      images: ["/rooms/3.jpg"],
      title: 'BURANSH "THE NURTURER"',
      description:
        "Named after the rhododendron, whose crimson blooms bring the first warmth to the mountains each spring. Buransh is a gentle reminder that softness is its own kind of strength. Flourishing against rugged slopes and harsh winters, the rhododendron arrives as a symbol of renewal, resilience, and quiet joy. Its vibrant blossoms transform the landscape, painting the hillsides with color and life after months of stillness. Inspired by this spirit, Buransh offers a space that feels both uplifting and restorative a retreat where beauty is found in simplicity and strength is expressed through grace. Like the flower that announces the arrival of a new season, Buransh invites guests to embrace moments of calm, connection, and gentle transformation amidst the timeless rhythms of the mountains.",
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
      images: ["/rooms/4.jpg"],
      title: 'Kail "The Wanderer"',
      description:
        "Named after the Himalayan blue pine, whose seeds travel far on the wind before finding ground. Kail is for those who’ve journeyed long and are ready to arrive — not at a destination, but at a feeling. Towering gracefully across the mountain slopes, the blue pine is known for its adaptability, endurance, and quiet elegance. Its seeds drift across valleys and ridgelines, carried by unseen currents until they find a place to take root and thrive. Inspired by this journey, Kail is a space that celebrates both movement and stillness — a place where wandering gives way to belonging. Here, the mountains invite you to slow down, settle into the rhythm of nature, and reconnect with what matters most. Like the blue pine itself, Kail stands as a symbol of resilience, growth, and the profound comfort of finding your place in the world.",
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
