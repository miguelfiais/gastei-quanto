import AddIngredientButton from '@/components/add-ingredient-button'
import Header from '@/components/header'
import IngredientCard from '@/components/ingredient-card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { calculateCost } from '@/helpers/ingredientCost'
import prisma from '@/lib/db'
import { getCurrentUser } from '@/lib/session'
import { redirect } from 'next/navigation'

interface ProductProps {
  params: {
    productId: string
  }
}

const findProduct = async (productId: string) => {
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      ingredients: true,
    },
  })
  return product
}

const Product = async ({ params }: ProductProps) => {
  const user = await getCurrentUser()

  if (!user) redirect('/login')
  const product = await findProduct(params.productId[0])

  if (!product) redirect('/produtos')

  const totalCost = product.ingredients.reduce(
    (acc, ingredient) => acc + calculateCost(ingredient).cost,
    0,
  )

  const unitCost = totalCost / product.quantity

  return (
    <>
      <Header user={user} />
      <div className="container flex-grow py-4">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold capitalize text-primary">
            {product?.name}
          </h2>
          <p className="text-sm">Unidades: {product?.quantity}</p>
        </div>
        <ScrollArea className="h-[50vh] py-8">
          <div className="flex flex-col gap-3">
            {product?.ingredients.map((ingredient) => (
              <IngredientCard
                key={ingredient.id}
                ingredient={calculateCost(ingredient)}
              />
            ))}
          </div>
        </ScrollArea>
        <div className="py-4">
          <p>Custo da unidade: R$ {unitCost.toFixed(2)}</p>
          <p>Custo total: R$ {totalCost.toFixed(2)}</p>
        </div>
        <AddIngredientButton productId={params.productId[0]} />
      </div>
    </>
  )
}

export default Product
