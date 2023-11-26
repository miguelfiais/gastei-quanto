import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { CheckCircle } from 'lucide-react'

const Benefits = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-primary" />
            <p>Visão detalhada dos custos</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Obtenha uma análise minuciosa de todos os custos envolvidos na
          produção, permitindo uma compreensão completa e facilitando decisões
          informadas.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-primary" />
            <p>Agilidade no planejamento</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Economize tempo com o cálculo automatizado de custos, possibilitando
          uma gestão mais rápida e eficiente, liberando tempo para focar no
          crescimento do seu negócio.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-primary" />
            <p>Precisão financeira</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Evite surpresas financeiras ao calcular com precisão os custos
          associados à produção, proporcionando uma gestão financeira mais
          precisa e eficaz.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-primary" />
            <p>Acesso de qualquer lugar</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Acesse suas informações de custos de qualquer lugar, a qualquer
          momento, oferecendo flexibilidade e praticidade para gerenciar seu
          negócio de onde quer que esteja.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default Benefits
