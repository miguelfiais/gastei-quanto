'use client'

import { signOut } from 'next-auth/react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { User2Icon } from 'lucide-react'

interface HeaderProps {
  user: {
    name?: string | null | undefined
    email?: string | null | undefined
    image?: string | null | undefined
  }
}
const Header = ({ user }: HeaderProps) => {
  const logout = () => {
    signOut()
  }

  return (
    <header className="container flex items-center justify-between py-4">
      <Link
        href={'/produtos'}
        className="flex items-center gap-2 text-sm font-medium"
      >
        {user.image ? (
          <Image
            src={user.image}
            alt={user.name ?? 'foto do usuario'}
            width={32}
            height={32}
            className="rounded-full"
          />
        ) : (
          <User2Icon className="h-8 w-8" />
        )}

        {user.name}
      </Link>
      <Button variant={'link'} onClick={logout}>
        Sair
      </Button>
    </header>
  )
}

export default Header
