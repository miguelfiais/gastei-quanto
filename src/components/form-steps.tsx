'use client'

import { useState } from 'react'
import NewIngredientForm from './new-ingredient-form'
import NewProductForm from './new-product-form'
import { Button } from './ui/button'

export interface IProductData {
  name: string
  quantity: string
}

const FormSteps = () => {
  const [productData, setProductData] = useState<IProductData | undefined>()

  return (
    <>
      {productData ? (
        <div className="flex w-full max-w-sm flex-grow flex-col gap-14">
          <div className="text-sm font-medium">
            <p className="capitalize text-primary">{productData.name}</p>
            <p>Unidades: {productData.quantity}</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <NewIngredientForm />
            <Button variant={'secondary'} className="w-full">
              Finalizar
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
