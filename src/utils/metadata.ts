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