import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react'
import { JsonLd } from '@/components/JsonLd'
import { GlowButton } from '@/components/ui/primitives'
import { getAllBlogSlugs, getBlogPost } from '@/lib/blog-posts'
import { breadcrumbJsonLd, createPageMetadata, siteUrl } from '@/lib/seo'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return createPageMetadata({
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
      path: '/blog',
      noIndex: true,
    })
  }

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: ['N8N automation', 'workflow automation', 'business automation', post.category],
  })
}

function articleJsonLd(post: NonNullable<ReturnType<typeof getBlogPost>>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${siteUrl}${post.image}`,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Solvebytez',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo-icon.png`,
      },
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) notFound()

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd data={articleJsonLd(post)} />

      <section className="relative overflow-hidden bg-[#0B1120] pt-32 pb-16">
        <div className="absolute inset-0 grid-pattern-dark opacity-30" />
        <div className="absolute right-1/4 top-0 size-96 rounded-full bg-[var(--brand-cyan)]/10 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Back to Blog
          </Link>

          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--brand-cyan)]">
            {post.category}
          </span>

          <h1 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">{post.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-white/60">{post.excerpt}</p>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-white/50">
            <span className="inline-flex items-center gap-2">
              <User className="size-4 text-[var(--brand-cyan)]" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="size-4 text-[var(--brand-cyan)]" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="size-4 text-[var(--brand-cyan)]" />
              {post.readTime} min read
            </span>
          </div>
        </div>
      </section>

      <section className="section-light py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative mb-12 aspect-[21/9] overflow-hidden rounded-3xl border border-[#E2E8F0] bg-[#F1F5F9] shadow-sm">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>

          <article className="prose-blog space-y-6">
            {post.sections.map((section, index) => {
              if (section.type === 'heading') {
                return (
                  <h2
                    key={index}
                    className="font-heading text-2xl font-bold text-[#0B1120] md:text-3xl"
                  >
                    {section.text}
                  </h2>
                )
              }

              if (section.type === 'list') {
                return (
                  <ul key={index} className="space-y-3 pl-1">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-base leading-relaxed text-slate-600"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--brand-blue)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )
              }

              return (
                <p key={index} className="text-base leading-relaxed text-slate-600 md:text-lg">
                  {section.text}
                </p>
              )
            })}
          </article>

          <div className="mt-14 rounded-3xl border border-[#E2E8F0] bg-gradient-to-br from-[var(--brand-navy)]/5 to-[var(--brand-blue)]/5 p-8 md:p-10">
            <h2 className="font-heading text-2xl font-bold text-[#0B1120]">
              Start your N8N automation journey
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Our team builds production-ready N8N workflows — from lead automation to ERP integrations. Get a free consultation today.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <GlowButton href="/contact" className="inline-flex items-center gap-2">
                Book Free Consultation
                <ArrowRight className="size-4" />
              </GlowButton>
              <Link
                href="/n8n-automation"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#E2E8F0] bg-white px-6 py-3 text-sm font-semibold text-[#0B1120] transition-colors hover:border-[var(--brand-blue)]/40 hover:text-[var(--brand-blue)]"
              >
                View N8N Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
