import Image from "next/image";
import Link from "next/link";

interface LogoHeaderProps {
  onClick?: () => void;
}

export default function LogoHeader({ onClick }: LogoHeaderProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="group flex items-center gap-3 hover:opacity-80 transition-opacity"
      aria-label="DevEnGalère - Retour à l'accueil"
    >
      <div>
        <Image
          src="https://res.cloudinary.com/dhe585mze/image/upload/v1766151561/logo-50x50_dbun7t.png"
          alt="Logo"
          width={50}
          height={50}
          className="h-10 w-auto"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold uppercase tracking-tight leading-none text-(--deg-white)">
          Dev<span className="text-lime">EnGalère</span>
        </span>
        <span className="text-[10px] font-mono text-(--deg-muted) uppercase tracking-widest">
          <span aria-hidden="true">// </span>hub créatif
        </span>
      </div>
    </Link>
  );
}
