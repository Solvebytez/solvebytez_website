import { PortfolioContent } from '@/components/portfolio/PortfolioContent'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd, createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Portfolio',
  description:
    'Explore Solvebytez portfolio of AI automation, CRM, ERP, and custom software projects across healthcare, pharma, logistics, and more.',
  path: '/portfolio',
  keywords: ['Solvebytez portfolio', 'AI automation projects', 'software development case studies'],
})

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Portfolio', path: '/portfolio' },
        ])}
      />
      <PortfolioContent />
    </>
  )
}
