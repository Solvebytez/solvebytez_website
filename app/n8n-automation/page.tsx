import { Network } from 'lucide-react'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'N8N Workflow Automation',
  description:
    'Custom N8N workflow automation — connect 400+ apps, build no-code integrations, self-host on your infrastructure, and automate business processes end to end.',
  path: '/n8n-automation',
  keywords: ['N8N automation', 'workflow automation', 'no-code integration', 'business process automation'],
})

export default function N8nAutomationPage() {
  return (
    <ServicePageLayout
      path="/n8n-automation"
      badge="N8N Automation"
      title="Connect Your Tools with N8N Workflows"
      subtitle="No-code automation. Full control. Unlimited integrations."
      description="We design, build, and maintain N8N workflows that automate your business processes — from lead capture and CRM sync to invoicing, notifications, and custom API integrations. Self-hosted or cloud, tailored to your stack."
      icon={Network}
      workflow={{
        title: 'N8N Automation Workflow',
        subtitle: 'Design, build, deploy, and monitor reliable no-code + API integrations.',
        steps: [
          { title: 'Use-case Discovery', description: 'Pick workflows with clear ROI (lead sync, alerts, invoicing, operations) and define triggers/outputs.' },
          { title: 'Architecture & Hosting', description: 'Choose self-hosted/cloud, credentials strategy, queues, backups, and environment setup.' },
          { title: 'Workflow Build', description: 'Implement nodes, conditions, transformations, approvals, and custom HTTP/API integrations.' },
          { title: 'Error Handling', description: 'Retries, dead-letter handling, notifications, and idempotency to avoid duplicates.' },
          { title: 'Testing & Security', description: 'Validate with real payloads, permissions, secrets, and access controls.' },
          { title: 'Monitoring & Iteration', description: 'Logs, alerts, performance tuning, and continuous improvements as systems evolve.' },
        ],
      }}
      advantages={[
        { title: 'Full Control', description: 'Self-hosted automations with your data staying under your control.' },
        { title: 'Cost Efficient', description: 'Avoid per-task pricing; scale workflows without growing subscription bills.' },
        { title: 'Connect Anything', description: 'HTTP nodes and custom APIs allow integrating any internal system.' },
        { title: 'Faster Operations', description: 'Automate handoffs between tools and reduce manual coordination.' },
      ]}
      disadvantages={[
        { title: 'Needs Maintenance', description: 'APIs change; workflows require monitoring and periodic updates.' },
        { title: 'Infrastructure Responsibility', description: 'Self-hosting needs backups, upgrades, and security patching.' },
        { title: 'Complex Flows Require Design', description: 'Large workflows need clear structure to stay maintainable.' },
        { title: 'Credential Hygiene', description: 'Secrets management and access controls must be handled carefully.' },
      ]}
      features={[
        'Custom N8N Workflow Design & Development',
        '400+ App Integrations (CRM, ERP, Email, Sheets)',
        'Self-Hosted N8N Setup & Deployment',
        'Webhook & API Automation',
        'Scheduled & Event-Triggered Workflows',
        'Data Sync Between Multiple Platforms',
        'Error Handling & Retry Logic',
        'Workflow Monitoring & Maintenance',
        'Migration from Zapier/Make to N8N',
      ]}
      benefits={[
        { title: 'No Vendor Lock-in', description: 'Open-source N8N runs on your servers — you own your automations.' },
        { title: 'Lower Costs', description: 'Replace expensive SaaS automation tools with a one-time setup.' },
        { title: 'Unlimited Workflows', description: 'No per-task pricing — run as many automations as you need.' },
        { title: 'Custom Integrations', description: 'Connect any API, database, or internal system via HTTP nodes.' },
        { title: 'Faster Operations', description: 'Eliminate manual data entry and repetitive tasks instantly.' },
        { title: 'Scalable Architecture', description: 'Queue-based execution handles high-volume business workflows.' },
      ]}
    />
  )
}
