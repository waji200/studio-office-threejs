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
}
