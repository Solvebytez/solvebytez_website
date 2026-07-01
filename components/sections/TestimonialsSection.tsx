'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { AnimatedSection, SectionHeader } from '@/components/ui/primitives'
import { testimonials } from '@/lib/data'

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function TestimonialsSection() {
  return (
    <AnimatedSection className="section-dark relative overflow-hidden py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 size-96 -translate-x-1/2 rounded-full bg-[var(--brand-blue)]/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Trusted by leaders who demand excellence."
          dark
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--brand-blue)]/30 to-[var(--brand-cyan)]/30 font-heading text-lg font-bold text-white">
                  {getInitials(t.name)}
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
              </div>

              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="size-4 fill-[#FBBF24] text-[#FBBF24]" />
                ))}
              </div>

              <p className="text-sm leading-relaxed text-white/70">&ldquo;{t.content}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
