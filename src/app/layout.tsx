import "./globals.css"
import type { Metadata } from "next"
import Topbar from "@/components/TopBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Inter, Roboto_Mono } from "next/font/google"

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
export const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-roboto-mono" })

export const metadata: Metadata = {
  title: "E-Commerce Store",
  description: "An e-commerce store built with Next.js and Tailwind CSS",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} flex min-h-screen flex-col`}>
        <Topbar />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
