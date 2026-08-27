"use client";

import { useEffect, useRef, useState } from "react";

export function LoadingScreen() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("vynx_loaded")) {
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";

    async function run() {
      const { gsap } = await import("gsap");

      const letters = lettersRef.current.filter(Boolean) as HTMLSpanElement[];

      gsap.set(letters, { y: 50, opacity: 0 });
      gsap.set(progressRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(taglineRef.current, { opacity: 0, y: 6 });

      const tl = gsap.timeline();

      // Letters + progress run in parallel from t=0; exit fires after progress ends (~1.1s)
      // Total screen time: ~2.0s
      tl.to(letters, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", stagger: 0.04 })
        .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }, 0.22)
        .to(progressRef.current, { scaleX: 1, duration: 1.1, ease: "power2.inOut" }, 0)
        .to(overlayRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "power3.inOut",
          onComplete() {
            sessionStorage.setItem("vynx_loaded", "1");
            document.body.style.overflow = "";
            setVisible(false);
          },
        });
    }

    run();
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
    >
      {/* Subtle binary noise texture */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden font-mono text-[9px] leading-tight text-foreground/[0.025] whitespace-pre"
        aria-hidden="true"
      >
        {Array.from({ length: 80 }, (_, r) =>
          Array.from({ length: 160 }, (_, c) =>
            (r * 160 + c) % 7 === 0 ? "1" : (r * 160 + c) % 11 === 0 ? "0" : " "
          ).join("")
        ).join("\n")}
      </div>

      {/* Core content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo letters */}
        <div className="overflow-hidden">
          <div className="flex">
            {"VYNX".split("").map((char, i) => (
              <span
                key={i}
                ref={(el) => { lettersRef.current[i] = el; }}
                className="text-[80px] sm:text-[110px] lg:text-[150px] font-display tracking-tight leading-none"
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <span
          ref={taglineRef}
          className="mt-3 text-[10px] font-mono text-muted-foreground tracking-[0.4em] uppercase"
        >
          Digital Agency
        </span>

        {/* Progress bar */}
        <div className="mt-10 w-36 md:w-52 h-px bg-foreground/10 overflow-hidden">
          <div ref={progressRef} className="h-full bg-[#eca8d6]" />
        </div>
      </div>

      {/* Corner accents */}
      <span className="absolute bottom-8 left-8 text-xs font-mono text-foreground/20 tracking-widest">
        Loading
      </span>
      <span className="absolute bottom-8 right-8 text-xs font-mono text-foreground/20 tracking-widest">
        PKG / 01
      </span>
    </div>
  );
}
