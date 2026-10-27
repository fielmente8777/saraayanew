import Image from "next/image";
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
        <div className="relative min-h-80 md:min-h-[480px]">
          <Image src="/winter/property-setting.webp" alt="Saraaya’s private Safari suites surrounded by terraced fields and forest" fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-col justify-center gap-6 p-7 md:p-12">
          <p className="text-sm! uppercase tracking-widest text-secondary">Instagram feature</p>
          <h2 className="font-primary text-4xl">Featured on NDTV’s Instagram</h2>
          <p>Watch the feature on Instagram and discover Saraaya’s corner of the Himalayas.</p>
          <a href={reel} target="_blank" rel="noopener noreferrer" className="w-fit rounded-full bg-primary px-6 py-3 text-white">Watch the NDTV reel ↗</a>
          <a href="https://www.instagram.com/ndtv/" target="_blank" rel="noopener noreferrer" className="w-fit border-b border-secondary text-secondary">Visit NDTV on Instagram ↗</a>
          <p className="text-xs! text-light">The reel opens on Instagram and may require sign-in. The image shown here is a Saraaya property photograph. Media content belongs to its original publisher.</p>
        </div>
      </article>
      <div className="mt-12 flex flex-wrap gap-6">
        <a href="https://www.instagram.com/saraaya.dharamshala/" target="_blank" rel="noopener noreferrer" className="border-b border-secondary pb-1 text-secondary">Follow Saraaya on Instagram ↗</a>
        <Link href="/about-us/" className="border-b border-secondary pb-1 text-secondary">Read Our Story ↗</Link>
      </div>
    </section>
  </main>;
}