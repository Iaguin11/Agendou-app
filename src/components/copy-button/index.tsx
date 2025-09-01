import { useState } from "react"
import { Button } from "../ui/button"
import { Check, Copy } from "lucide-react"
import toast from "react-hot-toast"

interface CopyButtonProps {
  textToCopy: string
}

export function CopyButton({textToCopy}: CopyButtonProps){
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 500)
      toast.success('Link Copiado')
    } catch (error) {
      console.log('Erro ao copiar:', error)
    }
  }
  return (
    <Button onClick={handleCopy} variant='secondary' size="sm">
      {copied ? (
        <>  
          <Check className="mr-2 h-4 w-4"/> Copiado!
        </>
      ): (
        <>
          <Copy className="mr-2 h-4 w-4"/> Copiar
        </>
      )}
    </Button>
  )
}