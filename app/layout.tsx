import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GsapProvider } from '@/components/providers/gsap-provider'
import { LoadingScreen } from '@/components/loading-screen'
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: 'VYNX — Digital Agency | Websites, Software & AI Solutions',
  description: 'We build animated websites, custom software, automations, and AI receptionists that grow your business. Premium digital solutions for ambitious brands.',
  generator: 'vynx.agency',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <LoadingScreen />
        <GsapProvider>
          {children}
        </GsapProvider>
        <Analytics />
      </body>
    </html>
  )
}
