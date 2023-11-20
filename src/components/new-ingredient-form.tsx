'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { IIngredientData } from './form-steps'

const formSchema = z.object({
  name: z
    .string({
      required_error: 'O nome é obrigatório',
    })
    .min(2, {
      message: 'O nome deve ter pelo menos 2 caracteres.',
    }),
  price: z
    .string({
      required_error: 'Infome o valor do ingrediente',
    })
    .min(1, {
      message: 'Digite pelo menos 1 caracter',
    }),
  quantity: z
    .string({
      required_error: 'Infome a quantidade do ingrediente',
    })
    .min(1, {
      message: 'Digite pelo menos 1 caracter',
    }),
  quantityUsed: z
    .string({
      required_error: 'Infome a quantidade usada do ingrediente',
    })
    .min(1, {
      message: 'Digite pelo menos 1 caracter',
    }),
})
interface NewIngredientFormProps {
  addIngredient: (data: IIngredientData) => void
}

const NewIngredientForm = ({ addIngredient }: NewIngredientFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      price: '',
      quantity: '',
      quantityUsed: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    addIngredient({ id: Math.random(), ...values })
    form.reset()
  }

  return (
    <div className="flex w-full flex-col">
      <h2 className="mb-5 text-center text-2xl font-semibold">
        Adicionar ingrediente
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preço</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantidade</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantityUsed"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantidade de uso</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Adicionar
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default NewIngredientForm
