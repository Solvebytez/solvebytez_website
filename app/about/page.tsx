import { GlowButton, SectionHeader } from '@/components/ui/primitives'
import { JsonLd } from '@/components/JsonLd'
import { industries, metrics } from '@/lib/data'
import { breadcrumbJsonLd, createPageMetadata } from '@/lib/seo'
import { ArrowRight, Target, Eye, Heart } from 'lucide-react'

export const metadata = createPageMetadata({
  title: 'About Us',
  description:
    'Learn about Solvebytez — a global AI automation company helping businesses eliminate manual work and accelerate growth.',
  path: '/about',
  keywords: ['about Solvebytez', 'AI automation company', 'IT company Ghaziabad', 'software development team'],
})

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      <section className="relative overflow-hidden bg-[#0B1120] pt-32 pb-24">
        <div className="absolute inset-0 grid-pattern-dark opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
              About Solvebytez
            </span>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Engineering the Future of <span className="gradient-text">Business Automation</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              We are a global team of AI specialists, software engineers, and business strategists
              dedicated to helping companies eliminate manual work and unlock exponential growth through intelligent automation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-light py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Target, title: 'Our Mission', desc: 'Democratize AI automation so every business, regardless of size, can compete at enterprise level.' },
              { icon: Eye, title: 'Our Vision', desc: 'A world where no human spends time on repetitive tasks — AI handles the mundane, humans drive innovation.' },
              { icon: Heart, title: 'Our Values', desc: 'Innovation, integrity, and impact. We measure success by our clients\' growth, not just our revenue.' },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-[#E2E8F0] bg-white p-8">
                <item.icon className="size-8 text-[#2563EB]" />
                <h3 className="mt-4 font-heading text-xl font-bold text-[#0B1120]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#64748B]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="By the Numbers" title="Our Track Record" dark />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
                <p className="font-heading text-4xl font-bold text-white">{m.value}{m.suffix}</p>
                <p className="mt-2 text-sm text-white/50">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Industries" title="Serving Diverse Sectors" subtitle="Deep expertise across 10+ industries worldwide." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((ind) => (
              <div key={ind.title} className="flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-4">
                <ind.icon className="size-5 text-[#2563EB]" />
                <span className="text-sm font-medium text-[#0B1120]">{ind.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-heading text-3xl font-bold text-[#0B1120]">Join us on the journey</h2>
          <p className="mt-4 text-[#64748B]">Whether you need automation or want to build it — we&apos;d love to hear from you.</p>
          <div className="mt-8 flex justify-center">
            <GlowButton href="/contact" variant="primary" size="lg">
              Get in Touch <ArrowRight className="size-5" />
            </GlowButton>
          </div>
        </div>
      </section>
    </>
  )
}
