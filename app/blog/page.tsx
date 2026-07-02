import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import BlogCard from '@/components/Cards/BlogCard'
import { JsonLd } from '@/components/JsonLd'
import { GlowButton, SectionHeader } from '@/components/ui/primitives'
import { blogPosts } from '@/lib/blog-posts'
import { breadcrumbJsonLd, createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Blog',
  description:
    'Insights on AI automation, N8N workflows, custom software, and digital transformation from the Solvebytez team.',
  path: '/blog',
  keywords: ['Solvebytez blog', 'N8N automation', 'AI automation insights', 'workflow automation tips'],
})

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ])}
      />

      <section className="relative overflow-hidden bg-[#0B1120] pt-32 pb-20">
        <div className="absolute inset-0 grid-pattern-dark opacity-30" />
        <div className="absolute left-1/4 top-0 size-96 rounded-full bg-[var(--brand-blue)]/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--brand-cyan)]">
              Blog
            </span>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Insights on <span className="gradient-text">Automation & Growth</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Practical guides, trends, and strategies to help your business work smarter with AI, N8N, and custom software.
            </p>
          </div>
        </div>
      </section>

      <section className="section-light py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Latest Articles"
            title="From Our Team"
            subtitle="Expert perspectives on automation, integrations, and building scalable systems."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                image={post.image}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                date={post.date}
                readTime={post.readTime}
                href={`/blog/${post.slug}`}
              />
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-[#E2E8F0] bg-white p-8 text-center shadow-sm md:p-12">
            <h2 className="font-heading text-2xl font-bold text-[#0B1120] md:text-3xl">
              Want N8N workflows built for your business?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Talk to our automation specialists and get a free roadmap for your highest-impact workflows.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <GlowButton href="/contact" className="inline-flex items-center gap-2">
                Book Free Consultation
                <ArrowRight className="size-4" />
              </GlowButton>
              <Link
                href="/n8n-automation"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-6 py-3 text-sm font-semibold text-[#0B1120] transition-colors hover:border-[var(--brand-blue)]/40 hover:text-[var(--brand-blue)]"
              >
                Explore N8N Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
