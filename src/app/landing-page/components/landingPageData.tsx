import { contact } from "@/utils/constent";
import { FillLocationIcon } from "@/utils/icons";

export const landingPageData = {
  bannerData: {
    images: ["/bnr-1.png", "/bnr-2.png", "/bnr-3.png", "/bnr-4.png"],
  },
  about: {
    title:
      "A Private Glamping <br/><span class='text-secondary italic'> Experience in the  <i>Himalayas</i></span>",
    description: [
      "Four private safari suites. A quiet Himalayan valley. A mountain stream. Expansive Himalayan views.<br> <b>Saraaya</b>  is a private  glamping experience in the Kangra Valley, created for those looking to step away from the pace of city life and reconnect with nature.<br> Surrounded by Deodar cedar, native oak and rhododendron, SARAAYA offers an intimate mountain stay where space, privacy and silence take precedence.",
    ],
    location: {
      label: "SARAAYA GLAMPS DHARAMSHALA",
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
          "In a world that never stops, Saraaya is the pause button. Designed for profound silence and reconnection, we believe that slowing down is the entire point. Here, the Himalayan breeze does the healing, and the rhythm of the forest dictates your day.",
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
    title: "Stay Amid the <i>Himalayan</i>",
    cards: [
      {
        title: "Mountain View Safari Suites",
        images: [
          "/optimized/mountain-1.webp",
          "/optimized/mountain-2.webp",
          "/optimized/mountain-3.webp",
          "/optimized/mountain-4.webp",
          "/rooms/Mountain-5.png",
          "/rooms/Mountain-6.png",
        ],
      },
      {
        title: "Premium View Safari Suites",
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
    "ONLY FOUR SAFARI SUITES AVAILABLE PER NIGHT",
  ],

  experiences: {
    label: "Experiences",
    title: "Explore<span>. Wander. Or Sim</span>ply Be.",
    cards: [
      {
        image: "/exp-1.png",
        alt: "Kareri Lake",
        desc: "Explore one of the region’s celebrated Himalayan trails.",
      },
      {
        image: "/exp-2.png",
        alt: "Stargazing & Moonlit Evenings",
        desc: "Leave the city lights behind and experience the mountain night sky.",
      },
      {
        image: "/Saraya-137.jpg",
        alt: "Riverside Picnic",
        desc: "Slow, unhurried afternoons laid out beside clear alpine waters.",
      },
      {
        image: "/exp-4.png",
        alt: "Cultural Night",
        desc: "Evenings spent discovering local mountain traditions and valley stories with our team.",
      },
      {
        image: "/exp-7.png",
        alt: "Movie under the Stars",
        desc: "An intimate open-air screening framed by pine canopies and the night sky.",
      },
      {
        image: "/exp-8.png",
        alt: "Bonfire",
        desc: "Warm embers and cold mountain air beneath an open sky.",
      },
      {
        image: "/exp-5.png",
        alt: "Riverside Moments",
        desc: "Slow down beside the mountain stream and let the valley unfold around you.",
      },
      {
        image: "/Copy of Saraya-203.jpg",
        alt: "Forest & Village Experiences",
        desc: "Discover the surrounding landscape and local mountain life.",
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
        text: "A beautifully curated glamp-style property set amidst serene surroundings and a lovely stream nearby. … We had a truly memorable stay and would love to return.",
        name: "Sadhvi Arora",
      },
      {
        text: "The property was serene and beautiful, perfect for nature lovers looking for offbeat places to visit and explore the unexplored areas of Dharamshala. It is so secluded and peaceful that we didn't want to leave after a day. Regarding the property, Sabhay was very helpful before the booking, answering the hundreds of auestions we asked about the stay, the property, and the area.As soon as we reached the location, Sabhay was there to welcome us: because the road to the property was muddy and accessible only by 4x4, he picked us up and dropped us off when we checked out. The cottage was clean and beautiful, with all the amenities, including Wi-Fi, which was a great feature for such a remote place.The Kareri River was barely 50 meters away from our cottage, and the view. the vibe. and everything else made it so mesmerizing that we spent the whole afternoon there. Please visit this",
        name: "Tushar Agarwal",
      },
      {
        text: "The place was so hidden and so beautifully designed next to the river stream and the couple who owns it are so hands on over the place personally in every detail which made our stay blissful.. Me my wife and 10 yr old daughter had great time.....lucky, the caretaker was exceptional in his own way to perform his work to the core.....",
        name: "Hemant Chebrolu",
      },
      {
        text: "It was one of the most breathtaking views I’ve ever seen, coupled with excellent and personalised experiences curated by them. The host as well as the staff were constantly available in case we needed something. One of the best parts, the ingredients were locally sourced and cooked expertly. It’s the kind of place one should visit when the world has worn us out. Mr. Lucky was exceptional and always a call away for anything. Shoutout to Marshall, tiger and Bhalu for accompanying us on our walk and making it 100 times more fun. Definitely would recommend. (P.S. expect a bit of uneven terrain, and the occasional horse)",
        name: "Manasvi Kanaparthy",
      },
      {
        text: "Absolutely beautiful property. The cottages are well-appointed. The food is great. The view from the rooms is great. So secluded from the world that your cars get parked about a kilometre away. Then their 4x4 vehicle takes you ahead and after a point you have to walk through the fields, cross a bridge, and you finally reach the place. The staff is very courteous. You’ll only get BSNL network. Wifi can also be slightly unpredictable at times. They have a beautiful setup for movie night + bonfire. There’s also a river nearby and they can organise a picnic by the river or you can just go and dip your feet in the water by yourselves. It’s absolutely serene. I had gone with 3 of my girlfriends. Take a big bunch of friends or make it a romantic getaway - either way you won’t be disappointed :)",
        name: "Simran Bansal",
      },
    ],

    cta: {
      label: "Book Now",
      href: contact.WhatsappCta,
    },
  },
  corePillars: {
    label: "Core Pillars",
    title: "Fou<span>r Suites. By Des</span>ign.",
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
      title: "Nat<span>ure Uninterrup</span>ted",
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
    title: "The Qui<span>eter Side of Dhar</span>amshala",
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
