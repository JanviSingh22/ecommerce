"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Topbar() {
  return (
    <div className="w-full bg-gray-900 text-white text-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        
        {/* Left: Promo Message */}
        <p className="font-medium">Free shipping on orders over $50</p>

        {/* Right: Auth Links */}
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-gray-300 hover:text-white">
            Login
          </Link>
          <Button variant="secondary" size="sm">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  )
}
