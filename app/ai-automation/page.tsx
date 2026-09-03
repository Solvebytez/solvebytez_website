import { Bot } from 'lucide-react'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'AI Automation Services | Business Process Automation',
  description:
    'AI automation services for businesses to automate workflows, chatbots, voice agents and repetitive processes while improving efficiency and reducing manual work.',
  path: '/ai-automation',
  keywords: [
    'AI automation services',
    'AI automation',
    'AI business automation',
    'business process automation',
    'AI workflow automation',
    'workflow automation services',
    'AI chatbot development',
    'AI voice agents',
    'intelligent automation',
    'AI automation solutions',
    'enterprise AI automation',
  ],
})

export default function AIAutomationPage() {
  return (
    <ServicePageLayout
      path="/ai-automation"
      badge="AI Automation"
      title="AI Automation Services for Modern Businesses"
      subtitle="Let AI handle repetitive work while your team focuses on growth."
      description="We provide AI automation services that help businesses automate repetitive processes, intelligent workflows, customer conversations, document processing, and business operations. Our AI automation solutions can connect with your existing CRM, ERP, communication platforms, and business tools to create efficient, scalable workflows."
      icon={Bot}
      workflow={{
        title: 'AI Automation Workflow',
        subtitle:
          'From business process discovery to production deployment, we build measurable and reliable automation systems.',
        steps: [
          {
            title: 'Discovery & Process Mapping',
            description:
              'We analyze your existing business processes, identify repetitive tasks and bottlenecks, and prioritize automation opportunities based on business impact.',
          },
          {
            title: 'AI Automation Strategy',
            description:
              'We define the automation architecture, AI capabilities, integrations, security requirements, business rules, and success metrics.',
          },
          {
            title: 'Prototype & Validation',
            description:
              'We build a controlled AI automation prototype to validate accuracy, workflow behavior, user experience, and business requirements before full implementation.',
          },
          {
            title: 'Build & Integrate',
            description:
              'We develop and integrate AI workflows with CRM, ERP, APIs, databases, communication tools, and other business systems.',
          },
          {
            title: 'Testing & Guardrails',
            description:
              'We test workflows, permissions, edge cases, fallback scenarios, monitoring, and human approval points to ensure reliable operation.',
          },
          {
            title: 'Go-Live & Optimization',
            description:
              'We deploy the automation gradually, monitor performance, measure business results, and continuously optimize the workflows.',
          },
        ],
      }}
      advantages={[
        {
          title: 'Reduce Manual Work',
          description:
            'Automate repetitive tasks so your team can spend more time on revenue, customers, and strategic work.',
        },
        {
          title: '24/7 AI Operations',
          description:
            'AI-powered agents and automated workflows can operate continuously without manual intervention.',
        },
        {
          title: 'Improve Accuracy',
          description:
            'Standardized automated workflows can reduce repetitive manual errors and improve process consistency.',
        },
        {
          title: 'Scale Operations',
          description:
            'Handle increasing business volume without requiring proportional growth in manual operational effort.',
        },
      ]}
      disadvantages={[
        {
          title: 'Requires Quality Data',
          description:
            'AI automation performs best when business data is accurate, structured, and accessible.',
        },
        {
          title: 'Business Process Changes',
          description:
            'Teams may need updated processes, SOPs, and training when automated workflows are introduced.',
        },
        {
          title: 'Ongoing Maintenance',
          description:
            'APIs, software platforms, business rules, and AI models can change and may require periodic updates.',
        },
        {
          title: 'Human Review May Be Needed',
          description:
            'Important or unusual decisions may require human approval and appropriate automation guardrails.',
        },
      ]}
      features={[
        'AI Chatbot & Conversational Agents',
        'Intelligent Workflow Automation',
        'AI Voice Agents & Receptionists',
        'Document Processing & OCR',
        'Predictive Analytics & Forecasting',
        'Natural Language Processing',
        'Process Mining & Optimization',
        'Multi-channel AI Integration',
        'Custom ML Model Development',
      ]}
      benefits={[
        {
          title: 'Save Operational Time',
          description:
            'Automate repetitive business tasks and allow employees to focus on higher-value activities.',
        },
        {
          title: '24/7 Business Automation',
          description:
            'AI agents and automated workflows can support customers and internal processes around the clock.',
        },
        {
          title: 'Scalable Automation',
          description:
            'Design workflows that can handle growing transaction and operational volumes efficiently.',
        },
        {
          title: 'Data-Driven Decisions',
          description:
            'Use AI and automation to process business information and provide actionable insights.',
        },
        {
          title: 'CRM & ERP Integration',
          description:
            'Connect AI workflows with your existing CRM, ERP, APIs, databases, and business applications.',
        },
        {
          title: 'Faster Business ROI',
          description:
            'Prioritize high-impact automation opportunities and measure the results of implemented workflows.',
        },
      ]}
    />
  )
}
