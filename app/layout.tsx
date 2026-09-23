import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Nico Albanese',
    template: '%s | Nico Albanese',
  },
  description: 'Member of Technical Staff at OpenAI, working on the Codex app',
  openGraph: {
    title: 'Nico Albanese',
    description: 'Member of Technical Staff at OpenAI, working on the Codex app',
    url: baseUrl,
    siteName: 'Nico Albanese',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 sm:mx-auto">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-50 -translate-y-20 rounded-md bg-black px-3 py-2 text-sm text-white transition-transform focus:translate-y-0 dark:bg-white dark:text-black"
        >
          Skip to content
        </a>
        <main
          id="main-content"
          tabIndex={-1}
          className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0"
        >
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
