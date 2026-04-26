'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = ['Home', 'About', 'Services', 'Projects', 'Contact'];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-100 flex justify-between items-center px-15 h-20 bg-white/95 backdrop-blur-md border-b border-black/6">
      <Link href="/" className="text-2xl font-black text-black tracking-tight">
        Studio
      </Link>

      <nav className="flex gap-2 items-center">
        {navItems.map((item) => {
          const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
          const isItemActive = isActive(href);

          return (
            <Link
              key={item}
              href={href}
              className={`nav-item ${isItemActive ? 'active' : ''}`}
            >
              {item}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
