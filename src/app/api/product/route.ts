import prisma from '@/lib/db'
import { Ingredient, Product } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

interface NewProductProps {
  userEmail: string
  productData: Product
  ingredientData: Ingredient[]
}

export async function POST(request: NextRequest) {
  try {
    const response = (await request.json()) as NewProductProps

    const product = await prisma.product.create({
      data: {
        name: response.productData.name,
        quantity: Number(response.productData.quantity),
        userEmail: response.userEmail,
        ingredients: {
          createMany: {
            data: response.ingredientData.map((ingredient) => ({
              name: ingredient.name,
              price: Number(ingredient.price),
              quantity: Number(ingredient.quantity),
              quantityUsed: Number(ingredient.quantityUsed),
            })),
          },
        },
      },
    })

    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}
