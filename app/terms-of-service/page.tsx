import { LegalPageLayout } from '@/components/LegalPageLayout'
import { legalLastUpdated, termsOfServiceSections } from '@/lib/legal-content'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Terms of Service',
  description:
    'Terms and conditions for using Solvebytez website and IT services including AI automation, software development, and consulting.',
  path: '/terms-of-service',
})

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout
      badge="Legal"
      title="Terms of Service"
      description="Terms governing your use of our website and engagement with Solvebytez IT and AI automation services."
      lastUpdated={legalLastUpdated}
      sections={termsOfServiceSections}
      activeSlug="terms-of-service"
    />
  )
}
