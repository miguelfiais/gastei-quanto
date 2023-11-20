'use client'

import { useState } from 'react'
import NewIngredientForm from './new-ingredient-form'
import NewProductForm from './new-product-form'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { LoaderIcon } from 'lucide-react'
import AddedIngredients from './added-ingredients'

export interface IProductData {
  name: string
  quantity: string
}

export interface IIngredientData {
  id: number
  name: string
  price: string
  quantity: string
  quantityUsed: string
}

interface FormStepsProps {
  userEmail: string | undefined | null
}

const FormSteps = ({ userEmail }: FormStepsProps) => {
  const [productData, setProductData] = useState<IProductData>()
  const [ingredientData, setIngredientData] = useState<IIngredientData[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const addIngredient = (data: IIngredientData) => {
    setIngredientData((prev) => [...prev, data])
  }

  const router = useRouter()
  const { toast } = useToast()

  const createProduct = async () => {
    setIsLoading(true)
    const request = await fetch('/api/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productData, ingredientData, userEmail }),
    })
    if (request.status === 201) {
      router.push('/produtos')
    } else {
      toast({
        description: 'Erro ao cadastrar produto',
        variant: 'destructive',
        duration: 2000,
      })
      setProductData(undefined)
      setIngredientData([])
    }
    setIsLoading(false)
  }

  return (
    <>
      {productData ? (
        <div className="flex w-full max-w-sm flex-grow flex-col gap-14">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">
              <p className="capitalize text-primary">{productData.name}</p>
              <p>Unidades: {productData.quantity}</p>
            </div>
            <AddedIngredients ingredients={ingredientData} />
          </div>

          <div className="flex flex-col items-center gap-6">
            <NewIngredientForm addIngredient={addIngredient} />
            <Button
              variant={'secondary'}
              className="w-full"
              onClick={createProduct}
              disabled={isLoading || ingredientData.length === 0}
            >
              {isLoading ? (
                <LoaderIcon className="h-4 w-4 animate-spin" />
              ) : (
                'Finalizar'
              )}
            </Button>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-muted-foreground"></div>
              <div className="h-2 w-2 rounded-full bg-primary"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full max-w-sm flex-col items-center gap-6">
          <NewProductForm setProductData={setProductData} />
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary"></div>
            <div className="h-2 w-2 rounded-full bg-muted-foreground"></div>
          </div>
        </div>
      )}
    </>
  )
}

export default FormSteps
