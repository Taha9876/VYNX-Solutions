"use client";

import { useEffect } from "react";

export function GsapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: { destroy(): void; raf(time: number): void; on(event: string, cb: () => void): void } | null = null;
    let gsapTick: ((time: number) => void) | null = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let gsapRef: any = null;

    async function init() {
      const [{ gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("lenis"),
      ]);

      gsapRef = gsap;
      gsap.registerPlugin(ScrollTrigger);

      // ── Lenis smooth scroll ──────────────────────────────────────
      const l = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        smoothWheel: true,
      });
      lenis = l;
      l.on("scroll", ScrollTrigger.update);
      gsapTick = (time: number) => l.raf(time * 1000);
      gsap.ticker.add(gsapTick);
      gsap.ticker.lagSmoothing(0);

      const vh = window.innerHeight;

      // ── Parallax: aria-hidden decorative images and video ────────
      // Excludes float-flagged elements to avoid transform conflict
      document.querySelectorAll(
        'img[aria-hidden="true"]:not([data-float]), video[aria-hidden="true"]'
      ).forEach((el) => {
        const trigger = el.closest("section") || el.parentElement;
        gsap.fromTo(
          el,
          { yPercent: -12 },
          {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger,
              start: "top bottom",
              end: "bottom top",
              scrub: 2,
            },
          }
        );
      });

      // ── Parallax: explicit .gsap-parallax class ──────────────────
      document.querySelectorAll(".gsap-parallax").forEach((el) => {
        const trigger = el.closest("section, footer") || el.parentElement;
        gsap.fromTo(
          el,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger,
              start: "top bottom",
              end: "bottom top",
              scrub: 2,
            },
          }
        );
      });

      // ── Float animation ───────────────────────────────────────────
      document.querySelectorAll("[data-float]").forEach((el, i) => {
        gsap.to(el, {
          y: -20,
          duration: 2.8 + (i % 3) * 0.35,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      // ── Fade-up reveals ───────────────────────────────────────────
      // Skip elements already in the viewport to avoid FOUC
      document.querySelectorAll("[data-animate='fade-up']").forEach((el) => {
        if (el.getBoundingClientRect().top < vh) return;
        gsap.set(el, { opacity: 0, y: 45 });
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      // ── Stagger: reveal grid children in sequence ─────────────────
      document.querySelectorAll("[data-animate='stagger']").forEach((container) => {
        if (container.getBoundingClientRect().top < vh) return;
        const kids = Array.from(container.children) as HTMLElement[];
        if (!kids.length) return;
        gsap.set(kids, { opacity: 0, y: 35 });
        gsap.to(kids, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: { trigger: container, start: "top 84%" },
        });
      });

      // ── Stagger-x: slide list items in from left ──────────────────
      document.querySelectorAll("[data-animate='stagger-x']").forEach((container) => {
        if (container.getBoundingClientRect().top < vh) return;
        const kids = Array.from(container.children) as HTMLElement[];
        if (!kids.length) return;
        gsap.set(kids, { opacity: 0, x: -30 });
        gsap.to(kids, {
          opacity: 1,
          x: 0,
          duration: 0.65,
          ease: "power2.out",
          stagger: 0.07,
          scrollTrigger: { trigger: container, start: "top 85%" },
        });
      });

      // ── Scale-in panels ───────────────────────────────────────────
      document.querySelectorAll("[data-animate='scale-in']").forEach((el) => {
        if (el.getBoundingClientRect().top < vh) return;
        gsap.set(el, { opacity: 0, scale: 0.93, y: 20 });
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 87%" },
        });
      });

      // ── Counter animations ────────────────────────────────────────
      document.querySelectorAll("[data-count]").forEach((el) => {
        const target = parseFloat(el.getAttribute("data-count") || "0");
        const suffix = el.getAttribute("data-count-suffix") || "";
        const prefix = el.getAttribute("data-count-prefix") || "";
        const dec = parseInt(el.getAttribute("data-count-dec") || "0");
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          onUpdate() {
            el.textContent =
              prefix +
              (dec > 0 ? obj.val.toFixed(dec) : Math.round(obj.val).toString()) +
              suffix;
          },
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      ScrollTrigger.refresh();
    }

    init();

    return () => {
      lenis?.destroy();
      if (gsapRef && gsapTick) gsapRef.ticker.remove(gsapTick);
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ScrollTrigger.getAll().forEach((t: any) => t.kill());
      });
    };
  }, []);

  return <>{children}</>;
}
