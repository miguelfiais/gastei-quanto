import Header from '@/components/header'
import NewProductForm from '@/components/new-product-form'
import { getCurrentUser } from '@/lib/session'
import { redirect } from 'next/navigation'

const NewProduct = async () => {
  const user = await getCurrentUser()

  if (!user) redirect('/login')

  return (
    <>
      <Header user={user} />
      <div className="container flex flex-grow flex-col items-center justify-center">
        <NewProductForm userEmail={user.email} />
        <div className="flex items-center gap-2 py-4">
          <div className="h-2 w-2 rounded-full bg-primary" />
          <div className="h-2 w-2 rounded-full bg-muted-foreground" />
        </div>
      </div>
    </>
  )
}

export default NewProduct
