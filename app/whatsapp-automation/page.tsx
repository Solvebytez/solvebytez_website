import { MessageCircle } from 'lucide-react'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'WhatsApp Automation',
  description:
    'Automate customer communication on WhatsApp. AI chatbots, broadcast campaigns, order tracking, and support automation.',
  path: '/whatsapp-automation',
  keywords: ['WhatsApp automation', 'WhatsApp chatbot', 'WhatsApp business API', 'customer support automation'],
})

export default function WhatsAppAutomationPage() {
  return (
    <ServicePageLayout
      path="/whatsapp-automation"
      badge="WhatsApp Automation"
      title="Automate Customer Conversations on WhatsApp"
      subtitle="2 billion users. One powerful automation platform."
      description="Transform WhatsApp into your most powerful business channel with AI-powered chatbots, automated broadcasts, order tracking, payment collection, and 24/7 customer support."
      icon={MessageCircle}
      workflow={{
        title: 'WhatsApp Automation Workflow',
        subtitle: 'From conversation design to API setup, automation, and reporting.',
        steps: [
          { title: 'Use-case & Conversation Design', description: 'Define intents, flows, FAQs, escalation rules, and success metrics (sales/support).' },
          { title: 'WhatsApp API Setup', description: 'Configure WhatsApp Business API, templates, phone numbers, and compliance.' },
          { title: 'Bot + Workflow Build', description: 'Build chatbot logic, broadcasts, lead capture, and automated follow-ups.' },
          { title: 'Integrations', description: 'Connect CRM, order systems, payments, ticketing, and analytics.' },
          { title: 'Testing & Quality', description: 'Template approvals, edge cases, multilingual support, and load testing.' },
          { title: 'Go-Live & Optimization', description: 'Monitor conversations, improve answers, and optimize conversion/support KPIs.' },
        ],
      }}
      advantages={[
        { title: 'Very High Engagement', description: 'WhatsApp messages get significantly higher opens and replies.' },
        { title: 'Faster Response Times', description: 'Instant automated replies and routing improve customer experience.' },
        { title: 'Automated Lead Capture', description: 'Collect, qualify, and follow up without manual work.' },
        { title: 'Lower Support Cost', description: 'Deflect repetitive queries and escalate only what needs humans.' },
      ]}
      disadvantages={[
        { title: 'Template/Policy Constraints', description: 'WhatsApp has messaging rules and template approvals that must be followed.' },
        { title: 'Needs Strong Escalation', description: 'Complex issues still require human handoff and good SOPs.' },
        { title: 'Integration Effort', description: 'Order/payment/CRM integrations can add implementation complexity.' },
        { title: 'Ongoing Tuning', description: 'Conversation quality improves over time with monitoring and iteration.' },
      ]}
      features={[
        'AI WhatsApp Chatbot',
        'Automated Broadcast Campaigns',
        'Order & Delivery Tracking',
        'Payment Collection via WhatsApp',
        'Customer Support Automation',
        'Lead Capture & Qualification',
        'Catalog & Product Showcase',
        'Multi-agent Dashboard',
        'WhatsApp Business API Integration',
      ]}
      benefits={[
        { title: 'Instant Response', description: 'Reply to customers in seconds, not hours — 24/7.' },
        { title: 'Higher Engagement', description: '98% open rates compared to 20% for email.' },
        { title: 'Automated Sales', description: 'Guide customers from inquiry to purchase automatically.' },
        { title: 'Reduced Support Costs', description: 'Handle 80% of queries without human intervention.' },
        { title: 'Global Reach', description: 'Connect with customers in 180+ countries.' },
        { title: 'Rich Analytics', description: 'Track conversations, conversions, and customer satisfaction.' },
      ]}
    />
  )
}
