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
      <article className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--brand-blue)]/30 hover:shadow-md">
        <div className="relative h-48 w-full overflow-hidden bg-[#F1F5F9]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-[var(--brand-blue)]/10 px-2.5 py-1 text-xs font-semibold text-[var(--brand-blue)]">
              {category}
            </span>
          </div>

          <h3 className="mb-2 line-clamp-2 font-heading text-lg font-bold text-[#0B1120] transition-colors group-hover:text-[var(--brand-blue)]">
            {title}
          </h3>

          <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">{excerpt}</p>

          <div className="flex items-center justify-between border-t border-[#E2E8F0] pt-4 text-xs text-slate-500">
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
            <span className="text-[var(--brand-blue)] transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
