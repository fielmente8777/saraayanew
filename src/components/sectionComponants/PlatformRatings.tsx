import { FcGoogle } from "react-icons/fc";
import { SiAirbnb, SiBookingdotcom } from "react-icons/si";

// Sources researched on 26 October 2026. Scores retain each platform's scale.
// Booking.com: indexed property page (October 2026); live access is bot-protected.
export const reviewProfiles = [
  { name: "Google", Icon: FcGoogle, color: "", score: "5.0", scale: "5", count: "55 reviews", detail: "Google guest reviews", href: "https://www.google.com/travel/hotels/entity/CgsI_O2RjN6YwbCOARAB" },
  { name: "Airbnb", Icon: SiAirbnb, color: "#FF5A5F", score: "5.0", scale: "5", count: "6 reviews", detail: "Glamping Dharmshala listing", href: "https://www.airbnb.com/rooms/1666487212137913747" },
  { name: "Booking.com", Icon: SiBookingdotcom, color: "#003B95", score: "9.8", scale: "10", count: "6 reviews", detail: "Exceptional · October 2026 listing", href: "https://www.booking.com/hotel/in/saraaya.html" },
];

export function RatingCards({ compact = false }: { compact?: boolean }) {
  return (
    <div>
      <div className={compact ? "grid gap-3 sm:grid-cols-3" : "grid gap-5 md:grid-cols-3"}>
        {reviewProfiles.map(({ name, Icon, color, score, scale, count, detail, href }) => (
          <a key={name} href={href} target="_blank" rel="noopener noreferrer"
            aria-label={`${name}: ${score} out of ${scale}, ${count}. Read reviews (opens in a new tab)`}
            className={`group flex flex-col rounded-2xl border border-primary/20 bg-white transition-colors hover:border-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary ${compact ? "p-4" : "p-6 md:p-8"}`}>
            <div className="flex flex-wrap items-center gap-2">
              <Icon aria-hidden="true" size={compact ? 24 : 32} style={{ color }} />
              <h3 className={`${compact ? "text-sm!" : "text-xl!"} font-semibold text-primary`}>{name}</h3>
            </div>
            <div className={`${compact ? "mt-3" : "mt-7"} flex items-baseline gap-2 text-primary`}>
              <span className={`font-primary ${compact ? "text-3xl" : "text-5xl"}`}>{score}</span>
              <span className="text-lg">/ {scale}</span>
            </div>
            <p className="mt-2 text-base! text-primary">{count}</p>
            <p className="mt-2 text-sm! text-light">{detail}</p>
            <span className="mt-4 text-sm! text-secondary underline underline-offset-4">Read guest reviews ↗</span>
          </a>
        ))}
      </div>
      <p className="mx-auto mt-5 max-w-3xl text-center text-xs! leading-relaxed text-light">
        Ratings researched on 26 October 2026. Booking.com reflects its indexed October listing; Airbnb applies to the linked listing. Scores and review counts may change. Visit each platform for the latest reviews.
      </p>
    </div>
  );
}

export default function PlatformRatings() {
  return (
    <section id="guest-ratings" aria-labelledby="guest-ratings-heading" className="relative z-10 scroll-mt-28 border-y border-primary/20 bg-background px-5 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-center text-xs! uppercase tracking-[0.2em] text-secondary">Guest ratings</p>
        <h2 id="guest-ratings-heading" className="mb-8 text-center font-primary text-3xl text-primary md:text-5xl">A Stay Guests Remember</h2>
        <RatingCards />
      </div>
    </section>
  );
}
