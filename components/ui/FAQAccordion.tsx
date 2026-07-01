'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

export function FAQAccordion({ items, dark }: { items: FAQItem[]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={item.question}
          className={cn(
            'overflow-hidden rounded-2xl border transition-colors',
            dark
              ? 'border-white/10 bg-white/5 hover:border-white/20'
              : 'border-[#E2E8F0] bg-white hover:border-[#2563EB]/30'
          )}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 p-6 text-left"
            aria-expanded={open === i}
          >
            <span className={cn('font-heading text-base font-semibold md:text-lg', dark ? 'text-white' : 'text-[#0B1120]')}>
              {item.question}
            </span>
            <motion.span animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className={cn('size-5 shrink-0', dark ? 'text-[#06B6D4]' : 'text-[#2563EB]')} />
            </motion.span>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className={cn('px-6 pb-6 leading-relaxed', dark ? 'text-white/60' : 'text-[#64748B]')}>
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
