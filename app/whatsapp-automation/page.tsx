import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'WhatsApp Automation Services | AI Chatbot & Business Automation',
  description:
    'WhatsApp automation services for businesses with AI chatbots, WhatsApp Business API integration, automated marketing, lead generation, customer support, order tracking, and sales automation.',
  path: '/whatsapp-automation',
  keywords: [
    'WhatsApp automation services',
    'WhatsApp automation',
    'WhatsApp automation agency',
    'WhatsApp automation company',
    'WhatsApp Business automation',
    'WhatsApp chatbot',
    'WhatsApp AI chatbot',
    'WhatsApp Business API integration',
    'WhatsApp chatbot development',
    'WhatsApp marketing automation',
    'WhatsApp customer support automation',
    'WhatsApp lead automation',
    'WhatsApp API integration',
    'WhatsApp automation company India',
  ],
})

export default function WhatsAppAutomationPage() {
  return (
    <ServicePageLayout
      path="/whatsapp-automation"
      badge="WhatsApp Automation Services"
      title="WhatsApp Automation Services for Business"
      subtitle="Automate conversations. Capture leads. Grow your business."
      description="We provide WhatsApp automation services that help businesses automate customer conversations, lead generation, sales follow-ups, customer support, order updates, and marketing campaigns. Connect WhatsApp with your CRM, ERP, payment systems, and other business tools through reliable WhatsApp Business API integrations."
      icon={MessageCircle}
      workflow={{
        title: 'WhatsApp Automation Process',
        subtitle:
          'From conversation design and API setup to chatbot development, integrations, testing, and optimization.',
        steps: [
          {
            title: 'Use-Case & Conversation Design',
            description:
              'Define customer journeys, intents, FAQs, lead flows, escalation rules, and business goals for sales and support.',
          },
          {
            title: 'WhatsApp Business API Setup',
            description:
              'Configure WhatsApp Business API, business numbers, message templates, authentication, and required platform settings.',
          },
          {
            title: 'Chatbot & Automation Development',
            description:
              'Build WhatsApp chatbots, automated replies, lead capture, follow-ups, notifications, and sales workflows.',
          },
          {
            title: 'CRM, ERP & System Integration',
            description:
              'Connect WhatsApp with CRM, ERP, order management, payments, ticketing systems, databases, and analytics platforms.',
          },
          {
            title: 'Testing & Quality Assurance',
            description:
              'Test conversation flows, message templates, edge cases, integrations, multilingual support, and automation logic.',
          },
          {
            title: 'Deployment & Optimization',
            description:
              'Launch the automation, monitor conversations, measure KPIs, improve chatbot responses, and optimize business workflows.',
          },
        ],
      }}
      advantages={[
        {
          title: 'Faster Customer Communication',
          description:
            'Automate replies and customer interactions so users receive timely responses without waiting for manual support.',
        },
        {
          title: 'Automated Lead Generation',
          description:
            'Capture, qualify, organize, and follow up with leads automatically through WhatsApp conversations.',
        },
        {
          title: 'Better Customer Experience',
          description:
            'Provide consistent 24/7 support, notifications, order updates, and personalized customer interactions.',
        },
        {
          title: 'Connected Business Operations',
          description:
            'Connect WhatsApp with CRM, ERP, payment systems, order management, and other business applications.',
        },
      ]}
      disadvantages={[
        {
          title: 'Messaging Policy Requirements',
          description:
            'WhatsApp automation must follow applicable business messaging rules, templates, and platform requirements.',
        },
        {
          title: 'Human Escalation Is Important',
          description:
            'Complex customer issues may still require a smooth handoff from automation to human support agents.',
        },
        {
          title: 'Integration Complexity',
          description:
            'Connecting CRM, ERP, payment, order, and internal systems can require custom API development.',
        },
        {
          title: 'Continuous Optimization',
          description:
            'Chatbot responses and workflows should be monitored and improved based on real customer conversations.',
        },
      ]}
      features={[
        'AI WhatsApp Chatbot Development',
        'WhatsApp Business API Integration',
        'WhatsApp Business Automation',
        'Automated Broadcast Campaigns',
        'WhatsApp Marketing Automation',
        'Lead Capture & Qualification',
        'Automated Lead Follow-ups',
        'Customer Support Automation',
        'Order & Delivery Tracking',
        'Payment & Notification Automation',
        'CRM & ERP Integration',
        'WhatsApp API Integration',
        'Catalog & Product Showcase',
        'Multi-agent Customer Support',
        'AI-Powered Customer Conversations',
        'Appointment & Booking Automation',
        'Automated Customer Notifications',
        'Database & Business System Integration',
        'Conversation Analytics & Reporting',
        'WhatsApp Automation Maintenance & Support',
      ]}
      benefits={[
        {
          title: 'Instant Customer Responses',
          description:
            'Respond to common customer questions and requests automatically around the clock.',
        },
        {
          title: 'Automated Lead Management',
          description:
            'Capture leads from WhatsApp, qualify prospects, and trigger automated follow-up workflows.',
        },
        {
          title: 'Automated Sales Conversations',
          description:
            'Guide customers through product discovery, inquiries, follow-ups, and purchase-related conversations.',
        },
        {
          title: 'Reduced Support Workload',
          description:
            'Automate repetitive customer queries and route complex conversations to the right support agent.',
        },
        {
          title: 'Connected Business Operations',
          description:
            'Synchronize WhatsApp conversations with CRM, ERP, orders, payments, and other business systems.',
        },
        {
          title: 'Actionable Analytics',
          description:
            'Track conversations, leads, response performance, conversions, and customer engagement.',
        },
      ]}
    >
      {/* Internal Linking Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider">
              Connected Business Automation
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Connect WhatsApp With Your Business Systems
            </h2>

            <p className="mt-4 text-lg text-muted-foreground">
              WhatsApp automation becomes more powerful when connected with
              your CRM, ERP, AI automation, and workflow automation systems.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Link
              href="/ai-automation"
              className="group rounded-2xl border p-6 transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                AI Automation Services
              </h3>

              <p className="mt-2 text-muted-foreground">
                Build AI-powered chatbots, intelligent workflows, AI agents,
                and business process automation solutions.
              </p>

              <span className="mt-4 inline-flex items-center gap-2 font-medium">
                Explore AI Automation
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/crm-development"
              className="group rounded-2xl border p-6 transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                CRM Development
              </h3>

              <p className="mt-2 text-muted-foreground">
                Connect WhatsApp leads, conversations, customer data, and
                sales activities with a custom CRM solution.
              </p>

              <span className="mt-4 inline-flex items-center gap-2 font-medium">
                Explore CRM Development
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/erp-solutions"
              className="group rounded-2xl border p-6 transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                ERP Solutions
              </h3>

              <p className="mt-2 text-muted-foreground">
                Integrate WhatsApp notifications, customer workflows, orders,
                and business operations with your ERP system.
              </p>

              <span className="mt-4 inline-flex items-center gap-2 font-medium">
                Explore ERP Solutions
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/n8n-automation"
              className="group rounded-2xl border p-6 transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                n8n Automation Services
              </h3>

              <p className="mt-2 text-muted-foreground">
                Connect WhatsApp with CRM, ERP, APIs, databases, and other
                applications using automated n8n workflows.
              </p>

              <span className="mt-4 inline-flex items-center gap-2 font-medium">
                Explore n8n Automation
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
              WhatsApp Automation FAQ
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Frequently Asked Questions About WhatsApp Automation
            </h2>

            <p className="mt-4 text-lg text-muted-foreground">
              Learn how WhatsApp automation services can help automate
              customer communication, lead generation, sales, and support.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <div>
              <h3 className="text-xl font-semibold">
                What are WhatsApp automation services?
              </h3>

              <p className="mt-2 text-muted-foreground">
                WhatsApp automation services help businesses automate customer
                conversations, lead capture, follow-ups, notifications,
                customer support, sales workflows, and other business
                processes through WhatsApp.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                What is WhatsApp Business automation?
              </h3>

              <p className="mt-2 text-muted-foreground">
                WhatsApp Business automation uses automated workflows,
                chatbots, APIs, and integrations to manage customer
                communication, notifications, lead generation, and support
                processes with less manual work.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can you develop an AI WhatsApp chatbot?
              </h3>

              <p className="mt-2 text-muted-foreground">
                Yes. We can build AI WhatsApp chatbots that understand
                customer questions, provide automated responses, collect
                information, qualify leads, and hand over complex
                conversations to human agents.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can WhatsApp automation integrate with CRM and ERP systems?
              </h3>

              <p className="mt-2 text-muted-foreground">
                Yes. WhatsApp can be integrated with CRM, ERP, order
                management, payment, ticketing, databases, and other business
                systems to synchronize customer and operational data.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Do you provide WhatsApp Business API integration?
              </h3>

              <p className="mt-2 text-muted-foreground">
                Yes. We provide WhatsApp Business API integration for
                automated customer communication, notifications, chatbots,
                lead management, support workflows, and business
                integrations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can WhatsApp automation be used for lead generation?
              </h3>

              <p className="mt-2 text-muted-foreground">
                Yes. WhatsApp automation can capture leads, ask qualifying
                questions, send follow-ups, route prospects to sales teams,
                and synchronize lead information with a CRM.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                How much do WhatsApp automation services cost?
              </h3>

              <p className="mt-2 text-muted-foreground">
                The cost depends on the chatbot complexity, WhatsApp API
                setup, number of integrations, automation workflows, CRM or
                ERP connectivity, and required features. Contact us to discuss
                your requirements and get a project estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to Automate Your WhatsApp Communication?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Build AI chatbots, automate leads and customer support, connect
            your CRM or ERP, and turn WhatsApp into a powerful business
            automation channel.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold"
          >
            Discuss Your WhatsApp Automation Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </ServicePageLayout>
  )
}
