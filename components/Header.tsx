'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { navLinks, isSolutionPage } from '@/lib/data'
import { cn } from '@/lib/utils'
import { SecondaryNav } from '@/components/SecondaryNav'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const isSolutionsActive = navLinks
    .find((l) => 'children' in l && l.children)
    ?.children?.some((c) => isActive(c.href)) ?? false

  const showSecondaryNav = isSolutionPage(pathname)

  const navLinkClass = (active: boolean) =>
    cn(
      'relative rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-200',
      active
        ? 'gradient-primary font-semibold text-white shadow-brand-sm'
        : 'text-white hover:bg-white/[0.06] hover:text-white'
    )

  return (
    <>
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0B1120]/92 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-blue)]/50 to-transparent opacity-100" />

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/solvebytez-icon-white.png"
              alt=""
              width={64}
              height={64}
              className="size-11 shrink-0 object-contain sm:size-12"
              priority
            />
            <Image
              src="/solvebytez-wordmark-white.png"
              alt="Solvebytez"
              width={340}
              height={84}
              priority
              className="h-7 w-auto object-contain sm:h-8 lg:h-9"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-0.5 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-1 lg:flex">
            {navLinks.map((link) =>
              'children' in link && link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <button
                    className={cn(navLinkClass(isSolutionsActive), 'flex items-center gap-1')}
                    aria-current={isSolutionsActive ? 'page' : undefined}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn('size-4 transition-transform duration-200', solutionsOpen && 'rotate-180')}
                    />
                  </button>
                  <AnimatePresence>
                    {solutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full z-50 pt-3"
                      >
                        <div className="w-72 overflow-hidden rounded-2xl border border-white/10 bg-[#0B1120]/98 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                          <div className="mb-1 px-3 pt-1 text-[11px] font-semibold uppercase tracking-wider text-white/35">
                            Our Solutions
                          </div>
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                'group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-all',
                                isActive(child.href)
                                  ? 'gradient-primary font-semibold text-white shadow-brand-sm'
                                  : 'text-white hover:bg-white/10 hover:text-white'
                              )}
                            >
                              {child.label}
                              <ArrowRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={navLinkClass(isActive(link.href!))}
                  aria-current={isActive(link.href!) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-brand-sm transition-all hover:scale-[1.02] hover:shadow-brand-sm"
            >
              Book Consultation
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.button
                type="button"
                aria-label="Close menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={cn(
                  'fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden',
                  showSecondaryNav ? 'top-[7rem] lg:top-[7.75rem]' : 'top-16 lg:top-[4.5rem]'
                )}
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="relative z-50 overflow-hidden rounded-b-3xl border border-t-0 border-white/10 bg-[#0B1120]/98 shadow-2xl backdrop-blur-xl lg:hidden"
              >
                <div className="space-y-1 p-4 pb-6">
                  {navLinks.map((link) =>
                    'children' in link && link.children ? (
                      <div key={link.label}>
                        <button
                          onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                          className={cn(
                            'flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium',
                            isSolutionsActive
                              ? 'gradient-primary font-semibold text-white'
                              : 'text-white'
                          )}
                        >
                          {link.label}
                          <ChevronDown
                            className={cn('size-4 transition-transform', mobileSolutionsOpen && 'rotate-180')}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileSolutionsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-2 space-y-1 border-l border-white/10 py-1 pl-3">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                      'block rounded-lg px-3 py-2.5 text-sm',
                                      isActive(child.href)
                                        ? 'gradient-primary font-semibold text-white'
                                        : 'text-white/80 hover:text-white'
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href!}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'block rounded-xl px-4 py-3 text-sm font-medium',
                          isActive(link.href!)
                            ? 'gradient-primary font-semibold text-white'
                            : 'text-white hover:text-white'
                        )}
                        aria-current={isActive(link.href!) ? 'page' : undefined}
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="mt-3 flex items-center justify-center gap-2 rounded-2xl gradient-primary px-4 py-3.5 text-center text-sm font-semibold text-white shadow-brand-md"
                  >
                    Book Consultation
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {showSecondaryNav && <SecondaryNav />}
    </header>
    <div
      aria-hidden
      className={cn(
        'shrink-0',
        showSecondaryNav ? 'h-[7rem] lg:h-[7.75rem]' : 'h-16 lg:h-[4.5rem]'
      )}
    />
    </>
  )
}
