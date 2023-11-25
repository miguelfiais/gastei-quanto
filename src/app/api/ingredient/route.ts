import prisma from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

interface newIngredientProps {
  name: string
  quantity: string
  quantityUsed: string
  price: string
  productId: string
}

export async function POST(request: NextRequest) {
  try {
    const { name, price, productId, quantity, quantityUsed } =
      (await request.json()) as newIngredientProps

    const ingredient = await prisma.ingredient.create({
      data: {
        name,
        price: Number(price),
        productId,
        quantity: Number(quantity),
        quantityUsed: Number(quantityUsed),
      },
    })
    return NextResponse.json(ingredient, { status: 201 })
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json()
    await prisma.ingredient.delete({
      where: { id },
    })
    return NextResponse.json({ status: 200 })
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}
