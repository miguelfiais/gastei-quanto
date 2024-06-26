/* eslint-disable prettier/prettier */
import Benefits from '@/components/benefits'
import Operation from '@/components/operation'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-grow flex-col items-center py-8">
      <div className='container lg:flex items-center justify-between'>
      <main className="flex flex-col items-center text-center lg:text-left lg:items-start lg:max-w-xl">
        <h2 className="text-lg font-medium uppercase text-primary md:text-xl lg:text-2xl">
          Gastei quanto?
        </h2>
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          Leve sua gestão de custos ao próximo nível
        </h1>
        <p className="mt-3 text-md text-muted-foreground md:text-base lg:text-lg">
          Desenvolvido para simplificar o processo de cálculo de custos para
          empreendedores que produzem e vendem produtos.
        </p>
        <Link
          href={'/login'}
          className={cn(
            buttonVariants({ variant: 'default', size: 'lg' }),
            'mt-4 md:text-base lg:text-lg',
          )}
        >
          Começar agora
        </Link>
      </main>
      <div className="flex w-full flex-col bg-effect-blur bg-top bg-no-repeat pt-12 lg:bg-none">
        <Image
          src={'/demo.png'}
          alt="demonstracao do aplicativo"
          width={460}
          height={637}
          className="self-end pl-5 sm:self-center lg:w-3/6"
        />
      </div>
      </div>
      <section className="container flex flex-col pt-8">
        <h3 className="text-center text-base font-medium uppercase text-primary">
          Simples e Eficiente
        </h3>
        <h2 className="mt-2 text-center text-xl font-bold">
          Entenda como funciona
        </h2>
        <div className="mt-4 flex flex-col">
          <Operation />
          <Image
            src={'/operation.png'}
            alt="como functiona o aplicativo"
            width={387}
            height={166}
            className="mt-4 self-center"
          />
          <p className="mt-3 text-center text-sm text-muted-foreground">
            Com base nessas informações, o aplicativo realiza automaticamente os
            cálculos, fornecendo ao usuário o custo total dos ingredientes
            necessários para a produção da quantidade desejada do produto.
          </p>
          <Link
            href={'/login'}
            className={cn(
              buttonVariants({ variant: 'default', size: 'lg' }),
              'mt-4 self-center',
            )}
          >
            Começar agora
          </Link>
        </div>
      </section>
      <section className="container flex flex-col pt-10">
        <h3 className="text-center text-base font-medium uppercase text-primary">
          PORQUE UTILIZAR
        </h3>
        <h2 className="mt-2 text-center text-xl font-bold">
          Vantagens para o seu negócio
        </h2>
        <div className="mt-3">
          <Benefits />
        </div>
      </section>
    </div>
  )
}
