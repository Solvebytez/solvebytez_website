'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedSection, SectionHeader } from '@/components/ui/primitives'
import { products } from '@/lib/data'
import { cn } from '@/lib/utils'

export function ProductShowcaseSection() {
  const [active, setActive] = useState(0)

  return (
    <AnimatedSection className="section-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Products"
          title="Intelligent Products, Real Results"
          subtitle="Pre-built AI solutions that deploy fast and scale with your business."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product list */}
          <div className="space-y-2">
            {products.map((product, i) => (
              <button
                key={product.title}
                onClick={() => setActive(i)}
                className={cn(
                  'flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300',
                  active === i
                    ? 'border-[#2563EB]/30 bg-white shadow-lg'
                    : 'border-transparent bg-transparent hover:bg-white/80'
                )}
              >
                <div className={cn('size-3 rounded-full transition-colors', active === i ? 'bg-[#2563EB]' : 'bg-[#E2E8F0]')} />
                <div>
                  <h3 className="font-heading text-sm font-bold text-[#0B1120]">{product.title}</h3>
                  <p className="text-xs text-[#64748B]">{product.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Product preview */}
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-xl"
          >
            <div className={cn('absolute inset-0 bg-gradient-to-br opacity-50', products[active].gradient)} />
            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">Product Preview</span>
              <h3 className="mt-2 font-heading text-3xl font-bold text-[#0B1120]">{products[active].title}</h3>
              <p className="mt-3 text-[#64748B]">{products[active].description}</p>

              {/* Mock UI */}
              <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="size-2 rounded-full bg-red-400" />
                  <div className="size-2 rounded-full bg-yellow-400" />
                  <div className="size-2 rounded-full bg-green-400" />
                </div>
                <div className="space-y-3">
                  <div className="h-3 w-3/4 rounded-full bg-[#E2E8F0]" />
                  <div className="h-3 w-1/2 rounded-full bg-[#E2E8F0]" />
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[65, 80, 45].map((w, i) => (
                      <div key={i} className="rounded-xl bg-white p-3 shadow-sm">
                        <div className="h-2 rounded-full bg-[#E2E8F0]" style={{ width: `${w}%` }} />
                        <div className="mt-2 h-8 rounded-lg bg-gradient-to-r from-[#2563EB]/20 to-[#7C3AED]/20" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 flex h-20 items-end gap-1">
                    {[30, 50, 40, 70, 55, 85, 60, 90].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-[#2563EB] to-[#06B6D4] opacity-70"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
