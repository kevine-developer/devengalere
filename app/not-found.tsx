import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <Image
        src="https://res.cloudinary.com/dhe585mze/image/upload/v1765019971/logo._td5d5y.png?height=128&width=128"
        alt="DevEnGalère"
        width={128}
        height={128}
        className="object-cover"
      />
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <p className="mb-2 text-2xl font-semibold">Page non trouvée</p>
      <p className="mb-8 text-zinc-400">
        Cette page a dû galérer quelque part... Elle n'existe plus (ou jamais).
      </p>
      <Button asChild>
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à l'accueil
        </Link>
      </Button>
    </div>
  );
}
