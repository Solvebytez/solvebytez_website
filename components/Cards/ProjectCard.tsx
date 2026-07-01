import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  image: string
  title: string
  category: string
  description: string
  href: string
}

export default function ProjectCard({
  image,
  title,
  category,
  description,
  href,
}: ProjectCardProps) {
  return (
    <Link href={href}>
      <div className="group relative overflow-hidden rounded-xl card-hover cursor-pointer">
        <div className="relative h-64 w-full overflow-hidden bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="inline-block w-fit px-3 py-1 rounded-full bg-primary text-background text-xs font-semibold mb-2">
            {category}
          </span>
          <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-foreground/80 line-clamp-2">{description}</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-card to-transparent">
          <h3 className="text-lg font-bold text-foreground group-hover:hidden">{title}</h3>
          <p className="text-xs text-foreground/60 group-hover:hidden">{category}</p>
        </div>
      </div>
    </Link>
  )
}
