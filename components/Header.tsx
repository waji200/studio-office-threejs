<<<<<<< HEAD
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
=======
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path ? 'border-black font-semibold' : ''

  return (
    <header className="sticky top-0 z-100 flex justify-between items-center px-16 h-20 bg-white/95 backdrop-blur-md border-b border-black/6">
      <Link href="/" className="text-2xl font-bold text-black tracking-tight">
        innovation
      </Link>
      <nav className="flex gap-2 items-center">
        <Link href="/" className={`text-sm font-medium text-gray-800 px-6 py-2 rounded-full border border-transparent transition-all ${isActive('/')}`}>
          Home
        </Link>
        <Link href="/about" className={`text-sm font-medium text-gray-800 px-6 py-2 rounded-full border border-transparent transition-all ${isActive('/about')}`}>
          About Us
        </Link>
        <Link href="/projects" className={`text-sm font-medium text-gray-800 px-6 py-2 rounded-full border border-transparent transition-all ${isActive('/projects')}`}>
          Projects
        </Link>
        <Link href="/contact" className={`text-sm font-medium text-gray-800 px-6 py-2 rounded-full border border-transparent transition-all ${isActive('/contact')}`}>
          Contact
        </Link>
        <Link href="/services" className={`text-sm font-medium text-gray-800 px-6 py-2 rounded-full border border-transparent transition-all ${isActive('/services')}`}>
          Services
        </Link>
      </nav>
    </header>
  )
>>>>>>> 0766bfe7da339316ab88d43aba0c3fb21ea2e691
}
