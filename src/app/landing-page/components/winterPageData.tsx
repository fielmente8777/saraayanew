import { stayInformation } from "@/content/stayInformation";
import { winterWhatsappCta } from "./winterCtas";
export const winterPageData = {
  hero: {
    image: "/winter/lounge-blue-hour.webp",
    alt: "Saraaya at blue hour, with a bonfire, lantern-lit outdoor seating and private Safari suites surrounded by mountains",
    location: "Nauhali · Around 75 minutes from Dharamshala",
    eyebrow: "A Rare Find in the Himalayas",
    title: "Winter Glamping Near Dharamshala at Saraaya, Nauhali",
    description:
      "Four private Safari suites. Forest, mountain views and a natural stream. Discover a boutique stay shaped by comfort, nature and unhurried experiences.",
    mobileDescription:
      "Four private Safari suites. Comfort, nature and experiences beyond the ordinary.",
    cta: { label: "Explore Winter Packages", href: "#winter-packages" },
    secondaryCta: {
      label: "Check Availability on WhatsApp",
      href: winterWhatsappCta,
    },
  },
  why: [
    { title: "Settle into Your Winter Suite", text: "King-size beds, layered bedding and private bathrooms offer a comfortable base between time outdoors. See the power information before booking.", image: "/rooms/2.jpg", alt: "King-size bed and layered bedding in a Saraaya Glamps Safari suite" },
    { title: "Choose Your Winter Evenings", text: "Ask about a bonfire, stargazing or Movie under the Stars for your dates. Hosted activities depend on weather and the inclusions in your quote.", image: "/winter/evening-experience.jpg", alt: "Bonfire seating beside a Safari suite at dusk" },
    { title: "Plan Your Days at Your Pace", text: "Leave room for Nauhali village walks, forest surroundings and unhurried mornings. Our hosts can help you choose outings suited to local winter conditions.", image: "/winter/local-walk.webp", alt: "A village trail through the countryside near Nauhali" },
  ],
  comforts: [
    {
      image: "/rooms/Copy of Saraya-5.jpg",
      alt: "King-size bed, cosy bedding and furnished Saraaya suite interior",
      caption: "King-size beds & cosy bedding",
    },
    {
      image: "/winter/suite-bathroom.webp",
      alt: "Saraaya's private attached bathroom with shower and washbasin",
      caption: "Private bathrooms & hot-water facilities",
    },
    {
      image: "/winter/private-deck.webp",
      alt: "Outdoor seating on the private deck of a Saraaya Safari suite",
      caption: "Your own deck & mountain views",
    },
  ],
  experiences: [
    {
      title: "Slow Living & Nature",
      text: "Take a break from the everyday rush. Enjoy peaceful mornings, forest bathing, mountain views and time surrounded by nature.",
      image: "/winter/forest-picnic.jpg",
      alt: "Quiet forest surroundings and outdoor space at Saraaya",
      charge:
        "Enjoy the surroundings at your own pace. Ask about any hosted-session charges.",
    },
    {
      title: "Explore the Outdoors",
      text: "Discover the local landscape through guided hikes and village walks. Experience the quieter side of Himachal at your own pace.",
      image: "/winter/local-walk.webp",
      alt: "A walk through the natural surroundings near Saraaya",
      charge:
        "Guided activities are arranged on request and charged separately unless included in your confirmed plan.",
    },
    {
      title: "Riverside Moments",
      text: "Enjoy a thoughtfully arranged riverside picnic or a sundowner experience beside the natural stream, subject to weather and local conditions.",
      image: "/winter/stream-picnic.webp",
      alt: "Picnic setup at Saraaya Glamps beside the stream",
      charge:
        "Arranged setups cost extra unless included in your plan. Food and beverages are charged separately.",
    },
    {
      title: "Evenings Under the Stars",
      text: "Gather around a bonfire or spend an evening stargazing beneath the Himalayan sky.",
      image: "/winter/stargazing.jpg",
      alt: "A telescope and outdoor seating prepared for stargazing at Saraaya",
      charge:
        "Bonfire setups are arranged on request, with additional charges unless included in your plan.",
    },
    {
      title: "Movie under the Stars",
      text: "An intimate open-air screening framed by pine canopies and the night sky.",
      image: "/winter/movie-night.webp",
      alt: "Guests enjoying an open-air movie screening at Saraaya",
      charge:
        "Arranged on request and charged separately unless included in your confirmed package. Subject to weather and availability.",
    },
    {
      title: "Moments Worth Celebrating",
      text: "Make an anniversary, birthday or special getaway more memorable with personalised arrangements and dining experiences.",
      image: "/winter/dining-moments.webp",
      alt: "A dining setup prepared at Saraaya",
      charge:
        "Personalised arrangements, dining, food and beverages are quoted separately.",
    },
  ],
  testimonials: [
    {
      name: "Ashish Jain",
      text: "Food was fresh, service was quick, and the whole experience felt personal.",
      source: "Google Reviews",
    },
    {
      name: "The MockingjaY",
      text: "We absolutely loved the ambience, location, and serenity of this place.",
      source: "Google Reviews",
    },
  ],
  stayOptions: [
    {
      title: "Private Suite Winter Stay",
      text: "Choose one private Safari suite for your winter break. Ask for meals and any selected experiences to be itemised in a single stay quote.",
      basis:
        "Two guests per suite as standard; confirm dates and additional guests.",
      meals:
        "Breakfast, lunch and dinner: request the inclusions for your selected plan.",
      extras:
        "Hosted experiences and additional guests are quoted separately unless expressly included.",
    },
    {
      title: "Private Group Stay",
      text: "Planning a getaway with friends or family? Enquire about multiple Safari suites or arranging a private property buyout.",
      basis:
        "Four Safari suites; group capacity and rooming depend on adults, children and bedding.",
      meals:
        "Shared meal plans and dietary requirements arranged with the hosts.",
      extras:
        "Confirm buyout availability, extra bedding and any private arrangements.",
    },
  ],
  faqs: [
    {
      q: "Where is Saraaya Glamps located?",
      a: "Saraaya Glamps is located in Nauhali in the Dharamshala region of Kangra district, Himachal Pradesh, approximately 75 minutes from Dharamshala.",
    },
    {
      q: "What type of accommodation does Saraaya offer?",
      a: "Saraaya offers four private Safari suites in a natural Himalayan setting, with king-size beds, private attached bathrooms and decks.",
    },
    {
      q: "Is Saraaya suitable for a winter stay?",
      a: "Yes. Our Safari suites feature king-size beds, attached bathrooms with hot-water facilities and heaters. Please contact us if you have specific requirements for your winter stay and review the important information below.",
    },
    {
      q: "How do guests reach the property?",
      a: stayInformation.arrival,
    },
    {
      q: "What activities can guests enjoy?",
      a: "Depending on the season, weather and availability, guests can enjoy guided hikes, village walks, riverside picnics, bonfires, stargazing and open-air movie nights. Arranged experiences may carry an additional charge.",
    },
    {
      q: "Are meals included in the package?",
      a: "Meal inclusions depend on the package selected. Check your written package details or contact our team for the current options, including breakfast, lunch and dinner.",
    },
    {
      q: "Is Wi-Fi available?",
      a: stayInformation.wifi,
    },
    {
      q: "Can we celebrate an anniversary or birthday at Saraaya?",
      a: "Yes. We can discuss personalised arrangements and selected dining experiences for special occasions, subject to availability and applicable charges.",
    },
    {
      q: "How do I check availability and prices?",
      a: "Contact our team through WhatsApp or submit an enquiry with your preferred dates and number of guests. Request a written quote with prices, inclusions, taxes and additional charges.",
    },
    {
      q: "Can we book the entire property?",
      a: "Private group bookings may be available depending on your dates and requirements. Contact our team to discuss availability, rooming arrangements and pricing.",
    },
  ],
  disclaimers: [
    "The property is located in a natural mountain setting. Weather and local conditions may affect outdoor activities and travel arrangements.",
    stayInformation.power,
    stayInformation.wifi,
    "Outdoor activities, riverside experiences and stargazing depend on weather, safety conditions and availability. Certain experiences incur additional charges; confirm inclusions before booking.",
    stayInformation.arrival,
    "Package prices, availability, meal inclusions, extra-bed charges, taxes and payment, cancellation and refund terms must be confirmed in your written booking details.",
  ],
};
