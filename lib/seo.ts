import type { Metadata } from 'next'
import { siteConfig } from '@/lib/data'

export const siteUrl = siteConfig.url
export const defaultOgImage = '/logo-icon.png'

export const sitemapRoutes: {
  path: string
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/portfolio', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/blog/why-n8n-automation-is-essential-for-modern-businesses', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/industries', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ai-automation', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/custom-software', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/crm-development', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/erp-solutions', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/whatsapp-automation', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/n8n-automation', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/mobile-apps', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/digital-marketing', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/blockchain', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms-of-service', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/cookie-policy', changeFrequency: 'yearly', priority: 0.3 },
]

type PageMetadataOptions = {
  title: string
  description: string
  path: string
  keywords?: string[]
  noIndex?: boolean
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = `${siteUrl}${path}`

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
      locale: 'en_IN',
      images: [
        {
          url: defaultOgImage,
          width: 512,
          height: 512,
          alt: `${siteConfig.name} — AI Business Automation & Custom Software`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [defaultOgImage],
    },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteUrl,
    logo: `${siteUrl}${defaultOgImage}`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phoneTel,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressLocality: 'Ghaziabad',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201009',
      addressCountry: 'IN',
    },
    sameAs: Object.values(siteConfig.social),
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    publisher: { '@type': 'Organization', name: siteConfig.name },
  }
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    image: `${siteUrl}${defaultOgImage}`,
    url: siteUrl,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressLocality: 'Ghaziabad',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201009',
      addressCountry: 'IN',
    },
    areaServed: 'IN',
    priceRange: '$$',
  }
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${siteUrl}${path}`,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteUrl,
    },
    areaServed: 'IN',
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  }
}
