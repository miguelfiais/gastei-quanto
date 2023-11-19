import AuthButton from '@/components/auth-button'
import LoginForm from '@/components/login-form'
import { getCurrentUser } from '@/lib/session'
import { redirect } from 'next/navigation'

const Login = async () => {
  const user = await getCurrentUser()
  if (user) {
    return redirect('/')
  }
  return (
    <div className="container flex flex-grow flex-col items-center justify-center py-8">
      <AuthButton page="login" />
      <div className="flex w-full max-w-sm flex-col gap-8">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Faça Login</h1>
          <p className="mt-4 text-sm">
            Digite seu e-mail abaixo para entrar na sua conta
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
