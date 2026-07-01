'use client'

import { ArrowRight } from 'lucide-react'
import { GlowButton } from '@/components/ui/primitives'
import { cn } from '@/lib/utils'

interface SectionCTAProps {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  variant?: 'light' | 'dark'
  className?: string
}

export function SectionCTA({
  title = 'Ready to automate your business?',
  description = 'Get a free 30-minute strategy session with our AI specialists — no commitment required.',
  primaryLabel = 'Book Free Consultation',
  primaryHref = '/contact',
  secondaryLabel = 'View Our Work',
  secondaryHref = '/portfolio',
  variant = 'light',
  className,
}: SectionCTAProps) {
  const dark = variant === 'dark'

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl border p-8 md:p-10 lg:p-12',
        dark
          ? 'border-white/10 bg-gradient-to-br from-[var(--brand-blue)]/20 via-white/5 to-[var(--brand-cyan)]/20'
          : 'border-[var(--brand-blue)]/15 bg-gradient-to-br from-[var(--brand-blue)]/5 via-white to-[var(--brand-cyan)]/5 shadow-sm',
        className
      )}
    >
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="max-w-xl">
          <h3
            className={cn(
              'font-heading text-xl font-bold md:text-2xl',
              dark ? 'text-white' : 'text-[#0B1120]'
            )}
          >
            {title}
          </h3>
          <p className={cn('mt-3 text-sm leading-relaxed md:text-base', dark ? 'text-white/60' : 'text-[#64748B]')}>
            {description}
          </p>
        </div>
        <div
          className={cn(
            'flex w-full flex-col gap-3 border-t pt-6 sm:flex-row sm:flex-wrap lg:w-auto lg:shrink-0 lg:border-t-0 lg:pt-0',
            dark ? 'border-white/10' : 'border-[#E2E8F0]'
          )}
        >
          <GlowButton
            href={primaryHref}
            variant="primary"
            size="md"
            className="w-full shadow-none shadow-brand-md hover:shadow-brand-md sm:w-auto"
          >
            {primaryLabel}
            <ArrowRight className="size-4" />
          </GlowButton>
          <GlowButton
            href={secondaryHref}
            variant={dark ? 'secondary' : 'outline'}
            size="md"
            className="w-full sm:w-auto"
          >
            {secondaryLabel}
          </GlowButton>
        </div>
      </div>
    </div>
  )
}
