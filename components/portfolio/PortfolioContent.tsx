'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Globe,
  Search,
  Sparkles,
  Building2,
  ShoppingBag,
  Factory,
  Radio,
  Home,
  Heart,
  Wrench,
  Store,
  Smartphone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import {
  portfolioProjects,
  portfolioCategories,
  featuredProjects,
  getProjectSubtitle,
  getProjectLinkLabel,
  type PortfolioCategory,
  type PortfolioProject,
} from '@/lib/portfolio-projects'
import { SiteScreenshot } from '@/components/portfolio/SiteScreenshot'
import { PortfolioMarquee } from '@/components/portfolio/PortfolioMarquee'
import { GlowButton } from '@/components/ui/primitives'
import { cn } from '@/lib/utils'

const categoryIcons: Record<Exclude<PortfolioCategory, 'All'>, LucideIcon> = {
  Enterprise: Building2,
  'E-Commerce': ShoppingBag,
  Manufacturing: Factory,
  Telecom: Radio,
  'Real Estate': Home,
  'Healthcare & NGO': Heart,
  Engineering: Wrench,
  Retail: Store,
  'Mobile Apps': Smartphone,
}

const categoryColors: Record<Exclude<PortfolioCategory, 'All'>, string> = {
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
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function FeaturedCard({ project }: { project: PortfolioProject }) {
  const color = categoryColors[project.category]

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A] shadow-xl transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-[#2563EB]/10"
    >
      <SiteScreenshot
        url={project.url}
        domain={project.domain}
        displayDomain={getProjectSubtitle(project)}
        alt={`${project.name} preview`}
        accent={color}
        fallbackInitials={getInitials(project.name)}
        className="rounded-t-3xl"
      />

      <div className="relative p-5">
        <div
          className="absolute -top-px left-5 right-5 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${color}60, transparent)` }}
        />
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-heading text-lg font-bold text-white transition-colors group-hover:text-[#60A5FA]">
              {project.name}
            </h3>
            <p className="mt-0.5 text-xs text-white/35">{getProjectSubtitle(project)}</p>
          </div>
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all group-hover:border-white/30 group-hover:bg-white group-hover:text-[#0B1120]">
            <ArrowUpRight className="size-4" />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="rounded-full px-2.5 py-1 text-[10px] font-semibold" style={{ backgroundColor: `${color}20`, color }}>
            {project.category}
          </span>
          {project.region && (
            <span className="flex items-center gap-1 text-[10px] text-white/30">
              <Globe className="size-3" />
              {project.region}
            </span>
          )}
        </div>
      </div>
    </motion.a>
  )
}

function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const color = categoryColors[project.category]
  const Icon = categoryIcons[project.category]

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      className="group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#2563EB]/20 hover:shadow-xl"
    >
      <SiteScreenshot
        url={project.url}
        domain={project.domain}
        displayDomain={getProjectSubtitle(project)}
        alt={`${project.name} preview`}
        accent={color}
        fallbackInitials={getInitials(project.name)}
        className="rounded-t-2xl"
      />

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate font-heading text-sm font-bold text-[#0B1120] transition-colors group-hover:text-[#2563EB]">
              {project.name}
            </h3>
            <p className="truncate text-[11px] text-[#94A3B8]">{getProjectSubtitle(project)}</p>
          </div>
          <ExternalLink className="size-3.5 shrink-0 text-[#CBD5E1] transition-colors group-hover:text-[#2563EB]" />
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 rounded-md bg-[#F8FAFC] px-2 py-0.5 text-[10px] font-semibold text-[#64748B]">
            <Icon className="size-2.5" style={{ color }} />
            {project.category}
          </span>
          {project.region && <span className="text-[10px] text-[#94A3B8]">{project.region}</span>}
        </div>

        <p className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-[#2563EB] opacity-0 transition-opacity group-hover:opacity-100">
          {getProjectLinkLabel(project)} <ArrowUpRight className="size-3" />
        </p>
      </div>
    </motion.a>
  )
}

export function PortfolioContent() {
  const [category, setCategory] = useState<PortfolioCategory>('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return portfolioProjects.filter((p) => {
      const matchCategory = category === 'All' || p.category === category
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.domain.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.store?.toLowerCase().includes(q) ?? false) ||
        (p.platform?.toLowerCase().includes(q) ?? false)
      return matchCategory && matchSearch
    })
  }, [category, search])

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: portfolioProjects.length }
    portfolioProjects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1
    })
    return counts
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1120] pt-32 pb-20">
        <div className="absolute inset-0 grid-pattern-dark opacity-30" />
        <div className="absolute left-1/4 top-0 size-[480px] rounded-full bg-[#2563EB]/8 blur-[140px]" />
        <div className="absolute right-0 bottom-0 size-[320px] rounded-full bg-[#7C3AED]/8 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#06B6D4]/25 bg-[#06B6D4]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
              <Sparkles className="size-3.5" />
              {portfolioProjects.length} Live Client Projects
            </span>

            <h1 className="max-w-4xl font-heading text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl">
              Real websites we&apos;ve{' '}
              <span className="bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#2DD4BF] bg-clip-text text-transparent">
                designed & delivered
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/55">
              Browse live previews of every project — enterprise brands, e-commerce stores, and platforms across India, UK, Canada & beyond.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {[
                { value: `${portfolioProjects.length}+`, label: 'Live Sites' },
                { value: `${portfolioCategories.length - 1}`, label: 'Categories' },
                { value: '4+', label: 'Countries' },
                { value: `${portfolioProjects.length}`, label: 'Clients' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/8 bg-white/4 px-4 py-4 backdrop-blur-sm sm:px-5">
                  <p className="font-heading text-xl font-bold text-white sm:text-2xl">{s.value}</p>
                  <p className="mt-0.5 text-[11px] text-white/40">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-[#0B1120] pb-20 pt-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#06B6D4]">Featured Clients</p>
              <h2 className="mt-1 font-heading text-2xl font-bold text-white md:text-3xl">
                Enterprise & global brands
              </h2>
            </div>
            <p className="text-sm text-white/40">Live website screenshots · Click to visit ↗</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((p) => (
              <FeaturedCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* All projects */}
      <section className="bg-[#F8FAFC] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-[#0B1120] md:text-3xl">All projects</h2>
            <p className="mt-2 text-[#64748B]">Every card shows a live preview of the actual website.</p>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#94A3B8]" />
            <input
              type="search"
              placeholder="Search by name, domain, or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-[#E2E8F0] bg-white py-3.5 pl-11 pr-4 text-sm text-[#0B1120] outline-none transition-all focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15"
            />
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
                  category === cat
                    ? 'bg-[#0B1120] text-white shadow-md'
                    : 'border border-[#E2E8F0] bg-white text-[#64748B] hover:border-[#2563EB]/30 hover:text-[#0B1120]'
                )}
              >
                {cat}
                <span className={cn('ml-1.5 text-xs', category === cat ? 'text-white/50' : 'text-[#94A3B8]')}>
                  ({categoryCounts[cat] || 0})
                </span>
              </button>
            ))}
          </div>

          <p className="mb-6 text-sm text-[#64748B]">
            Showing <span className="font-semibold text-[#0B1120]">{filtered.length}</span> of {portfolioProjects.length} projects
          </p>

          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-[#64748B]">No projects match your search.</p>
              <button
                onClick={() => { setSearch(''); setCategory('All') }}
                className="mt-3 text-sm font-semibold text-[#2563EB] hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <PortfolioMarquee />

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0B1120] py-24">
        <div className="absolute inset-0 grid-pattern-dark opacity-20" />
        <div className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/10 blur-[90px]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Want your project on this list?
          </h2>
          <p className="mt-4 text-lg text-white/50">
            Join {portfolioProjects.length}+ businesses that trust Solvebytez to build their digital presence.
          </p>
          <div className="mt-8">
            <GlowButton href="/contact" variant="primary" size="lg">
              Start Your Project <ArrowRight className="size-5" />
            </GlowButton>
          </div>
        </div>
      </section>
    </>
  )
}
