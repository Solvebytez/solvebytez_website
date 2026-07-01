import { SectionHeader } from '@/components/ui/primitives'
import { SectionCTA } from '@/components/SectionCTA'
import { JsonLd } from '@/components/JsonLd'
import { industries, solutions } from '@/lib/data'
import { breadcrumbJsonLd, createPageMetadata } from '@/lib/seo'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = createPageMetadata({
  title: 'Industries We Serve',
  description:
    'AI automation solutions for manufacturing, healthcare, pharma, logistics, retail, education, hospitality, and more.',
  path: '/industries',
  keywords: ['industry automation', 'healthcare automation', 'manufacturing software', 'logistics automation'],
})

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/industries' },
        ])}
      />
      <section className="relative overflow-hidden bg-[#0B1120] pt-32 pb-24">
        <div className="absolute inset-0 grid-pattern-dark opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Industries We <span className="gradient-text">Transform</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/60">
            Deep domain expertise across sectors that demand precision, compliance, and scale.
          </p>
        </div>
      </section>

      <section className="section-light py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {industries.map((ind) => (
              <div key={ind.title} className="group rounded-3xl border border-[#E2E8F0] bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start gap-5">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10">
                    <ind.icon className="size-7 text-[#2563EB]" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-[#0B1120]">{ind.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{ind.description}</p>
                    <Link href="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] opacity-0 transition-all group-hover:opacity-100">
                      Discuss your project <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Solutions" title="Cross-Industry Capabilities" subtitle="Our solutions adapt to any industry's unique requirements." dark />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.slice(0, 6).map((s) => (
              <Link key={s.title} href={s.href} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-[#2563EB]/30 hover:bg-white/10">
                <s.icon className="size-6 text-[#06B6D4]" />
                <h3 className="mt-3 font-heading font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/50">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionCTA
            className="mt-4"
            title="Serving your industry?"
            description="Tell us about your sector and challenges — we'll show you how AI automation fits your business."
          />
        </div>
      </section>
    </>
  )
}
