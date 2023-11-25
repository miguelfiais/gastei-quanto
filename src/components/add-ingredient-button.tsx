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
import { useToast } from '@/components/ui/use-toast'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useRouter } from 'next/navigation'

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

interface AddIngredientButtonProps {
  productId: string
}

const AddIngredientButton = ({ productId }: AddIngredientButtonProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      price: '',
      quantity: '',
      quantityUsed: '',
    },
  })

  const router = useRouter()
  const { toast } = useToast()
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const request = await fetch('/api/ingredient', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...values, productId }),
    })
    if (request.status === 201) {
      toast({
        description: 'Ingrediente adicionado',
        duration: 2000,
      })
      router.refresh()
    } else {
      toast({
        description: 'Erro ao adicionar ingrediente',
        variant: 'destructive',
        duration: 2000,
      })
    }
    form.reset()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'} className="w-full">
          Adicionar mais ingrediente
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar ingrediente</DialogTitle>
        </DialogHeader>
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
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit" className="w-full">
                  Adicionar
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default AddIngredientButton
