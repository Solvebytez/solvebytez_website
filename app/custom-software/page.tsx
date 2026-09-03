import Link from 'next/link'
import { Code2, ArrowRight } from 'lucide-react'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Custom Software Development Company | Bespoke Business Software',
  description:
    'Custom software development company helping businesses build scalable web applications, SaaS platforms, enterprise software, cloud solutions, and custom business applications.',
  path: '/custom-software',
  keywords: [
    'custom software development company',
    'custom software development',
    'custom software development company India',
    'bespoke software development',
    'business software development',
    'enterprise software development',
    'custom business software',
    'custom application development',
    'software development company India',
    'enterprise software solutions',
    'SaaS application development',
  ],
})

export default function CustomSoftwarePage() {
  return (
    <ServicePageLayout
      path="/custom-software"
      badge="Custom Software"
      title="Custom Software Development Company for Growing Businesses"
      subtitle="Build software around your business — not your business around software."
      description="We are a custom software development company helping businesses build secure, scalable, and purpose-built software solutions. From custom web applications and SaaS platforms to enterprise systems, cloud solutions, APIs, and business automation, we develop software around your unique workflows and requirements."
      icon={Code2}
      workflow={{
        title: 'Custom Software Development Workflow',
        subtitle:
          'A structured software development process designed for predictable delivery, scalability, security, and long-term business growth.',
        steps: [
          {
            title: 'Requirements & Scope',
            description:
              'We understand your business goals, users, workflows, data requirements, integrations, acceptance criteria, and success metrics.',
          },
          {
            title: 'Architecture & UX',
            description:
              'We design the application architecture, database structure, user experience, APIs, integrations, infrastructure, and technical roadmap.',
          },
          {
            title: 'Sprint Development',
            description:
              'Our development team builds the software through iterative sprints with regular demos, feedback, testing, and transparent progress.',
          },
          {
            title: 'QA & Security',
            description:
              'We perform functional testing, automated testing, code reviews, performance checks, security testing, and quality validation.',
          },
          {
            title: 'Deployment & CI/CD',
            description:
              'We prepare production environments, deployment pipelines, monitoring, backups, and CI/CD workflows for reliable releases.',
          },
          {
            title: 'Support & Evolution',
            description:
              'After launch, we provide maintenance, bug fixes, performance improvements, scaling, integrations, and new feature development.',
          },
        ],
      }}
      advantages={[
        {
          title: 'Built Around Your Workflow',
          description:
            'Custom software is designed around your actual business processes instead of forcing your team to adapt to generic software.',
        },
        {
          title: 'Full Ownership',
          description:
            'You can maintain ownership of your software codebase, business data, and intellectual property according to your project agreement.',
        },
        {
          title: 'Scalable Foundation',
          description:
            'The architecture can be designed to support increasing users, data, integrations, and business requirements.',
        },
        {
          title: 'Competitive Advantage',
          description:
            'Purpose-built software can help your business create unique workflows, features, and customer experiences.',
        },
      ]}
      disadvantages={[
        {
          title: 'Higher Initial Investment',
          description:
            'Custom software can require a higher initial investment compared with purchasing an off-the-shelf product.',
        },
        {
          title: 'Development Time',
          description:
            'A reliable custom application requires planning, development, testing, feedback, and deployment before launch.',
        },
        {
          title: 'Ongoing Maintenance',
          description:
            'Software requires security updates, infrastructure maintenance, monitoring, bug fixes, and future improvements.',
        },
        {
          title: 'Requires Clear Requirements',
          description:
            'Clearly defined business requirements help reduce scope changes and make development more predictable.',
        },
      ]}
      features={[
        'Custom Web Application Development',
        'SaaS Application Development',
        'Enterprise Software Development',
        'Custom Business Software',
        'Cloud Architecture & Migration',
        'API Development & Integration',
        'Legacy System Modernization',
        'Microservices Architecture',
        'Database Design & Optimization',
        'DevOps & CI/CD Pipelines',
        'Quality Assurance & Testing',
      ]}
      benefits={[
        {
          title: 'Tailored Business Software',
          description:
            'Every feature and workflow can be designed around your business requirements and operational processes.',
        },
        {
          title: 'Scalable Architecture',
          description:
            'Build a technical foundation that can evolve as your users, data, integrations, and business requirements grow.',
        },
        {
          title: 'Software Ownership',
          description:
            'Maintain control over your software, business data, and intellectual property based on your project agreement.',
        },
        {
          title: 'Agile Development',
          description:
            'Iterative development allows teams to review progress, provide feedback, and prioritize features throughout the project.',
        },
        {
          title: 'Security-Focused Development',
          description:
            'We follow security-focused development practices including access control, secure APIs, testing, and data protection.',
        },
        {
          title: 'Long-Term Support',
          description:
            'Continue improving your software after launch through maintenance, integrations, optimization, and new feature development.',
        },
      ]}
    >
      {/* Internal Links + SEO Content */}
      <section className="section-light py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
                Custom Software Development
              </span>

              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0B1120] md:text-4xl">
                Custom Software Solutions for Your Business
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-[#64748B]">
                Off-the-shelf software does not always fit the way a business
                operates. Our custom software development services help
                businesses build applications around their specific workflows,
                users, data, integrations, and growth plans.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
                From custom web applications and SaaS platforms to enterprise
                software, APIs, cloud infrastructure, and internal business
                systems, we create software designed for your operational
                requirements.
              </p>
            </div>

            {/* Related Services */}
            <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-[#0B1120]">
                Explore Our Related Services
              </h2>

              <p className="mt-3 text-[#64748B]">
                Combine custom software development with automation and
                business technology solutions to create a connected digital
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
                    Automate repetitive processes, workflows, customer
                    interactions, and business operations with AI.
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB]">
                    Explore AI Automation
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
                    Build custom CRM software for sales, customers, leads,
                    pipelines, and business relationships.
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB]">
                    Explore CRM Development
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
                    Develop integrated ERP solutions for business operations,
                    resources, processes, and reporting.
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB]">
                    Explore ERP Solutions
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>

                <Link
                  href="/mobile-apps"
                  className="group rounded-2xl border border-[#E2E8F0] p-5 transition-all hover:border-[#2563EB]"
                >
                  <h3 className="font-semibold text-[#0B1120]">
                    Mobile App Development
                  </h3>
                  <p className="mt-2 text-sm text-[#64748B]">
                    Develop custom mobile applications for Android, iOS, and
                    cross-platform business requirements.
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB]">
                    Explore Mobile Apps
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
              Custom Software Development FAQs
            </h2>

            <p className="mt-4 text-white/60">
              Common questions businesses ask before starting a custom
              software development project.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                What is custom software development?
              </h3>
              <p className="mt-3 leading-relaxed text-white/60">
                Custom software development is the process of designing and
                building software specifically around a company&apos;s
                business requirements, workflows, users, integrations, and
                operational needs.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                Why should a business choose custom software development?
              </h3>
              <p className="mt-3 leading-relaxed text-white/60">
                Custom software can provide a closer fit to your business
                processes, enable unique features, integrate with existing
                systems, and provide greater flexibility as your business
                grows.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                How much does custom software development cost?
              </h3>
              <p className="mt-3 leading-relaxed text-white/60">
                The cost depends on the project scope, number of users,
                features, integrations, technology requirements, security
                requirements, and development timeline. A proper discovery
                process is recommended before estimating the project cost.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                How long does it take to develop custom software?
              </h3>
              <p className="mt-3 leading-relaxed text-white/60">
                Development time depends on the complexity of the application,
                required features, integrations, testing requirements, and
                project scope. Smaller applications can take less time, while
                enterprise software may require a longer development cycle.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                Can custom software integrate with existing CRM and ERP
                systems?
              </h3>
              <p className="mt-3 leading-relaxed text-white/60">
                Yes. Custom applications can be designed to integrate with
                existing CRM, ERP, databases, APIs, payment systems,
                communication platforms, and other business applications.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                Do you provide custom software maintenance and support?
              </h3>
              <p className="mt-3 leading-relaxed text-white/60">
                Yes. Post-launch support can include bug fixes, security
                updates, performance optimization, infrastructure support,
                integrations, and new feature development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
