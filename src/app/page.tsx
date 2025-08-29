import HeroBanner from "@/components/HeroBanner"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Featured Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="mb-6 text-3xl font-bold">Welcome to Our Store</h2>
        <p className="mb-6 text-gray-600">
          Discover the best products at unbeatable prices. Browse our collection and find what you love.
        </p>

        <Link href="/products">
          <Button size="lg">Shop Now</Button>
        </Link>
      </section>
    </div>
  )
}
