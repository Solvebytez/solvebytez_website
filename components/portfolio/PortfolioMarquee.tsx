'use client'

import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import {
  portfolioProjects,
  getProjectSubtitle,
  type PortfolioProject,
} from '@/lib/portfolio-projects'
import { cn } from '@/lib/utils'

const categoryAccent: Record<PortfolioProject['category'], string> = {
  Enterprise: '#2563EB',
  'E-Commerce': '#7C3AED',
  Manufacturing: '#F59E0B',
  Telecom: '#06B6D4',
  'Real Estate': '#10B981',
  'Healthcare & NGO': '#EC4899',
  Engineering: '#6366F1',
  Retail: '#EAB308',
  'Mobile Apps': '#14B8A6',
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function getLogoUrl(domain: string) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
}

function MarqueeItem({ project }: { project: PortfolioProject }) {
  const [logoError, setLogoError] = useState(false)
  const accent = categoryAccent[project.category]

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group mx-3 inline-flex shrink-0 items-center gap-3.5 rounded-2xl border border-[#E2E8F0]/90 bg-white px-4 py-3 shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2563EB]/25 hover:shadow-[0_12px_32px_rgba(37,99,235,0.12)]"
    >
      <div
        className="relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#E2E8F0]/80 bg-[#F8FAFC]"
        style={{ boxShadow: `0 0 0 1px ${accent}15 inset` }}
      >
        {!logoError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={getLogoUrl(project.domain)}
            alt={`${project.name} logo`}
            width={28}
            height={28}
            className="size-7 object-contain"
            onError={() => setLogoError(true)}
          />
        ) : (
          <span
            className="font-heading text-xs font-bold"
            style={{ color: accent }}
          >
            {getInitials(project.name)}
          </span>
        )}
      </div>

      <div className="min-w-0 pr-1">
        <p className="truncate font-heading text-sm font-bold text-[#0B1120] transition-colors group-hover:text-[#2563EB]">
          {project.name}
        </p>
        <p className="mt-0.5 truncate text-xs text-[#94A3B8]">{getProjectSubtitle(project)}</p>
      </div>

      <ExternalLink className="size-3.5 shrink-0 text-[#CBD5E1] transition-colors group-hover:text-[#2563EB]" />
    </a>
  )
}

export function PortfolioMarquee() {
  const items = [...portfolioProjects, ...portfolioProjects]

  return (
    <section className="relative overflow-hidden border-y border-[#E2E8F0]/80 bg-[#F8FAFC] py-10 md:py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_200px_at_20%_50%,rgba(37,99,235,0.06),transparent_60%),radial-gradient(700px_200px_at_80%_50%,rgba(124,58,237,0.05),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative mx-auto mb-8 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center rounded-full border border-[#2563EB]/15 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
          Our Portfolio
        </span>
        <p className="mt-3 font-heading text-lg font-bold text-[#0B1120] md:text-xl">
          {portfolioProjects.length}+ projects delivered worldwide
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F8FAFC] to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F8FAFC] to-transparent sm:w-28" />

        <div className={cn('flex w-max animate-marquee-slow whitespace-nowrap hover:[animation-play-state:paused]')}>
          {items.map((project, index) => (
            <MarqueeItem key={`${project.id}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
