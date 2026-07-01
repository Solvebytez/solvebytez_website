import { Users } from 'lucide-react'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'CRM Development Services',
  description:
    'Custom CRM systems designed for your sales process. Lead management, pipeline analytics, and customer intelligence.',
  path: '/crm-development',
  keywords: ['CRM development', 'custom CRM', 'sales pipeline software', 'lead management system'],
})

export default function CRMDevelopmentPage() {
  return (
    <ServicePageLayout
      path="/crm-development"
      badge="CRM Development"
      title="CRM That Works the Way You Sell"
      subtitle="Stop forcing your team into generic CRMs."
      description="We build custom Customer Relationship Management systems tailored to your sales process — with intelligent lead scoring, automated follow-ups, and 360° customer views."
      icon={Users}
      workflow={{
        title: 'CRM Implementation Workflow',
        subtitle: 'Design the pipeline, automate the follow-ups, and give sales full visibility.',
        steps: [
          { title: 'Sales Process Discovery', description: 'We map your lead sources, stages, roles, SLAs, and reporting requirements.' },
          { title: 'CRM Data Model', description: 'Define leads, accounts, deals, activities, permissions, and custom fields.' },
          { title: 'UI & Pipeline Setup', description: 'Build pipeline views, forms, dashboards, and role-based access.' },
          { title: 'Automation & Scoring', description: 'Lead scoring, assignment rules, reminders, sequences, and notifications.' },
          { title: 'Integrations', description: 'Connect email, WhatsApp, website forms, ads, telephony, and other tools.' },
          { title: 'Training & Rollout', description: 'User onboarding, reporting handover, and continuous optimization.' },
        ],
      }}
      advantages={[
        { title: 'Higher Conversions', description: 'Better lead capture, faster follow-ups, and structured sales stages.' },
        { title: 'Sales Visibility', description: 'Pipeline dashboards and forecasting for better decisions.' },
        { title: 'Less Manual Work', description: 'Automation reduces data entry and missed tasks.' },
        { title: 'Customer 360° View', description: 'All interactions and history in one place for better relationships.' },
      ]}
      disadvantages={[
        { title: 'Adoption Takes Effort', description: 'Teams need training and consistent usage to see ROI.' },
        { title: 'Data Cleanup Required', description: 'Old spreadsheets/CRMs often need deduping and standardization.' },
        { title: 'Process Changes', description: 'Some sales habits must change to follow standardized stages.' },
        { title: 'Integration Complexity', description: 'Multiple tools can make integrations and permissions more complex.' },
      ]}
      features={[
        'Custom Pipeline Management',
        'AI Lead Scoring & Qualification',
        'Automated Follow-up Sequences',
        '360° Customer Profiles',
        'Sales Analytics & Forecasting',
        'Email & Calendar Integration',
        'Mobile CRM Access',
        'Role-Based Access Control',
        'Third-Party API Integrations',
      ]}
      benefits={[
        { title: 'Higher Conversion', description: 'Never miss a lead with automated capture and nurturing.' },
        { title: 'Sales Visibility', description: 'Real-time pipeline dashboards for data-driven decisions.' },
        { title: 'Team Productivity', description: 'Eliminate manual data entry with intelligent automation.' },
        { title: 'Customer Insights', description: 'AI-powered analytics reveal buying patterns and opportunities.' },
        { title: 'Seamless Adoption', description: 'Intuitive UI designed for your team\'s actual workflow.' },
        { title: 'Scalable Growth', description: 'From 5 users to 5,000 — grows without performance loss.' },
      ]}
    />
  )
}
