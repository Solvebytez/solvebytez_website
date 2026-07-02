export type BlogSection =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  publishedAt: string
  readTime: number
  image: string
  author: string
  sections: BlogSection[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-n8n-automation-is-essential-for-modern-businesses',
    title: 'Why N8N Automation Is Essential for Modern Businesses in 2026',
    excerpt:
      'Discover how N8N workflow automation helps businesses connect apps, eliminate manual tasks, and scale operations without expensive per-task pricing.',
    category: 'N8N Automation',
    date: 'Jul 2, 2026',
    publishedAt: '2026-07-02',
    readTime: 6,
    image: '/images/hero/office.png',
    author: 'Solvebytez Team',
    sections: [
      {
        type: 'paragraph',
        text: 'Manual data entry, copy-pasting between tools, and delayed follow-ups are still slowing down thousands of businesses — even in 2026. Teams juggle CRMs, spreadsheets, WhatsApp, email, and payment gateways without a single connected workflow. That is exactly where N8N automation changes the game.',
      },
      {
        type: 'heading',
        text: 'What is N8N?',
      },
      {
        type: 'paragraph',
        text: 'N8N is a powerful workflow automation platform that lets you connect 400+ applications and build custom integrations using a visual, node-based editor. Unlike many SaaS automation tools, N8N can be self-hosted — giving you full control over your data, infrastructure, and costs.',
      },
      {
        type: 'heading',
        text: 'Why businesses are switching to N8N',
      },
      {
        type: 'list',
        items: [
          'No per-task pricing — run thousands of workflows without ballooning subscription bills.',
          'Self-hosted option — keep sensitive customer and business data on your own servers.',
          'Connect anything — use HTTP nodes and webhooks to integrate custom APIs and legacy systems.',
          'Visual builder — non-technical teams can understand flows; developers can extend with code when needed.',
          'Reliable error handling — retries, branching, and alerts when something fails.',
        ],
      },
      {
        type: 'heading',
        text: 'Real-world N8N use cases',
      },
      {
        type: 'list',
        items: [
          'Lead capture → CRM sync → WhatsApp welcome message → sales team notification.',
          'Invoice generated in accounting software → email to client → update ERP status.',
          'Support ticket created → Slack alert → assign owner → send customer acknowledgment.',
          'E-commerce order placed → inventory update → shipping label → tracking SMS.',
          'HR form submitted → document stored in Google Drive → manager approval workflow.',
        ],
      },
      {
        type: 'heading',
        text: 'N8N vs traditional automation tools',
      },
      {
        type: 'paragraph',
        text: 'Tools like Zapier and Make are excellent for quick setups, but costs grow quickly as volume increases. N8N is ideal when you need high-volume automations, custom logic, on-premise hosting, or deep API integrations. Many of our clients start with simple workflows and scale to mission-critical operations within weeks.',
      },
      {
        type: 'heading',
        text: 'How Solvebytez helps with N8N',
      },
      {
        type: 'paragraph',
        text: 'At Solvebytez, we design, build, deploy, and maintain production-grade N8N workflows tailored to your business. From architecture and hosting setup to error monitoring and ongoing optimization — we handle the technical complexity so your team can focus on growth.',
      },
      {
        type: 'list',
        items: [
          'Workflow discovery and ROI mapping',
          'Self-hosted or cloud deployment',
          'CRM, ERP, WhatsApp, and custom API integrations',
          'Security, credentials management, and access control',
          '24/7 monitoring and continuous improvements',
        ],
      },
      {
        type: 'heading',
        text: 'Ready to automate?',
      },
      {
        type: 'paragraph',
        text: 'If repetitive tasks are eating your team’s time, N8N automation can deliver measurable ROI within the first month. Book a free consultation with Solvebytez and we’ll map the highest-impact workflows for your business.',
      },
    ],
  },
]

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogSlugs() {
  return blogPosts.map((post) => post.slug)
}
