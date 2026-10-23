import { contact } from "@/utils/constent";

export interface ExperienceCardItem {
  id: string;
  title: string;
  timing: string;
  image: string;
  alt?: string;
  description?: string;
}

export const experiencePageData = {
  hero: {
    image: "/experiences/hero-banner.webp",
    title: "The SARAAYA Experiences",
    subtitle: "An Unhurried Mountain Experience",
  },

  unstructured: {
    eyebrow: "SOME DAYS, THE BEST PLAN IS NO PLAN",
    title: 'SARAAYA is <span class="italic">Intentionally</span> Unstructured.',
    emblem: "/home/Vector-1.png",
    description:
      "There are no fixed programmes or timetables. Spend the day on your deck, explore the surrounding landscape, sit beside the stream or choose an experience arranged by our team.",
  },

  curated: {
    eyebrow: "THE SARAAYA EXPERIENCES",
    heading: 'Days arranged<br />like <span class="italic text-secondary">Stories!</span>',
    subheading:
      "Curated rituals designed by our hosts, none of them on a schedule, all of them on the slow side of time.",
    bgImage: "/home/reviews-bg.png",
    footerNote:
      "Experiences are arranged in advance and remain subject to weather, season and availability. Experiences, setups and food & beverage arrangements are chargeable separately. Trekking is not included in the stay.",
    cta: {
      label: "ENQUIRE ABOUT AN EXPERIENCE",
      href: contact.WhatsappCta,
    },
    cards: [
      {
        id: "bonfire",
        title: "Bonfire",
        timing: "DUSK · DAILY",
        image: "/experiences/bonfire.webp",
        alt: "Bonfire at SARAAYA",
        description:
          "Private outdoor movie setup with cozy bonfire ambience under the stars.",
      },
      {
        id: "breakfast",
        title: "Himalayan Breakfasts",
        timing: "SUNRISE · IN-TENT",
        image: "/experiences/breakfast.webp",
        alt: "Himalayan Breakfasts at SARAAYA",
        description:
          "Wholesome mountain morning spread served fresh in-tent or on your private deck.",
      },
      {
        id: "riverside-picnic",
        title: "Riverside Picnic",
        timing: "MIDDAY · BESIDE THE STREAM",
        image: "/home/exp-4.png",
        alt: "Riverside Picnic at SARAAYA",
        description:
          "Curated outdoor picnic setup surrounded by nature for a relaxed experience.",
      },
      {
        id: "guided-hikes",
        title: "Guided Hikes & Nature Trails",
        timing: "MORNING · TRAILS",
        image: "/exp-1.png",
        alt: "Guided Hikes & Nature Trails at SARAAYA",
        description:
          "Explore native mountain trails at an easy pace with a local guide.",
      },
      {
        id: "village-walk",
        title: "Village Walk",
        timing: "AFTERNOON · VALLEY RHYTHM",
        image: "/exp-6.png",
        alt: "Village Walk at SARAAYA",
        description:
          "Guided village tour of the surrounding mountain village with a local guide.",
      },
      {
        id: "sundowner",
        title: "Sundowner",
        timing: "DUSK · GOLDEN HOUR",
        image: "/home/exp-3.png",
        alt: "Sundowner at SARAAYA",
        description:
          "Beautiful sunset setup at a scenic spot perfect for couples and small groups.",
      },
    ] as ExperienceCardItem[],
  },
};
