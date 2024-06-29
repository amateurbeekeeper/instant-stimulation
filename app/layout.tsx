import '@/devlink/global.css'
import { DevLinkProvider, InteractionsProvider, createIX2Engine } from '@/devlink'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Ivy Nest',
  description: 'Stylish & Avant-Garde boutique house in London, Stoke Newington.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <DevLinkProvider>
      <InteractionsProvider createEngine={createIX2Engine}>
        <html lang="en">
          <body className={inter.className}>
            {children}
            <Analytics />
          </body>
        </html>
      </InteractionsProvider>
    </DevLinkProvider>
  );
}
