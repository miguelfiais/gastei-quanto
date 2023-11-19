import { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from './db'
import bcrypt from 'bcrypt'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'crendentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'johndoe@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Dados de Login necessários')
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        })
        if (!user || !user.hashedPassword) {
          return null
        }
        const matchPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword,
        )
        if (!matchPassword) {
          return null
        }
        return user
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.SECRET_KEY,
}
