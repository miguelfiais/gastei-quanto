'use client'

import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Product } from '@prisma/client'
import { LoaderIcon, PenIcon, TrashIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const deleteProduct = async () => {
    setIsLoading(true)
    await fetch('/api/product', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: product.id }),
    })
    router.refresh()
    setIsLoading(false)
  }
  return (
    <Link href={`/produtos/${product.id}`}>
      <Card>
        <CardHeader className="flex-row items-center justify-between p-4">
          <PenIcon className="h-4 w-4" />
          <CardTitle className="flex flex-col text-center text-xl capitalize">
            {product.name}
            <span className="text-xs font-medium">
              Unidades: {product.quantity}
            </span>
          </CardTitle>
          <button onClick={deleteProduct} disabled={isLoading}>
            {isLoading ? (
              <LoaderIcon className="h-4 w-4 animate-spin text-destructive" />
            ) : (
              <TrashIcon className="h-4 w-4 text-destructive" />
            )}
          </button>
        </CardHeader>
      </Card>
    </Link>
  )
}

export default ProductCard
