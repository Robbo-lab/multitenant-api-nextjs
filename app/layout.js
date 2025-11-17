import Link from "next/link";

import "./globals.css";

const navigation_links = [
  { href: "/", label: "Home" },
  { href: "/users", label: "Users" },
  { href: "/projects", label: "Projects" },
  { href: "/nasa-api", label: "NASA API" },
  { href: "/about", label: "About" },
];

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "AT3 Next.js App",
  description: "A modern application built with Next.js and Bulma",
  openGraph: {
    title: "My Next.js App",
    description: "A modern web application built with Next.js",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "App Logo",
      },
    ],
    siteName: "My Next.js App",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50">
        <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:flex-nowrap md:gap-8">
            <Link href="/" className="text-2xl font-semibold">
              AT3 Next.js App
            </Link>
            <nav
              className="flex flex-1 flex-wrap items-center justify-end gap-2 md:justify-between"
              aria-label="Primary"
            >
              <div className="flex flex-wrap gap-2">
                {navigation_links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>

        <footer className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-gray-600">
            © 2025 <strong>AT3 Next.js App</strong>. Built with Next.js &
            Tailwind
          </div>
        </footer>
      </body>
    </html>
  );
}
