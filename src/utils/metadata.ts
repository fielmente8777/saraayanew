import { Metadata } from "next";

export const siteUrl = "https://saraayaglamps.com";

export const seoMetadata: Record<string, Metadata> = {
  home: {
    title: "SARAAYA | Luxury Glamping & Mountain Retreat in Dharamshala, Kangra Valley",
    description:
      "Experience SARAAYA, an exclusive mountain glamping retreat near Dharamshala. Four private safari suites surrounded by native deodar forests and a glacier-fed stream.",
    keywords: [
      "Saraaya Glamping",
      "Glamping Dharamshala",
      "Luxury camping Himachal Pradesh",
      "Kangra Valley retreat",
      "Safari suites Dharamshala",
      "Private mountain glamping",
      "Kareri Lake stay",
      "Boutique retreat Himalayas",
    ],
    alternates: {
      canonical: `${siteUrl}/`,
    },
    openGraph: {
      title: "SARAAYA | Luxury Glamping & Mountain Retreat in Dharamshala",
      description:
        "Four private Safari Suites set among native deodar and pine forests beside a glacier-fed stream near Dharamshala.",
      url: `${siteUrl}/`,
      siteName: "SARAAYA Glamping Retreat",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/logo-1.png",
          width: 800,
          height: 600,
          alt: "SARAAYA Glamping Retreat",
        },
      ],
    },
  },

  about: {
    title: "Our Story | SARAAYA Himalayan Glamping Retreat Dharamshala",
    description:
      "Discover the story of SARAAYA. Founded in 2019 in Village Nauhali, created around space, nature, and stillness in the Himalayas with only four private safari suites.",
    keywords: [
      "About Saraaya",
      "Story of Saraaya",
      "Village Nauhali retreat",
      "Kangra Valley glamping history",
      "Himalayan nature stay",
      "Dharamshala boutique glamping",
    ],
    alternates: {
      canonical: `${siteUrl}/about-us/`,
    },
    openGraph: {
      title: "Our Story | SARAAYA Himalayan Glamping Retreat Dharamshala",
      description:
        "The story behind SARAAYA — a secluded sanctuary in the Kangra Valley created around space, nature, and stillness.",
      url: `${siteUrl}/about-us/`,
      siteName: "SARAAYA Glamping Retreat",
      locale: "en_IN",
      type: "website",
    },
  },

  rooms: {
    title: "Safari Suites & Accommodations | SARAAYA Glamping Dharamshala",
    description:
      "Explore our four private Safari Suites: DEVdar, RAI, BURANSH, and KAIL. Fitted with ensuite bathrooms, 24/7 hot and normal water, and comfort for summer & winter stays.",
    keywords: [
      "Safari Suites Dharamshala",
      "Glamping tents Himachal",
      "Devdar suite",
      "Rai suite",
      "Buransh suite",
      "Kail suite",
      "Luxury tents with private deck",
      "Heated glamping tents Dharamshala",
    ],
    alternates: {
      canonical: `${siteUrl}/rooms/`,
    },
    openGraph: {
      title: "Safari Suites & Accommodations | SARAAYA Glamping Dharamshala",
      description:
        "Four distinct Safari Suites framed by cedar forests, mountain ridges, and flowing glacier-fed waters.",
      url: `${siteUrl}/rooms/`,
      siteName: "SARAAYA Glamping Retreat",
      locale: "en_IN",
      type: "website",
    },
  },

  gallery: {
    title: "Gallery | SARAAYA Through Your Eyes — Himalayan Retreat Photos",
    description:
      "Take a visual journey through SARAAYA. Browse photos of our private safari suites, mountain streams, riverside picnics, bonfire nights, and native pine forests.",
    keywords: [
      "Saraaya photos",
      "Glamping gallery Dharamshala",
      "Himalayan retreat pictures",
      "Safari suite images",
      "Riverside dining gallery",
    ],
    alternates: {
      canonical: `${siteUrl}/gallery/`,
    },
    openGraph: {
      title: "Gallery | SARAAYA Through Your Eyes — Himalayan Retreat Photos",
      description:
        "A visual glimpse into private safari suites, pristine streams, and unforgettable mountain moments at SARAAYA.",
      url: `${siteUrl}/gallery/`,
      siteName: "SARAAYA Glamping Retreat",
      locale: "en_IN",
      type: "website",
    },
  },

  contact: {
    title: "Contact & Enquiries | Plan Your Stay at SARAAYA Dharamshala",
    description:
      "Get in touch with SARAAYA to plan your private glamping stay, family getaway, or romantic retreat in Village Nauhali, Dharamshala. Check availability and reserve.",
    keywords: [
      "Contact Saraaya",
      "Saraaya booking enquiry",
      "Dharamshala glamping reservation",
      "Village Nauhali directions",
      "Saraaya phone number",
      "Saraaya address",
    ],
    alternates: {
      canonical: `${siteUrl}/contact-us/`,
    },
    openGraph: {
      title: "Contact & Enquiries | Plan Your Stay at SARAAYA Dharamshala",
      description:
        "Come away to SARAAYA. Tell us when you would like to arrive and let us help you plan your Himalayan stay.",
      url: `${siteUrl}/contact-us/`,
      siteName: "SARAAYA Glamping Retreat",
      locale: "en_IN",
      type: "website",
    },
  },

  experiences: {
    title: "The SARAAYA Experiences | Unhurried Mountain Glamping in Dharamshala",
    description:
      "Curated rituals and unhurried mountain experiences at SARAAYA. Himalayan breakfasts, riverside picnics, bonfire nights, guided trails, and stargazing in Kangra Valley.",
    keywords: [
      "Saraaya experiences",
      "Things to do in Dharamshala glamping",
      "Himalayan outdoor breakfast",
      "Riverside picnic Dharamshala",
      "Stargazing Kangra Valley",
      "Bonfire glamping Himalayas",
      "Village walk Dharamshala",
    ],
    alternates: {
      canonical: `${siteUrl}/experiences/`,
    },
    openGraph: {
      title: "The SARAAYA Experiences | Unhurried Mountain Glamping in Dharamshala",
      description:
        "Curated rituals designed on the slow side of time. Bonfires, Himalayan breakfasts, riverside picnics and mountain trails.",
      url: `${siteUrl}/experiences/`,
      siteName: "SARAAYA Glamping Retreat",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/experiences/hero-banner.webp",
          width: 1200,
          height: 800,
          alt: "The SARAAYA Experiences",
        },
      ],
    },
  },

  gettingHere: {
    title: "Getting Here | Directions & Mountain Arrival — SARAAYA Dharamshala",
    description:
      "Plan your journey to SARAAYA in Village Nauhali, Dharamshala. Information on road access, meeting point, mountain transfers, connectivity, and what to expect upon arrival.",
    keywords: [
      "Getting to Saraaya",
      "How to reach Saraaya Dharamshala",
      "Village Nauhali directions",
      "Kangra Valley retreat location",
      "Saraaya mountain transfer",
      "Directions to Saraaya Glamping",
    ],
    alternates: {
      canonical: `${siteUrl}/getting-here/`,
    },
    openGraph: {
      title: "Getting Here | Directions & Mountain Arrival — SARAAYA Dharamshala",
      description:
        "The journey becomes part of the arrival. How to reach SARAAYA in Village Nauhali near Dharamshala.",
      url: `${siteUrl}/getting-here/`,
      siteName: "SARAAYA Glamping Retreat",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/getting-here/banner1.jpg",
          width: 1200,
          height: 800,
          alt: "Getting to SARAAYA Glamping",
        },
      ],
    },
  },

  couplesAndGroups: {
    title: "Couples & Private Groups | SARAAYA Himalayan Glamping Dharamshala",
    description:
      "Time and space to be together away from the crowd. Romantic getaways for couples and exclusive private glamping buyouts for families and small groups at SARAAYA.",
    keywords: [
      "Saraaya couples getaway",
      "Romantic glamping Dharamshala",
      "Private group buyout glamping",
      "Honeymoon Himachal Pradesh",
      "Exclusive mountain retreat Dharamshala",
      "Kangra Valley private stay",
    ],
    alternates: {
      canonical: `${siteUrl}/couples-and-private-groups/`,
    },
    openGraph: {
      title: "Couples & Private Groups | SARAAYA Himalayan Glamping",
      description:
        "Time and space to be together. Away from the crowd, shaped around you.",
      url: `${siteUrl}/couples-and-private-groups/`,
      siteName: "SARAAYA Glamping Retreat",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/couples/banner.jpg",
          width: 1200,
          height: 800,
          alt: "Couples & Private Groups at SARAAYA",
        },
      ],
    },
  },



  landingPage: {
    title: "Experience SARAAYA | Private Mountain Glamping in the Himalayas",
    description:
      "Book your stay at SARAAYA Glamping Dharamshala. Four luxury safari suites, river picnics, star-gazing sessions, and unhurried stillness in Kangra Valley.",
    keywords: [
      "Saraaya landing page",
      "Book luxury glamping Dharamshala",
      "Private glamping Himachal",
      "Safari tents booking Kangra",
    ],
    alternates: {
      canonical: `${siteUrl}/landing-page/`,
    },
    openGraph: {
      title: "Experience SARAAYA | Private Mountain Glamping in the Himalayas",
      description:
        "Four private Safari Suites. A secluded mountain setting. The Kangra Valley beyond the crowds.",
      url: `${siteUrl}/landing-page/`,
      siteName: "SARAAYA Glamping Retreat",
      locale: "en_IN",
      type: "website",
    },
  },

  blogs: {
    title: "Travel & Mountain Living Blogs | SARAAYA Glamps Dharamshala",
    description:
      "Read stories, travel guides, and inspiration for romantic getaways, spiritual journeys, and experiential glamping in Himachal Pradesh from the SARAAYA team.",
    keywords: [
      "Saraaya blogs",
      "Himachal Pradesh travel blog",
      "Glamping guide India",
      "Dharamshala travel tips",
      "Romantic getaways blog",
    ],
    alternates: {
      canonical: `${siteUrl}/blogs/`,
    },
    openGraph: {
      title: "Travel & Mountain Living Blogs | SARAAYA Glamps Dharamshala",
      description:
        "Travel inspiration, mountain living reflections, and glamping guides from SARAAYA in the Himalayas.",
      url: `${siteUrl}/blogs/`,
      siteName: "SARAAYA Glamping Retreat",
      locale: "en_IN",
      type: "website",
    },
  },

  thankYou: {
    title: "Thank You | SARAAYA Glamping Dharamshala",
    description:
      "Thank you for your enquiry. The SARAAYA reservations team will get in touch with you shortly to assist with your mountain journey.",
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: `${siteUrl}/thank-you/`,
    },
  },
};