import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PortfolioContent } from '@/components/portfolio/PortfolioContent'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd, createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title:
    'Software Development Portfolio | AI, CRM, ERP & Automation Projects',
  description:
    'Explore the Solvebytez software development portfolio featuring AI automation projects, custom software, CRM, ERP, mobile apps, and business automation solutions across multiple industries.',
  path: '/portfolio',
  keywords: [
    'software development portfolio',
    'Solvebytez portfolio',
    'software development case studies',
    'AI automation projects',
    'custom software projects',
    'CRM development projects',
    'ERP development projects',
    'AI software development projects',
    'business automation projects',
    'mobile app development projects',
    'software development company portfolio',
    'IT company portfolio India',
  ],
})

export default function PortfolioPage() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Portfolio', path: '/portfolio' },
        ])}
      />

      {/* Main Portfolio Content */}
      <PortfolioContent />

      {/* Internal Linking Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider">
              Our Development Services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Explore Our Software Development Services
            </h2>

            <p className="mt-4 text-lg text-muted-foreground">
              Explore the technologies and business solutions behind our
              software development projects, including AI automation, custom
              software, CRM, ERP, mobile apps, and workflow automation.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* AI Automation */}
            <Link
              href="/ai-automation"
              className="group rounded-2xl border p-6 transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                AI Automation Services
              </h3>

              <p className="mt-2 text-muted-foreground">
                Explore AI automation projects including AI chatbots,
                intelligent workflows, AI agents, and business process
                automation.
              </p>

              <span className="mt-4 inline-flex items-center gap-2 font-medium">
                Explore AI Automation
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>

            {/* Custom Software */}
            <Link
              href="/custom-software"
              className="group rounded-2xl border p-6 transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                Custom Software Development
              </h3>

              <p className="mt-2 text-muted-foreground">
                Discover custom software projects built around specific
                business requirements, workflows, integrations, and
                operational needs.
              </p>

              <span className="mt-4 inline-flex items-center gap-2 font-medium">
                Explore Custom Software
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>

            {/* CRM */}
            <Link
              href="/crm-development"
              className="group rounded-2xl border p-6 transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                CRM Development
              </h3>

              <p className="mt-2 text-muted-foreground">
                Explore custom CRM development projects for sales management,
                customer data, lead tracking, and business operations.
              </p>

              <span className="mt-4 inline-flex items-center gap-2 font-medium">
                Explore CRM Development
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>

            {/* ERP */}
            <Link
              href="/erp-solutions"
              className="group rounded-2xl border p-6 transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                ERP Solutions
              </h3>

              <p className="mt-2 text-muted-foreground">
                Explore ERP development solutions designed to streamline
                business operations, workflows, reporting, and data
                management.
              </p>

              <span className="mt-4 inline-flex items-center gap-2 font-medium">
                Explore ERP Solutions
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>

            {/* n8n */}
            <Link
              href="/n8n-automation"
              className="group rounded-2xl border p-6 transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                n8n Automation Services
              </h3>

              <p className="mt-2 text-muted-foreground">
                Explore workflow automation projects connecting APIs, CRM,
                ERP, databases, and business applications.
              </p>

              <span className="mt-4 inline-flex items-center gap-2 font-medium">
                Explore n8n Automation
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>

            {/* Mobile Apps */}
            <Link
              href="/mobile-apps"
              className="group rounded-2xl border p-6 transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                Mobile App Development
              </h3>

              <p className="mt-2 text-muted-foreground">
                Explore mobile application projects for Android, iOS,
                cross-platform applications, and immersive experiences.
              </p>

              <span className="mt-4 inline-flex items-center gap-2 font-medium">
                Explore Mobile Apps
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider">
              Portfolio FAQ
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Frequently Asked Questions About Our Portfolio
            </h2>

            <p className="mt-4 text-lg text-muted-foreground">
              Learn more about our software development projects,
              technologies, and business solutions.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {/* FAQ 1 */}
            <div>
              <h3 className="text-xl font-semibold">
                What types of software development projects does Solvebytez
                work on?
              </h3>

              <p className="mt-2 text-muted-foreground">
                Our software development portfolio includes AI automation,
                custom software, CRM, ERP, mobile applications, workflow
                automation, and other business technology solutions.
              </p>
            </div>

            {/* FAQ 2 */}
            <div>
              <h3 className="text-xl font-semibold">
                Does Solvebytez provide custom software development?
              </h3>

              <p className="mt-2 text-muted-foreground">
                Yes. We develop custom software solutions based on business
                requirements, workflows, integrations, user roles, and
                operational needs.
              </p>
            </div>

            {/* FAQ 3 */}
            <div>
              <h3 className="text-xl font-semibold">
                What AI automation projects can you develop?
              </h3>

              <p className="mt-2 text-muted-foreground">
                AI automation projects can include AI chatbots, AI agents,
                intelligent workflows, business process automation, customer
                support automation, and AI-powered integrations.
              </p>
            </div>

            {/* FAQ 4 */}
            <div>
              <h3 className="text-xl font-semibold">
                Do you develop custom CRM and ERP software?
              </h3>

              <p className="mt-2 text-muted-foreground">
                Yes. We develop custom CRM and ERP solutions that can manage
                customer data, sales processes, business operations,
                reporting, workflows, and integrations.
              </p>
            </div>

            {/* FAQ 5 */}
            <div>
              <h3 className="text-xl font-semibold">
                Can you build a software solution similar to one shown in your
                portfolio?
              </h3>

              <p className="mt-2 text-muted-foreground">
                Yes. Portfolio projects can demonstrate our technical
                capabilities and experience. Each new software solution is
                designed according to the client's specific requirements and
                objectives.
              </p>
            </div>

            {/* FAQ 6 */}
            <div>
              <h3 className="text-xl font-semibold">
                Which industries do you serve?
              </h3>

              <p className="mt-2 text-muted-foreground">
                Our software solutions can support industries including
                healthcare, pharma, manufacturing, logistics, education,
                hospitality, retail, construction, finance, and real estate.
              </p>
            </div>

            {/* FAQ 7 */}
            <div>
              <h3 className="text-xl font-semibold">
                How can I discuss a software development project with
                Solvebytez?
              </h3>

              <p className="mt-2 text-muted-foreground">
                You can contact our team to discuss your requirements, project
                goals, preferred technology, integrations, and development
                scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Have a Software Project in Mind?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Let's discuss your business requirements and build a custom
            software solution designed around your goals.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold"
          >
            Discuss Your Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
