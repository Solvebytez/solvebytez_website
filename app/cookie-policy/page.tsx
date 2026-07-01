import { LegalPageLayout } from '@/components/LegalPageLayout'
import { legalLastUpdated, cookiePolicySections } from '@/lib/legal-content'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Cookie Policy',
  description:
    'Understand how Solvebytez uses cookies and similar technologies on our website for functionality, analytics, and performance.',
  path: '/cookie-policy',
})

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      badge="Legal"
      title="Cookie Policy"
      description="Information about cookies and similar technologies used on the Solvebytez website."
      lastUpdated={legalLastUpdated}
      sections={cookiePolicySections}
      activeSlug="cookie-policy"
    />
  )
}
