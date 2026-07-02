import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { BrandLogo } from '@/components/BrandLogo'
import { siteConfig } from '@/lib/data'
import {
  InstagramIcon,
  YouTubeIcon,
  LinkedInIcon,
  FacebookIcon,
} from '@/components/SocialIcons'

const footerSocialLinks = [
  { label: 'Instagram', href: siteConfig.social.instagram, icon: InstagramIcon },
  { label: 'YouTube', href: siteConfig.social.youtube, icon: YouTubeIcon },
  { label: 'LinkedIn', href: siteConfig.social.linkedin, icon: LinkedInIcon },
  { label: 'Facebook', href: siteConfig.social.facebook, icon: FacebookIcon },
]

function FooterDivider() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="h-px bg-gradient-to-r from-transparent via-slate-300/80 to-transparent" />
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#F8FAFC] text-[#0B1120]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_10%_0%,rgba(37,99,235,0.08),transparent_55%),radial-gradient(800px_350px_at_90%_100%,rgba(124,58,237,0.07),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.4] [background-image:linear-gradient(to_right,rgba(148,163,184,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.2)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_85%)]" />
      </div>

      {/* Main links */}
      <section className="relative py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0">
            {/* Brand */}
            <div className="flex flex-col items-center text-center sm:col-span-2 lg:col-span-2 lg:border-r lg:border-slate-200/80 lg:pr-10">
              <BrandLogo
                variant="full"
                theme="light"
                className="w-full justify-center"
                iconClassName="h-20 max-w-[340px] sm:h-24 sm:max-w-[380px] lg:h-24 lg:max-w-[420px]"
              />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
                Enterprise AI automation and custom software development. Transforming businesses worldwide.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                {footerSocialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#2563EB]/40 hover:text-[#2563EB] hover:shadow-md"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="border-t border-slate-200/80 pt-10 sm:border-t-0 sm:pt-0 lg:col-span-1 lg:border-l lg:border-slate-200/80 lg:px-6">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Services</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                {[
                  { href: '/ai-automation', label: 'AI Automation' },
                  { href: '/custom-software', label: 'Custom Software' },
                  { href: '/crm-development', label: 'CRM Development' },
                  { href: '/erp-solutions', label: 'ERP Solutions' },
                  { href: '/whatsapp-automation', label: 'WhatsApp Automation' },
                  { href: '/n8n-automation', label: 'N8N Automation' },
                  { href: '/mobile-apps', label: 'Mobile Apps' },
                  { href: '/digital-marketing', label: 'Digital Marketing' },
                  { href: '/blockchain', label: 'Blockchain' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition-colors hover:text-[#2563EB]">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div className="border-t border-slate-200/80 pt-10 sm:border-t-0 sm:pt-0 lg:col-span-1 lg:border-l lg:border-slate-200/80 lg:px-6">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Industries</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                {['Healthcare', 'Pharma', 'Manufacturing', 'Logistics', 'Retail', 'Education'].map((item) => (
                  <li key={item}>
                    <Link href="/industries" className="transition-colors hover:text-[#2563EB]">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="border-t border-slate-200/80 pt-10 sm:border-t-0 sm:pt-0 lg:col-span-1 lg:border-l lg:border-slate-200/80 lg:px-6">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Resources</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                {[
                  { href: '/about', label: 'About Us' },
                  { href: '/blog', label: 'Blog' },
                  { href: '/portfolio', label: 'Portfolio' },
                  { href: '/contact', label: 'Contact' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition-colors hover:text-[#2563EB]">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="border-t border-slate-200/80 pt-10 sm:border-t-0 sm:pt-0 lg:col-span-1 lg:border-l lg:border-slate-200/80 lg:px-6">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Contact</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#2563EB]/10">
                    <Mail className="size-4 text-[#2563EB]" />
                  </div>
                  <a href={`mailto:${siteConfig.email}`} className="pt-1 transition-colors hover:text-[#2563EB]">{siteConfig.email}</a>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#06B6D4]/10">
                    <Phone className="size-4 text-[#06B6D4]" />
                  </div>
                  <a
                    href={`tel:${siteConfig.phoneTel}`}
                    className="pt-1 whitespace-nowrap transition-colors hover:text-[#2563EB]"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#7C3AED]/10">
                    <MapPin className="size-4 text-[#7C3AED]" />
                  </div>
                  <span className="pt-1 leading-relaxed">{siteConfig.address}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FooterDivider />

      {/* Copyright */}
      <section className="relative py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-500">© 2023 {siteConfig.name}. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
              <Link href="/privacy-policy" className="transition-colors hover:text-[#2563EB]">Privacy Policy</Link>
              <span className="hidden text-slate-300 sm:inline" aria-hidden>|</span>
              <Link href="/terms-of-service" className="transition-colors hover:text-[#2563EB]">Terms of Service</Link>
              <span className="hidden text-slate-300 sm:inline" aria-hidden>|</span>
              <Link href="/cookie-policy" className="transition-colors hover:text-[#2563EB]">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
