import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import prisma from '@/lib/db'
import { getCurrentUser } from '@/lib/session'
import { PenIcon, TrashIcon } from 'lucide-react'
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

  return (
    <>
      <Header user={user} />
      <div className="container flex-grow py-4">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold text-primary">
            {product?.name}
          </h2>
          <p className="text-sm">Unidades: {product?.quantity}</p>
        </div>
        <ScrollArea className="h-[50vh] py-8">
          <div className="flex flex-col gap-3">
            {product?.ingredients.map((ingredient) => (
              <Card key={ingredient.id}>
                <CardHeader className="flex-row items-center justify-between p-3">
                  <button>
                    <PenIcon className="h-4 w-4" />
                  </button>
                  <p className="text-sm font-medium capitalize">
                    {ingredient.name}
                  </p>
                  <button>
                    <TrashIcon className="h-4 w-4 text-destructive" />
                  </button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </ScrollArea>
        <div className="py-4">
          <p>Custo da unidade: R$ 0,60</p>
          <p>Custo total: R$ 32,00</p>
        </div>
        <Button variant={'outline'} className="w-full">
          Adicionar mais ingrediente
        </Button>
      </div>
    </>
  )
}

export default Product
