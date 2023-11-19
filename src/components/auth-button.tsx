import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

interface AuthButtonProps {
  page: string
}

const AuthButton = ({ page }: AuthButtonProps) => {
  return (
    <Link
      href={page === 'register' ? '/login' : '/cadastro'}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'absolute right-4 top-4',
      )}
    >
      {page === 'register' ? 'Entrar' : 'Criar conta'}
    </Link>
  )
}

export default AuthButton
