import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/data'
import { cn } from '@/lib/utils'

interface BrandLogoProps {
  variant?: 'icon' | 'full'
  theme?: 'dark' | 'light'
  className?: string
  textClassName?: string
  iconClassName?: string
}

export function BrandLogo({
  variant = 'icon',
  theme = 'light',
  className,
  textClassName,
  iconClassName,
}: BrandLogoProps) {
  if (variant === 'full') {
    return (
      <Link href="/" className={cn('group inline-flex shrink-0 items-center', className)}>
        <Image
          src="/solvebytez-logo.png"
          alt="Solvebytez — Where Ideas Meet Intelligent Execution"
          width={340}
          height={120}
          priority
          className={cn(
            'h-14 w-auto max-w-[320px] object-contain object-left transition-opacity group-hover:opacity-90 sm:h-[3.75rem] sm:max-w-[380px] lg:h-20 lg:max-w-[460px]',
            theme === 'dark' && 'brightness-0 invert',
            iconClassName
          )}
        />
      </Link>
    )
  }

  return (
    <Link href="/" className={cn('flex items-center gap-2.5', className)}>
      <Image
        src="/logo-icon.png"
        alt={`${siteConfig.name} logo`}
        width={40}
        height={40}
        className={cn('size-9 shrink-0 object-contain', iconClassName)}
        priority
      />
      <span className={cn('font-heading text-xl font-bold', textClassName)}>{siteConfig.name}</span>
    </Link>
  )
}
