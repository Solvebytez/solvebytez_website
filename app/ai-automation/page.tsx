import { Bot } from 'lucide-react'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'AI Automation Solutions',
  description:
    'End-to-end AI automation for businesses. Intelligent workflows, chatbots, voice agents, and process automation that eliminate manual work.',
  path: '/ai-automation',
  keywords: ['AI automation', 'business process automation', 'AI chatbot', 'workflow automation', 'voice agents'],
})

export default function AIAutomationPage() {
  return (
    <ServicePageLayout
      path="/ai-automation"
      badge="AI Automation"
      title="Intelligent Automation for Modern Business"
      subtitle="Let AI handle the repetitive. You focus on growth."
      description="We design and deploy AI-powered automation systems that transform how your business operates — from intelligent chatbots and voice agents to complex workflow orchestration across your entire tech stack."
      icon={Bot}
      workflow={{
        title: 'AI Automation Workflow',
        subtitle: 'From discovery to production — with measurable impact and safe rollouts.',
        steps: [
          { title: 'Discovery & Process Mapping', description: 'We map your current workflows, identify bottlenecks, and shortlist high-ROI automation candidates.' },
          { title: 'Automation Blueprint', description: 'Define data sources, integrations, security, success metrics, and the exact agent/workflow behavior.' },
          { title: 'Prototype & Validation', description: 'Build a quick pilot in a controlled environment to validate accuracy, UX, and business rules.' },
          { title: 'Build & Integrate', description: 'Implement automations, connect CRM/ERP/tools, add approvals, logging, and monitoring.' },
          { title: 'Testing & Guardrails', description: 'Test edge cases, permissions, fallbacks, and ensure safe operation with human-in-the-loop where needed.' },
          { title: 'Go-Live & Optimization', description: 'Roll out gradually, measure ROI, and continuously improve performance and coverage.' },
        ],
      }}
      advantages={[
        { title: 'Massive Time Savings', description: 'Automate repetitive tasks so teams can focus on revenue and strategy.' },
        { title: '24/7 Operations', description: 'Agents and workflows run continuously without fatigue.' },
        { title: 'Fewer Errors', description: 'Consistent execution reduces manual mistakes and rework.' },
        { title: 'Scales With Demand', description: 'Handle spikes in volume without hiring proportional headcount.' },
      ]}
      disadvantages={[
        { title: 'Requires Clean Inputs', description: 'Automation quality depends on data quality and well-defined business rules.' },
        { title: 'Change Management Needed', description: 'Teams may need training and updated SOPs to adopt new automated flows.' },
        { title: 'Ongoing Maintenance', description: 'APIs, tools, and processes change — workflows need monitoring and updates.' },
        { title: 'Edge Cases Exist', description: 'Rare scenarios can require human review or additional guardrails.' },
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
        { title: '70% Time Savings', description: 'Automate repetitive tasks and free your team for high-value work.' },
        { title: '24/7 Operations', description: 'AI agents work around the clock without breaks or errors.' },
        { title: 'Scalable Intelligence', description: 'Handle 10x volume without proportional headcount increase.' },
        { title: 'Data-Driven Decisions', description: 'Real-time insights powered by machine learning algorithms.' },
        { title: 'Seamless Integration', description: 'Connect with your existing CRM, ERP, and business tools.' },
        { title: 'Rapid ROI', description: 'Most clients see positive ROI within the first 90 days.' },
      ]}
    />
  )
}
