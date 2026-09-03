import Link from 'next/link'
import { Building2, ArrowRight } from 'lucide-react'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'ERP Software Development Company | Custom ERP Solutions',
  description:
    'ERP software development company helping businesses build custom ERP solutions for finance, inventory, HR, procurement, production, operations, reporting, and business automation.',
  path: '/erp-solutions',
  keywords: [
    'ERP software development company',
    'ERP development company',
    'custom ERP development',
    'custom ERP software',
    'ERP software development',
    'ERP solutions company',
    'enterprise ERP development',
    'business ERP software',
    'ERP development services',
    'enterprise resource planning software',
    'custom business ERP',
    'ERP software company India',
  ],
})

export default function ERPSolutionsPage() {
  return (
    <ServicePageLayout
      path="/erp-solutions"
      badge="ERP Solutions"
      title="ERP Software Development Company for Growing Businesses"
      subtitle="Connect every department with one integrated business platform."
      description="We provide custom ERP software development services that help businesses connect finance, inventory, HR, procurement, production, sales, and operations in one integrated platform. Our ERP solutions are designed around your business processes, data requirements, reporting needs, user roles, and long-term growth."
      icon={Building2}
      workflow={{
        title: 'ERP Software Development Workflow',
        subtitle:
          'A structured ERP implementation process focused on business requirements, data accuracy, integration, user adoption, and reliable deployment.',
        steps: [
          {
            title: 'Process & Module Discovery',
            description:
              'We analyze workflows across departments and identify the ERP modules, users, processes, integrations, and business priorities required for your organization.',
          },
          {
            title: 'Data & Integration Planning',
            description:
              'We define master data, data migration requirements, system integrations, user roles, permissions, reporting needs, and audit requirements.',
          },
          {
            title: 'Configuration & Development',
            description:
              'We configure and develop ERP modules, workflows, approvals, dashboards, reports, validations, and role-based access around your business requirements.',
          },
          {
            title: 'Data Migration & Validation',
            description:
              'We migrate existing business data, validate records, reconcile important information, and perform checks to improve migration accuracy.',
          },
          {
            title: 'UAT & Training',
            description:
              'Users test real business scenarios during user acceptance testing while teams receive training, documentation, and updated process guidance.',
          },
          {
            title: 'Go-Live & Optimization',
            description:
              'We support deployment, monitor the ERP environment, resolve initial issues, and continuously improve workflows, reports, and integrations.',
          },
        ],
      }}
      advantages={[
        {
          title: 'Centralized Business Data',
          description:
            'Connect finance, inventory, HR, procurement, production, and operations through an integrated business system.',
        },
        {
          title: 'Real-Time Business Visibility',
          description:
            'Dashboards and reports provide better visibility into operational and financial information.',
        },
        {
          title: 'Better Process Control',
          description:
            'Approvals, permissions, validations, and audit trails help standardize important business processes.',
        },
        {
          title: 'Reduced Manual Work',
          description:
            'Integrated workflows can reduce duplicate data entry, manual reconciliation, and repetitive operational tasks.',
        },
      ]}
      disadvantages={[
        {
          title: 'Complex Implementation',
          description:
            'ERP systems can affect multiple departments, so detailed discovery, planning, testing, and change management are important.',
        },
        {
          title: 'Data Migration Requires Planning',
          description:
            'Legacy business data may require cleaning, deduplication, validation, and reconciliation before migration.',
        },
        {
          title: 'Employee Training Required',
          description:
            'Teams need appropriate training and support to understand new ERP workflows, interfaces, and responsibilities.',
        },
        {
          title: 'Ongoing Governance',
          description:
            'ERP systems require ongoing management of master data, permissions, integrations, workflows, and business processes.',
        },
      ]}
      features={[
        'Financial Management & Accounting',
        'Inventory & Supply Chain Management',
        'Human Resources & Payroll',
        'Procurement & Vendor Management',
        'Production Planning & MRP',
        'Business Intelligence Dashboards',
        'Multi-Location Management',
        'Compliance & Audit Trails',
        'AI-Assisted Demand Forecasting',
        'Custom ERP Workflow Automation',
      ]}
      benefits={[
        {
          title: 'Unified Business Data',
          description:
            'Create a centralized source of business information across departments and locations.',
        },
        {
          title: 'Operational Efficiency',
          description:
            'Connect business workflows and reduce repetitive manual processes and duplicate data entry.',
        },
        {
          title: 'Real-Time Reporting',
          description:
            'Use dashboards and reports to monitor financial, inventory, operational, and business performance.',
        },
        {
          title: 'Improved Process Control',
          description:
            'Use role-based access, approvals, validations, and audit trails to improve process management.',
        },
        {
          title: 'Scalable ERP Architecture',
          description:
            'Build ERP software that can evolve with additional users, locations, business units, modules, and integrations.',
        },
        {
          title: 'AI-Powered Business Insights',
          description:
            'Use available business data for forecasting, analytics, planning, and decision-support workflows.',
        },
      ]}
    >
      {/* SEO Content + Internal Links */}
      <section className="section-light py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
                Custom ERP Development
              </span>

              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0B1120] md:text-4xl">
                Custom ERP Software for Connected Business Operations
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-[#64748B]">
                Businesses often manage finance, inventory, HR, procurement,
                production, and operations across separate systems. Custom ERP
                software can bring these processes together into an integrated
                platform designed around your organization&apos;s workflows
                and requirements.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
                Our ERP software development services focus on connecting
                business data, automating workflows, improving reporting, and
                creating a scalable foundation for future growth. ERP
                integrations can also connect your existing CRM, websites,
                communication platforms, APIs, and other business applications.
              </p>
            </div>

            {/* Related Services */}
            <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-[#0B1120]">
                Explore Our Related Services
              </h2>

              <p className="mt-3 text-[#64748B]">
                Connect ERP with custom software, CRM, AI automation, and
                WhatsApp automation to create an integrated business
                technology ecosystem.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Link
                  href="/custom-software"
                  className="group rounded-2xl border border-[#E2E8F0] p-5 transition-all hover:border-[#2563EB]"
                >
                  <h3 className="font-semibold text-[#0B1120]">
                    Custom Software Development
                  </h3>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Build purpose-built business applications, SaaS platforms,
                    APIs, cloud solutions, and enterprise software.
                  </p>

                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB]">
                    Explore Custom Software
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>

                <Link
                  href="/crm-development"
                  className="group rounded-2xl border border-[#E2E8F0] p-5 transition-all hover:border-[#2563EB]"
                >
                  <h3 className="font-semibold text-[#0B1120]">
                    CRM Development
                  </h3>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Build custom CRM software for leads, sales pipelines,
                    customer relationships, follow-ups, and reporting.
                  </p>

                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB]">
                    Explore CRM Development
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>

                <Link
                  href="/ai-automation"
                  className="group rounded-2xl border border-[#E2E8F0] p-5 transition-all hover:border-[#2563EB]"
                >
                  <h3 className="font-semibold text-[#0B1120]">
                    AI Automation Services
                  </h3>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Automate repetitive business workflows, document
                    processing, customer interactions, and operational tasks.
                  </p>

                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB]">
                    Explore AI Automation
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
                    Connect WhatsApp communication with customer support,
                    notifications, lead management, and business workflows.
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
              ERP Software Development FAQs
            </h2>

            <p className="mt-4 text-white/60">
              Common questions businesses ask before implementing custom ERP
              software.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                What is custom ERP software development?
              </h3>

              <p className="mt-3 leading-relaxed text-white/60">
                Custom ERP software development is the process of building an
                enterprise resource planning system around a business&apos;s
                specific workflows, departments, users, data, integrations,
                reporting requirements, and operational processes.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                Why should a business choose a custom ERP solution?
              </h3>

              <p className="mt-3 leading-relaxed text-white/60">
                A custom ERP can be designed around the organization&apos;s
                actual processes and requirements. It can connect departments,
                integrate with existing systems, and provide workflows and
                reports that match the business.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                How much does ERP software development cost?
              </h3>

              <p className="mt-3 leading-relaxed text-white/60">
                ERP development cost depends on the number of modules, users,
                locations, integrations, workflows, reporting requirements,
                data migration, security requirements, and overall project
                scope. A detailed discovery process is recommended before
                preparing an estimate.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                Which departments can be included in an ERP system?
              </h3>

              <p className="mt-3 leading-relaxed text-white/60">
                Depending on business requirements, an ERP can include finance
                and accounting, inventory, procurement, HR, payroll,
                production, supply chain, sales, operations, reporting, and
                other business functions.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                Can ERP software integrate with CRM and other business tools?
              </h3>

              <p className="mt-3 leading-relaxed text-white/60">
                Yes. Custom ERP software can be designed to integrate with CRM
                systems, websites, APIs, payment platforms, communication
                tools, databases, analytics platforms, and other business
                applications.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                Do you provide ERP maintenance and support?
              </h3>

              <p className="mt-3 leading-relaxed text-white/60">
                Yes. ERP support can include bug fixes, security updates,
                performance optimization, integration maintenance, workflow
                changes, reporting updates, infrastructure support, and new
                feature development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
