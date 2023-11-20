import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Product } from '@prisma/client'
import { PenIcon, TrashIcon } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between p-4">
        <PenIcon className="h-4 w-4" />
        <CardTitle className="flex flex-col text-center text-xl capitalize">
          {product.name}
          <span className="text-xs font-medium">
            Unidades: {product.quantity}
          </span>
        </CardTitle>
        <TrashIcon className="h-4 w-4 text-destructive" />
      </CardHeader>
    </Card>
  )
}

export default ProductCard
