'use client'

import type { ComponentType } from 'react'
import Link from 'next/link'
import { Phone, MessageSquare } from 'lucide-react'
import { siteConfig } from '@/lib/data'
import { cn } from '@/lib/utils'
import {
  WhatsAppIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
  FacebookIcon,
} from '@/components/SocialIcons'

type SideLink = {
  label: string
  href: string
  external?: boolean
  icon: ComponentType<{ className?: string }>
  hoverClass: string
}

const primaryLinks: SideLink[] = [
  {
    label: 'Call us',
    href: `tel:${siteConfig.phoneTel}`,
    icon: Phone,
    hoverClass: 'hover:text-[#22C55E] hover:bg-[#22C55E]/15 hover:shadow-[0_6px_18px_rgba(34,197,94,0.35)]',
  },
  {
    label: 'Contact us',
    href: '/contact',
    icon: MessageSquare,
    hoverClass: 'hover:text-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/15 hover:shadow-brand-sm',
  },
  {
    label: 'WhatsApp',
    href: siteConfig.social.whatsapp,
    external: true,
    icon: WhatsAppIcon,
    hoverClass: 'hover:text-[#25D366] hover:bg-[#25D366]/15 hover:shadow-[0_6px_18px_rgba(37,211,102,0.45)]',
  },
]

const socialLinks: SideLink[] = [
  {
    label: 'LinkedIn',
    href: siteConfig.social.linkedin,
    external: true,
    icon: LinkedInIcon,
    hoverClass: 'hover:text-[#0A66C2] hover:bg-[#0A66C2]/15 hover:shadow-[0_6px_18px_rgba(10,102,194,0.35)]',
  },
  {
    label: 'Instagram',
    href: siteConfig.social.instagram,
    external: true,
    icon: InstagramIcon,
    hoverClass:
      'hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white hover:shadow-[0_6px_18px_rgba(221,42,123,0.35)]',
  },
  {
    label: 'YouTube',
    href: siteConfig.social.youtube,
    external: true,
    icon: YouTubeIcon,
    hoverClass: 'hover:text-[#FF0000] hover:bg-[#FF0000]/15 hover:shadow-[0_6px_18px_rgba(255,0,0,0.3)]',
  },
  {
    label: 'Facebook',
    href: siteConfig.social.facebook,
    external: true,
    icon: FacebookIcon,
    hoverClass: 'hover:text-[#1877F2] hover:bg-[#1877F2]/15 hover:shadow-[0_6px_18px_rgba(24,119,242,0.35)]',
  },
]

function SideLinkItem({ item }: { item: SideLink }) {
  const Icon = item.icon
  const className = cn(
    'relative z-10 flex size-9 items-center justify-center rounded-xl text-white transition-all duration-200 hover:scale-105 sm:size-10 md:size-11',
    item.hoverClass
  )

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={item.label}
      >
        <Icon className="size-4 sm:size-[1.125rem]" />
      </a>
    )
  }

  if (item.href.startsWith('tel:')) {
    return (
      <a href={item.href} className={className} aria-label={item.label}>
        <Icon className="size-4 sm:size-[1.125rem]" />
      </a>
    )
  }

  return (
    <Link href={item.href} className={className} aria-label={item.label}>
      <Icon className="size-4 sm:size-[1.125rem]" />
    </Link>
  )
}

export function FloatingSideBar() {
  return (
    <aside
      className="fixed right-1.5 top-1/2 z-40 -translate-y-1/2 sm:right-3"
      aria-label="Quick contact and social links"
    >
      <div className="relative flex flex-col items-center gap-0.5 overflow-hidden rounded-2xl border border-[var(--brand-blue)]/35 px-1.5 py-2 shadow-[0_12px_36px_rgba(5,58,115,0.4)] backdrop-blur-xl sm:gap-1 sm:px-2 sm:py-3">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--brand-navy)] via-[#0B1120] to-[var(--brand-navy)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-cyan)]/70 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-blue)]/50 to-transparent"
          aria-hidden
        />

        {primaryLinks.map((item) => (
          <SideLinkItem key={item.label} item={item} />
        ))}

        <div
          className="relative z-10 my-0.5 h-px w-6 bg-gradient-to-r from-transparent via-[var(--brand-cyan)]/45 to-transparent sm:w-8"
          aria-hidden
        />

        {socialLinks.map((item) => (
          <SideLinkItem key={item.label} item={item} />
        ))}
      </div>
    </aside>
  )
}
