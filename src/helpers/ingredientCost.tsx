import { Ingredient } from '@prisma/client'

export interface IngredientWithCost extends Ingredient {
  cost: number
}
export const calculateCost = (ingredient: Ingredient): IngredientWithCost => {
  const cost =
    (Number(ingredient.price) * ingredient.quantityUsed) / ingredient.quantity
  const ingredientWithCost = { ...ingredient, cost }
  return ingredientWithCost
}
