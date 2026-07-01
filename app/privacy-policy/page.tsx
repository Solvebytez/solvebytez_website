import { LegalPageLayout } from '@/components/LegalPageLayout'
import { legalLastUpdated, privacyPolicySections } from '@/lib/legal-content'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Privacy Policy',
  description:
    'Learn how Solvebytez collects, uses, and protects your personal and business data across our AI automation and IT services.',
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      badge="Legal"
      title="Privacy Policy"
      description="How we collect, use, store, and protect your information when you use our website and IT services."
      lastUpdated={legalLastUpdated}
      sections={privacyPolicySections}
      activeSlug="privacy-policy"
    />
  )
}
