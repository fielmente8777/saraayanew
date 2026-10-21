import { siteUrl } from "./metadata";

export const lodgingBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LodgingBusiness", "Resort"],
  "@id": `${siteUrl}/#lodging`,
  name: "SARAAYA",
  alternateName: "Saraaya Glamps",
  description:
    "A private mountain glamping experience shaped by stillness in the Kangra Valley near Dharamshala. Four private safari suites surrounded by native deodar forests and a glacier-fed stream.",
  url: `${siteUrl}/`,
  telephone: "+91-8988334372",
  email: "info@saraayaglamps.com",
  priceRange: "₹₹₹₹",
  image: `${siteUrl}/logo-1.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Village Nauhali",
    addressLocality: "Dharamshala",
    addressRegion: "Himachal Pradesh",
    postalCode: "176217",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.219,
    longitude: 76.3234,
  },
  hasMap: "https://maps.app.goo.gl/MErrEdUx4V9K7sHs8",
  checkinTime: "14:00",
  checkoutTime: "11:00",
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Ensuite Private Bathroom",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "24/7 Hot and Normal Water Facilities",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Seasonal Comfort (Summer & Winter Stays)",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Private Forest Deck",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Riverside Forest Dining",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Bonfire & Star-Gazing Sessions",
      value: true,
    },
  ],
  sameAs: [
    "https://www.instagram.com/saraaya.dharamshala",
    "https://www.facebook.com/share/1LsNztG2je/",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: `${siteUrl}/`,
  name: "SARAAYA Mountain Glamping",
  description:
    "Private Himalayan glamping experience shaped by stillness in Dharamshala, Kangra Valley.",
  publisher: {
    "@id": `${siteUrl}/#lodging`,
  },
};

export function getBlogPostingJsonLd(post: {
  title: string;
  slug: string;
  meta: { description: string };
  image?: string;
  date?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blogs/${post.slug}/`,
    },
    headline: post.title,
    description: post.meta.description,
    image: post.image
      ? `${siteUrl}${post.image.startsWith("/") ? post.image : `/${post.image}`}`
      : `${siteUrl}/logo-1.png`,
    author: {
      "@type": "Organization",
      name: "SARAAYA",
      url: `${siteUrl}/`,
    },
    publisher: {
      "@type": "Organization",
      name: "SARAAYA",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo-1.png`,
      },
    },
  };
}
