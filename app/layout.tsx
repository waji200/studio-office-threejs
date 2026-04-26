import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Innovation Studio',
  description: 'Strategic Design & Digital Innovation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
