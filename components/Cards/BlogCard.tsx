import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'

interface BlogCardProps {
  image: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: number
  href: string
}

export default function BlogCard({
  image,
  title,
  excerpt,
  category,
  date,
  readTime,
  href,
}: BlogCardProps) {
  return (
    <Link href={href}>
      <article className="glass-effect rounded-xl overflow-hidden card-hover group cursor-pointer h-full flex flex-col">
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/20 text-primary">
              {category}
            </span>
          </div>

          <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="text-sm text-foreground/70 mb-4 line-clamp-3 flex-1">{excerpt}</p>

          <div className="flex items-center justify-between text-xs text-foreground/60 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{readTime} min</span>
              </div>
            </div>
            <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
