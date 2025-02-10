import "./globals.css"
import type { Metadata } from "next"
import type React from "react"
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: "Inkoperation Agency",
  description: "Bold ideas, epic results",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

