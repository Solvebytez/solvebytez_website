'use client'

import { useState, useEffect, type FormEvent } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react'
import { siteConfig } from '@/lib/data'
import { WhatsAppIcon } from '@/components/SocialIcons'
import { motion } from 'framer-motion'

const serviceOptions = [
  'AI Automation',
  'Custom Software',
  'CRM Development',
  'ERP Solutions',
  'WhatsApp Automation',
  'N8N Automation',
  'Mobile Apps',
  'Digital Marketing',
  'Other',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [activationPending, setActivationPending] = useState(false)

  useEffect(() => {
    if (!submitted) return
    const timer = setTimeout(() => setSubmitted(false), 4000)
    return () => clearTimeout(timer)
  }, [submitted])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setActivationPending(false)
    setLoading(true)

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      phone: String(formData.get('phone') ?? '').trim(),
      company: String(formData.get('company') ?? '').trim(),
      service: String(formData.get('service') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
      website: String(formData.get('website') ?? '').trim(),
    }

    if (payload.website) {
      setSubmitted(true)
      return
    }

    if (!payload.name || !payload.email || !payload.phone) {
      setError('Name, email, and phone are required.')
      setLoading(false)
      return
    }

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.enquiryEmail)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: payload.name,
            email: payload.email,
            phone: payload.phone,
            company: payload.company || '—',
            service: payload.service || '—',
            message: payload.message || '—',
            _subject: `New enquiry: ${payload.service || 'General'} — ${payload.name}`,
            _replyto: payload.email,
            _template: 'table',
            _captcha: 'false',
          }),
        }
      )

      const data = (await response.json()) as { success?: string; message?: string }

      if (data.message?.toLowerCase().includes('activation')) {
        setActivationPending(true)
        return
      }

      if (!response.ok || data.success !== 'true') {
        throw new Error(data.message ?? 'Failed to send message. Please try again.')
      }

      setSubmitted(true)
      form.reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="relative overflow-hidden bg-[#0B1120] pt-32 pb-16">
        <div className="absolute inset-0 grid-pattern-dark opacity-30" />
        <div className="absolute left-1/4 top-0 size-72 rounded-full bg-[#2563EB]/15 blur-[100px]" />
        <div className="absolute right-1/4 bottom-0 size-64 rounded-full bg-[#7C3AED]/10 blur-[90px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Book Your Free <span className="gradient-text">AI Consultation</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/60">
            Tell us about your business challenges. Our AI specialists will craft a custom automation roadmap — completely free.
          </p>
        </div>
      </section>

      <section className="section-light py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold text-[#0B1120]">Get in Touch</h2>
              <p className="mt-4 text-[#64748B]">
                Whether you&apos;re ready to start a project or just exploring options, we&apos;re here to help.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="inline-flex items-center gap-2 rounded-2xl gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-brand-md transition-transform hover:scale-[1.02]"
                >
                  <Phone className="size-4" />
                  Call {siteConfig.phoneDisplay}
                </a>
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(37,211,102,0.3)] transition-transform hover:scale-[1.02] hover:bg-[#20BD5A]"
                >
                  <WhatsAppIcon className="size-4" />
                  WhatsApp Us
                </a>
              </div>

              <div className="mt-10 space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: siteConfig.enquiryEmail, href: `mailto:${siteConfig.enquiryEmail}` },
                  { icon: Phone, label: 'Phone', value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phoneTel}` },
                  {
                    icon: WhatsAppIcon,
                    label: 'WhatsApp',
                    value: siteConfig.phone,
                    href: siteConfig.social.whatsapp,
                    external: true,
                  },
                  { icon: MapPin, label: 'Location', value: siteConfig.address },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className={`flex size-12 items-center justify-center rounded-2xl ${
                        item.label === 'WhatsApp' ? 'bg-[#25D366]/10' : 'bg-[#2563EB]/10'
                      }`}
                    >
                      <item.icon
                        className={`size-5 ${item.label === 'WhatsApp' ? 'text-[#25D366]' : 'text-[#2563EB]'}`}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#64748B]">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={'external' in item && item.external ? '_blank' : undefined}
                          rel={'external' in item && item.external ? 'noopener noreferrer' : undefined}
                          className="font-medium text-[#0B1120] hover:text-[#2563EB]"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-[#0B1120]">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-[0_20px_60px_rgba(2,6,23,0.08)]">
              <div className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-[#2563EB]/8 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 size-48 rounded-full bg-[#7C3AED]/8 blur-3xl" />
              <div className="relative">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <CheckCircle2 className="size-16 text-[#06B6D4]" />
                    <h3 className="mt-6 font-heading text-2xl font-bold text-[#0B1120]">Thank you!</h3>
                    <p className="mt-2 text-[#64748B]">
                      Your enquiry has been sent. We&apos;ll be in touch within 24 hours to schedule your consultation.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden
                    />

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#0B1120]">
                          Full Name <span className="text-[#EF4444]">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          required
                          disabled={loading}
                          className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 disabled:opacity-60"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#0B1120]">
                          Work Email <span className="text-[#EF4444]">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          disabled={loading}
                          className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 disabled:opacity-60"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-[#0B1120]">
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          disabled={loading}
                          className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 disabled:opacity-60"
                          placeholder="Company Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[#0B1120]">
                          Phone <span className="text-[#EF4444]">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          inputMode="numeric"
                          maxLength={10}
                          disabled={loading}
                          onInput={(e) => {
                            e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '').slice(0, 10)
                          }}
                          className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 disabled:opacity-60"
                          placeholder="8888xxxxxxxx"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-[#0B1120]">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        defaultValue={serviceOptions[0]}
                        disabled={loading}
                        className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm outline-none focus:border-[#2563EB] disabled:opacity-60"
                      >
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#0B1120]">
                        Tell us about your project
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        disabled={loading}
                        className="w-full resize-none rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 disabled:opacity-60"
                        placeholder="Describe your business challenges and goals..."
                      />
                    </div>

                    {activationPending && (
                      <div className="rounded-xl border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-4 text-sm text-[#1E40AF]">
                        <p className="font-semibold">One-time email activation required</p>
                        <p className="mt-2">
                          We&apos;ve sent an email to{' '}
                          <strong>{siteConfig.enquiryEmail}</strong>. Open that inbox (check Spam too),
                          click <strong>Activate Form</strong>, then submit this form again.
                        </p>
                      </div>
                    )}

                    {error && (
                      <p className="rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm text-[#DC2626]">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="flex w-full items-center justify-center gap-2 rounded-2xl gradient-primary py-4 font-semibold text-white transition-all hover:shadow-brand-glow disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="size-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Book Free Consultation
                          <Send className="size-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
