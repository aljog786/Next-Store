"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { useAppSelector } from "@/store/hooks";
import type { CartItem } from "@/store/slices/cartSlice";
import type { RootState } from "@/store/store";
import { Fingerprint, Search } from "lucide-react";

export default function Header() {
  const { data: session, status } = useSession();
  const cartCount = useAppSelector((s: RootState) =>
    s.cart.items.reduce((sum: number, i: CartItem) => sum + i.qty, 0)
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [q, setQ] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 ${pathname === href ? "text-black" : "text-gray-600"}`}
      onClick={() => setMobileOpen(false)}
    >
      {label}
    </Link>
  );

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!q.trim()) return;
    router.push(`/products?search=${encodeURIComponent(q.trim())}`);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 backdrop-blur border-b border-white/10 bg-[color:var(--color-bg)]/80">
      {/* decorative gradient underline */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-full h-[2px]" style={{background: 'linear-gradient(90deg, var(--color-brand-azure), var(--color-brand-cyan), var(--color-brand-mint), var(--color-brand-lime))'}} />
      <div className="app-container py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[color:var(--color-fg-muted)] hover:bg-white/5 border border-white/10"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </button>
          <Link href="/" className="text-xl font-extrabold tracking-tight gradient-text">Next Store</Link>
        </div>

        <form onSubmit={onSearch} className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-6">
          <div className="flex items-center gap-2 surface-card px-3 py-2 rounded-md flex-1">
            <Search className="h-4 w-4 text-[color:var(--color-fg-muted)]" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search headphones, sneakers, watches…"
              className="bg-transparent outline-none w-full placeholder:text-[color:var(--color-fg-muted)]"
            />
          </div>
          <button type="submit" className="btn-ghost">Search</button>
        </form>

        <div className="flex items-center gap-2">
          <Link href="/cart" className="relative btn-ghost px-3 py-2" aria-label="Open cart">
            <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M7 4h-2l-1 2H1v2h2l3.6 7.59-1.35 2.44A2 2 0 0 0 7 20h12v-2H7.42a.25.25 0 0 1-.22-.37L8.1 15h7.45a2 2 0 0 0 1.8-1.1l3.58-6.49A1 1 0 0 0 20 6H6.21l.94-2H21V2H7ZM7 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center rounded-full text-black text-[10px] h-5 min-w-[20px] px-1" style={{background: 'var(--color-brand-lime)'}}>
                {cartCount}
              </span>
            )}
          </Link>

          {status === "authenticated" ? (
            <div className="relative group">
              <button className="btn-ghost">
                {session.user?.name || session.user?.email || "Account"}
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity absolute right-0 mt-2 w-48 rounded-md border border-white/10 bg-[color:var(--color-bg-muted)]/90 shadow-xl backdrop-blur">
                <Link href="/profile" className="block px-3 py-2 text-sm hover:bg-white/5">Profile</Link>
                <Link href="/orders" className="block px-3 py-2 text-sm hover:bg-white/5">Orders</Link>
                <button onClick={() => signOut()} className="w-full text-left block px-3 py-2 text-sm hover:bg-white/5">Sign out</button>
              </div>
            </div>
          ) : (
            <button onClick={() => signIn()} className="btn-primary"><Fingerprint /></button>
          )}
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[color:var(--color-bg-muted)]/90 backdrop-blur">
          <div className="app-container py-3 flex flex-col gap-3">
            <form onSubmit={onSearch} className="flex items-center gap-2">
              <div className="flex items-center gap-2 surface-card px-3 py-2 rounded-md flex-1">
                <Search className="h-4 w-4 text-[color:var(--color-fg-muted)]" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search headphones, sneakers, watches…"
                  className="bg-transparent outline-none w-full placeholder:text-[color:var(--color-fg-muted)]"
                />
              </div>
              <button type="submit" className="btn-ghost">Search</button>
            </form>
            <nav className="flex flex-col">
              {navLink("/products", "Products")}
              {navLink("/cart", "Cart")}
              {status === "authenticated" ? (
                <>
                  {navLink("/profile", "Profile")}
                  {navLink("/orders", "Orders")}
                  <button onClick={() => signOut()} className="text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5 border border-white/10">Sign out</button>
                </>
              ) : (
                <button onClick={() => signIn()} className="btn-primary w-full justify-center">Sign in</button>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
