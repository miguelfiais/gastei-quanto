import Operation from '@/components/operation'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container flex flex-grow flex-col items-center py-8">
      <Image
        src="/mockup.png"
        alt="mockup do aplicativo"
        width={200}
        height={354}
      />
      <div className="text-center">
        <h1 className="text-3xl font-bold">Gastei quanto?</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Desenvolvido para simplificar o processo de cálculo de custos para
          empreendedores que produzem e vendem produtos.
        </p>
        <Link
          href={'/login'}
          className={cn(
            buttonVariants({ variant: 'default', size: 'lg' }),
            'mt-4',
          )}
        >
          Começar agora
        </Link>
      </div>
      <div className="flex flex-col py-8">
        <h2 className="text-center text-xl font-bold">Como funciona?</h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          O funcionamento é simples e eficiente, além disso você pode acessar de
          qualquer lugar
        </p>
        <Operation />
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Com base nessas informações, o “Gastei Quanto?” realiza
          automaticamente os cálculos, fornecendo ao usuário o custo total dos
          ingredientes necessários para a produção da quantidade desejada do
          produto.
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
    </div>
  )
}
