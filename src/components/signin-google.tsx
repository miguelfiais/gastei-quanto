'use client'

import { signIn } from 'next-auth/react'
import { Button } from './ui/button'
import Image from 'next/image'

const SignInGoogle = () => {
  const loginWithGoogle = () => {
    signIn('google')
  }

  return (
    <div className="mt-5 flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <div className="h-[0.5px] w-full bg-muted-foreground" />
        <p className="whitespace-nowrap text-center text-xs font-light text-muted-foreground">
          OU CONTINUE COM
        </p>
        <div className="h-[0.5px] w-full bg-muted-foreground" />
      </div>

      <Button
        className="w-full gap-1"
        variant={'secondary'}
        onClick={loginWithGoogle}
      >
        <Image src="/google.png" alt="google" width={24} height={24} />
        Continue com Google
      </Button>
    </div>
  )
}

export default SignInGoogle
