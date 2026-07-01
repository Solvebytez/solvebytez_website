'use client'

import { useEffect, useId, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatedSection, SectionHeader } from '@/components/ui/primitives'
import { SectionCTA } from '@/components/SectionCTA'
import { cn } from '@/lib/utils'

export type WorkflowTimelineStep = {
  title: string
  description: string
}

interface WorkflowTimelineProps {
  badge?: string
  title: string
  subtitle: string
  steps: WorkflowTimelineStep[]
  cta?: {
    title: string
    description: string
    primaryLabel?: string
    primaryHref?: string
  }
  className?: string
  wrapInAnimatedSection?: boolean
}

export function WorkflowTimeline({
  badge = 'Our Process',
  title,
  subtitle,
  steps,
  cta,
  className,
  wrapInAnimatedSection = false,
}: WorkflowTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null)
  const scopeId = useId().replace(/:/g, '')

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (!timelineRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(`.workflow-step-${scopeId}`, {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
      })

      gsap.from(`.workflow-line-${scopeId}`, {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 1,
        },
        scaleX: 0,
        transformOrigin: 'left center',
      })
    }, timelineRef)

    return () => ctx.revert()
  }, [scopeId, steps.length])

  if (!steps.length) return null

  const inner = (
    <>
      <div className="absolute inset-0 grid-pattern-dark opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader badge={badge} title={title} subtitle={subtitle} dark />

        <div ref={timelineRef} className="relative mt-4">
          {/* Desktop horizontal timeline — same as homepage */}
          <div className="hidden lg:block">
            <div
              className={cn(
                'workflow-line',
                `workflow-line-${scopeId}`,
                'absolute left-0 right-0 top-12 h-0.5 bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4]'
              )}
            />
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
            >
              {steps.map((step, i) => (
                <div
                  key={`${step.title}-${i}`}
                  className={cn('workflow-step', `workflow-step-${scopeId}`, 'text-center')}
                >
                  <div className="relative mx-auto mb-6 flex size-24 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2563EB]/20 to-[#7C3AED]/20 animate-pulse-glow" />
                    <div className="relative flex size-16 items-center justify-center rounded-full border border-white/20 bg-[#0B1120] font-heading text-xl font-bold text-white">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <h3 className="font-heading text-sm font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/50">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline — same as homepage */}
          <div className="space-y-6 lg:hidden">
            {steps.map((step, i) => (
              <motion.div
                key={`${step.title}-mobile-${i}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="flex size-12 items-center justify-center rounded-full border border-[#2563EB]/50 bg-[#2563EB]/10 font-heading text-sm font-bold text-[#06B6D4]">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="mt-2 h-full w-px bg-gradient-to-b from-[#2563EB] to-[#7C3AED]" />
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="font-heading text-base font-bold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm text-white/50">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {cta && (
          <SectionCTA
            className="mt-16"
            variant="dark"
            title={cta.title}
            description={cta.description}
            primaryLabel={cta.primaryLabel ?? 'Book Free Consultation'}
            primaryHref={cta.primaryHref ?? '/contact'}
          />
        )}
      </div>
    </>
  )

  if (wrapInAnimatedSection) {
    return (
      <AnimatedSection className={cn('section-dark relative overflow-hidden py-24 lg:py-32', className)}>
        {inner}
      </AnimatedSection>
    )
  }

  return (
    <div className={cn('section-dark relative overflow-hidden py-24 lg:py-32', className)}>
      {inner}
    </div>
  )
}
