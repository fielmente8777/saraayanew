import Link from "next/link";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata("/media/", "Saraaya in the Media | NDTV Instagram Feature", "Explore Saraaya’s media features, including the NDTV Instagram reel, and discover our four private Safari suites near Dharamshala.", "/winter/property-setting.webp");
const reel = "https://www.instagram.com/reel/DenNQj1Tb_5/?obrf=YmxyemNwc2YxY3Ez";

export default function MediaPage() {
  return <main className="bg-background text-primary">
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-20">
      <p className="mb-4 text-sm! uppercase tracking-[0.2em] text-secondary">Stories beyond the stay</p>
      <h1 className="font-primary text-5xl md:text-7xl">Saraaya in the Media</h1>
      <p className="mt-6 max-w-2xl leading-relaxed">Discover stories and features about our secluded Himalayan setting, four private Safari suites and a different way to experience Dharamshala.</p>
      <article className="mt-12 grid overflow-hidden rounded-2xl border border-primary/20 bg-white md:grid-cols-2">
        <div className="flex items-start justify-center bg-[#f5f5f5] p-3 sm:p-6">
          <iframe
            src="https://www.instagram.com/reel/DenNQj1Tb_5/embed/"
            title="NDTV Instagram reel featuring Saraaya"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            className="h-[720px] w-full max-w-[540px] rounded-xl border-0 bg-white"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 p-7 md:p-12">
          <p className="text-sm! uppercase tracking-widest text-secondary">Instagram feature</p>
          <h2 className="font-primary text-4xl">Featured on NDTV’s Instagram</h2>
          <p>Watch the feature here and discover Saraaya’s corner of the Himalayas.</p>
          <a href={reel} target="_blank" rel="noopener noreferrer" className="w-fit rounded-full bg-primary px-6 py-3 text-white">Open reel on Instagram ↗</a>
          <p className="text-xs! text-light">This reel is embedded from Instagram. If it does not load or play, open it on Instagram; sign-in may be required. Media content belongs to its original publisher.</p>
        </div>
      </article>
      <div className="mt-12 flex flex-wrap gap-6">
        <a href="https://www.instagram.com/saraaya.dharamshala/" target="_blank" rel="noopener noreferrer" className="border-b border-secondary pb-1 text-secondary">Follow Saraaya on Instagram ↗</a>
        <Link href="/about-us/" className="border-b border-secondary pb-1 text-secondary">Read Our Story ↗</Link>
      </div>
    </section>
  </main>;
}
