import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="app-container py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-[color:var(--color-fg-muted)]">
        <div>
          <h3 className="text-base font-semibold mb-3 gradient-text">Next Store</h3>
          <p>Your modern Next.js e‑commerce starter. Fast, secure, and scalable.</p>
        </div>
        <div>
          <h4 className="font-medium mb-3">Shop</h4>
          <ul className="space-y-2">
            <li><Link href="/products" className="hover:underline">All Products</Link></li>
            <li><Link href="/products?category=apparel" className="hover:underline">Apparel</Link></li>
            <li><Link href="/products?category=footwear" className="hover:underline">Footwear</Link></li>
            <li><Link href="/products?featured=1" className="hover:underline">Featured</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3">Company</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/orders" className="hover:underline">Orders</Link></li>
            <li><Link href="/profile" className="hover:underline">Account</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3">Follow</h4>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Twitter" className="hover:text-[color:var(--color-fg)]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.177 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996A4.107 4.107 0 0 0 16.616 4c-2.266 0-4.103 1.837-4.103 4.103 0 .322.036.636.106.936-3.41-.171-6.432-1.804-8.454-4.29a4.08 4.08 0 0 0-.556 2.064 4.103 4.103 0 0 0 1.827 3.417 4.073 4.073 0 0 1-1.859-.514v.052c0 2.032 1.446 3.727 3.362 4.114a4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84"/></svg>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-[color:var(--color-fg)]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12a9.997 9.997 0 0 0 6.838 9.488c.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.701-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.907-.62.069-.607.069-.607 1.003.07 1.53 1.03 1.53 1.03.892 1.53 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 7.07c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.203 2.393.1 2.646.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.854 0 1.337-.012 2.415-.012 2.741 0 .268.18.579.688.48A10 10 0 0 0 22 12c0-5.523-4.477-10-10-10Z" clipRule="evenodd"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[color:var(--color-fg)]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M20.447 20.452H17.21v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.135 1.447-2.135 2.943v5.663H9.001V9h3.104v1.561h.044c.433-.82 1.492-1.686 3.068-1.686 3.283 0 3.888 2.16 3.888 4.972v6.605zM5.337 7.433a1.804 1.804 0 1 1 0-3.608 1.804 1.804 0 0 1 0 3.608zM6.993 20.452H3.678V9h3.315v11.452z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs text-[color:var(--color-fg-muted)] py-4 app-container">
        © {new Date().getFullYear()} Next Store. All rights reserved.
      </div>
    </footer>
  );
}
