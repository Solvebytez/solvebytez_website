'use client'

import { WorkflowTimeline } from '@/components/WorkflowTimeline'
import { workflowSteps } from '@/lib/data'

export function WorkflowSection() {
  return (
    <WorkflowTimeline
      wrapInAnimatedSection
      badge="Our Process"
      title="AI Automation Workflow"
      subtitle="A proven 7-step methodology that takes you from manual chaos to intelligent automation."
      steps={workflowSteps}
      cta={{
        title: 'Start your automation journey',
        description:
          "From discovery to deployment — we'll guide you through every step with a clear roadmap and timeline.",
        primaryLabel: 'Get Your Free Roadmap',
        primaryHref: '/contact',
      }}
    />
  )
}
