import { LoaderIcon } from 'lucide-react'

const Loading = () => {
  return (
    <div className="flex flex-grow flex-col items-center justify-center">
      <LoaderIcon className="h-6 w-6 animate-spin" />
      Carregando...
    </div>
  )
}

export default Loading
