'use client'

import { AnimatedSection, SectionHeader, GlowButton } from '@/components/ui/primitives'
import { SectionCTA } from '@/components/SectionCTA'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { faqs } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export function FAQSection() {
  return (
    <AnimatedSection className="section-light relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_15%_20%,rgba(37,99,235,0.12),transparent_60%),radial-gradient(900px_400px_at_85%_70%,rgba(124,58,237,0.10),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_80%)]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with Solvebytez."
        />
        <div className="mt-10 rounded-4xl border border-[#E2E8F0] bg-white/80 p-2 shadow-[0_20px_60px_rgba(2,6,23,0.06)] backdrop-blur-sm sm:p-3">
          <div className="rounded-3xl bg-white p-4 sm:p-6">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-[#0B1120]" />
      <div className="absolute inset-0 grid-pattern-dark opacity-30" />
      <div className="absolute left-1/4 top-0 size-96 rounded-full bg-[#2563EB]/20 blur-[120px]" />
      <div className="absolute right-1/4 bottom-0 size-80 rounded-full bg-[#7C3AED]/20 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          Ready to Transform Your Business with AI?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
          Join 100+ companies that have automated their way to growth. Book your free consultation today — no commitment required.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <GlowButton href="/contact" variant="primary" size="lg">
            Book Your Free Consultation Today
            <ArrowRight className="size-5" />
          </GlowButton>
          <GlowButton href="/portfolio" variant="secondary" size="lg">
            View Our Portfolio
          </GlowButton>
        </div>
        <p className="mt-6 text-sm text-white/30">Free 30-minute strategy session · No credit card required</p>
      </div>
    </section>
  )
}
