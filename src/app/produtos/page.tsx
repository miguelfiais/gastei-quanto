import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import { getCurrentUser } from '@/lib/session'
import { fetchProducts } from '@/repositories/product'
import { redirect } from 'next/navigation'

const ProductsPage = async () => {
  const user = await getCurrentUser()

  if (!user) return redirect('/login')

  const products = await fetchProducts(user.email)

  return (
    <>
      <Header user={user} />
      <div className="container flex flex-grow flex-col items-center justify-center gap-4">
        {products.length ? (
          products.map((product) => <p key={product.id}>{product.name}</p>)
        ) : (
          <p className="text-center">
            Você ainda não tem nenhum produto cadastrado!
          </p>
        )}
        <Button>Calcular novo produto</Button>
      </div>
    </>
  )
}

export default ProductsPage