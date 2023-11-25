import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from './ui/badge'

const Operation = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex items-center gap-1">
            <Badge>1º Passo</Badge>
            <span className="text-sm">Definir produto.</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Inserir o nome do produto que deseja criar, a quantidade que pretende
          produzir
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <div className="flex items-center gap-1">
            <Badge> 2º Passo</Badge>
            <span className="text-sm">Listar os ingredientes</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Para cada ingrediente, o usuário fornece o valor de compra, a
          quantidade total adquirida e a quantidade que será utilizada na
          produção do produto.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default Operation
