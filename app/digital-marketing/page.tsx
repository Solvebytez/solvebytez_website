import Link from 'next/link'
import { Megaphone, ArrowRight } from 'lucide-react'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Digital Marketing Company | SEO, PPC & Lead Generation Services',
  description:
    'Digital marketing company helping businesses grow with SEO, PPC, social media marketing, content marketing, paid advertising, and lead generation services.',
  path: '/digital-marketing',
  keywords: [
    'digital marketing company',
    'digital marketing agency',
    'digital marketing services',
    'SEO services',
    'SEO company',
    'social media marketing',
    'Google Ads management',
    'PPC services',
    'paid advertising',
    'lead generation services',
    'content marketing services',
    'digital marketing company India',
  ],
})

export default function DigitalMarketingPage() {
  return (
    <ServicePageLayout
      path="/digital-marketing"
      badge="Digital Marketing"
      title="Digital Marketing Company for Business Growth"
      subtitle="Reach the right audience. Generate qualified leads. Grow with data-driven marketing."
      description="We provide digital marketing services that combine SEO, social media marketing, paid advertising, content marketing, landing page optimization, and marketing analytics. Our goal is to improve your online visibility, attract qualified prospects, and build a measurable digital growth strategy around your business."
      icon={Megaphone}
      workflow={{
        title: 'Digital Marketing Workflow',
        subtitle:
          'A full-funnel process covering research, strategy, execution, optimization, and performance reporting.',
        steps: [
          {
            title: 'Audit & Market Research',
            description:
              'We analyze your website, competitors, search visibility, advertising activity, target audience, content, and existing conversion funnel.',
          },
          {
            title: 'Strategy & KPIs',
            description:
              'We define target audiences, marketing channels, offers, tracking requirements, budgets, and measurable KPIs for your campaigns.',
          },
          {
            title: 'Creative & Content',
            description:
              'We develop ad creatives, landing page messaging, content plans, social media assets, email campaigns, and search-focused content.',
          },
          {
            title: 'Campaign Setup',
            description:
              'We implement SEO improvements, paid advertising campaigns, social media campaigns, conversion tracking, and marketing automation workflows.',
          },
          {
            title: 'Optimization',
            description:
              'We analyze campaign and website performance, test messaging and creatives, optimize targeting, improve conversion rates, and adjust budgets based on data.',
          },
          {
            title: 'Reporting & Iteration',
            description:
              'We provide performance insights, identify growth opportunities, and continuously refine the marketing strategy based on measurable results.',
          },
        ],
      }}
      advantages={[
        {
          title: 'Measurable Marketing',
          description:
            'Track website traffic, leads, conversions, campaign performance, and other meaningful marketing metrics.',
        },
        {
          title: 'Qualified Lead Generation',
          description:
            'Build campaigns and content designed to attract prospects who are relevant to your products or services.',
        },
        {
          title: 'Stronger Online Visibility',
          description:
            'Combine SEO, social media, content, and paid advertising to reach customers across multiple digital channels.',
        },
        {
          title: 'Long-Term Growth',
          description:
            'SEO and content marketing can build sustainable organic visibility while paid campaigns support immediate demand generation.',
        },
      ]}
      disadvantages={[
        {
          title: 'SEO Requires Time',
          description:
            'Organic search visibility can take time to develop depending on competition, website authority, content quality, and the target market.',
        },
        {
          title: 'Paid Advertising Requires Budget',
          description:
            'Paid campaigns require an appropriate advertising budget and ongoing optimization to collect useful performance data.',
        },
        {
          title: 'Creative Fatigue',
          description:
            'Advertising creatives and messaging may need regular updates to maintain audience engagement and campaign effectiveness.',
        },
        {
          title: 'Market Changes',
          description:
            'Search algorithms, advertising platforms, competitors, and customer behavior can change, making continuous optimization important.',
        },
      ]}
      features={[
        'Search Engine Optimization (SEO)',
        'Google Ads & PPC Management',
        'Social Media Marketing & Management',
        'Content Marketing & Blog Strategy',
        'Email Marketing & Drip Campaigns',
        'Landing Page & Funnel Optimization',
        'Brand Positioning & Creative Strategy',
        'Marketing Analytics & Reporting',
        'Lead Generation Campaigns',
        'Conversion Rate Optimization',
      ]}
      benefits={[
        {
          title: 'More Qualified Leads',
          description:
            'Attract relevant prospects through search, social media, paid advertising, content, and targeted campaigns.',
        },
        {
          title: 'Better Marketing ROI',
          description:
            'Use performance data, campaign testing, and conversion insights to make better marketing decisions.',
        },
        {
          title: 'Stronger Brand Presence',
          description:
            'Build visibility across search engines, social platforms, advertising channels, and other digital touchpoints.',
        },
        {
          title: 'Organic Search Growth',
          description:
            'Improve website structure, content, and search visibility through a consistent SEO strategy.',
        },
        {
          title: 'Clear Performance Reporting',
          description:
            'Monitor important metrics such as traffic, conversions, leads, cost per lead, and campaign performance.',
        },
        {
          title: 'Integrated Marketing Strategy',
          description:
            'Connect digital marketing with your website, CRM, analytics, and business automation systems.',
        },
      ]}
    >
      {/* SEO Content + Internal Links */}
      <section className="section-light py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
                Digital Marketing Services
              </span>

              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0B1120] md:text-4xl">
                Data-Driven Digital Marketing Services for Your Business
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-[#64748B]">
                A strong digital presence requires more than running
                advertisements. Our digital marketing services combine search
                engine optimization, paid advertising, social media marketing,
                content marketing, landing page optimization, and analytics to
                create a connected growth strategy.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
                We focus on understanding your target audience, improving your
                online visibility, generating relevant traffic, and converting
                visitors into qualified leads. Marketing activities can also be
                connected with your CRM and business automation systems to
                improve lead management and follow-up.
              </p>
            </div>

            {/* Related Services */}
            <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-[#0B1120]">
                Explore Our Related Services
              </h2>

              <p className="mt-3 text-[#64748B]">
                Connect your digital marketing strategy with custom software,
                CRM, AI automation, and WhatsApp automation.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Link
                  href="/ai-automation"
                  className="group rounded-2xl border border-[#E2E8F0] p-5 transition-all hover:border-[#2563EB]"
                >
                  <h3 className="font-semibold text-[#0B1120]">
                    AI Automation Services
                  </h3>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Automate repetitive business processes, customer
                    interactions, lead workflows, and operational tasks with
                    AI.
                  </p>

                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB]">
                    Explore AI Automation
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>

                <Link
                  href="/crm-development"
                  className="group rounded-2xl border border-[#E2E8F0] p-5 transition-all hover:border-[#2563EB]"
                >
                  <h3 className="font-semibold text-[#0B1120]">
                    CRM Development
                  </h3>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Manage marketing leads, customer information, sales
                    pipelines, follow-ups, and business relationships in a
                    custom CRM.
                  </p>

                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB]">
                    Explore CRM Development
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>

                <Link
                  href="/custom-software"
                  className="group rounded-2xl border border-[#E2E8F0] p-5 transition-all hover:border-[#2563EB]"
                >
                  <h3 className="font-semibold text-[#0B1120]">
                    Custom Software Development
                  </h3>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Build custom web applications, SaaS platforms, enterprise
                    software, APIs, and business applications.
                  </p>

                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB]">
                    Explore Custom Software
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>

                <Link
                  href="/whatsapp-automation"
                  className="group rounded-2xl border border-[#E2E8F0] p-5 transition-all hover:border-[#2563EB]"
                >
                  <h3 className="font-semibold text-[#0B1120]">
                    WhatsApp Automation
                  </h3>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Connect customer communication, lead follow-ups,
                    notifications, and business workflows through WhatsApp
                    automation.
                  </p>

                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB]">
                    Explore WhatsApp Automation
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-dark py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4]">
              FAQ
            </span>

            <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl">
              Digital Marketing FAQs
            </h2>

            <p className="mt-4 text-white/60">
              Common questions businesses ask about digital marketing
              services, SEO, paid advertising, and lead generation.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                What does a digital marketing company do?
              </h3>

              <p className="mt-3 leading-relaxed text-white/60">
                A digital marketing company helps businesses improve their
                online visibility, attract relevant audiences, generate leads,
                and measure marketing performance through channels such as
                SEO, paid advertising, social media, content marketing, email,
                and analytics.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                What digital marketing services do you provide?
              </h3>

              <p className="mt-3 leading-relaxed text-white/60">
                Our digital marketing services include SEO, Google Ads and PPC
                management, social media marketing, content marketing, email
                campaigns, landing page optimization, analytics, conversion
                optimization, and lead generation campaigns.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                How long does SEO take to show results?
              </h3>

              <p className="mt-3 leading-relaxed text-white/60">
                SEO results depend on factors such as competition, website
                authority, technical SEO, content quality, backlinks, search
                intent, and the target market. Organic visibility generally
                develops over time rather than immediately.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                What is the difference between SEO and PPC?
              </h3>

              <p className="mt-3 leading-relaxed text-white/60">
                SEO focuses on improving organic search visibility, while PPC
                uses paid advertising placements to reach targeted audiences.
                Businesses can use both approaches together depending on their
                goals, market, timeline, and budget.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                Can digital marketing generate leads for my business?
              </h3>

              <p className="mt-3 leading-relaxed text-white/60">
                Yes. SEO, paid advertising, social media, content, landing
                pages, and conversion optimization can all contribute to lead
                generation when they are aligned with the target audience,
                offer, sales process, and tracking setup.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-white">
                Can digital marketing be connected with CRM and automation?
              </h3>

              <p className="mt-3 leading-relaxed text-white/60">
                Yes. Marketing campaigns can be connected with CRM systems,
                website forms, analytics platforms, WhatsApp, email tools, and
                business automation workflows to improve lead capture,
                qualification, follow-up, and reporting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
