import Link from 'next/link'
import { ArrowRight, Network } from 'lucide-react'

import { ServicePageLayout } from '@/components/ServicePageLayout'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'n8n Automation Services | Workflow Automation & Integrations',
  description:
    'n8n automation services for business workflow automation, API integrations, CRM and ERP sync, AI workflows, self-hosted n8n, and custom business process automation.',
  path: '/n8n-automation',
  keywords: [
    'n8n automation services',
    'n8n automation',
    'n8n automation agency',
    'n8n automation company',
    'n8n workflow automation',
    'n8n development',
    'n8n integration',
    'n8n AI automation',
    'n8n workflow development',
    'self hosted n8n automation',
    'business process automation',
    'workflow automation services',
    'n8n API integration',
    'n8n automation company India',
  ],
})

export default function N8nAutomationPage() {
  return (
    <ServicePageLayout
      path="/n8n-automation"
      badge="n8n Automation Services"
      title="n8n Automation Services for Business Workflows"
      subtitle="Connect your tools. Automate workflows. Keep full control."
      description="We provide n8n automation services to design, build, deploy, and maintain reliable business workflows. From lead capture and CRM synchronization to invoicing, notifications, AI workflows, and custom API integrations, we connect your systems and reduce repetitive manual work."
      icon={Network}
      workflow={{
        title: 'n8n Workflow Automation Process',
        subtitle:
          'From workflow discovery to deployment and monitoring, we build maintainable automations around your business systems.',
        steps: [
          {
            title: 'Use-Case Discovery',
            description:
              'Identify repetitive business processes, define triggers and outcomes, map the systems involved, and prioritize workflows based on business impact.',
          },
          {
            title: 'Architecture & Hosting',
            description:
              'Choose a suitable cloud or self-hosted n8n setup and plan credentials, environments, backups, queues, security, and infrastructure requirements.',
          },
          {
            title: 'Workflow Design & Development',
            description:
              'Build n8n workflows using nodes, conditions, transformations, approvals, webhooks, databases, and custom API integrations.',
          },
          {
            title: 'API & System Integration',
            description:
              'Connect CRM, ERP, email, spreadsheets, databases, communication platforms, AI tools, and other business applications through APIs and integrations.',
          },
          {
            title: 'Testing & Security',
            description:
              'Test workflows with real-world data and validate permissions, credentials, error scenarios, data handling, and access controls.',
          },
          {
            title: 'Deployment & Monitoring',
            description:
              'Deploy workflows, configure monitoring and alerts, review execution logs, optimize performance, and maintain workflows as your systems evolve.',
          },
        ],
      }}
      advantages={[
        {
          title: 'Full Control',
          description:
            'Self-hosted n8n deployments can keep your automation infrastructure and data under your organization’s control.',
        },
        {
          title: 'Flexible Workflow Automation',
          description:
            'Build workflows around your exact business processes instead of adapting your processes to rigid automation templates.',
        },
        {
          title: 'Connect Multiple Systems',
          description:
            'Connect CRM, ERP, databases, APIs, email platforms, spreadsheets, AI tools, and internal applications through n8n workflows.',
        },
        {
          title: 'Custom API Integrations',
          description:
            'Use HTTP requests, webhooks, and custom API logic to connect systems that may not have a ready-made integration.',
        },
      ]}
      disadvantages={[
        {
          title: 'Needs Maintenance',
          description:
            'APIs, credentials, application versions, and business processes can change, so workflows need periodic monitoring and updates.',
        },
        {
          title: 'Infrastructure Responsibility',
          description:
            'Self-hosted n8n requires appropriate infrastructure management, backups, updates, access controls, and security practices.',
        },
        {
          title: 'Complex Workflows Need Planning',
          description:
            'Large automation workflows require clear architecture, documentation, testing, and monitoring to remain maintainable.',
        },
        {
          title: 'Credential Management',
          description:
            'API keys, tokens, and other credentials should be managed securely with appropriate permissions and access controls.',
        },
      ]}
      features={[
        'Custom n8n Workflow Design & Development',
        'n8n Business Process Automation',
        'CRM & ERP Workflow Automation',
        'API & Webhook Integrations',
        '400+ App Integrations',
        'Self-Hosted n8n Setup & Deployment',
        'Cloud n8n Workflow Deployment',
        'Scheduled & Event-Triggered Workflows',
        'Data Synchronization Between Platforms',
        'AI-Powered n8n Workflows',
        'AI Agent & LLM Integrations',
        'Email & Notification Automation',
        'Lead Capture & Lead Management Automation',
        'Database & Spreadsheet Automation',
        'Error Handling & Retry Logic',
        'Workflow Monitoring & Maintenance',
        'Migration from Zapier or Make to n8n',
        'Custom HTTP/API Integrations',
        'Queue-Based Workflow Architecture',
        'Workflow Optimization & Support',
      ]}
      benefits={[
        {
          title: 'Reduce Repetitive Work',
          description:
            'Automate repetitive data entry, notifications, synchronization, approvals, and routine business processes.',
        },
        {
          title: 'Connect Your Business Tools',
          description:
            'Create automated workflows between CRM, ERP, databases, email, spreadsheets, APIs, AI tools, and other business applications.',
        },
        {
          title: 'Custom Automation Logic',
          description:
            'Build conditions, branching, transformations, approvals, retries, and custom API logic around your actual business requirements.',
        },
        {
          title: 'AI Workflow Automation',
          description:
            'Connect AI models and intelligent processing with n8n workflows to automate tasks such as classification, content processing, and business decision support.',
        },
        {
          title: 'Scalable Workflow Architecture',
          description:
            'Design workflows with appropriate execution strategies, queues, monitoring, and error handling for growing automation requirements.',
        },
        {
          title: 'Migration From Other Automation Platforms',
          description:
            'Move suitable workflows from platforms such as Zapier or Make to n8n while redesigning workflows where custom flexibility is required.',
        },
      ]}
    >
      {/* Internal Linking Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Explore Our Solutions
            </p>

            <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Build a Connected Business Automation System
            </h2>

            <p className="mt-4 text-muted-foreground">
              n8n workflow automation can connect your business software,
              customer systems, AI tools, and marketing workflows. Explore our
              related services to create a complete digital automation
              ecosystem.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/ai-automation"
              className="group rounded-2xl border p-6 transition-colors hover:border-primary"
            >
              <h3 className="font-heading text-lg font-semibold">
                AI Automation Services
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Connect AI-powered workflows with your business processes and
                automate repetitive operations.
              </p>

              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                Explore AI Automation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/crm-development"
              className="group rounded-2xl border p-6 transition-colors hover:border-primary"
            >
              <h3 className="font-heading text-lg font-semibold">
                CRM Development
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Connect your CRM with n8n workflows for lead management,
                notifications, customer data synchronization, and sales
                automation.
              </p>

              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                Explore CRM Development
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/erp-solutions"
              className="group rounded-2xl border p-6 transition-colors hover:border-primary"
            >
              <h3 className="font-heading text-lg font-semibold">
                ERP Solutions
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Automate data synchronization and business workflows between
                your ERP and other business applications.
              </p>

              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                Explore ERP Solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/whatsapp-automation"
              className="group rounded-2xl border p-6 transition-colors hover:border-primary"
            >
              <h3 className="font-heading text-lg font-semibold">
                WhatsApp Automation
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Automate WhatsApp notifications, customer communication, lead
                follow-ups, and business workflows.
              </p>

              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                Explore WhatsApp Automation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Frequently Asked Questions
            </p>

            <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
              n8n Automation Services FAQs
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Learn more about n8n workflow automation, integrations,
              self-hosting, AI automation, and business process automation.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border p-6">
              <h3 className="font-heading text-lg font-semibold">
                What are n8n automation services?
              </h3>

              <p className="mt-3 text-muted-foreground">
                n8n automation services involve designing, developing,
                deploying, and maintaining automated workflows using n8n. These
                workflows can connect business applications, APIs, databases,
                communication tools, CRM systems, ERP systems, and AI
                platforms.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="font-heading text-lg font-semibold">
                What is n8n workflow automation?
              </h3>

              <p className="mt-3 text-muted-foreground">
                n8n workflow automation connects different applications and
                systems so that business processes can run automatically based
                on events, schedules, webhooks, or defined conditions. It can
                be used for data synchronization, notifications, lead
                processing, reporting, and many other workflows.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="font-heading text-lg font-semibold">
                Can you provide self-hosted n8n automation?
              </h3>

              <p className="mt-3 text-muted-foreground">
                Yes. We can help set up self-hosted n8n environments based on
                your infrastructure requirements, including deployment,
                workflow configuration, credentials, backups, monitoring, and
                ongoing maintenance.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="font-heading text-lg font-semibold">
                What applications can n8n integrate with?
              </h3>

              <p className="mt-3 text-muted-foreground">
                n8n can connect with many business applications and services
                through available integrations, webhooks, HTTP requests, APIs,
                databases, and custom logic. Common use cases include CRM, ERP,
                email, spreadsheets, databases, communication platforms, AI
                services, and internal business systems.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="font-heading text-lg font-semibold">
                Can n8n be used for AI automation?
              </h3>

              <p className="mt-3 text-muted-foreground">
                Yes. n8n workflows can connect AI and LLM services with
                business applications to automate tasks such as information
                processing, classification, content workflows, notifications,
                and other AI-assisted business processes.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="font-heading text-lg font-semibold">
                Can you migrate workflows from Zapier or Make to n8n?
              </h3>

              <p className="mt-3 text-muted-foreground">
                Yes. Existing automation workflows can be reviewed and,
                where technically suitable, rebuilt in n8n. During migration,
                workflows can also be redesigned to take advantage of custom
                APIs, webhooks, databases, and more flexible automation logic.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="font-heading text-lg font-semibold">
                How much does n8n workflow automation cost?
              </h3>

              <p className="mt-3 text-muted-foreground">
                The cost depends on workflow complexity, number of
                integrations, hosting requirements, custom API development,
                AI integrations, monitoring, and ongoing maintenance. A
                project-specific estimate can be prepared after reviewing your
                automation requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border p-8 text-center md:p-12">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Ready to Automate Your Business Workflows?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Tell us about the tools, applications, and repetitive processes
              you want to automate. We can help you plan an n8n workflow
              automation solution around your business requirements.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Discuss Your Automation Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
