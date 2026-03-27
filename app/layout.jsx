import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import "../styles/caliente-theme.scss"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: 'Caliente Casino - Component Library',
  description: 'Caliente Casino UI Component Library - Velzon Template Compatible',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  themeColor: '#C8102E',
  userScalable: true,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable} style={{ fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif" }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
