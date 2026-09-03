import Link from 'next/link'
import { Smartphone, ArrowRight } from 'lucide-react'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { MobileImmersiveSection } from '@/components/MobileImmersiveSection'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Mobile App Development Company | iOS, Android & AR/VR',
  description:
    'Mobile app development company building custom iOS and Android apps, React Native solutions, AR/VR experiences, and mobile games for businesses.',
  path: '/mobile-apps',
  keywords: [
    'mobile app development company',
    'mobile app development',
    'Android app development',
    'iOS app development',
    'React Native app development',
    'cross platform app development',
    'custom mobile app development',
    'mobile application development',
    'AR development',
    'VR development',
    'AR VR app development',
    'game development',
    'Unity development',
    'mobile app development company India',
  ],
})

export default function MobileAppsPage() {
  return (
    <ServicePageLayout
      path="/mobile-apps"
      badge="Mobile App Development"
      title="Mobile App Development Company for iOS, Android & Immersive Experiences"
      subtitle="Build powerful mobile apps, AR/VR experiences, and games for your business."
      description="Solvebytez is a mobile app development company building custom iOS and Android applications, cross-platform mobile apps, AR/VR experiences, and games. We combine modern mobile technology, intuitive UX, reliable performance, and scalable architecture to create digital products around your business goals."
      icon={Smartphone}
      workflow={{
        title: 'Mobile App Development Workflow',
        subtitle:
          'From product strategy and UI/UX to development, testing, app store launch, and ongoing optimization.',
        steps: [
          {
            title: 'Discovery & Product Strategy',
            description:
              'We understand your business goals, target users, core features, platform requirements, integrations, and success metrics.',
          },
          {
            title: 'UI/UX Design & Prototyping',
            description:
              'We create user flows, wireframes, interactive prototypes, and mobile-first interfaces designed for intuitive user experiences.',
          },
          {
            title: 'Technology & Architecture',
            description:
              'We select the right technology stack for your application, including native iOS, Android, React Native, Unity, or other suitable technologies.',
          },
          {
            title: 'Mobile App Development',
            description:
              'Our development team builds secure, scalable, and high-performance mobile applications with clean architecture and API integrations.',
          },
          {
            title: 'QA & Device Testing',
            description:
              'We test functionality, performance, security, responsiveness, and compatibility across supported devices and operating systems.',
          },
          {
            title: 'Launch & Optimization',
            description:
              'We support App Store and Play Store submission, analytics, performance monitoring, updates, and post-launch improvements.',
          },
        ],
      }}
      advantages={[
        {
          title: 'Custom Mobile Experiences',
          description:
            'Build applications around your specific business workflows instead of adapting your business to generic software.',
        },
        {
          title: 'iOS & Android Development',
          description:
            'Reach customers across major mobile platforms with native or cross-platform application development.',
        },
        {
          title: 'Immersive AR & VR Solutions',
          description:
            'Create interactive AR and VR experiences for product visualization, training, engagement, and other business use cases.',
        },
        {
          title: 'Scalable Architecture',
          description:
            'Design mobile applications that can support growing users, data, features, integrations, and business requirements.',
        },
      ]}
      disadvantages={[
        {
          title: 'Platform Complexity',
          description:
            'Supporting multiple platforms and devices can increase development and testing requirements.',
        },
        {
          title: 'Ongoing Maintenance',
          description:
            'Operating system updates, device changes, security updates, and new features require continued maintenance.',
        },
        {
          title: 'AR/VR Requires Specialized Testing',
          description:
            'Immersive applications require additional device testing, interaction design, and performance optimization.',
        },
        {
          title: 'App Store Guidelines',
          description:
            'Mobile applications must follow platform-specific submission, privacy, security, and review requirements.',
        },
      ]}
      features={[
        'iOS App Development',
        'Android App Development',
        'React Native Cross-Platform Apps',
        'Custom Mobile Application Development',
        'AR — ARKit, ARCore & WebAR',
        'VR — Meta Quest, Pico & Unity/Unreal',
        '2D & 3D Mobile Game Development',
        'Unity & Unreal Engine Development',
        'API & Third-Party Integrations',
        'Push Notifications & Deep Linking',
        'In-App Purchases & Subscription Integration',
        'App Store & Google Play Store Optimization',
      ]}
      benefits={[
        {
          title: 'Better User Experience',
          description:
            'Create intuitive mobile interfaces designed around real user needs and business objectives.',
        },
        {
          title: 'Cross-Platform Reach',
          description:
            'Reach users across iOS and Android with the right native or cross-platform development approach.',
        },
        {
          title: 'Business Automation',
          description:
            'Connect mobile applications with your CRM, ERP, APIs, databases, and business automation workflows.',
        },
        {
          title: 'Scalable Mobile Products',
          description:
            'Build applications with architecture designed for future features, integrations, users, and business growth.',
        },
        {
          title: 'AR & VR Experiences',
          description:
            'Use immersive technologies for product visualization, training, engagement, simulations, and interactive experiences.',
        },
        {
          title: 'Post-Launch Support',
          description:
            'Continue improving your application through analytics, maintenance, performance optimization, and new features.',
        },
      ]}
    >
      <MobileImmersiveSection />

      {/* Internal Links */}
      <section className="section-light py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
                Business Solutions
              </span>

              <h2 className="mt-3 font-heading text-3xl font-bold text-[#0B1120] md:text-4xl">
                Connect Your Mobile App With Your Business
              </h2>

              <p className="mt-4 text-[#64748B]">
                Mobile applications become more powerful when connected with
                automation, custom software, CRM, and digital marketing systems.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/ai-automation"
                className="inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-5 py-3 text-sm font-semibold text-[#0B1120] transition hover:border-[#2563EB] hover:text-[#2563EB]"
              >
                AI Automation Services
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/custom-software"
                className="inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-5 py-3 text-sm font-semibold text-[#0B1120] transition hover:border-[#2563EB] hover:text-[#2563EB]"
              >
                Custom Software Development
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/crm-development"
                className="inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-5 py-3 text-sm font-semibold text-[#0B1120] transition hover:border-[#2563EB] hover:text-[#2563EB]"
              >
                CRM Development
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/digital-marketing"
                className="inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-5 py-3 text-sm font-semibold text-[#0B1120] transition hover:border-[#2563EB] hover:text-[#2563EB]"
              >
                Digital Marketing Services
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-5 py-3 text-sm font-semibold text-[#0B1120] transition hover:border-[#2563EB] hover:text-[#2563EB]"
              >
                Talk to Our Team
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
              FAQ
            </span>

            <h2 className="mt-3 font-heading text-3xl font-bold text-[#0B1120] md:text-4xl">
              Mobile App Development FAQs
            </h2>

            <p className="mt-4 text-[#64748B]">
              Common questions about mobile app development, iOS, Android,
              cross-platform applications, AR/VR, and game development.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
              <h3 className="font-heading text-lg font-bold text-[#0B1120]">
                What does a mobile app development company do?
              </h3>
              <p className="mt-3 leading-relaxed text-[#64748B]">
                A mobile app development company designs, develops, tests, and
                launches mobile applications for platforms such as iOS and
                Android. Development can include custom business applications,
                customer-facing apps, integrations, analytics, and post-launch
                support.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
              <h3 className="font-heading text-lg font-bold text-[#0B1120]">
                Do you provide iOS and Android app development?
              </h3>
              <p className="mt-3 leading-relaxed text-[#64748B]">
                Yes. We develop custom iOS and Android applications and can
                recommend native or cross-platform development depending on the
                application's requirements, users, performance needs, and budget.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
              <h3 className="font-heading text-lg font-bold text-[#0B1120]">
                Do you provide React Native app development?
              </h3>
              <p className="mt-3 leading-relaxed text-[#64748B]">
                Yes. React Native can be used for cross-platform mobile
                applications where sharing development across iOS and Android
                provides an appropriate balance of performance, development
                speed, and maintainability.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
              <h3 className="font-heading text-lg font-bold text-[#0B1120]">
                Can you build custom AR and VR applications?
              </h3>
              <p className="mt-3 leading-relaxed text-[#64748B]">
                Yes. We build AR and VR experiences for use cases such as
                product visualization, immersive training, simulations,
                interactive experiences, and customer engagement.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
              <h3 className="font-heading text-lg font-bold text-[#0B1120]">
                Do you provide mobile game development?
              </h3>
              <p className="mt-3 leading-relaxed text-[#64748B]">
                Yes. Our mobile development capabilities include 2D and 3D game
                development, Unity and Unreal Engine experiences, gamification,
                multiplayer functionality, and mobile game integrations.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
              <h3 className="font-heading text-lg font-bold text-[#0B1120]">
                Can a custom mobile app integrate with CRM and business software?
              </h3>
              <p className="mt-3 leading-relaxed text-[#64748B]">
                Yes. Depending on available APIs and system requirements, mobile
                applications can integrate with CRM, ERP, databases, payment
                systems, communication platforms, analytics tools, and other
                business applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
