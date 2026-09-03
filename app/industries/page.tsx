import { SectionHeader } from '@/components/ui/primitives'
import { SectionCTA } from '@/components/SectionCTA'
import { JsonLd } from '@/components/JsonLd'
import { industries, solutions } from '@/lib/data'
import { breadcrumbJsonLd, createPageMetadata } from '@/lib/seo'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = createPageMetadata({
  title: 'AI Automation Solutions for Industries | Solvebytez',
  description:
    'AI automation solutions for manufacturing, healthcare, pharma, logistics, retail, education, hospitality, and other industries. Automate workflows and improve business efficiency.',
  path: '/industries',
  keywords: [
    'AI automation solutions for industries',
    'industry automation solutions',
    'industry-specific automation',
    'manufacturing automation',
    'healthcare automation',
    'pharma automation',
    'logistics automation',
    'retail automation',
    'education automation',
    'hospitality automation',
    'business automation solutions',
    'manufacturing software solutions',
    'AI business automation',
    'industry automation software',
  ],
})

export default function IndustriesPage() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/industries' },
        ])}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1120] pt-32 pb-24">
        <div className="absolute inset-0 grid-pattern-dark opacity-30" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
              Industry-Specific Automation
            </span>

            <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              AI Automation Solutions for{' '}
              <span className="gradient-text">Every Industry</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/60">
              We build AI automation solutions and custom software for
              businesses across manufacturing, healthcare, pharma, logistics,
              retail, education, hospitality, and other industries that need
              efficient workflows, better visibility, and scalable operations.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Introduction */}
      <section className="section-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
              Industry Automation Solutions
            </span>

            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0B1120] md:text-4xl">
              Industry-Specific AI Automation and Software Solutions
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-[#64748B]">
              Every industry has different workflows, regulations, customer
              requirements, data processes, and operational challenges. Our
              industry-specific automation solutions are designed around these
              unique business requirements rather than using a one-size-fits-all
              approach.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
              From manufacturing and logistics automation to healthcare,
              pharma, retail, education, and hospitality solutions, we help
              businesses automate repetitive processes, connect their
              systems, improve data visibility, and create more efficient
              digital workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-light pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Industries"
            title="Industries We Transform"
            subtitle="Technology solutions designed around the operational needs of different industries."
          />

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className="group rounded-3xl border border-[#E2E8F0] bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start gap-5">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10">
                    <ind.icon className="size-7 text-[#2563EB]" />
                  </div>

                  <div>
                    <h2 className="font-heading text-xl font-bold text-[#0B1120]">
                      {ind.title}
                    </h2>

                    <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                      {ind.description}
                    </p>

                    <Link
                      href="/contact"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] opacity-0 transition-all group-hover:opacity-100"
                    >
                      Discuss your industry project
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions / Internal Links */}
      <section className="section-dark py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Solutions"
            title="Technology Solutions for Your Industry"
            subtitle="Connect automation, software, CRM, ERP, and digital solutions to your business operations."
            dark
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.slice(0, 6).map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-[#2563EB]/30 hover:bg-white/10"
              >
                <s.icon className="size-6 text-[#06B6D4]" />

                <h3 className="mt-3 font-heading font-bold text-white">
                  {s.title}
                </h3>

                <p className="mt-2 text-sm text-white/50">
                  {s.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#06B6D4]">
                  Explore solution
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>

          {/* Direct Internal Service Links */}
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="font-heading text-2xl font-bold text-white">
              Explore Our Business Automation Services
            </h2>

            <p className="mt-3 max-w-3xl text-white/60">
              Combine industry-specific requirements with our software
              development, AI automation, CRM, ERP, and communication
              automation services.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/ai-automation"
                className="rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#06B6D4]"
              >
                AI Automation Services
              </Link>

              <Link
                href="/custom-software"
                className="rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#06B6D4]"
              >
                Custom Software Development
              </Link>

              <Link
                href="/crm-development"
                className="rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#06B6D4]"
              >
                CRM Development
              </Link>

              <Link
                href="/erp-solutions"
                className="rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#06B6D4]"
              >
                ERP Solutions
              </Link>

              <Link
                href="/whatsapp-automation"
                className="rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#06B6D4]"
              >
                WhatsApp Automation
              </Link>

              <Link
                href="/digital-marketing"
                className="rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#06B6D4]"
              >
                Digital Marketing Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
              FAQ
            </span>

            <h2 className="mt-3 font-heading text-3xl font-bold text-[#0B1120] md:text-4xl">
              Industry Automation FAQs
            </h2>

            <p className="mt-4 text-[#64748B]">
              Common questions about AI automation and software solutions for
              different industries.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
              <h3 className="font-heading text-lg font-bold text-[#0B1120]">
                What are industry-specific automation solutions?
              </h3>

              <p className="mt-3 leading-relaxed text-[#64748B]">
                Industry-specific automation solutions are software and AI
                workflows designed around the processes, requirements, data,
                and operational challenges of a particular industry.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
              <h3 className="font-heading text-lg font-bold text-[#0B1120]">
                Do you provide manufacturing automation solutions?
              </h3>

              <p className="mt-3 leading-relaxed text-[#64748B]">
                Yes. Manufacturing businesses can use automation and custom
                software for production workflows, inventory, reporting,
                approvals, operational data, and system integrations.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
              <h3 className="font-heading text-lg font-bold text-[#0B1120]">
                Can AI automation be used in healthcare and pharma?
              </h3>

              <p className="mt-3 leading-relaxed text-[#64748B]">
                AI automation can support appropriate business and operational
                workflows in healthcare and pharma, including document
                processing, communication workflows, data management, and
                internal process automation, subject to applicable
                requirements and controls.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
              <h3 className="font-heading text-lg font-bold text-[#0B1120]">
                Can you build automation solutions for logistics businesses?
              </h3>

              <p className="mt-3 leading-relaxed text-[#64748B]">
                Yes. Logistics businesses can use custom software and
                automation for operational workflows, notifications, data
                synchronization, reporting, document processing, and
                integrations with existing systems.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
              <h3 className="font-heading text-lg font-bold text-[#0B1120]">
                Can industry automation integrate with existing software?
              </h3>

              <p className="mt-3 leading-relaxed text-[#64748B]">
                Yes. Depending on the available APIs and systems, automation
                solutions can integrate with CRM, ERP, websites, databases,
                communication platforms, analytics tools, and other business
                applications.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
              <h3 className="font-heading text-lg font-bold text-[#0B1120]">
                Can you build custom software for a specific industry?
              </h3>

              <p className="mt-3 leading-relaxed text-[#64748B]">
                Yes. Custom software can be designed around an industry&apos;s
                specific workflows, users, integrations, reporting needs,
                business rules, and operational requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-light py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionCTA
            className="mt-4"
            title="Need automation for your industry?"
            description="Tell us about your industry, business processes, and challenges — we'll show you how AI automation and custom software can fit your operations."
          />
        </div>
      </section>
    </>
  )
}
