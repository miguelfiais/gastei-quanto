import { PenIcon, TrashIcon } from 'lucide-react'
import { Card, CardHeader } from './ui/card'
import { IngredientWithCost } from '@/helpers/ingredientCost'

interface IngredientCardProps {
  ingredient: IngredientWithCost
}

const IngredientCard = ({ ingredient }: IngredientCardProps) => {
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

        <button>
          <TrashIcon className="h-4 w-4 text-destructive" />
        </button>
      </CardHeader>
    </Card>
  )
}

export default IngredientCard
