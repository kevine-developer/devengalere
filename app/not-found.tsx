import Link from "next/link"
import { ArrowLeft, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-500/20 to-violet-500/20">
        <Code2 className="h-10 w-10 text-cyan-400" />
      </div>
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <p className="mb-2 text-2xl font-semibold">Page non trouvée</p>
      <p className="mb-8 text-zinc-400">Cette page a dû galérer quelque part... Elle n'existe plus (ou jamais).</p>
      <Button asChild>
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à l'accueil
        </Link>
      </Button>
    </div>
  )
}
