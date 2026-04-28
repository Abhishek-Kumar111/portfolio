import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 w-full max-w-6xl px-6">
        <div className="flex items-center justify-between rounded-full border border-white/20 bg-white/65 px-5 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70">
        <Link href="#" className="text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-100">
          Abhishek's Portfolio
        </Link>
        <nav className="flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
        </div>
      </div>
    </header>
  );
}
