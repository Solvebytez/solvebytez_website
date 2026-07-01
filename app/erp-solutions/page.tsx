import { Building2 } from 'lucide-react'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'ERP Solutions',
  description:
    'Enterprise Resource Planning systems that unify operations, finance, inventory, and HR into one intelligent platform.',
  path: '/erp-solutions',
  keywords: ['ERP solutions', 'enterprise resource planning', 'ERP software development', 'business ERP'],
})

export default function ERPSolutionsPage() {
  return (
    <ServicePageLayout
      path="/erp-solutions"
      badge="ERP Solutions"
      title="Unified Operations, Intelligent Control"
      subtitle="One platform. Every department. Total visibility."
      description="Our custom ERP solutions integrate finance, inventory, HR, procurement, and operations into a single intelligent platform — eliminating data silos and manual processes."
      icon={Building2}
      workflow={{
        title: 'ERP Delivery Workflow',
        subtitle: 'Modern ERP rollout with clear phases, low-risk migration, and measurable outcomes.',
        steps: [
          { title: 'Process & Module Discovery', description: 'Map workflows across departments and decide ERP modules and priorities.' },
          { title: 'Data & Integration Planning', description: 'Define master data, migration plan, integrations, roles, and audit requirements.' },
          { title: 'Configuration & Build', description: 'Develop modules, approvals, reports, and role-based access with validations.' },
          { title: 'Migration & Reconciliation', description: 'Migrate data safely, reconcile balances/inventory, and verify accuracy.' },
          { title: 'UAT & Training', description: 'User acceptance testing with real scenarios plus team training and SOPs.' },
          { title: 'Go-Live & Stabilization', description: 'Phased rollout, monitoring, and continuous improvements post-launch.' },
        ],
      }}
      advantages={[
        { title: 'Single Source of Truth', description: 'Finance, inventory, HR, and operations all aligned to one dataset.' },
        { title: 'Real-time Visibility', description: 'Dashboards and reports reduce delays and manual reconciliation.' },
        { title: 'Better Controls', description: 'Approvals, audit trails, and permissions improve compliance.' },
        { title: 'Operational Efficiency', description: 'Standardized workflows reduce cost and improve speed.' },
      ]}
      disadvantages={[
        { title: 'Complex Implementation', description: 'ERP touches every department — discovery and change management are crucial.' },
        { title: 'Data Migration Risk', description: 'Dirty legacy data can cause issues if not cleaned and validated.' },
        { title: 'Training Required', description: 'Teams need time to learn new processes and interfaces.' },
        { title: 'Ongoing Governance', description: 'ERP requires ownership for master data, permissions, and process updates.' },
      ]}
      features={[
        'Financial Management & Accounting',
        'Inventory & Supply Chain',
        'Human Resources & Payroll',
        'Procurement & Vendor Management',
        'Production Planning & MRP',
        'Business Intelligence Dashboards',
        'Multi-location Management',
        'Compliance & Audit Trails',
        'AI Demand Forecasting',
      ]}
      benefits={[
        { title: 'Unified Data', description: 'Single source of truth across all departments and locations.' },
        { title: 'Cost Reduction', description: 'Eliminate redundant systems and manual reconciliation.' },
        { title: 'Real-time Visibility', description: 'Live dashboards for inventory, finances, and operations.' },
        { title: 'Compliance Ready', description: 'Built-in audit trails and regulatory compliance features.' },
        { title: 'Scalable Architecture', description: 'Multi-entity, multi-currency, multi-language support.' },
        { title: 'AI-Powered Insights', description: 'Predictive analytics for demand, costs, and resource planning.' },
      ]}
    />
  )
}
