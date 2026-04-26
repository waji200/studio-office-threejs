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
    <header className="main-header">
      <Link href="/" className="logo">
        innovation
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
