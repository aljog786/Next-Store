
import Link from "next/link";
import Carousel from "@/components/Carousel";
import { Sparkles, ShoppingBag, ShieldCheck, Truck, CreditCard, Timer, ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* decorative gradients */}
        <div aria-hidden className="pointer-events-none absolute -top-24 -left-20 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-30"
             style={{background: 'radial-gradient(closest-side, var(--color-brand-azure), transparent)'}} />
        <div aria-hidden className="pointer-events-none absolute -bottom-28 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-25"
             style={{background: 'radial-gradient(closest-side, var(--color-brand-lime), transparent)'}} />

        <div className="app-container pt-6 pb-12 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
            {/* Hero copy */}
            <div className="max-w-xl">
              <p className="chip mb-3 inline-flex items-center gap-1">
                <Sparkles className="h-3.5 w-3.5" /> New season is live
              </p>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight gradient-text">
                Discover products that match your lifestyle
              </h1>
              <p className="mt-3 text-[color:var(--color-fg-muted)] max-w-prose">
                Curated picks across tech, apparel, and home. Fast checkout, secure payments, and next‑day delivery in select regions.
              </p>
                <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/products" className="btn-primary">Shop now</Link>
                <Link href="/products?featured=1" className="btn-ghost">Explore featured</Link>
              </div>
              {/* Stats */}
              <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
                <div className="surface-card p-3 text-center">
                  <div className="text-xl font-bold">2k+</div>
                  <div className="text-[color:var(--color-fg-muted)]">Products</div>
                </div>
                <div className="surface-card p-3 text-center">
                  <div className="text-xl font-bold">4.9★</div>
                  <div className="text-[color:var(--color-fg-muted)]">Avg rating</div>
                </div>
                <div className="surface-card p-3 text-center">
                  <div className="text-xl font-bold">24h</div>
                  <div className="text-[color:var(--color-fg-muted)]">Delivery</div>
                </div>
              </div>
            </div>

            {/* Hero visual mockup */}
            <div className="relative">
              {/* Layered decorative glow */}
              <div
                className="absolute -inset-6 rounded-[24px] blur-3xl opacity-30"
                style={{
                  background:
                    'radial-gradient(60% 60% at 25% 30%, var(--color-brand-azure), transparent 60%), radial-gradient(60% 60% at 75% 70%, var(--color-brand-lime), transparent 60%)'
                }}
                aria-hidden
              />
              <div
                className="absolute -inset-10 rounded-[32px] blur-2xl opacity-20"
                style={{
                  background:
                    'conic-gradient(from 180deg at 50% 50%, var(--color-brand-cyan), var(--color-brand-mint), var(--color-brand-azure), var(--color-brand-lime), var(--color-brand-cyan))'
                }}
                aria-hidden
              />
              <div
                className="absolute -inset-4 rounded-[20px] opacity-25"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
                  backgroundSize: '22px 22px',
                  backgroundPosition: '0 0, 0 0',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}
                aria-hidden
              />
              <div className="relative grid gap-4">
                <div className="surface-card p-4 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-md bg-white/10" />
                  <div className="flex-1">
                    <div className="font-semibold">Smartwatch X</div>
                    <div className="text-xs text-[color:var(--color-fg-muted)]">Health • Sport • NFC</div>
                  </div>
                  <div className="chip">$199</div>
                </div>
                <div className="surface-card p-4 flex items-center gap-4 translate-x-2">
                  <div className="h-12 w-12 rounded-md bg-white/10" />
                  <div className="flex-1">
                    <div className="font-semibold">Runner Pro</div>
                    <div className="text-xs text-[color:var(--color-fg-muted)]">Cushion • Road</div>
                  </div>
                  <div className="chip">$129</div>
                </div>
                <div className="surface-card p-4 flex items-center gap-4 -translate-x-6">
                  <div className="h-12 w-12 rounded-md bg-white/10" />
                  <div className="flex-1">
                    <div className="font-semibold">Noise‑cancel buds</div>
                    <div className="text-xs text-[color:var(--color-fg-muted)]">ANC • 32h</div>
                  </div>
                  <div className="chip">$89</div>
                </div>
              </div>
            </div>
          </div>
          {/* Trusted by */}
          <div className="mt-8 text-xs text-[color:var(--color-fg-muted)] flex flex-wrap items-center gap-4">
            <span>Trusted by</span>
            <span className="chip">1,000+ shoppers</span>
            <span className="chip">Top sellers</span>
            <span className="chip">Secure payments</span>
          </div>
        </div>
        {/* Scroll cue */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <Link href="#benefits" className="btn-ghost inline-flex items-center gap-1 text-xs">
            Scroll <ChevronDown className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Featured carousel */}
      <Carousel
        items={[
          { name: 'Urban Backpack', tag: 'New', price: '$79', tone: 'azure', meta: 'Water‑resist • 18L' },
          { name: 'Smart Lamp', tag: 'Hot', price: '$59', tone: 'cyan', meta: 'RGB • App control' },
          { name: 'Fitness Band', tag: 'Sale', price: '$39', tone: 'mint', meta: 'Sleep • HR' },
          { name: 'Noise Buds', tag: 'ANC', price: '$89', tone: 'lime', meta: 'ANC • 32h' },
          { name: 'Travel Bottle', tag: 'Eco', price: '$25', tone: 'azure', meta: 'Steel • 1L' },
          { name: 'Desk Mat', tag: 'Pro', price: '$29', tone: 'cyan', meta: 'Anti‑slip • XL' },
        ]}
      />

      {/* Promotional product grid (advanced mosaic) */}
      <section className="app-container pb-12 md:pb-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-bold gradient-text">Promoted picks</h2>
          <Link href="/products" className="btn-ghost text-xs">View all</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
          {/* Hero promo - wide (spans 4/6) */}
          <Link href="/products?featured=watch" className="group sm:col-span-6 lg:col-span-4">
            <div className="surface-card rounded-lg p-6 relative overflow-hidden h-full transition-transform duration-300 group-hover:-translate-y-0.5">
              <div aria-hidden className="absolute -top-20 -right-24 h-80 w-80 rounded-full blur-3xl opacity-30"
                   style={{background:'radial-gradient(closest-side, var(--color-brand-azure), transparent)'}} />
              <div aria-hidden className="absolute inset-0 bg-[radial-gradient(80%_60%_at_100%_0%,_rgba(0,255,255,0.08),_transparent)]" />
              <div className="relative z-[1] flex items-center justify-between">
                <div>
                  <div className="chip inline-block">Limited</div>
                  <h3 className="mt-3 text-2xl md:text-3xl font-extrabold">Smartwatch X Pro</h3>
                  <p className="mt-1 text-sm text-[color:var(--color-fg-muted)]">GPS • ECG • 7‑day battery</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="chip">$249</span>
                    <span className="text-xs line-through text-[color:var(--color-fg-muted)]">$299</span>
                    <span className="text-xs text-[color:var(--color-brand-lime)]">Save 17%</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-[color:var(--color-fg-muted)]">
                    <span>★★★★★</span>
                    <span>4.9 (2,431)</span>
                  </div>
                  <div className="mt-4">
                    <span className="btn-primary">Shop now</span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="h-32 w-32 md:h-40 md:w-40 rounded-lg bg-white/10" />
                </div>
              </div>
            </div>
          </Link>

          {/* Tall promo - spans 2/6 and 2 rows */}
          <Link href="/products?featured=bag" className="group sm:col-span-3 lg:col-span-2 sm:row-span-2">
            <div className="surface-card rounded-lg p-5 h-full relative overflow-hidden transition-transform duration-300 group-hover:-translate-y-0.5">
              <div aria-hidden className="absolute -bottom-16 -left-8 h-64 w-64 rounded-full blur-3xl opacity-25"
                   style={{background:'radial-gradient(closest-side, var(--color-brand-cyan), transparent)'}} />
              <div className="relative z-[1]">
                <div className="flex items-center justify-between">
                  <div className="chip">New</div>
                  <div className="text-sm text-[color:var(--color-fg-muted)]">$79</div>
                </div>
                <div className="mt-4 h-40 rounded-md flex items-center justify-center" style={{background:'linear-gradient(135deg, rgba(0,174,255,0.18), transparent)'}}>
                  <div className="h-20 w-20 rounded-md bg-white/10" />
                </div>
                <div className="mt-3 font-semibold">Urban Backpack</div>
                <div className="text-xs text-[color:var(--color-fg-muted)]">Water‑resist • 18L</div>
                <div className="mt-4 flex items-center gap-2 text-[10px] text-[color:var(--color-fg-muted)]">
                  <span>★★★★☆</span>
                  <span>1,103</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Two standard promos */}
          <Link href="/products?featured=headphones" className="group sm:col-span-3 lg:col-span-2">
            <div className="surface-card rounded-lg p-5 h-full transition-transform duration-300 group-hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <div className="chip">Hot</div>
                <div className="text-sm text-[color:var(--color-fg-muted)]">$129</div>
              </div>
              <div className="mt-4 h-28 rounded-md flex items-center justify-center" style={{background:'linear-gradient(135deg, rgba(0,255,255,0.20), transparent)'}}>
                <div className="h-16 w-16 rounded-md bg-white/10" />
              </div>
              <div className="mt-3 font-semibold">Noise‑cancel buds</div>
              <div className="text-xs text-[color:var(--color-fg-muted)]">ANC • 32h</div>
              <div className="mt-3 text-[10px] text-[color:var(--color-fg-muted)]">★★★★★ 2,001</div>
            </div>
          </Link>

          <Link href="/products?featured=sneakers" className="group sm:col-span-3 lg:col-span-2">
            <div className="surface-card rounded-lg p-5 h-full transition-transform duration-300 group-hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <div className="chip">New</div>
                <div className="text-sm text-[color:var(--color-fg-muted)]">$99</div>
              </div>
              <div className="mt-4 h-28 rounded-md flex items-center justify-center" style={{background:'linear-gradient(135deg, rgba(0,255,82,0.20), transparent)'}}>
                <div className="h-16 w-16 rounded-md bg-white/10" />
              </div>
              <div className="mt-3 font-semibold">Runner Pro Lite</div>
              <div className="text-xs text-[color:var(--color-fg-muted)]">Cushion • Road</div>
              <div className="mt-3 text-[10px] text-[color:var(--color-fg-muted)]">★★★★☆ 846</div>
            </div>
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="app-container pb-12 md:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="surface-card flex items-start gap-3">
            <Truck className="h-5 w-5 text-[color:var(--color-brand-azure)]" />
            <div>
              <div className="font-semibold">Fast delivery</div>
              <p className="text-[color:var(--color-fg-muted)] text-sm">Next‑day delivery in select regions</p>
            </div>
          </div>
          <div className="surface-card flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-[color:var(--color-brand-mint)]" />
            <div>
              <div className="font-semibold">Buyer protection</div>
              <p className="text-[color:var(--color-fg-muted)] text-sm">Secure checkout and easy returns</p>
            </div>
          </div>
          <div className="surface-card flex items-start gap-3">
            <CreditCard className="h-5 w-5 text-[color:var(--color-brand-cyan)]" />
            <div>
              <div className="font-semibold">Flexible payments</div>
              <p className="text-[color:var(--color-fg-muted)] text-sm">Cards, wallets, and more</p>
            </div>
          </div>
          <div className="surface-card flex items-start gap-3">
            <Timer className="h-5 w-5 text-[color:var(--color-brand-lime)]" />
            <div>
              <div className="font-semibold">Limited drops</div>
              <p className="text-[color:var(--color-fg-muted)] text-sm">Early access for members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured categories */}
      <section className="app-container pb-12 md:pb-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-bold gradient-text">Browse categories</h2>
          <Link href="/products" className="btn-ghost">View all</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/products?category=tech" className="surface-card p-5 hover:-translate-y-[2px] transition">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-5 w-5 text-[color:var(--color-brand-azure)]" />
              <div className="font-semibold">Tech</div>
            </div>
            <p className="mt-1 text-xs text-[color:var(--color-fg-muted)]">Latest gadgets and accessories</p>
          </Link>
          <Link href="/products?category=apparel" className="surface-card p-5 hover:-translate-y-[2px] transition">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-5 w-5 text-[color:var(--color-brand-mint)]" />
              <div className="font-semibold">Apparel</div>
            </div>
            <p className="mt-1 text-xs text-[color:var(--color-fg-muted)]">Everyday style and performance</p>
          </Link>
          <Link href="/products?featured=1" className="surface-card p-5 hover:-translate-y-[2px] transition">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-5 w-5 text-[color:var(--color-brand-lime)]" />
              <div className="font-semibold">Featured</div>
            </div>
            <p className="mt-1 text-xs text-[color:var(--color-fg-muted)]">Curated drops and picks</p>
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="app-container pb-16">
        <div className="surface-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold">Join the community</h3>
            <p className="text-sm text-[color:var(--color-fg-muted)]">Get early access to limited drops, exclusive discounts, and more.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/products?featured=1" className="btn-primary">Explore drops</Link>
            <Link href="/products" className="btn-ghost">Start shopping</Link>
          </div>
        </div>
      </section>
    </>
  );
}
