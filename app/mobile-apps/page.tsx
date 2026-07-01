import { Smartphone } from 'lucide-react'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { MobileImmersiveSection } from '@/components/MobileImmersiveSection'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Mobile App, AR, VR & Game Development',
  description:
    'Native mobile apps, AR/VR experiences, and game development for iOS and Android. Enterprise apps, immersive training, and engaging games built by Solvebytez.',
  path: '/mobile-apps',
  keywords: [
    'mobile app development',
    'AR development',
    'VR development',
    'game development',
    'Unity development',
    'iOS Android apps',
    'immersive experiences',
  ],
})

export default function MobileAppsPage() {
  return (
    <ServicePageLayout
      path="/mobile-apps"
      badge="Mobile & Immersive Apps"
      title="Mobile Apps, AR, VR & Games"
      subtitle="Native apps. Immersive worlds. Play that converts."
      description="We build high-performance mobile applications for iOS and Android — plus AR product experiences, VR training simulations, and mobile games that engage users and grow your brand."
      icon={Smartphone}
      workflow={{
        title: 'Mobile & Immersive Development Workflow',
        subtitle: 'From concept to App Store, Play Store, or headset — with polished UX and reliable releases.',
        steps: [
          { title: 'Discovery & Concept', description: 'Define users, core journeys, AR/VR/game mechanics, and success metrics.' },
          { title: 'UI/UX & Prototyping', description: 'Wireframes, immersive storyboards, playable prototypes, and design system.' },
          { title: '3D & Interaction Design', description: '3D assets, animations, AR anchors, VR locomotion, and game loops.' },
          { title: 'Development Sprint', description: 'Native, React Native, Unity, or Unreal builds with weekly demos.' },
          { title: 'QA & Device Testing', description: 'Cross-device testing, performance profiling, motion sickness checks for VR.' },
          { title: 'Launch & Live Ops', description: 'Store submission, ASO, analytics, updates, and live-ops for games.' },
        ],
      }}
      advantages={[
        { title: 'Full-Spectrum Mobile Studio', description: 'One team for apps, AR, VR, and games — no juggling multiple vendors.' },
        { title: 'Immersive Engagement', description: 'AR/VR and games create memorable experiences that boost retention.' },
        { title: 'Cross-Platform Reach', description: 'Ship to iOS, Android, WebAR, and major VR headsets from one roadmap.' },
        { title: 'Monetization Ready', description: 'In-app purchases, subscriptions, ads, and enterprise licensing built in.' },
      ]}
      disadvantages={[
        { title: 'Higher Complexity for AR/VR', description: 'Immersive projects need more design iteration and device testing.' },
        { title: 'Hardware Dependencies', description: 'VR experiences depend on headset availability and user comfort.' },
        { title: 'Game Live-Ops Overhead', description: 'Games need ongoing content updates and community management.' },
        { title: 'Store & Platform Policies', description: 'App stores and VR platforms have strict review guidelines.' },
      ]}
      features={[
        'iOS & Android Native Development',
        'React Native Cross-Platform Apps',
        'AR — ARKit, ARCore & WebAR',
        'VR — Meta Quest, Pico & Unity/Unreal',
        '2D & 3D Mobile Game Development',
        'Unity & Unreal Engine Experiences',
        'Gamification & Loyalty Mechanics',
        '3D Modeling & Environment Design',
        'Multiplayer & Real-time Sync',
        'Push Notifications & Deep Linking',
        'In-App Purchases & Ad SDK Integration',
        'App Store & Play Store Optimization',
      ]}
      benefits={[
        { title: 'Premium UX', description: 'Pixel-perfect mobile UI and fluid immersive interactions users love.' },
        { title: 'AR That Sells', description: 'Virtual try-ons and 3D previews that increase conversion rates.' },
        { title: 'VR Training ROI', description: 'Safe, repeatable simulations that cut training costs and errors.' },
        { title: 'Games That Retain', description: 'Engaging mechanics, leaderboards, and rewards that keep users coming back.' },
        { title: 'Offline Ready', description: 'Critical app workflows work without stable internet connectivity.' },
        { title: 'Launch Support', description: 'Full store submission, ASO, and post-launch monitoring.' },
      ]}
    >
      <MobileImmersiveSection />
    </ServicePageLayout>
  )
}
