import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemsSection } from '@/components/sections/ProblemsSection'
import { SolutionsSection } from '@/components/sections/SolutionsSection'
import { IndustriesSection } from '@/components/sections/IndustriesSection'
import { WorkflowSection } from '@/components/sections/WorkflowSection'
import { ProductShowcaseSection } from '@/components/sections/ProductShowcaseSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { WhyChooseSection } from '@/components/sections/WhyChooseSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { FAQSection, FinalCTASection } from '@/components/sections/CTASections'
import { JsonLd } from '@/components/JsonLd'
import { faqs, siteConfig } from '@/lib/data'
import { createPageMetadata, faqJsonLd } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: `${siteConfig.name} — AI Business Automation & Custom Software Development`,
  description: siteConfig.description,
  path: '/',
  keywords: [
    'AI automation company',
    'business automation India',
    'custom software development',
    'CRM ERP development',
    'WhatsApp automation',
    'Solvebytez',
  ],
})

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <HeroSection />
      <ProblemsSection />
      <SolutionsSection />
      <IndustriesSection />
      <WorkflowSection />
      <ProductShowcaseSection />
      <FeaturesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <PortfolioSection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
}
