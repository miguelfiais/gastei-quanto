import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gastei quanto?',
  description:
    'Simplificar o processo de cálculo de custos para empreendedores que produzem e vendem produtos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={cn('flex min-h-screen flex-col', inter.className)}>
        {children}
      </body>
    </html>
  )
}
