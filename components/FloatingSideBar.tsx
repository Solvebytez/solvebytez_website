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
}

const primaryLinks: SideLink[] = [
  { label: 'Call us', href: `tel:${siteConfig.phoneTel}`, icon: Phone },
  { label: 'Contact us', href: '/contact', icon: MessageSquare },
  { label: 'WhatsApp', href: siteConfig.social.whatsapp, external: true, icon: WhatsAppIcon },
]

const socialLinks: SideLink[] = [
  { label: 'LinkedIn', href: siteConfig.social.linkedin, external: true, icon: LinkedInIcon },
  { label: 'Instagram', href: siteConfig.social.instagram, external: true, icon: InstagramIcon },
  { label: 'YouTube', href: siteConfig.social.youtube, external: true, icon: YouTubeIcon },
  { label: 'Facebook', href: siteConfig.social.facebook, external: true, icon: FacebookIcon },
]

function SideLinkItem({ item }: { item: SideLink }) {
  const Icon = item.icon
  const className = cn(
    'flex size-10 items-center justify-center rounded-xl text-white/90 transition-all duration-200 sm:size-11',
    'hover:bg-white/10 hover:text-white hover:scale-105'
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
        <Icon className="size-5" />
      </a>
    )
  }

  if (item.href.startsWith('tel:')) {
    return (
      <a href={item.href} className={className} aria-label={item.label}>
        <Icon className="size-5" />
      </a>
    )
  }

  return (
    <Link href={item.href} className={className} aria-label={item.label}>
      <Icon className="size-5" />
    </Link>
  )
}

export function FloatingSideBar() {
  return (
    <aside
      className="fixed right-2 top-1/2 z-40 hidden -translate-y-1/2 md:block sm:right-3"
      aria-label="Quick contact and social links"
    >
      <div className="flex flex-col items-center gap-1 rounded-2xl border border-white/10 bg-[#0B1120]/95 px-2 py-3 shadow-[0_10px_30px_rgba(11,17,32,0.3)] backdrop-blur-xl sm:px-2.5 sm:py-4">
        {primaryLinks.map((item) => (
          <SideLinkItem key={item.label} item={item} />
        ))}
        <div className="my-1 h-px w-8 bg-white/10" aria-hidden />
        {socialLinks.map((item) => (
          <SideLinkItem key={item.label} item={item} />
        ))}
      </div>
    </aside>
  )
}
