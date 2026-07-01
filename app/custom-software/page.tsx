import { Code2 } from 'lucide-react'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Custom Software Development',
  description:
    'Bespoke software solutions built for your unique business challenges. Web apps, cloud platforms, and enterprise systems.',
  path: '/custom-software',
  keywords: ['custom software development', 'web application development', 'enterprise software', 'cloud software'],
})

export default function CustomSoftwarePage() {
  return (
    <ServicePageLayout
      path="/custom-software"
      badge="Custom Software"
      title="Software Built for Your Business"
      subtitle="No templates. No compromises. 100% custom."
      description="We engineer bespoke software solutions that solve your specific challenges — from web applications and SaaS platforms to cloud infrastructure and API ecosystems."
      icon={Code2}
      workflow={{
        title: 'Custom Software Delivery Workflow',
        subtitle: 'A product-engineering process that keeps delivery predictable and quality high.',
        steps: [
          { title: 'Requirements & Scope', description: 'Workshops to define users, flows, data, acceptance criteria, and success metrics.' },
          { title: 'Architecture & UX', description: 'Information architecture, UI/UX prototypes, and technical design (APIs, DB, infra).' },
          { title: 'Sprint Development', description: 'Agile sprints with weekly demos, iterative feedback, and transparent progress.' },
          { title: 'QA & Security', description: 'Automated tests, code review, performance checks, and security best practices.' },
          { title: 'Deployment & CI/CD', description: 'Production-ready release pipelines, environments, monitoring, and backups.' },
          { title: 'Support & Evolution', description: 'Bug fixes, enhancements, scaling, and roadmap-based continuous delivery.' },
        ],
      }}
      advantages={[
        { title: 'Perfect Fit for Your Workflow', description: 'Built exactly around how your business operates — no forced compromises.' },
        { title: 'Full Ownership', description: 'You own the codebase, data, and IP (no platform lock-in).' },
        { title: 'Scalable Foundation', description: 'Architecture designed to grow with users, data, and features.' },
        { title: 'Competitive Edge', description: 'Unique features and experiences that differentiate you in the market.' },
      ]}
      disadvantages={[
        { title: 'Higher Upfront Investment', description: 'Custom builds cost more initially than off-the-shelf tools.' },
        { title: 'Time to Build', description: 'Quality software needs planning, iteration, and testing before launch.' },
        { title: 'Ongoing Maintenance', description: 'Security updates, infra, and new features require continued support.' },
        { title: 'Requires Clear Requirements', description: 'Ambiguous scope can slow delivery — discovery helps reduce risk.' },
      ]}
      features={[
        'Custom Web Applications',
        'SaaS Platform Development',
        'Cloud Architecture & Migration',
        'API Development & Integration',
        'Legacy System Modernization',
        'Microservices Architecture',
        'Database Design & Optimization',
        'DevOps & CI/CD Pipelines',
        'Quality Assurance & Testing',
      ]}
      benefits={[
        { title: 'Tailored Fit', description: 'Every feature designed for your exact workflow and requirements.' },
        { title: 'Future-Proof', description: 'Scalable architecture that grows with your business.' },
        { title: 'Full Ownership', description: 'You own the code, data, and intellectual property.' },
        { title: 'Agile Delivery', description: 'Weekly sprints with continuous demos and feedback loops.' },
        { title: 'Enterprise Security', description: 'SOC 2 compliant practices and encryption at every layer.' },
        { title: 'Ongoing Support', description: 'Dedicated maintenance and feature development post-launch.' },
      ]}
    />
  )
}
