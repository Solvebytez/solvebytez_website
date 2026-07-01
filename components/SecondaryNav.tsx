'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { secondaryNavItems } from '@/lib/data'
import { cn } from '@/lib/utils'

export function SecondaryNav() {
  const pathname = usePathname()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    updateScrollState()
    window.addEventListener('resize', updateScrollState)
    return () => window.removeEventListener('resize', updateScrollState)
  }, [updateScrollState])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const active = el.querySelector<HTMLElement>('[data-active="true"]')
    active?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    setTimeout(updateScrollState, 300)
  }, [pathname, updateScrollState])

  const scroll = (direction: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: direction === 'left' ? -220 : 220,
      behavior: 'smooth',
    })
    setTimeout(updateScrollState, 320)
  }

  return (
    <div className="border-t border-[#E2E8F0]/60 bg-[#F1F5F9]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-1 px-2 py-2 sm:px-4">
        <button
          type="button"
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          aria-label="Scroll solutions left"
          className={cn(
            'hidden size-8 shrink-0 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white text-[#64748B] transition-all sm:inline-flex',
            canScrollLeft ? 'hover:border-[var(--brand-blue)]/30 hover:text-[var(--brand-blue)]' : 'cursor-not-allowed opacity-35'
          )}
        >
          <ChevronLeft className="size-4" />
        </button>

        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="secondary-nav-scroll flex flex-1 items-center gap-1.5 overflow-x-auto py-0.5"
        >
          {secondaryNavItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href || pathname.startsWith(`${href}/`)

            return (
              <Link
                key={href}
                href={href}
                data-active={isActive}
                className={cn(
                  'inline-flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-200 sm:px-4',
                  isActive
                    ? 'gradient-primary text-white shadow-brand-sm'
                    : 'text-[#64748B] hover:bg-white hover:text-[#0B1120] hover:shadow-sm'
                )}
              >
                <Icon className={cn('size-4 shrink-0', isActive ? 'text-white' : 'text-[#94A3B8]')} />
                <span className="whitespace-nowrap">{label}</span>
              </Link>
            )
          })}
        </div>

        <button
          type="button"
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          aria-label="Scroll solutions right"
          className={cn(
            'hidden size-8 shrink-0 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white text-[#64748B] transition-all sm:inline-flex',
            canScrollRight ? 'hover:border-[var(--brand-blue)]/30 hover:text-[var(--brand-blue)]' : 'cursor-not-allowed opacity-35'
          )}
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  )
}
