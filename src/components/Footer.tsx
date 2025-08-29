"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-black text-white">
      <div className="container mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Subscribe */}
          <div>
            <h4 className="mb-3 text-lg font-semibold">SUBSCRIBE TO OUR EMAILS</h4>
            <div className="flex gap-2">
              <Input type="email" placeholder="Email Address" />
              <Button>SIGN UP</Button>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h5 className="mb-3 font-semibold">HELP</h5>
              <ul className="space-y-2 text-sm">
                <li>Live Chat</li>
                <li>Call Us</li>
                <li>Text Us</li>
                <li>help@allbirds.com</li>
                <li>FAQ/Contact Us</li>
                <li>Returns/Exchanges</li>
              </ul>
            </div>
            <div>
              <h5 className="mb-3 font-semibold">SHOP</h5>
              <ul className="space-y-2 text-sm">
                <ul className="space-y-2 text-sm">
                  <li>Men Shoes</li>
                  <li>Women Shoes</li>
                  <li>Men Apparel</li>
                  <li>Women Apparel</li>
                  <li>Socks</li>
                  <li>Gift Cards</li>
                  <li>Refer a Friend</li>
                </ul>
              </ul>
            </div>
            <div>
              <h5 className="mb-3 font-semibold">COMPANY</h5>
              <ul className="space-y-2 text-sm">
                <li>Our Stores</li>
                <li>Our Story</li>
                <li>Our Materials</li>
                <li>Sustainability</li>
                <li>Investors</li>
                <li>Shoe Care</li>
                <li>Affiliates</li>
                <li>Bulk Orders</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Responsible Disclosure</li>
                <li>California Transparency Act</li>
                <li>Community Offers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t pt-6 md:flex-row">
          {/* Socials */}
          <div className="flex flex-col items-center gap-3 md:flex-row">
            <h4 className="font-semibold">FOLLOW THE FLOCK</h4>
            <div className="flex gap-4">
              <Link href="#"><Instagram className="h-5 w-5 hover:text-gray-900" /></Link>
              <Link href="#"><Facebook className="h-5 w-5 hover:text-gray-900" /></Link>
              <Link href="#"><Twitter className="h-5 w-5 hover:text-gray-900" /></Link>
              <Link href="#"><Youtube className="h-5 w-5 hover:text-gray-900" /></Link>
              <Link href="#"><Linkedin className="h-5 w-5 hover:text-gray-900" /></Link>
            </div>
          </div>

          {/* Legal */}
          <div className="text-center md:text-right">
            <p className="text-sm">&copy; 2025 Allbirds, Inc. All Rights Reserved</p>
            <ul className="mt-2 flex flex-wrap justify-center gap-4 text-xs text-gray-500 md:justify-end">
              <li><Link href="#">Refund policy</Link></li>
              <li><Link href="#">Privacy policy</Link></li>
              <li><Link href="#">Terms of service</Link></li>
              <li><Link href="#">Do Not Sell My Info</Link></li>
              <li><Link href="#">California Transparency Act</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
