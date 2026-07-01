import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

const CONTACT_TO = process.env.CONTACT_TO_EMAIL ?? 'enquiry.solvebytez@gmail.com'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

async function sendViaFormSubmit(payload: {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}) {
  const { name, email, phone, company, service, message } = payload

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_TO)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      phone,
      company: company || '—',
      service: service || '—',
      message: message || '—',
      _subject: `New enquiry: ${service || 'General'} — ${name}`,
      _replyto: email,
      _template: 'table',
      _captcha: 'false',
    }),
  })

  const data = (await response.json().catch(() => null)) as { success?: string; message?: string } | null

  if (!response.ok || data?.success !== 'true') {
    throw new Error(data?.message ?? 'FormSubmit request failed')
  }
}

async function sendViaSmtp(payload: {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}) {
  const { name, email, phone, company, service, message } = payload
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS

  if (!smtpUser || !smtpPass) {
    throw new Error('SMTP_NOT_CONFIGURED')
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: process.env.SMTP_SECURE !== 'false',
    auth: { user: smtpUser, pass: smtpPass },
  })

  const submittedAt = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0B1120;">
      <h2 style="margin-bottom: 8px;">New website enquiry</h2>
      <p style="color: #64748B; margin-top: 0;">Submitted on ${escapeHtml(submittedAt)} (IST)</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        <tr><td style="padding: 8px 0; font-weight: bold;">Name</td><td style="padding: 8px 0;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td style="padding: 8px 0;">${escapeHtml(email)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Phone</td><td style="padding: 8px 0;">${escapeHtml(phone)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Company</td><td style="padding: 8px 0;">${escapeHtml(company || '—')}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Service</td><td style="padding: 8px 0;">${escapeHtml(service || '—')}</td></tr>
      </table>
      <h3 style="margin-top: 24px;">Message</h3>
      <p style="white-space: pre-wrap;">${escapeHtml(message || '—')}</p>
    </div>
  `

  await transporter.sendMail({
    from: `"Solvebytez Website" <${smtpUser}>`,
    to: CONTACT_TO,
    replyTo: email,
    subject: `New enquiry: ${service || 'General'} — ${name}`,
    html,
    text: [
      'New website enquiry',
      `Submitted: ${submittedAt} (IST)`,
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Company: ${company || '—'}`,
      `Service: ${service || '—'}`,
      '',
      'Message:',
      message || '—',
    ].join('\n'),
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const name = String(body.name ?? '').trim()
    const email = String(body.email ?? '').trim()
    const phone = String(body.phone ?? '').trim()
    const company = String(body.company ?? '').trim()
    const service = String(body.service ?? '').trim()
    const message = String(body.message ?? '').trim()
    const website = String(body.website ?? '').trim()

    if (website) {
      return NextResponse.json({ success: true })
    }

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required.' },
        { status: 400 }
      )
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    const payload = { name, email, phone, company, service, message }
    const emailProvider = process.env.CONTACT_EMAIL_PROVIDER ?? 'formsubmit'

    if (emailProvider === 'smtp') {
      await sendViaSmtp(payload)
    } else {
      await sendViaFormSubmit(payload)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)

    const message = error instanceof Error ? error.message : ''
    if (message.includes('Invalid login') || message.includes('EAUTH')) {
      return NextResponse.json(
        {
          error:
            'Gmail login failed. Use a Gmail App Password in .env.local, or keep the default FormSubmit setup.',
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to send your message. Please try again or contact us directly.' },
      { status: 500 }
    )
  }
}
