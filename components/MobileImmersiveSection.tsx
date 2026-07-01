import { Glasses, Gamepad2, Scan, Box, Joystick, Layers3 } from 'lucide-react'
import { SectionHeader } from '@/components/ui/primitives'

const immersiveServices = [
  {
    title: 'AR Development',
    icon: Scan,
    accent: 'from-[var(--brand-blue)]/20 to-[var(--brand-cyan)]/20',
    iconColor: 'text-[var(--brand-blue)]',
    description:
      'Augmented reality experiences that blend digital content with the real world — product try-ons, training overlays, field-service guides, and interactive marketing.',
    points: [
      'ARKit & ARCore native experiences',
      'WebAR for browser-based campaigns',
      '3D product visualization & virtual try-on',
      'AR training & onboarding modules',
      'Location-based AR activations',
    ],
  },
  {
    title: 'VR Development',
    icon: Glasses,
    accent: 'from-[var(--brand-navy)]/20 to-[var(--brand-blue)]/20',
    iconColor: 'text-[var(--brand-cyan)]',
    description:
      'Immersive virtual environments for training simulations, virtual showrooms, real-estate walkthroughs, and high-impact brand experiences on Meta Quest and more.',
    points: [
      'Unity & Unreal Engine VR builds',
      'Meta Quest, Pico & headset deployment',
      'VR training & safety simulations',
      'Virtual tours & immersive demos',
      'Multiplayer VR collaboration spaces',
    ],
  },
  {
    title: 'Game Development',
    icon: Gamepad2,
    accent: 'from-[var(--brand-cyan)]/20 to-[var(--brand-blue)]/20',
    iconColor: 'text-[var(--brand-blue)]',
    description:
      'Engaging mobile games and gamified apps — from casual hyper-casual titles to serious games that boost learning, loyalty, and user retention.',
    points: [
      '2D & 3D mobile game development',
      'Unity / Unreal cross-platform builds',
      'Multiplayer & leaderboard systems',
      'In-app purchases & ad monetization',
      'Gamification for apps & enterprise training',
    ],
  },
]

export function MobileImmersiveSection() {
  return (
    <section className="section-dark relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 size-96 rounded-full bg-[var(--brand-blue)]/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 size-80 rounded-full bg-[var(--brand-cyan)]/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Immersive Tech"
          title="AR, VR & Game Development"
          subtitle="Beyond standard apps — we build immersive experiences that captivate users and deliver measurable business outcomes."
          dark
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {immersiveServices.map((service) => (
            <div
              key={service.title}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-[var(--brand-blue)]/30 hover:bg-white/[0.07]"
            >
              <div
                className={`mb-6 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent}`}
              >
                <service.icon className={`size-7 ${service.iconColor}`} />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{service.description}</p>
              <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-white/75">
                    <Box className="mt-0.5 size-3.5 shrink-0 text-[var(--brand-cyan)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Joystick, label: 'Casual & Hyper-Casual Games' },
            { icon: Layers3, label: '3D Assets & Environments' },
            { icon: Scan, label: 'Marker & Markerless AR' },
            { icon: Glasses, label: 'Enterprise VR Training' },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5"
            >
              <Icon className="size-5 shrink-0 text-[var(--brand-cyan)]" />
              <span className="text-sm font-medium text-white/80">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
