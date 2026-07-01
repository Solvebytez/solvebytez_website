import { ReactNode } from 'react'
import Link from 'next/link'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  features: string[]
  href?: string
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  href = '#',
}: ServiceCardProps) {
  return (
    <Link href={href}>
      <div className="glass-effect group h-full p-6 rounded-xl card-hover cursor-pointer">
        <div className="mb-4 text-primary text-3xl group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-foreground/70 mb-4">{description}</p>
        <ul className="space-y-1 text-xs text-foreground/60">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
          Learn more
          <span>→</span>
        </div>
      </div>
    </Link>
  )
}
