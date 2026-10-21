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
    subtitle: "We could have built more. We chose not to.",
    logo: "/home/Vector-1.png",
    title: {
      normal1: "Four Safari ",
      highlight1: "Suites",
      normal2: ". By ",
      highlight2: "Design",
      normal4: ".",
    },
    description: [
      "SARAAYA is shaped around four distinct Safari Suites, each designed to provide privacy, comfort and a close connection with the surrounding landscape.",
      "Mornings begin with mountain light and forest air. Evenings settle into the sounds of the stream, wind through the trees and the Himalayan night.",
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
      title: "DEVdar — The Keeper",
      images: [
        "/rooms/Mountain-4.png",
        "/rooms/Mountain-2.png",
        "/rooms/Mountain-1.png",
        "/rooms/Mountain-3.png",
        "/rooms/Mountain-5.png",
        "/rooms/Mountain-6.png",
      ],
      description: `Named after the Himalayan Cedar (Cedrus deodara).
A warm and intimate Safari Suite framed by mature cedar trees and mountain views.

The Space: A generous interior featuring a plush king-size bed, quality linens, warm winter bedding, a comfortable seating corner and writing desk.
Ensuite Bathroom: Private attached bathroom with modern fittings, walk-in shower and 24/7 hot water.
Outdoor Veranda: Private timber deck opening towards the surrounding forest.
Comfort: Heating for colder months, seasonal ventilation and secure lockable doors.`,

      amenities: [
        { title: "Raised timber platforms", icon: <SpaciousLuxuryIcon /> },
        {
          title: "Attached modern bathrooms",
          icon: <AttachedModernBathroomsIcon />,
        },
        { title: "King-size bed & quality linens", icon: <PremiumLinensIcon /> },
        { title: "Heating for colder months", icon: <HeatersIcon /> },
        { title: "Private timber veranda", icon: <PrivateDeckIcon /> },
      ],
      price: "From ₹ 12000/-",
      ctas: [
        { label: "ENQUIRE ABOUT YOUR STAY", href: contact.WhatsappCta },
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
      title: "RAI — The Watcher",
      description: `Named after the Himalayan Oak (Quercus leucotrichophora).
Surrounded by native oak forest, Rai is designed for guests who enjoy quieter mornings, reading and simply watching the landscape unfold.

The Space: King-size bed, premium bedding, handloom throws, wardrobe storage, bedside lamps and a comfortable desk.
Ensuite Bathroom: Private attached bathroom with modern fittings, walk-in shower and 24/7 hot water.
Outdoor Veranda: Private timber deck overlooking the surrounding forest and valley.
Comfort: Heating for colder months, seasonal ventilation and secure lockable doors.`,
      amenities: [
        { title: "Raised timber platforms", icon: <SpaciousLuxuryIcon /> },
        {
          title: "Attached modern bathrooms",
          icon: <AttachedModernBathroomsIcon />,
        },
        { title: "King-size bed & handloom throws", icon: <PremiumLinensIcon /> },
        { title: "Heating for colder months", icon: <HeatersIcon /> },
        { title: "Private timber veranda", icon: <PrivateDeckIcon /> },
      ],
      price: "From ₹ 12000/-",
      ctas: [
        { label: "ENQUIRE ABOUT YOUR STAY", href: contact.WhatsappCta },
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
      title: "BURANSH — The Nurturer",
      description: `Named after the Himalayan Rhododendron (Rhododendron arboreum).
Positioned to receive soft mountain light through the surrounding trees, Buransh combines the character of Safari-style glamping with a comfortable, restful interior.

The Space: King-size bed, premium bedding, woollen blankets, comfortable seating and warm ambient lighting.
Ensuite Bathroom: Private attached bathroom with modern fittings, walk-in shower and 24/7 hot water.
Outdoor Veranda: Private timber deck surrounded by native woodland.
Comfort: Heating for colder months, seasonal ventilation and secure lockable entry.`,
      amenities: [
        { title: "Raised timber platforms", icon: <SpaciousLuxuryIcon /> },
        {
          title: "Attached modern bathrooms",
          icon: <AttachedModernBathroomsIcon />,
        },
        { title: "King-size bed & woollen blankets", icon: <PremiumLinensIcon /> },
        { title: "Heating for colder months", icon: <HeatersIcon /> },
        { title: "Private timber veranda", icon: <PrivateDeckIcon /> },
      ],
      price: "From ₹ 12000/-",
      ctas: [
        { label: "ENQUIRE ABOUT YOUR STAY", href: contact.WhatsappCta },
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
      title: "KAIL — The Wanderer",
      description: `Named after the Himalayan Blue Pine (Pinus wallichiana).
Set closest to the glacier-fed stream, Kail brings you closest to the sound of flowing mountain water and the surrounding landscape.

The Space: A generous interior with king-size bed, crisp linens, warm winter bedding, study nook and ambient lighting.
Ensuite Bathroom: Private attached bathroom with modern fittings, walk-in shower and 24/7 hot water.
Outdoor Veranda: An expansive timber deck facing the stream and surrounding mountain landscape.
Comfort: Heating for colder months, seasonal ventilation and secure lockable doors.`,
      amenities: [
        { title: "Raised timber platforms", icon: <SpaciousLuxuryIcon /> },
        {
          title: "Attached modern bathrooms",
          icon: <AttachedModernBathroomsIcon />,
        },
        { title: "King-size bed & crisp linens", icon: <PremiumLinensIcon /> },
        { title: "Heating for colder months", icon: <HeatersIcon /> },
        { title: "Private timber veranda facing stream", icon: <PrivateDeckIcon /> },
      ],
      ctas: [
        { label: "ENQUIRE ABOUT YOUR STAY", href: contact.WhatsappCta },
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
      label: "PLAN YOUR JOURNEY",
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
      title: "PRIVATE SAFARI SUITES ON RAISED TIMBER PLATFORMS",
    },
    {
      icon: <TapeIcon />,
      title: "PRIVATE ENSUITE BATHROOMS WITH 24/7 HOT WATER",
    },
    {
      icon: <AmenintiesIcon />,
      title: "KING-SIZE BEDS WITH QUALITY BEDDING & TEXTILES",
    },
    {
      icon: <FanIcon />,
      title: "HEATING DURING COLDER MONTHS & VENTILATION",
    },
    {
      icon: <DeckIcon />,
      title: "PRIVATE OUTDOOR TIMBER VERANDAS WITH VIEWS",
    },
  ],
};
