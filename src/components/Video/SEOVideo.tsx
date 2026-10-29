"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface SEOVideoProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  pauseOnScroll?: boolean;
  threshold?: number;
  priority?: boolean;
}

// Keep the property film available without downloading it before a guest asks to watch.
export default function SEOVideo({ src, poster, loop = true, priority = false }: SEOVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !playing) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) video.pause();
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, [playing]);

  return (
    <div className="relative h-full w-full bg-primary">
      {(!playing || failed) && poster && (
        <Image src={poster} alt="Saraaya's mountain setting and private Safari suites" fill
          sizes={priority ? "100vw" : "(min-width: 1024px) 50vw, 100vw"}
          priority={priority} fetchPriority={priority ? "high" : "auto"} className="object-cover" />
      )}
      {playing && !failed ? (
        <video ref={videoRef} src={src} autoPlay muted loop={loop} controls playsInline
          preload="none" aria-label="Silent film of Saraaya and its surroundings"
          onError={() => { setFailed(true); setPlaying(false); }}
          className="h-full w-full object-cover">
          <track kind="captions" src="/video/saraaya-silent.vtt" srcLang="en" label="English" default />
        </video>
      ) : (
        <button type="button" onClick={() => { setFailed(false); setPlaying(true); }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/70 bg-primary px-5 py-3 text-sm font-medium text-white shadow-lg hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          <span aria-hidden="true">▶ </span>{failed ? "Retry property film" : "Watch the property film"}
        </button>
      )}
    </div>
  );
}
