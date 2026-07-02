'use client'

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

type Testimonial = (typeof testimonials)[number]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="mx-3 inline-flex w-[min(88vw,380px)] shrink-0 flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--brand-blue)]/30 to-[var(--brand-cyan)]/30 font-heading text-lg font-bold text-white">
          {getInitials(testimonial.name)}
        </div>
        <div className="min-w-0">
          <p className="font-heading text-sm font-bold text-white">{testimonial.name}</p>
          <p className="text-xs text-white/50">{testimonial.role}</p>
        </div>
      </div>

      <div className="mb-4 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, j) => (
          <Star key={j} className="size-4 fill-[#FBBF24] text-[#FBBF24]" />
        ))}
      </div>

      <p className="text-sm leading-relaxed text-white/70">&ldquo;{testimonial.content}&rdquo;</p>
    </article>
  )
}

export function TestimonialsSection() {
  const scrollingTestimonials = [...testimonials, ...testimonials]

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
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#0B1120] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#0B1120] to-transparent sm:w-24" />

        <div className="flex w-max animate-marquee-slow items-stretch py-2 hover:[animation-play-state:paused] motion-reduce:animate-none">
          {scrollingTestimonials.map((testimonial, i) => (
            <TestimonialCard key={`${testimonial.name}-${i}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
