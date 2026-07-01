'use client'

import { WorkflowTimeline, type WorkflowTimelineStep } from '@/components/WorkflowTimeline'

export type ServiceWorkflowStep = WorkflowTimelineStep

interface ServiceWorkflowProps {
  title?: string
  subtitle?: string
  steps: ServiceWorkflowStep[]
}

export function ServiceWorkflow({ title, subtitle, steps }: ServiceWorkflowProps) {
  return (
    <WorkflowTimeline
      badge="Workflow"
      title={title ?? 'How We Deliver This Service'}
      subtitle={subtitle ?? 'A clear, repeatable process — from discovery to launch and support.'}
      steps={steps}
    />
  )
}
