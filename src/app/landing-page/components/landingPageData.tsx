import { contact } from "@/utils/constent";
import { FillLocationIcon } from "@/utils/icons";

export const landingPageData = {
  bannerData: {
    images: ["/bnr-1.png", "/bnr-2.png", "/bnr-3.png", "/bnr-4.png"],
  },
  about: {
    title:
      "A Mountain Glamping <br/><span class='text-secondary italic'>Experience Shaped by <i>Stillness</i></span>",
    description: [
      "Where the Landscape Sets the Pace.<br/><br/>Set among native deodar, oak, pine and rhododendron forests in a secluded mountain valley near Dharamshala, SARAAYA is a private Himalayan glamping experience created around space, nature and quiet.<br/><br/>Four private Safari Suites sit within the landscape, surrounded by forest, mountain ridges and a glacier-fed stream whose waters originate from the Kareri Lake region. Created for those who value privacy and nature over crowded hill destinations, SARAAYA offers a slower way to experience the Kangra Valley.",
    ],
    location: {
      label: "VILLAGE NAUHALI, NEAR DHARAMSHALA",
      icon: <FillLocationIcon />,
      href: contact.addressLink,
    },
  },

  signatureTherapiesData: {
    title: "Hidden within the Folds of the <i>Mountains!</i>",
    cta: { label: "Book Now", href: contact.bookingEngineUrl },
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
    title: "Stay Amid the <i>Himalayan</i>",
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
      href: contact.bookingEngineUrl,
    },
  },

  titles: [
    "LIMITED STAYS",
    "HIGH DEMAND ON",
    "ONLY FOUR TENTS AVAILABLE PER NIGHT",
  ],

  experiences: {
    label: "Experiences",
    title: "Explore<span>. Wander. Or Sim</span>ply Be.",
    cards: [
      {
        image: "/Saraya-137.jpg",
        alt: "Riverside Picnic",
        desc: "Midday beside the stream. A thoughtfully arranged outdoor setting beside glacier-fed mountain waters for an unhurried lunch.",
      },
      {
        image: "/exp-1.png",
        alt: "Guided Hikes & Nature Trails",
        desc: "Through pine, oak and mountain paths. Explore the surrounding landscape at an easy pace with local guidance.",
      },
      {
        image: "/Copy of Saraya-203.jpg",
        alt: "Village Walk",
        desc: "The rhythm of the valley. Walk through the neighbouring mountain settlement and experience everyday Himalayan life.",
      },
      {
        image: "/home/exp-3.png",
        alt: "Sundowner",
        desc: "As the mountain light changes. A private outdoor setup to watch the evening light move across the surrounding ridges.",
      },
      {
        image: "/exp-7.png",
        alt: "Bonfire & Open-Air Cinema",
        desc: "Warm fire. Cold mountain air. A private outdoor movie setup beneath the open sky, accompanied by a bonfire.",
      },
      {
        image: "/exp-2.png",
        alt: "Stargazing & Moon Gazing",
        desc: "Look up. Slow down. Spend an evening beneath the Himalayan night sky, away from the bright lights of the city.",
      },
    ],
    cta: {
      label: "Book Now",
      href: contact.bookingEngineUrl,
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
        text: "A beautifully curated glamp-style property set amidst serene surroundings and a lovely stream nearby. Offering understated luxury and a tranquil atmosphere perfect for unwinding and reconnecting with nature. We had a truly memorable stay and would love to return.",
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
        text: "We had a wonderful stay at Saraya Glamps Dharamshala! Nestled amidst breathtaking mountain views and lush greenery, this place offers the perfect blend of luxury and nature. The glamping tents were beautifully designed, spacious, impeccably clean, and equipped with all the comforts needed for a relaxing getaway.The hospitality was exceptional. The staff was incredibly friendly, attentive, and always willing to go the extra mile to make our stay comfortable. The food was fresh, delicious, and thoughtfully prepared, making every meal a delight.The peaceful ambience, stunning surroundings, and well-maintained property make it an ideal destination for anyone looking to unwind and reconnect with nature without compromising on comfort. Whether you’re planning a romantic getaway, a family vacation, or simply a break from city life, Saraya Glamps Dharamshala is a fantastic choice.Highly recommended! We can’t wait to visit again.",
        name: "Saurabh Dharmawat",
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
      href: contact.bookingEngineUrl,
    },
  },
  corePillars: {
    label: "Core Pillars",
    title: "Fou<span>r Safari Suites. By Des</span>ign.",
    description:
      "We could have built more. We chose not to. SARAAYA is shaped around four distinct Safari Suites, each designed to provide privacy, comfort and a close connection with the surrounding landscape. Mornings begin with mountain light and forest air. Evenings settle into the sounds of the stream, wind through the trees and the Himalayan night.",
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
      cta: { label: "Book Now", href: contact.bookingEngineUrl },
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
      cta: { label: "Book Now", href: contact.bookingEngineUrl },
      reel: { src: "/video/saraayareel2.mp4", poster: "/Saraya-159.jpg" },
    },
  ],

  quieterSide: {
    image: "/quiter.jpg",
    label: "GETTING HERE",
    title: "A Qui<span>eter Side of Dhar</span>amshala",
    description: [
      {
        text: "The Journey Becomes Part of the Arrival. SARAAYA is located in Village Nauhali in the Kangra Valley, near Dharamshala, Himachal Pradesh. Kareri Lake lies beyond the property, and the glacier-fed waters flowing near SARAAYA originate from the surrounding high mountain region.",
      },
      {
        text: "Away from the more crowded tourist circuits of Dharamshala, Nauhali offers a quieter mountain setting surrounded by forest, valleys and Himalayan landscapes.",
      },
      {
        text: "Come for the mountains. Stay for the slower pace.",
        italic: true,
      },
    ],
    cta: { label: "Book Now", href: contact.bookingEngineUrl },
  },
};
