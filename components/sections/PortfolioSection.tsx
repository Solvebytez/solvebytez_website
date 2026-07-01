'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react'
import {
  homepagePortfolioProjects,
  portfolioProjects,
  getProjectSubtitle,
} from '@/lib/portfolio-projects'
import { SiteScreenshot } from '@/components/portfolio/SiteScreenshot'
import { AnimatedSection, GlowButton, SectionHeader } from '@/components/ui/primitives'
import { cn } from '@/lib/utils'

function getInitials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function PortfolioSection() {
  const autoAdvanceRef = useRef<number | null>(null)
  const [active, setActive] = useState(0)
  const activeProject = homepagePortfolioProjects[active]

  useEffect(() => {
    if (autoAdvanceRef.current) window.clearTimeout(autoAdvanceRef.current)
    autoAdvanceRef.current = window.setTimeout(() => {
      setActive((i) => (i === homepagePortfolioProjects.length - 1 ? 0 : i + 1))
    }, 6500)
    return () => {
      if (autoAdvanceRef.current) window.clearTimeout(autoAdvanceRef.current)
    }
  }, [active])

  if (!activeProject) return null

  return (
    <AnimatedSection className="section-light relative overflow-hidden py-24 lg:py-32">
      <div className="absolute -right-20 top-20 size-72 rounded-full bg-[#2563EB]/5 blur-[100px]" />
      <div className="absolute -left-20 bottom-20 size-64 rounded-full bg-[#7C3AED]/5 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Portfolio"
          title="Real Projects We've Delivered"
          subtitle={`${portfolioProjects.length}+ live websites and apps across e-commerce, enterprise, real estate, and more.`}
        />

        {/* Image-only gallery */}
        <div className="mt-14">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {homepagePortfolioProjects.map((p, i) => {
              const isActive = i === active
              return (
                <motion.a
                  key={p.id}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  onMouseEnter={() => setActive(i)}
                  className={cn(
                    'group relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-sm transition-all duration-500',
                    'hover:-translate-y-1 hover:shadow-xl',
                    isActive && 'ring-2 ring-[#2563EB]/30'
                  )}
                >
                  <SiteScreenshot
                    url={p.url}
                    domain={p.domain}
                    alt={`${p.name} preview`}
                    accent="#2563EB"
                    fallbackInitials={getInitials(p.name)}
                    showChrome={false}
                    className="rounded-none border-0"
                  />

                  {/* subtle hover overlay only (no text) */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="pointer-events-none absolute right-4 top-4 flex size-10 items-center justify-center rounded-2xl border border-white/30 bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    <ExternalLink className="size-4" />
                  </div>
                </motion.a>
              )
            })}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-center text-sm text-[#94A3B8]"
          >
            Click any image to open the live project.
          </motion.p>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <GlowButton href="/portfolio" variant="primary" size="lg">
            View All {portfolioProjects.length}+ Projects
            <ArrowRight className="size-5" />
          </GlowButton>
          <GlowButton href="/contact" variant="outline" size="lg">
            Start Your Project
            <ArrowUpRight className="size-5" />
          </GlowButton>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
