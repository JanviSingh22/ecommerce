"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroBanner() {
  return (
    <section className="relative w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center px-6 py-24 text-center md:flex-row md:gap-12 md:text-left">

        {/* Left: Text Content */}
        <div className="max-w-lg">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Step into Comfort, <br /> Style, and Sustainability
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Discover our latest collection designed to keep you moving while caring for the planet.
          </p>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <Button
              size="lg"
              variant="outline"
              className="!text-white !border-white hover:!bg-white hover:!text-black" >
              Learn More
            </Button>


          </div>
        </div>

        {/* Right: Product Image */}
        <div className="mt-12 md:mt-0">
          <Image
            src="/hero-shoes.jpg"
            alt="Hero Product"
            width={600} // replace with your desired width
            height={400} // replace with your desired height
            className="mx-auto max-h-[400px] w-auto rounded-xl shadow-lg"
          />

        </div>
      </div>
    </section>
  )
}
