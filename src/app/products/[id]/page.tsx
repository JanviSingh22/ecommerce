import Image from "next/image"
import { Button } from "@/components/ui/button"

type Product = {
  id: number
  title: string
  price: number
  description: string
  image: string
}

// Fetch single product by ID
async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store", // always fresh
  })

  if (!res.ok) throw new Error("Failed to fetch product")

  return res.json()
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)
  console.log(product)

  return (
    <section className="container mx-auto flex flex-col gap-12 px-4 py-12 md:flex-row">
      {/* Left: Product Image */}
      <div className="flex-1">
        <Image
          src={product.image}
          alt={product.title}
          width={600}
          height={600}
          className="rounded-xl object-cover"
        />
      </div>

      {/* Right: Product Info */}
      <div className="flex-1">
        <h1 className="mb-4 text-3xl font-bold">{product.title}</h1>
        <p className="mb-4 text-xl font-semibold">${product.price}</p>
        <p className="mb-6 text-gray-600">{product.description}</p>

        <Button size="lg">Add to Cart</Button>
      </div>
    </section>
  )
}
