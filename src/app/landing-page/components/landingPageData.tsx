import { contact } from "@/utils/constent";
import { FillLocationIcon } from "@/utils/icons";

export const landingPageData = {
  bannerData: {
    images: ["/bnr-1.png", "/bnr-2.png", "/bnr-3.png", "/bnr-4.png"],
  },
  about: {
    title:
      "A Glamping Retreat <br/><span class='text-secondary italic'>in the  <i>Himalayas</i></span>",
    description: [
      "<b>Saraaya</b> is more than a retreat, it is a sanctuary for the soul. Perched beside a crystalline glacier stream born from sacred alpine peaks, we have harmonized the untamed spirit of the Himalayas with the sophisticated comforts of a premier estate. With only four exclusive glamp suites, your stay is a private communion with the wilderness.",
      "Escape the Noise. Rediscover Your Center.",
      "Leave the city lights behind for a canopy of a billion stars. ",
    ],
    location: {
      label: "Nauhali near Dharamshala, Himachal Pradesh",
      icon: <FillLocationIcon />,
      href: contact.addressLink,
    },
  },

  signatureTherapiesData: {
    title: "Hidden within the Folds of the <i>Mountains!</i>",
    cta: { label: "Book Now", href: contact.callCta },
    therapies: [
      {
        src: "/Saraya-309.png",
        icon: "/Sacred-icon.png",
        name: "Sacred",
        subTitle: "An Ancestral Connection",
        description:
          "Steeped in the spiritual legacy of the Lam Dal and Kareri waters, Saraaya sits on land echoing with the footsteps of pilgrims and mountain legends. Here, the air carries a different weight, a quiet, hallowed energy that invites reflection and deep inner peace.",
      },
      {
        src: "/Saraya-319.png",
        icon: "/Restorative-icon.png",
        name: "Restorative",
        subTitle: "The Art of the Reset",
        description:
          "In a world that never stops, Saraaya is the pause button. Designed for profound silence and reconnection, we believe that slowing down isn't just a luxury, it is the entire point. Here, the Himalayan breeze does the healing, and the rhythm of the forest dictates your day.",
      },
      {
        src: "/Saraya-159.png",
        icon: "/Wild-icon.png",
        name: "Wild",
        subTitle: "Untamed Elegance",
        description:
          "Surrounded by a majestic canopy of Deodar Cedar, Rhododendron, and ancient Oak, Saraaya is a living part of the Kangra Valley. Witness the forest breathe through the seasons from the comfort of your private deck, one of the most breathtakingly raw, yet elegantly managed, natural settings in the world.",
      },
    ],
  },

  rooms: {
    title: "Luxury Stays by <i>Himalayan Lakes!</i>",
    cards: [
      {
        title: "Mountain View Tents",
        images: [
          "/rooms/Mountain-1.png",
          "/rooms/Mountain-2.png",
          "/rooms/Mountain-3.png",
          "/rooms/Mountain-4.png",
          "/rooms/Mountain-5.png",
          "/rooms/Mountain-6.png",
        ],
      },
      {
        title: "Premium View Tents",
        images: [
          "/rooms/Premium-1.png",
          "/rooms/Premium-2.png",
          "/rooms/Premium-3.png",
          "/rooms/Premium-4.png",
          "/rooms/Premium-5.png",
        ],
      },
    ],
    cta: {
      label: "Book Now",
      href: contact.callCta,
    },
  },

  titles: [
    "LIMITED STAYS",
    "HIGH DEMAND ON",
    "ONLY FOUR TENTS AVAILABLE PER NIGHT",
  ],

  experiences: {
    title: "Signature Himalayan <i>Experiences!</i>",
    cards: [
      {
        image: "/exp-1.png",
        alt: "Trek to Hidden Himalayan Lakes",
      },
      {
        image: "/exp-2.png",
        alt: "Stargaze Under Zero Light Pollution",
      },
      {
        image: "/exp-3.png",
        alt: "Glacier Stream Picnic",
      },
      {
        image: "/exp-4.png",
        alt: "Cultural night",
      },
      {
        image: "/exp-7.png",
        alt: "Movie under the stars",
      },
      {
        image: "/exp-8.png",
        alt: "Bonfire",
      },
      {
        image: "/exp-5.png",
        alt: "Private dining by the river",
      },
      {
        image: "/exp-6.png",
        alt: "Village tour",
      },
    ],
    cta: {
      label: "Book Now",
      href: contact.callCta,
    },
  },
  testimonialData: {
    title: "Guest <i>Experiences</i>",
    images: [
      "/guest-1.png",
      "/guest-2.png",
      "/guest-3.png",
      "/guest-4.png",
      "/guest-5.png",
    ],
    testimonials: [
      {
        text: "We didn’t just “reach” Saraaya you actually walk the last stretch, and that changes the whole experience. By the time you arrive, it already feels like you’ve left everything behind. No traffic, no noise just silence and space. The tents are beautifully done, but what really stays with you is the feeling of being completely cut off (in a good way). Mornings here feel unreal. Definitely not for people looking for an easy, hotel like stay. But if you want something different, this place delivers.",
        name: "Rajneesh Thakur",
      },
      {
        text: "Staying at Saraaya was nothing short of magical. Tucked away in the serene beauty it offers the perfect blend of untouched nature and refined luxury, something you rarely come across . hat stood out the most was how effortlessly the property combines comfort with wilderness. What truly makes this place special is that it delivers luxury that feels rare and unexpected in such a remote setting. You get the best of both worlds complete serenity and privacy without compromising on comfort. If you’re looking to disconnect from the chaos and reconnect with nature without giving up on the finer things this place is an absolute must visit",
        name: "Ronak Panchal",
      },
      {
        text: "Beautiful property in midst of mountains and greenery Such a scenic and calm place to visit ottages are 5 star with amazing bed and bathrooms are so well done Each aspect of the property has a thoughtful insight. Rooms are well heated in winters The host and service staff are delightful amd happy to serve u in a best way possible le We were 2 couple with children hey've a stay a truly memorable experience. Must visit when in dharmsala",
        name: "Payal Razzaq",
      },
      {
        text: "Awesome place, loved it !!",
        name: "rishi malhotra",
      },
    ],

    cta: {
      label: "Book Now",
      href: contact.callCta,
    },
  },
};
