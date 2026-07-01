import { Megaphone } from 'lucide-react'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Digital Marketing Services',
  description:
    'Full-funnel digital marketing — SEO, social media, paid ads, content, email campaigns, and analytics to grow your brand and generate qualified leads.',
  path: '/digital-marketing',
  keywords: ['digital marketing', 'SEO services', 'social media marketing', 'paid advertising', 'lead generation'],
})

export default function DigitalMarketingPage() {
  return (
    <ServicePageLayout
      path="/digital-marketing"
      badge="Digital Marketing"
      title="Grow Your Brand with Data-Driven Marketing"
      subtitle="Reach the right audience. Convert more customers. Scale with confidence."
      description="We build and execute digital marketing strategies that combine SEO, social media, paid advertising, content marketing, and automation — so your business gets consistent visibility, traffic, and measurable ROI."
      icon={Megaphone}
      workflow={{
        title: 'Digital Marketing Workflow',
        subtitle: 'A full-funnel process: research → execution → optimization → reporting.',
        steps: [
          { title: 'Audit & Research', description: 'Analyze website, competitors, ads, SEO, and current conversion funnel performance.' },
          { title: 'Strategy & KPIs', description: 'Define target audience, channels, offers, tracking, and KPIs (CPL, CAC, ROAS).' },
          { title: 'Creative & Content', description: 'Design creatives, landing pages, ad copies, email sequences, and content calendar.' },
          { title: 'Campaign Setup', description: 'Launch SEO improvements, paid ads, social campaigns, and automation workflows.' },
          { title: 'Optimization', description: 'A/B testing, bid/targeting tuning, CRO experiments, and budget reallocation.' },
          { title: 'Reporting & Iteration', description: 'Weekly/monthly reports with insights, next actions, and growth roadmap.' },
        ],
      }}
      advantages={[
        { title: 'Measurable Growth', description: 'Track traffic, leads, and revenue with clear attribution.' },
        { title: 'Consistent Lead Pipeline', description: 'Always-on campaigns generate predictable inquiries.' },
        { title: 'Brand Visibility', description: 'SEO + social + ads ensure you show up where customers search.' },
        { title: 'Compounding ROI', description: 'SEO and content improvements build long-term results over time.' },
      ]}
      disadvantages={[
        { title: 'SEO Takes Time', description: 'Organic rankings typically require weeks/months depending on competition.' },
        { title: 'Paid Ads Need Budget', description: 'Competitive industries require sustained spend to get data and results.' },
        { title: 'Creative Fatigue', description: 'Ads need fresh creatives regularly to maintain performance.' },
        { title: 'Market Volatility', description: 'Platform changes and competition can affect results — optimization is ongoing.' },
      ]}
      features={[
        'Search Engine Optimization (SEO)',
        'Google & Meta Paid Advertising',
        'Social Media Marketing & Management',
        'Content Marketing & Blog Strategy',
        'Email Marketing & Drip Campaigns',
        'Landing Page & Funnel Optimization',
        'Brand Positioning & Creative Strategy',
        'Marketing Analytics & Reporting',
        'Lead Generation Campaigns',
      ]}
      benefits={[
        { title: 'More Qualified Leads', description: 'Attract prospects who are ready to buy, not just browse.' },
        { title: 'Higher ROI', description: 'Optimize ad spend with data-backed targeting and A/B testing.' },
        { title: 'Stronger Brand Presence', description: 'Stay visible across search, social, and paid channels.' },
        { title: 'Faster Growth', description: 'Scale campaigns quickly without losing performance quality.' },
        { title: 'Clear Reporting', description: 'Track traffic, conversions, CPL, and revenue in real time.' },
        { title: 'Integrated Strategy', description: 'Align marketing with your website, CRM, and automation stack.' },
      ]}
    />
  )
}
