import Link from "next/link";
import Image from "next/image";
import type { Community } from "@/types";
import { ExternalLink, Users, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CommunityCardProps {
  community: Community;
}

const platformColors = {
  discord: "border-[#5865F2]",
  twitter: "border-[#1DA1F2]",
  linkedin: "border-[#0A66C2]",
  github: "border-[#fff]",
  telegram: "border-[#0088cc]",
};

const platformBg = {
  discord: "bg-[#5865F2]/10",
  twitter: "bg-[#1DA1F2]/10",
  linkedin: "bg-[#0A66C2]/10",
  github: "bg-white/10",
  telegram: "bg-[#0088cc]/10",
};

export function CommunityCard({ community }: CommunityCardProps) {
  return (
    <article
      className={`group relative border-2  bg-card p-4 transition-all hover:border-primary`}
    >
      <div className="mb-4 flex  gap-2">
        <Image
          src={community.icon || "/placeholder.svg"}
          alt={community.name}
          width={40}
          height={40}
          priority={true}
          quality={100}
          className="object-contain"
        />
        <Link
          href={`/ressources/communaute/${community.id}`}
          className="block group/title"
        >
          <h3 className="mb-2 text-xl font-bold uppercase tracking-tight transition-colors group-hover/title:text-primary">
            {community.name}
            <ArrowRight className="inline-block h-4 w-4 ml-2 opacity-0 group-hover/title:opacity-100 transition-opacity" />
          </h3>
        </Link>
      </div>
      <div className="w-full">
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {community.description}
        </p>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-primary" />
          <span className="font-bold text-primary">
            {community.memberCount}
          </span>
          <span className="text-xs text-muted-foreground">membres</span>
        </div>
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          {community.category}
        </span>
      </div>

      <div className="flex gap-2">
        <Button asChild size="sm" className="flex-1">
          <a href={community.url} target="_blank" rel="noopener noreferrer">
            Rejoindre
            <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </Button>
        <Button asChild size="sm" variant="outline">
          <Link href={`/ressources/communaute/${community.id}`}>Détails</Link>
        </Button>
      </div>
    </article>
  );
}
