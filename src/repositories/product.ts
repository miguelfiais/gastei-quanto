import prisma from '@/lib/db'

export const fetchProducts = async (email: string | undefined | null) => {
  if (email) {
    const products = await prisma.product.findMany({
      where: {
        userEmail: email,
      },
    })
    return products
  }
  return []
}
