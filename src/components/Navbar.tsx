"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          THAILE
        </Link>

        {/* Navigation + Cart */}
        <div className="flex items-center gap-6">
          {/* Nav Link */}
          <Link
            href="/products"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Products
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative flex items-center">
            <ShoppingCart className="h-6 w-6" />
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 rounded-full px-2 py-0 text-xs"
            >
              0
            </Badge>
          </Link>
        </div>
      </div>
    </nav>
  )
}
