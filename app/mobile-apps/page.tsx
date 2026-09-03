import Link from 'next/link'
import { ArrowRight, Smartphone } from 'lucide-react'

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
      title="Mobile App Development Company for iOS, Android & AR/VR"
      subtitle="Custom mobile apps, immersive AR/VR experiences, and engaging games built for modern businesses."
      description="We are a mobile app development company building custom iOS and Android applications, React Native solutions, AR/VR experiences, and mobile games. From product strategy and UI/UX to development, testing, deployment, and post-launch support, we build reliable digital experiences tailored to your business goals."
      icon={Smartphone}
      workflow={{
        title: 'Mobile App Development Workflow',
        subtitle:
          'From product discovery to app store launch, we follow a structured process focused on performance, usability, scalability, and reliable releases.',
        steps: [
          {
            title: 'Discovery & Requirements',
            description:
              'Understand your business objectives, target users, app requirements, core features, integrations, and technical expectations.',
          },
          {
            title: 'UI/UX Design & Prototyping',
            description:
              'Create intuitive user journeys, wireframes, interactive prototypes, and a consistent design system for your mobile application.',
          },
          {
            title: 'Architecture & Technology Planning',
            description:
              'Select the right technology stack and architecture based on your platform requirements, scalability, integrations, and product roadmap.',
          },
          {
            title: 'Mobile App Development',
            description:
              'Develop high-quality iOS, Android, or cross-platform applications with secure APIs, integrations, responsive interfaces, and scalable backend systems.',
          },
          {
            title: 'Testing & Device Optimization',
            description:
              'Test application functionality, performance, security, compatibility, and user experience across relevant devices and operating systems.',
          },
          {
            title: 'App Store Launch & Support',
            description:
              'Handle deployment, App Store and Play Store submission support, analytics setup, monitoring, updates, and ongoing improvements.',
          },
        ],
      }}
      advantages={[
        {
          title: 'Custom Mobile Solutions',
          description:
            'Build applications around your specific business processes, users, workflows, and product requirements instead of relying on generic templates.',
        },
        {
          title: 'iOS & Android Expertise',
          description:
            'Develop mobile applications for iOS and Android with technology choices aligned to your product goals and target audience.',
        },
        {
          title: 'Cross-Platform Development',
          description:
            'Use technologies such as React Native when appropriate to efficiently deliver applications across multiple platforms.',
        },
        {
          title: 'Immersive Experiences',
          description:
            'Extend your mobile product with AR, VR, 3D, gamification, and interactive experiences when they provide meaningful business value.',
        },
      ]}
      disadvantages={[
        {
          title: 'Platform Complexity',
          description:
            'Supporting multiple operating systems and device types can increase development, testing, and maintenance requirements.',
        },
        {
          title: 'Device Compatibility',
          description:
            'Mobile applications require testing across different screen sizes, operating system versions, hardware capabilities, and device configurations.',
        },
        {
          title: 'AR/VR Development Complexity',
          description:
            'AR and VR applications can require additional 3D assets, performance optimization, specialized testing, and compatible hardware.',
        },
        {
          title: 'Ongoing Maintenance',
          description:
            'Mobile applications require regular updates for operating system changes, security improvements, new features, and platform policies.',
        },
      ]}
      features={[
        'iOS App Development',
        'Android App Development',
        'React Native App Development',
        'Cross-Platform Mobile App Development',
        'Custom Mobile App Development',
        'Mobile Application UI/UX Design',
        'AR — ARKit, ARCore & WebAR',
        'VR — Meta Quest, Pico & Unity/Unreal',
        'AR & VR Application Development',
        '2D & 3D Mobile Game Development',
        'Unity & Unreal Engine Experiences',
        'Gamification & Loyalty Mechanics',
        '3D Modeling & Environment Design',
        'Multiplayer & Real-Time Sync',
        'REST API & Third-Party Integrations',
        'Push Notifications & Deep Linking',
        'In-App Purchases & Payment Integration',
        'Analytics & App Performance Monitoring',
        'App Store & Google Play Deployment',
        'App Store Optimization Support',
      ]}
      benefits={[
        {
          title: 'User-Friendly Mobile Experiences',
          description:
            'Create intuitive mobile interfaces with smooth navigation, responsive interactions, and experiences designed around real user needs.',
        },
        {
          title: 'Scalable Application Architecture',
          description:
            'Build mobile applications with an architecture that can support future features, users, integrations, and business growth.',
        },
        {
          title: 'Business System Integration',
          description:
            'Connect mobile applications with CRM, ERP, payment systems, APIs, analytics platforms, and other business software.',
        },
        {
          title: 'AR & Interactive Experiences',
          description:
            'Use augmented reality, 3D visualization, and interactive features to create engaging customer and employee experiences.',
        },
        {
          title: 'Reliable Cross-Platform Delivery',
          description:
            'Choose native or cross-platform development based on your product requirements, performance expectations, budget, and roadmap.',
        },
        {
          title: 'Launch & Post-Launch Support',
          description:
            'Get support for deployment, analytics, maintenance, updates, performance monitoring, and future feature development.',
        },
      ]}
    >
      <MobileImmersiveSection />

      {/* SEO-focused internal linking section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Explore Our Solutions
            </p>

            <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Build a Complete Digital Solution With Our Technology Services
            </h2>

            <p className="mt-4 text-muted-foreground">
              Mobile applications often work together with automation,
              business software, CRM, and digital marketing systems. Explore
              our related services to build a connected technology ecosystem
              for your business.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/ai-automation"
              className="group rounded-2xl border p-6 transition-colors hover:border-primary"
            >
              <h3 className="font-heading text-lg font-semibold">
                AI Automation Services
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Automate repetitive business workflows and connect AI with
                your mobile applications.
              </p>

              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                Explore AI Automation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/custom-software"
              className="group rounded-2xl border p-6 transition-colors hover:border-primary"
            >
              <h3 className="font-heading text-lg font-semibold">
                Custom Software Development
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Build custom business software and backend systems that work
                seamlessly with your mobile application.
              </p>

              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                Explore Custom Software
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/crm-development"
              className="group rounded-2xl border p-6 transition-colors hover:border-primary"
            >
              <h3 className="font-heading text-lg font-semibold">
                CRM Development
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Connect customer management, sales workflows, and mobile
                applications through custom CRM solutions.
              </p>

              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                Explore CRM Development
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/digital-marketing"
              className="group rounded-2xl border p-6 transition-colors hover:border-primary"
            >
              <h3 className="font-heading text-lg font-semibold">
                Digital Marketing
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Promote your mobile application through SEO, paid advertising,
                social media, and lead generation strategies.
              </p>

              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                Explore Digital Marketing
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile app development FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Frequently Asked Questions
            </p>

            <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Mobile App Development FAQs
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Answers to common questions about mobile app development,
              platforms, technologies, AR/VR applications, and integrations.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border p-6">
              <h3 className="font-heading text-lg font-semibold">
                What does a mobile app development company do?
              </h3>

              <p className="mt-3 text-muted-foreground">
                A mobile app development company designs, develops, tests, and
                deploys applications for mobile platforms such as iOS and
                Android. The process can include UI/UX design, backend
                development, API integrations, testing, deployment, analytics,
                and ongoing maintenance.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="font-heading text-lg font-semibold">
                Do you provide iOS and Android app development?
              </h3>

              <p className="mt-3 text-muted-foreground">
                Yes. We develop custom mobile applications for both iOS and
                Android. Depending on the project requirements, we can
                recommend native or cross-platform development approaches.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="font-heading text-lg font-semibold">
                Do you provide React Native app development?
              </h3>

              <p className="mt-3 text-muted-foreground">
                Yes. React Native can be used to develop cross-platform mobile
                applications for iOS and Android. The appropriate technology is
                selected based on the application's performance, features,
                integrations, timeline, and long-term roadmap.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="font-heading text-lg font-semibold">
                Can you build custom AR and VR applications?
              </h3>

              <p className="mt-3 text-muted-foreground">
                Yes. We can develop AR and VR experiences for use cases such
                as product visualization, interactive experiences, training,
                simulations, and immersive applications using suitable
                technologies and platforms.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="font-heading text-lg font-semibold">
                Do you provide mobile game development?
              </h3>

              <p className="mt-3 text-muted-foreground">
                Yes. We can develop 2D and 3D mobile games with features such
                as gamification, leaderboards, rewards, multiplayer
                functionality, analytics, and in-app monetization depending on
                the project requirements.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="font-heading text-lg font-semibold">
                Can a custom mobile app integrate with CRM and ERP systems?
              </h3>

              <p className="mt-3 text-muted-foreground">
                Yes. Mobile applications can integrate with CRM, ERP, payment
                gateways, business APIs, analytics platforms, authentication
                systems, and other software through secure APIs and
                integrations.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="font-heading text-lg font-semibold">
                How much does custom mobile app development cost?
              </h3>

              <p className="mt-3 text-muted-foreground">
                The cost depends on factors such as app complexity, number of
                platforms, UI/UX requirements, backend functionality,
                integrations, authentication, real-time features, AR/VR
                requirements, and ongoing support. A project-specific estimate
                can be prepared after understanding your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with internal link */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border p-8 text-center md:p-12">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Looking for a Mobile App Development Company?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Tell us about your mobile application, business requirements,
              target platforms, and features. Our team can help you plan the
              right development approach.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Discuss Your App Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
