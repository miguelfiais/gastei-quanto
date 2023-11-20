'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Dispatch, SetStateAction } from 'react'
import { IProductData } from './form-steps'

const formSchema = z.object({
  name: z
    .string({
      required_error: 'O nome é obrigatório',
    })
    .min(2, {
      message: 'O nome deve ter pelo menos 2 caracteres.',
    }),
  quantity: z
    .string({
      required_error: 'Infome a quantidade do produto',
    })
    .min(1, {
      message: 'Digite pelo menos 1 caracter',
    }),
})

interface NewProductFormProps {
  setProductData: Dispatch<SetStateAction<IProductData | undefined>>
}

const NewProductForm = ({ setProductData }: NewProductFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      quantity: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setProductData(values)
  }

  return (
    <div className="w-full">
      <h2 className="mb-5 text-center text-2xl font-semibold">
        Cadastrar Produto
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Nome do produto que será feito.
                </FormDescription>
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
                  <Input {...field} />
                </FormControl>
                <FormDescription>Quantidades do produto.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Próximo
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default NewProductForm
