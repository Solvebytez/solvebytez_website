import Link from 'next/link'
import { ArrowRight, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react'
import { GlowButton, SectionHeader } from '@/components/ui/primitives'
import { ServiceWorkflow } from '@/components/ServiceWorkflow'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd, serviceJsonLd } from '@/lib/seo'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

type WorkflowStep = { title: string; description: string }

interface ServicePageProps {
  path: string
  badge: string
  title: string
  subtitle: string
  description: string
  features: string[]
  benefits: { title: string; description: string }[]
  icon: LucideIcon
  workflow?: {
    title?: string
    subtitle?: string
    steps: WorkflowStep[]
  }
  advantages?: { title: string; description: string }[]
  disadvantages?: { title: string; description: string }[]
  children?: ReactNode
}

export function ServicePageLayout({
  path,
  badge,
  title,
  subtitle,
  description,
  features,
  benefits,
  icon: Icon,
  workflow,
  advantages,
  disadvantages,
  children,
}: ServicePageProps) {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({ name: badge, description, path }),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: badge, path },
          ]),
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1120] pt-10 pb-24">
        <div className="absolute inset-0 grid-pattern-dark opacity-30" />
        <div className="absolute left-1/4 top-0 size-96 rounded-full bg-[#2563EB]/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
              <Icon className="size-4" />
              {badge}
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-4 text-xl text-[#06B6D4]">{subtitle}</p>
            <p className="mt-6 text-lg leading-relaxed text-white/60">{description}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <GlowButton href="/contact" variant="primary" size="lg">
                Book Free Consultation
                <ArrowRight className="size-5" />
              </GlowButton>
              <GlowButton href="/portfolio" variant="secondary" size="lg">
                View Portfolio
              </GlowButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-light py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Capabilities" title="What We Deliver" subtitle="Comprehensive solutions tailored to your business needs." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-5">
                <div className="mt-0.5 size-2 shrink-0 rounded-full bg-[#2563EB]" />
                <p className="text-sm font-medium text-[#0B1120]">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-dark py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Benefits" title="Why It Matters" subtitle="Measurable impact from day one." dark />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <h3 className="font-heading text-lg font-bold text-white">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      {workflow?.steps?.length ? (
        <ServiceWorkflow
          title={workflow.title}
          subtitle={workflow.subtitle}
          steps={workflow.steps}
        />
      ) : null}

      {/* Advantages & Disadvantages */}
      {(advantages?.length || disadvantages?.length) && (
        <section className="section-light relative overflow-hidden py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-16 size-72 rounded-full bg-[#2563EB]/6 blur-[110px]" />
            <div className="absolute -right-24 bottom-16 size-72 rounded-full bg-[#7C3AED]/6 blur-[110px]" />
            <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(148,163,184,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.22)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_82%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Trade-offs"
              title="Advantages & Disadvantages"
              subtitle="Clear expectations: what you gain, and what to plan for."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-4xl border border-[#E2E8F0] bg-white/90 p-8 shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-[#10B981]" />
                  <h3 className="font-heading text-lg font-bold text-[#0B1120]">Advantages</h3>
                </div>
                <div className="mt-6 space-y-5">
                  {(advantages ?? []).map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <div className="mt-0.5 flex size-8 items-center justify-center rounded-xl bg-[#10B981]/10">
                        <CheckCircle2 className="size-4 text-[#10B981]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#0B1120]">{item.title}</p>
                        <p className="mt-1 text-sm text-[#64748B]">{item.description}</p>
                      </div>
                    </div>
                  ))}
                  {!advantages?.length && (
                    <p className="text-sm text-[#64748B]">Advantages will be added soon.</p>
                  )}
                </div>
              </div>

              <div className="rounded-4xl border border-[#E2E8F0] bg-white/90 p-8 shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="size-5 text-[#F59E0B]" />
                  <h3 className="font-heading text-lg font-bold text-[#0B1120]">Disadvantages</h3>
                </div>
                <div className="mt-6 space-y-5">
                  {(disadvantages ?? []).map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <div className="mt-0.5 flex size-8 items-center justify-center rounded-xl bg-[#F59E0B]/10">
                        <XCircle className="size-4 text-[#F59E0B]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#0B1120]">{item.title}</p>
                        <p className="mt-1 text-sm text-[#64748B]">{item.description}</p>
                      </div>
                    </div>
                  ))}
                  {!disadvantages?.length && (
                    <p className="text-sm text-[#64748B]">Disadvantages will be added soon.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {children}

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-heading text-3xl font-bold text-[#0B1120] md:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-[#64748B]">Book a free consultation and get a custom roadmap for your business.</p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl gradient-primary px-8 py-4 font-semibold text-white transition-all hover:shadow-brand-glow"
            >
              Book Free AI Consultation <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
