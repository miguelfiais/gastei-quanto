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
