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
    cta: { label: "Book Now", href: contact.WhatsappCta },
    therapies: [
      {
        src: "/Saraya-309.jpg",
        icon: "/Sacred-icon.png",
        name: "Sacred",
        subTitle: "An Ancestral Connection",
        description:
          "Steeped in the spiritual legacy of the Lam Dal and Kareri waters, Saraaya sits on land echoing with the footsteps of pilgrims and mountain legends. Here, the air carries a different weight, a quiet, hallowed energy that invites reflection and deep inner peace.",
      },
      {
        src: "/Saraya-319.jpg",
        icon: "/Restorative-icon.png",
        name: "Restorative",
        subTitle: "The Art of the Reset",
        description:
          "In a world that never stops, Saraaya is the pause button. Designed for profound silence and reconnection, we believe that slowing down isn't just a luxury, it is the entire point. Here, the Himalayan breeze does the healing, and the rhythm of the forest dictates your day.",
      },
      {
        src: "/Saraya-159.jpg",
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
      href: contact.WhatsappCta,
    },
  },

  titles: [
    "LIMITED STAYS",
    "HIGH DEMAND ON",
    "ONLY FOUR TENTS AVAILABLE PER NIGHT",
  ],

  experiences: {
    label: "Experiences",
    title: "Explore<i>. Wander. Or Sim</i>ply Be.",
    cards: [
      {
        image: "/exp-1.png",
        alt: "Kareri Lake",
      },
      {
        image: "/exp-2.png",
        alt: "Stargazing & Moonlit Evenings",
      },
      {
        image: "/Saraya-137.jpg",
        alt: "Glacier Stream Picnic",
      },
      {
        image: "/exp-4.png",
        alt: "Cultural Night",
      },
      {
        image: "/exp-7.png",
        alt: "Movie under the Stars",
      },
      {
        image: "/exp-8.png",
        alt: "Bonfire",
      },
      {
        image: "/exp-5.png",
        alt: "Riverside Moments",
      },
      {
        image: "/exp-6.png",
        alt: "Village Experiences",
      },
    ],
    cta: {
      label: "Book Now",
      href: contact.WhatsappCta,
    },
  },
  testimonialData: {
    title: "Guest <i>Experiences</i>",
    images: [
      "/Saraya-301.jpg",
      "/Saraya-298.jpg",
      "/Saraya-234.jpg",

      "/Saraya-86.jpg",
      "/Saraya-194.jpg",
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
      href: contact.WhatsappCta,
    },
  },
  corePillars: {
    label: "Core Pillars",
    title: "Fou<i>r Suites. By Des</i>ign.",
    description:
      "We could have built more. We chose not to. SARAAYA is intentionally limited to four private safari suites. With fewer guests and generous space around you, the landscape remains the experience. No crowded resort. No rows of rooms. Just your private space, the forest, the mountains and the sound of the stream. Less built. More left for you.",
  },

  reelFeatures: [
    {
      label: "THE ART OF THE RESET",
      title: "A Mountain Stay Shaped by <i>Stillness</i>",
      description: [
        {
          text: "Wake without an alarm. Take your coffee onto the veranda. Walk through the forest. Sit beside the stream. Watch the changing Himalayan light.",
        },
        { text: "There is no pressure to fill the day.", italic: true },
        {
          text: "SARAAYA is a place to slow down, breathe deeper and let the mountains set the pace.",
        },
      ],
      cta: { label: "Book Now", href: contact.WhatsappCta },
      reel: { src: "/video/saraayareel.mp4", poster: "/Saraya-319.jpg" },
    },
    {
      label: "Close to Nature, Further from the Noise",
      title: "Nat<i>ure Uninterrup</i>ted",
      description: [
        {
          text: "SARAAYA is surrounded by Deodar cedar, native oak and rhododendron, with a mountain stream flowing nearby.",
        },
        {
          text: "From your private safari suite, the landscape is never far away.",
          italic: true,
        },
        {
          text: "Spend your day exploring the Kangra Valley, discover nearby villages and mountain trails, or simply stay close to your suite and enjoy the quiet.",
        },
      ],
      cta: { label: "Book Now", href: contact.WhatsappCta },
      reel: { src: "/video/saraayareel2.mp4", poster: "/Saraya-159.jpg" },
    },
  ],

  quieterSide: {
    image: "/quiter.jpg",
    label: "Serenity in Wilderness",
    title: "The Qui<i>eter Side of Dhar</i>amshala",
    description: [
      {
        text: "Located in Nauhali, Kangra Valley, SARAAYA offers a secluded alternative to the busy Dharamshala stay. Away from the busy tourist centres, the setting places you between forests, villages, mountain trails and the natural landscape of Himachal Pradesh.",
      },
      { text: "Come for the mountains. Stay for the stillness." },
      { text: "Four private safari suites. One quiet Himalayan valley." },
    ],
    cta: { label: "Book Now", href: contact.WhatsappCta },
  },
};
