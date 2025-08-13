"use client";

import React, { useEffect, useRef, useState } from "react";

export type CarouselItem = {
  name: string;
  tag: string;
  price: string;
  tone: "azure" | "cyan" | "mint" | "lime";
  meta: string;
  href?: string;
};

interface CarouselProps {
  title?: string;
  subtitle?: string;
  items: CarouselItem[];
  className?: string;
}

export default function Carousel({ title = "Trending now", subtitle = "Swipe to explore", items, className = "" }: CarouselProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [isHover, setIsHover] = useState(false);

  // Observe which slide is centered
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const slides = Array.from(viewport.querySelectorAll<HTMLElement>("[data-slide]")).map((el, idx) => ({ el, idx }));

    const io = new IntersectionObserver(
      (entries) => {
        // find the most visible entry
        let best = { ratio: 0, idx: active };
        for (const e of entries) {
          const idx = Number((e.target as HTMLElement).dataset.index || 0);
          if (e.intersectionRatio > best.ratio) best = { ratio: e.intersectionRatio, idx };
        }
        if (best.idx !== active) setActive(best.idx);
      },
      {
        root: viewport,
        threshold: Array.from({ length: 11 }, (_, i) => i / 10),
      }
    );

    slides.forEach(({ el }) => io.observe(el));
    return () => io.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Autoplay
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    let raf: number | null = null;
    let interval: number | null = null;

    const start = () => {
      if (interval) return;
      interval = window.setInterval(() => {
        if (isHover) return;
        scrollByStep(1);
      }, 4000);
    };
    const stop = () => {
      if (interval) window.clearInterval(interval);
      interval = null;
      if (raf) cancelAnimationFrame(raf);
      raf = null;
    };

    start();
    return stop;
  }, [isHover]);

  const scrollByStep = (dir: 1 | -1) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const slide = viewport.querySelector<HTMLElement>("[data-slide]");
    const slideWidth = slide ? slide.getBoundingClientRect().width : viewport.clientWidth * 0.8;
    viewport.scrollBy({ left: dir * (slideWidth + 16), behavior: "smooth" });
  };

  // Drag to scroll
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    let isDown = false;
    let startX = 0;
    let scrollStart = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDown = true;
      startX = e.clientX;
      scrollStart = viewport.scrollLeft;
      viewport.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      viewport.scrollLeft = scrollStart - dx;
    };
    const onPointerUp = (e: PointerEvent) => {
      isDown = false;
      viewport.releasePointerCapture(e.pointerId);
    };

    viewport.addEventListener("pointerdown", onPointerDown);
    viewport.addEventListener("pointermove", onPointerMove);
    viewport.addEventListener("pointerup", onPointerUp);
    viewport.addEventListener("pointerleave", onPointerUp);
    return () => {
      viewport.removeEventListener("pointerdown", onPointerDown);
      viewport.removeEventListener("pointermove", onPointerMove);
      viewport.removeEventListener("pointerup", onPointerUp);
      viewport.removeEventListener("pointerleave", onPointerUp);
    };
  }, []);

  return (
    <section className={`relative ${className}`} aria-label={title}>
      <div className="app-container pb-12 md:pb-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-bold gradient-text">{title}</h2>
          <span className="text-xs text-[color:var(--color-fg-muted)] hidden md:inline">{subtitle}</span>
        </div>
        <div className="relative">
          {/* Edge fades */}
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[color:var(--color-bg)] to-transparent" />
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[color:var(--color-bg)] to-transparent" />


          <div
            ref={viewportRef}
            className="overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            role="group"
            aria-roledescription="carousel"
          >
            <div className="flex gap-5 min-w-max pr-5">
              {items.map((p, i) => (
                <div key={i} className="snap-start min-w-[18rem] sm:min-w-[22rem] md:min-w-[24rem]" data-slide data-index={i}>
                  <div className="surface-card p-5 h-full rounded-lg flex flex-col">
                    <div className="flex items-center justify-between">
                      <div className="chip">{p.tag}</div>
                      <div className="text-sm text-[color:var(--color-fg-muted)]">{p.price}</div>
                    </div>
                    <div
                      className="mt-5 h-40 rounded-md flex items-center justify-center"
                      style={{
                        background:
                          p.tone === "azure"
                            ? "linear-gradient(135deg, rgba(0,174,255,0.25), transparent)"
                            : p.tone === "cyan"
                            ? "linear-gradient(135deg, rgba(0,255,255,0.25), transparent)"
                            : p.tone === "mint"
                            ? "linear-gradient(135deg, rgba(0,222,148,0.25), transparent)"
                            : "linear-gradient(135deg, rgba(0,255,82,0.25), transparent)",
                      }}
                    >
                      <div className="h-20 w-20 rounded-md bg-white/10" />
                    </div>
                    <div className="mt-4 font-semibold">{p.name}</div>
                    <div className="text-xs text-[color:var(--color-fg-muted)]">{p.meta}</div>
                    <div className="mt-4 flex gap-2">
                      <a href={p.href || "/products"} className="btn-primary">View</a>
                      <a href={p.href || "/products"} className="btn-ghost">Details</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="Carousel pagination">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                role="tab"
                aria-selected={active === i}
                className={`h-1.5 rounded-full transition-all ${active === i ? "bg-[color:var(--color-brand-azure)] w-6" : "bg-white/20 w-2"}`}
                style={{ minWidth: active === i ? 24 : 8 }}
                onClick={() => {
                  const viewport = viewportRef.current;
                  if (!viewport) return;
                  const target = viewport.querySelector<HTMLElement>(`[data-index='${i}']`);
                  if (target) target.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
