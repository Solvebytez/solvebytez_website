import Link from 'next/link'
import { Users, ArrowRight } from 'lucide-react'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'CRM Software Development Company | Custom CRM Solutions',
  description:
    'CRM software development company helping businesses build custom CRM solutions for lead management, sales pipelines, customer relationships, automation, analytics, and business growth.',
  path: '/crm-development',
  keywords: [
    'CRM software development company',
    'CRM development company',
    'custom CRM development',
    'custom CRM software',
    'CRM software development',
    'CRM application development',
    'CRM development services',
    'sales CRM software',
    'business CRM solutions',
    'custom sales CRM',
    'CRM software company India',
  ],
})

export default function CRMDevelopmentPage() {
  return (
    <ServicePageLayout
      path="/crm-development"
      badge="CRM Development"
      title="CRM Software Development Company for Growing Businesses"
      subtitle="Build a CRM around the way your sales team actually works."
      description="We provide CRM software development services to help businesses manage leads, sales pipelines, customer relationships, follow-ups, and business data in one connected system. Our custom CRM solutions can integrate with your website, WhatsApp, email, telephony, marketing platforms, ERP systems, and other business tools."
      icon={Users}
      workflow={{
        title: 'CRM Software Development Workflow',
        subtitle:
          'From sales process discovery to deployment, we build custom CRM solutions around your business requirements.',
        steps: [
          {
            title: 'Sales Process Discovery',
            description:
              'We analyze your lead sources, sales stages, team roles, follow-up process, SLAs, customer journey, and reporting requirements.',
          },
          {
            title: 'CRM Data Model',
            description:
              'We define leads, contacts, accounts, deals, activities, custom fields, permissions, pipelines, and business data relationships.',
          },
          {
            title: 'UI & Pipeline Design',
            description:
              'We design CRM dashboards, pipeline views, forms, customer profiles, reports, and role-based interfaces around your team workflow.',
          },
          {
            title: 'Automation & Lead Scoring',
            description:
              'We implement lead assignment, lead scoring, automated follow-ups, reminders, notifications, and sales workflow automation.',
          },
          {
            title: 'Integrations',
            description:
              'We connect your CRM with email, WhatsApp, website forms, advertising platforms, telephony, APIs, ERP systems, and other business tools.',
          },
          {
            title: 'Testing & Rollout',
            description:
              'We test CRM workflows, permissions, integrations, reports, and user experience before deployment, followed by team onboarding and optimization.',
          },
        ],
      }}
      advantages={[
        {
          title: 'Better Lead Management',
          description:
            'Capture, organize, assign, and track leads through a structured sales process.',
        },
        {
          title: 'Sales Pipeline Visibility',
          description:
            'Give sales managers a clear view of opportunities, stages, activities, and pipeline performance.',
        },
        {
          title: 'Less Manual Work',
          description:
            'Automate repetitive data entry, reminders, lead assignments, follow-ups, and notifications.',
        },
        {
          title: 'Customer 360° View',
          description:
            'Bring customer information, interactions, activities, and sales history into one connected CRM system.',
        },
      ]}
      disadvantages={[
        {
          title: 'User Adoption Takes Effort',
          description:
            'Teams need proper onboarding, training, and consistent usage to get the most value from a CRM.',
        },
        {
          title: 'Existing Data May Need Cleanup',
          description:
            'Data from spreadsheets or older CRM systems may require deduplication, validation, and standardization.',
        },
        {
          title: 'Sales Processes May Need Changes',
          description:
            'A custom CRM can require teams to follow standardized stages and processes for better data quality.',
        },
        {
          title: 'Multiple Integrations Add Complexity',
          description:
            'Connecting several business tools can require additional planning around APIs, permissions, data synchronization, and security.',
        },
      ]}
      features={[
        'Custom CRM Software Development',
        'Custom Sales Pipeline Management',
        'AI Lead Scoring & Qualification',
        'Automated Follow-up Sequences',
        '360° Customer Profiles',
        'Sales Analytics & Forecasting',
        'Email & Calendar Integration',
        'WhatsApp CRM Integration',
        'Mobile CRM Access',
        'Role-Based Access Control',
        'Third-Party API Integrations',
      ]}
      benefits={[
        {
          title: 'Centralized Lead Management',
          description:
            'Capture and manage leads from multiple sources in one centralized CRM system.',
        },
        {
          title: 'Sales Pipeline Visibility',
          description:
            'Use pipeline dashboards and reports to understand opportunities, sales stages, and business performance.',
        },
        {
          title: 'Automated Follow-ups',
          description:
            'Reduce missed follow-ups with automated reminders, assignments, notifications, and sales sequences.',
        },
        {
          title: 'Customer Insights',
          description:
            'Bring customer activities, interactions, sales history, and business information together for better decisions.',
        },
        {
          title: 'Connected Business Tools',
          description:
            'Integrate CRM workflows with WhatsApp, email, websites, telephony, marketing platforms, ERP systems, and APIs.',
        },
        {
          title: 'Scalable CRM Architecture',
          description:
            'Build a CRM solution that can evolve with your users, customers, sales processes, integrations, and business requirements.',
        },
      ]}
    >
      {/* SEO Content + Internal Links */}
      <section className="section-light py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
                Custom CRM Development
              </span>

              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0B1120] md:text-4xl">
                Custom CRM Software for Your Sales Process
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-[#64748B]">
                Generic CRM platforms do not always match the way every
                business manages leads, customers, sales pipelines, and
                follow-ups. Our custom CRM development services help businesses
                build CRM software around their actual sales process and
                operational requirements.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
                A custom CRM can bring lead management, customer information,
                sales activities, communication, reporting, automation, and
                integrations into one connected business system. We design CRM
                solutions that can integrate with your existing technology
                stack and evolve as your business grows.
              </p>
            </div>

            {/* Related Services */}
            <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-[#0B1120]">
                Explore Our Related Services
              </h2>

              <p className="mt-3 text-[#64748B]">
                Connect your CRM with automation, ERP, custom software, and
                mobile applications to create a more efficient business
                ecosystem.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Link
                  href="/ai-automation"
                  className="group rounded-2xl border border-[#E2E8F0] p-5 transition-all hover:border-[#2563EB]"
                >
                  <h3 className="font-semibold text-[#0B1120]">
                    AI Automation Services
                  </h3>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Automate lead qualification, customer communication,
                    repetitive processes, and business workflows with AI.
                  </p>

                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB]">
                    Explore AI Automation
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>

                <Link
                  href="/custom-software"
                  className="group rounded-2xl border border-[#E2E8F0] p-5 transition-all hover:border-[#2563EB]"
                >
                  <h3 className="font-semibold text-[#0B1120]">
                    Custom Software Development
                  </h3>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Build purpose-built business software, web applications,
                    SaaS platforms, APIs, and enterprise systems.
                  </p>

                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB]">
                    Explore Custom Software
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>

                <Link
                  href="/erp-solutions"
                  className="group rounded-2xl border border-[#E2E8F0] p-5 transition-all hover:border-[#2563EB]"
                >
                  <h3 className="font-semibold text-[#0B1120]">
                    ERP Solutions
                  </h3>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Connect business operations, resources, processes, data,
                    and reporting through custom ERP solutions.
                  </p>

                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB]">
                    Explore ERP Solutions
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>

                <Link
                  href="/whatsapp-automation"
                  className="group rounded-2xl border border-[#E2E8F0] p-5 transition-all hover:border-[#2563EB]"
                >
                  <h3 className="font-semibold text-[#0B1120]">
                    WhatsApp Automation
                  </h3>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Connect WhatsApp communication with lead management,
                    customer support, notifications, and business workflows.
                  </p>

                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB]">
                    Explore WhatsApp Automation
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-dark py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4]">
              FAQ
            </span>

            <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl">
              CRM Software Development FAQs
            </h2>

            <p className="mt-4 text-white/60">
              Common questions businesses ask before developing a custom CRM
              solution.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                What is custom CRM software development?
              </h3>

              <p className="mt-3 leading-relaxed text-white/60">
                Custom CRM software development is the process of designing and
                building a customer relationship management system around a
                company&apos;s specific sales processes, customer workflows,
                business data, integrations, and reporting requirements.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                Why should a business choose a custom CRM?
              </h3>

              <p className="mt-3 leading-relaxed text-white/60">
                A custom CRM can be designed around your actual sales workflow,
                lead management process, customer journey, reporting needs,
                user roles, and integrations instead of requiring your team to
                adapt completely to a generic CRM platform.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                How much does CRM software development cost?
              </h3>

              <p className="mt-3 leading-relaxed text-white/60">
                CRM development cost depends on the number of users, features,
                workflows, integrations, automation requirements, security
                needs, reporting, and overall project scope. A discovery phase
                helps define the requirements before preparing a project
                estimate.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                Can a custom CRM integrate with WhatsApp and email?
              </h3>

              <p className="mt-3 leading-relaxed text-white/60">
                Yes. A custom CRM can be integrated with supported WhatsApp
                business solutions, email systems, website forms, telephony,
                APIs, marketing platforms, and other business applications.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                Can CRM software include AI lead scoring?
              </h3>

              <p className="mt-3 leading-relaxed text-white/60">
                Yes. Depending on the available business data and requirements,
                a CRM can include AI-assisted lead qualification, scoring,
                recommendations, customer insights, and workflow automation.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                Do you provide CRM maintenance and support?
              </h3>

              <p className="mt-3 leading-relaxed text-white/60">
                Yes. CRM support can include bug fixes, security updates,
                integration maintenance, performance optimization, workflow
                improvements, reporting changes, and new feature development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
