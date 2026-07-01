'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Phone, X } from 'lucide-react'
import { siteConfig } from '@/lib/data'
import { WhatsAppIcon } from '@/components/SocialIcons'
import { cn } from '@/lib/utils'

export function FloatingCTA() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  const hiddenOnContact = pathname === '/contact'

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (hiddenOnContact || dismissed) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-4 z-50 flex max-w-[calc(100vw-2rem)] flex-col items-end gap-2 sm:bottom-6 md:right-6 lg:right-16"
        >
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="flex size-8 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#64748B] shadow-md transition-colors hover:text-[#0B1120]"
            aria-label="Dismiss"
          >
            <X className="size-4" />
          </button>

          <div className="flex flex-col items-end gap-2">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className={cn(
                'group flex items-center gap-3 rounded-2xl gradient-primary px-5 py-3.5 text-sm font-semibold text-white shadow-brand-lg transition-all',
                'hover:shadow-brand-glow sm:px-6 sm:py-4 sm:text-base'
              )}
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-white/15">
                <Phone className="size-4" />
              </span>
              <span className="text-left leading-tight">
                <span className="block text-[10px] font-medium uppercase tracking-wider text-white/70 sm:text-xs">
                  Free consultation
                </span>
                <span>Call Now — {siteConfig.phoneDisplay}</span>
              </span>
              <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-[#25D366]/30 bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-all hover:bg-[#20BD5A] sm:px-6"
            >
              <WhatsAppIcon className="size-5" />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
