import FormSteps from '@/components/form-steps'
import Header from '@/components/header'
import { getCurrentUser } from '@/lib/session'
import { redirect } from 'next/navigation'

const NewProduct = async () => {
  const user = await getCurrentUser()

  if (!user) redirect('/login')

  return (
    <>
      <Header user={user} />
      <div className="container flex flex-grow flex-col items-center justify-center py-4">
        <FormSteps userEmail={user.email} />
      </div>
    </>
  )
}

export default NewProduct
