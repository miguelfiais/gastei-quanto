import AuthButton from '@/components/auth-button'
import RegisterForm from '@/components/register-form'
import { getCurrentUser } from '@/lib/session'
import { redirect } from 'next/navigation'

const Register = async () => {
  const user = await getCurrentUser()
  if (user) {
    return redirect('/produtos')
  }

  return (
    <div className="container flex flex-grow flex-col items-center justify-center py-8">
      <AuthButton page="register" />
      <div className="flex w-full max-w-sm flex-col gap-8">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Crie sua conta</h1>
          <p className="mt-4 text-sm">
            Digite seu e-mail abaixo para criar sua conta
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}

export default Register
