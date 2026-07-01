import Link from 'next/link'
import { ArrowRight, FileText, Shield, Cookie } from 'lucide-react'
import { siteConfig } from '@/lib/data'
import { cn } from '@/lib/utils'

export interface LegalSection {
  id: string
  title: string
  paragraphs?: string[]
  list?: string[]
}

interface LegalPageLayoutProps {
  badge: string
  title: string
  description: string
  lastUpdated: string
  sections: LegalSection[]
  activeSlug: 'privacy-policy' | 'terms-of-service' | 'cookie-policy'
}

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy', icon: Shield, slug: 'privacy-policy' as const },
  { href: '/terms-of-service', label: 'Terms of Service', icon: FileText, slug: 'terms-of-service' as const },
  { href: '/cookie-policy', label: 'Cookie Policy', icon: Cookie, slug: 'cookie-policy' as const },
]

export function LegalPageLayout({
  badge,
  title,
  description,
  lastUpdated,
  sections,
  activeSlug,
}: LegalPageLayoutProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0B1120] pt-32 pb-20">
        <div className="absolute inset-0 grid-pattern-dark opacity-30" />
        <div className="absolute left-1/4 top-0 size-96 rounded-full bg-[#2563EB]/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
              {badge}
            </span>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">{title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60">{description}</p>
            <p className="mt-4 text-sm text-white/40">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      <section className="section-light relative py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_400px_at_15%_20%,rgba(37,99,235,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">Legal documents</p>
                <nav className="mt-4 space-y-1">
                  {legalLinks.map(({ href, label, icon: Icon, slug }) => (
                    <Link
                      key={href}
                      href={href}
                      className={cn(
                        'flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
                        activeSlug === slug
                          ? 'bg-[#2563EB]/10 text-[#2563EB]'
                          : 'text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0B1120]'
                      )}
                    >
                      <Icon className="size-4 shrink-0" />
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="mt-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">On this page</p>
                <ul className="mt-4 space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block text-sm text-[#64748B] transition-colors hover:text-[#2563EB]"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <article className="min-w-0 space-y-6">
              <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8">
                <p className="text-sm leading-relaxed text-[#64748B]">
                  This policy applies to {siteConfig.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), an IT
                  services and AI automation company operating at{' '}
                  <span className="font-medium text-[#0B1120]">{siteConfig.address}</span>. For questions, contact us
                  at{' '}
                  <a href={`mailto:${siteConfig.email}`} className="font-medium text-[#2563EB] hover:underline">
                    {siteConfig.email}
                  </a>{' '}
                  or{' '}
                  <a href={`tel:${siteConfig.phoneTel}`} className="font-medium text-[#2563EB] hover:underline">
                    {siteConfig.phoneDisplay}
                  </a>
                  .
                </p>
              </div>

              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8"
                >
                  <h2 className="font-heading text-xl font-bold text-[#0B1120] md:text-2xl">{section.title}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="mt-4 text-sm leading-relaxed text-[#64748B] md:text-base">
                      {paragraph}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mt-4 space-y-2">
                      {section.list.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#64748B] md:text-base">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <div className="rounded-3xl border border-[#2563EB]/15 bg-gradient-to-br from-[#2563EB]/5 via-white to-[#7C3AED]/5 p-6 sm:p-8">
                <h3 className="font-heading text-lg font-bold text-[#0B1120]">Questions about this document?</h3>
                <p className="mt-2 text-sm text-[#64748B]">
                  Our team is happy to clarify how we handle data, contracts, or cookies for your project.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-2xl gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-brand-md transition-transform hover:scale-[1.02]"
                >
                  Contact {siteConfig.name}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
