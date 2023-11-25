'use client'
import { LoaderIcon, PenIcon, TrashIcon } from 'lucide-react'
import { Card, CardHeader } from './ui/card'
import { IngredientWithCost } from '@/helpers/ingredientCost'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface IngredientCardProps {
  ingredient: IngredientWithCost
}

const IngredientCard = ({ ingredient }: IngredientCardProps) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const deleteIngredient = async () => {
    setIsLoading(true)
    await fetch('/api/ingredient', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: ingredient.id }),
    })
    router.refresh()
    setIsLoading(false)
  }
  return (
    <Card key={ingredient.id}>
      <CardHeader className="flex-row items-center justify-between p-3">
        <button>
          <PenIcon className="h-4 w-4" />
        </button>
        <div className="flex flex-col items-center">
          <p className="font-medium capitalize">{ingredient.name}</p>
          <p className="text-sm text-muted-foreground">
            Custo: R$ {ingredient.cost.toFixed(2)}
          </p>
        </div>

        <button onClick={deleteIngredient} disabled={isLoading}>
          {isLoading ? (
            <LoaderIcon className="h-4 w-4 animate-spin text-destructive" />
          ) : (
            <TrashIcon className="h-4 w-4 text-destructive" />
          )}
        </button>
      </CardHeader>
    </Card>
  )
}

export default IngredientCard
