// app/products/page.tsx
"use-client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"


type Product = {
  id: number
  title: string   // fakestoreapi uses "title", not "name"
  price: number
  image: string
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products', {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}

export default async function ProductsPage() {
  const products = await getProducts()
  console.log(products)

  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Our Products</h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group rounded-xl border p-4 shadow-sm transition hover:shadow-md"
          >
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                className="mb-4 h-64 w-full rounded-lg object-cover transition group-hover:opacity-90"
              />
            </Link>

            <h2 className="mb-2 text-lg font-semibold">{product.title}</h2>
            <p className="mb-4 text-gray-600">${product.price}</p>

            <Button className="w-full">Add to Cart</Button>
          </div>
        ))}
      </div>
    </section>
  )
}
