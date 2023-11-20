'use client'

import { signOut } from 'next-auth/react'
import { Button } from './ui/button'

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
      <p>{user.name}</p>
      <Button variant={'link'} onClick={logout}>
        Sair
      </Button>
    </header>
  )
}

export default Header