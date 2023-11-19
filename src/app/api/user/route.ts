import prisma from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import bcrypt from 'bcrypt'

export async function POST(request: NextRequest) {
  try {
    const bodySchema = z.object({
      name: z.string({
        required_error: 'Informe o seu nome',
      }),
      email: z
        .string({
          required_error: 'Informe o seu email',
        })
        .email({
          message: 'Informe um email válido',
        }),
      password: z.string({
        required_error: 'Informe sua senha',
      }),
    })

    const { name, email, password } = bodySchema.parse(await request.json())

    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    if (userExists) {
      return NextResponse.json({ error: 'Usuário já existe' }, { status: 409 })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    })
    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }
}
