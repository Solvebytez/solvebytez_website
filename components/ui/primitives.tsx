'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  id?: string
}

export function AnimatedSection({ children, className, delay = 0, id }: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({ value, suffix = '', duration = 2, className }: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const increment = value / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  )
}

interface MarqueeProps {
  items: string[]
  className?: string
  dark?: boolean
  variant?: 'text' | 'pills'
}

export function Marquee({ items, className, dark, variant = 'text' }: MarqueeProps) {
  const doubled = [...items, ...items]

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div
        className={cn(
          'pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24',
          dark ? 'bg-gradient-to-r from-[#0B1120] to-transparent' : 'bg-gradient-to-r from-[#F8FAFC] to-transparent'
        )}
      />
      <div
        className={cn(
          'pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24',
          dark ? 'bg-gradient-to-l from-[#0B1120] to-transparent' : 'bg-gradient-to-l from-[#F8FAFC] to-transparent'
        )}
      />

      <div className="flex w-max animate-marquee whitespace-nowrap hover:[animation-play-state:paused] motion-reduce:animate-none">
        {doubled.map((item, i) =>
          variant === 'pills' ? (
            <span
              key={`${item}-${i}`}
              className="mx-2 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/70 backdrop-blur-sm"
            >
              {item}
            </span>
          ) : (
            <span
              key={`${item}-${i}`}
              className={cn(
                'mx-8 text-lg font-semibold tracking-wide',
                dark ? 'text-white/40' : 'text-[#0B1120]/30'
              )}
            >
              {item}
            </span>
          )
        )}
      </div>
    </div>
  )
}

interface GlowButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function GlowButton({ href, children, variant = 'primary', className, size = 'md' }: GlowButtonProps) {
  const sizes = { sm: 'px-5 py-2.5 text-sm', md: 'px-7 py-3.5 text-base', lg: 'px-8 py-4 text-lg' }
  const variants = {
    primary: 'gradient-primary text-white glow-blue hover:shadow-brand-glow-lg',
    secondary: 'bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20',
    outline:
      'bg-transparent text-[#0B1120] border-2 border-[#0B1120]/20 hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]',
  }

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300',
        sizes[size],
        variants[variant],
        className
      )}
    >
      {children}
    </motion.a>
  )
}

interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  dark?: boolean
  centered?: boolean
}

export function SectionHeader({ badge, title, subtitle, dark, centered = true }: SectionHeaderProps) {
  return (
    <div className={cn('mb-16', centered && 'text-center')}>
      {badge && (
        <span
          className={cn(
            'mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest',
            dark ? 'border border-[var(--brand-cyan)]/25 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)]' : 'bg-[var(--brand-blue)]/10 text-[var(--brand-blue)]'
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          'font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl',
          dark ? 'text-white' : 'text-[#0B1120]'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 max-w-2xl text-lg leading-relaxed',
            centered && 'mx-auto',
            dark ? 'text-white/60' : 'text-[#64748B]'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
