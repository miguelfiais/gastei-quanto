import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { IIngredientData } from './form-steps'
import { Card, CardHeader } from './ui/card'
import { PenIcon, TrashIcon } from 'lucide-react'

interface AddedIngredientsProps {
  ingredients: IIngredientData[]
}

const AddedIngredients = ({ ingredients }: AddedIngredientsProps) => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative">
          <p className="text-sm font-medium underline">
            Ingredientes cadastrados
          </p>
          <span className="absolute -right-3 -top-5 rounded-full bg-primary px-2 py-1 text-xs font-medium">
            {ingredients.length}
          </span>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Ingredientes adicionados</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-3 py-4">
          {ingredients.length > 0 ? (
            ingredients.map((ingredient) => (
              <Card key={ingredient.id}>
                <CardHeader className="flex-row items-center justify-between p-3">
                  <button>
                    <PenIcon className="h-4 w-4" />
                  </button>
                  <p className="text-sm font-medium capitalize">
                    {ingredient.name}
                  </p>
                  <button>
                    <TrashIcon className="h-4 w-4 text-destructive" />
                  </button>
                </CardHeader>
              </Card>
            ))
          ) : (
            <p className="text-sm font-medium text-muted-foreground">
              Nenhum ingrediente foi adicionado.
            </p>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default AddedIngredients
