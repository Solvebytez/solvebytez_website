import type { LegalSection } from '@/components/LegalPageLayout'

export const legalLastUpdated = 'July 1, 2026'

export const privacyPolicySections: LegalSection[] = [
  {
    id: 'introduction',
    title: '1. Introduction',
    paragraphs: [
      'Solvebytez provides AI automation, custom software development, CRM/ERP solutions, mobile applications, digital marketing, and related IT consulting services. This Privacy Policy explains how we collect, use, store, and protect personal and business information when you visit our website, submit inquiries, or engage our services.',
      'By using our website or services, you agree to the practices described in this policy. If you do not agree, please discontinue use of our website and contact us to discuss alternatives.',
    ],
  },
  {
    id: 'information-we-collect',
    title: '2. Information We Collect',
    paragraphs: ['We may collect the following categories of information:'],
    list: [
      'Contact details: name, email address, phone number, company name, job title, and project requirements submitted through forms or email.',
      'Business information: industry, service interests, technical requirements, and communications related to proposals, contracts, or support.',
      'Technical data: IP address, browser type, device information, pages visited, referral URLs, and usage analytics when you browse our website.',
      'Project and client data: information you provide for software development, automation, hosting integrations, or managed services — processed only as needed to deliver agreed work.',
      'Payment and billing data: invoicing details processed through secure third-party payment providers where applicable.',
    ],
  },
  {
    id: 'how-we-use',
    title: '3. How We Use Your Information',
    list: [
      'Respond to consultation requests, support tickets, and sales inquiries.',
      'Design, develop, deploy, and maintain software, AI workflows, and automation solutions.',
      'Send service updates, project communications, and marketing messages where you have opted in.',
      'Improve website performance, security, and user experience through analytics.',
      'Comply with legal obligations, enforce agreements, and protect against fraud or misuse.',
    ],
  },
  {
    id: 'legal-basis',
    title: '4. Legal Basis for Processing',
    paragraphs: [
      'We process personal data based on your consent (e.g., contact forms, marketing opt-ins), performance of a contract (client projects and deliverables), legitimate business interests (website security, analytics, B2B outreach), and compliance with applicable laws in India and other jurisdictions where we operate.',
    ],
  },
  {
    id: 'sharing',
    title: '5. Data Sharing & Third Parties',
    paragraphs: [
      'We do not sell your personal data. We may share information with trusted service providers who assist us in operating our business, such as cloud hosting providers, email platforms, analytics tools, payment processors, and development infrastructure — only to the extent necessary and under appropriate confidentiality obligations.',
      'We may also disclose information if required by law, court order, or government authority, or to protect the rights, property, or safety of Solvebytez, our clients, or others.',
    ],
  },
  {
    id: 'retention-security',
    title: '6. Data Retention & Security',
    paragraphs: [
      'We retain personal data only as long as needed for the purposes described in this policy, including active client relationships, legal record-keeping, and dispute resolution. Project files, credentials, and client systems are handled using industry-standard security practices including access controls, encrypted transmission where supported, and least-privilege access for our team.',
      'While we implement reasonable safeguards, no method of transmission or storage is 100% secure. You are responsible for maintaining the confidentiality of any credentials shared with us for integrations.',
    ],
  },
  {
    id: 'your-rights',
    title: '7. Your Rights',
    list: [
      'Request access to personal data we hold about you.',
      'Request correction of inaccurate or incomplete information.',
      'Request deletion of data where legally permissible.',
      'Withdraw consent for marketing communications at any time.',
      'Object to or restrict certain processing activities where applicable under law.',
    ],
    paragraphs: [
      'To exercise these rights, email us at info@solvebytez.com. We will respond within a reasonable timeframe as required by applicable regulations.',
    ],
  },
  {
    id: 'international',
    title: '8. International Transfers',
    paragraphs: [
      'As an IT services company, we may use cloud infrastructure or tools located outside India. Where data is transferred internationally, we take steps to ensure appropriate safeguards are in place consistent with applicable data protection requirements.',
    ],
  },
  {
    id: 'children',
    title: '9. Children\'s Privacy',
    paragraphs: [
      'Our website and B2B services are not directed at individuals under 18 years of age. We do not knowingly collect personal information from children.',
    ],
  },
  {
    id: 'changes',
    title: '10. Changes to This Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. The revised version will be posted on this page with an updated date. Continued use of our website after changes constitutes acceptance of the updated policy.',
    ],
  },
]

export const termsOfServiceSections: LegalSection[] = [
  {
    id: 'agreement',
    title: '1. Agreement to Terms',
    paragraphs: [
      'These Terms of Service ("Terms") govern your access to the Solvebytez website and your use of our IT services, including AI automation, custom software, CRM/ERP development, mobile apps, WhatsApp automation, N8N workflows, digital marketing, and related consulting.',
      'By accessing our website or engaging our services, you agree to these Terms. If you are entering into a separate signed contract or statement of work (SOW), that document will prevail where it conflicts with these general Terms.',
    ],
  },
  {
    id: 'services',
    title: '2. Services & Scope',
    paragraphs: [
      'Solvebytez delivers technology solutions based on agreed proposals, statements of work, or service agreements. Scope, timelines, deliverables, and fees are defined in writing before project commencement unless otherwise agreed for small advisory engagements.',
    ],
    list: [
      'We may use third-party APIs, cloud platforms, AI models, and open-source libraries as part of delivery.',
      'Client is responsible for providing timely access, content, approvals, and third-party accounts required for project execution.',
      'Features, integrations, or timelines may change if requirements change; change requests may affect cost and schedule.',
    ],
  },
  {
    id: 'client-responsibilities',
    title: '3. Client Responsibilities',
    list: [
      'Provide accurate information and lawful content for websites, apps, automations, and campaigns.',
      'Ensure you have rights to data, trademarks, and materials supplied to us.',
      'Review deliverables within agreed review periods and provide consolidated feedback.',
      'Maintain backups of critical business data unless backup is explicitly included in scope.',
      'Comply with applicable laws for your industry, including data protection and messaging regulations (e.g., WhatsApp Business policies).',
    ],
  },
  {
    id: 'fees-payment',
    title: '4. Fees, Invoicing & Payment',
    paragraphs: [
      'Fees are quoted in Indian Rupees (INR) or other currency as specified in your proposal. Unless stated otherwise, invoices are due within the payment terms specified on the invoice. Late payments may pause work, withhold deliverables, or incur interest as permitted by law.',
      'Deposits, milestone payments, and retainers may be required before work begins. Taxes, government levies, and third-party license costs are the client\'s responsibility unless explicitly included.',
    ],
  },
  {
    id: 'intellectual-property',
    title: '5. Intellectual Property',
    paragraphs: [
      'Upon full payment for custom deliverables specifically created for the client, ownership of the final agreed deliverables (excluding pre-existing tools, frameworks, templates, and reusable components) transfers to the client as defined in the project agreement.',
      'Solvebytez retains ownership of its proprietary methodologies, internal libraries, know-how, and general-purpose code not unique to the client project. We grant the client a license to use included third-party components according to those providers\' terms.',
    ],
  },
  {
    id: 'confidentiality',
    title: '6. Confidentiality',
    paragraphs: [
      'Both parties agree to keep confidential any non-public business, technical, or financial information disclosed during the engagement, except where disclosure is required by law or necessary to perform the services. Confidentiality obligations survive termination of the engagement.',
    ],
  },
  {
    id: 'warranties',
    title: '7. Warranties & Disclaimers',
    paragraphs: [
      'We warrant that services will be performed with reasonable skill and care consistent with industry standards. Except as expressly stated in a signed agreement, services and the website are provided "as is" without warranties of uninterrupted operation, error-free performance, or fitness for a particular purpose.',
      'AI-generated outputs, automation workflows, and third-party platform behavior may require ongoing monitoring, tuning, and human oversight. We do not guarantee specific business results, revenue, rankings, or uptime of external platforms.',
    ],
  },
  {
    id: 'limitation',
    title: '8. Limitation of Liability',
    paragraphs: [
      'To the maximum extent permitted by law, Solvebytez shall not be liable for indirect, incidental, special, consequential, or punitive damages, including lost profits, data loss, or business interruption. Our total liability for any claim arising from services shall not exceed the fees paid by the client for the specific project giving rise to the claim during the twelve (12) months preceding the claim, unless a higher limit is agreed in writing.',
    ],
  },
  {
    id: 'termination',
    title: '9. Termination',
    paragraphs: [
      'Either party may terminate an engagement according to the termination clause in the applicable contract. Upon termination, the client remains responsible for fees for work completed and non-cancellable third-party costs. We may suspend or terminate access to our website or services for violation of these Terms or unlawful use.',
    ],
  },
  {
    id: 'governing-law',
    title: '10. Governing Law & Disputes',
    paragraphs: [
      'These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Ghaziabad, Uttar Pradesh, unless otherwise agreed in a signed contract. Parties will attempt good-faith resolution before initiating formal proceedings.',
    ],
  },
]

export const cookiePolicySections: LegalSection[] = [
  {
    id: 'what-are-cookies',
    title: '1. What Are Cookies?',
    paragraphs: [
      'Cookies are small text files stored on your device when you visit a website. They help websites remember preferences, understand how visitors use the site, and improve performance. Similar technologies such as local storage and pixels may also be used for comparable purposes.',
    ],
  },
  {
    id: 'how-we-use',
    title: '2. How Solvebytez Uses Cookies',
    paragraphs: [
      'We use cookies and similar technologies on solvebytez.com to operate the website, analyze traffic, remember preferences, and improve our marketing and user experience. The specific cookies used may change as we update our site or tools.',
    ],
  },
  {
    id: 'types',
    title: '3. Types of Cookies We Use',
    list: [
      'Strictly necessary cookies: required for core site functionality, security, and form submissions.',
      'Performance & analytics cookies: help us understand page views, traffic sources, and user behavior (e.g., via analytics platforms).',
      'Functional cookies: remember choices such as language or region where supported.',
      'Marketing cookies: may be used to measure campaign effectiveness or deliver relevant content on third-party platforms.',
    ],
  },
  {
    id: 'third-party',
    title: '4. Third-Party Cookies',
    paragraphs: [
      'Some cookies are placed by third-party services embedded in our website, such as analytics providers, hosting/CDN services, video embeds, or social media widgets. These providers have their own privacy and cookie policies. We encourage you to review their documentation.',
    ],
  },
  {
    id: 'managing',
    title: '5. Managing Your Cookie Preferences',
    paragraphs: [
      'You can control or delete cookies through your browser settings. Most browsers allow you to block all cookies, block third-party cookies only, or clear cookies when you close the browser. Disabling certain cookies may affect website functionality.',
    ],
    list: [
      'Chrome: Settings → Privacy and security → Cookies and other site data',
      'Safari: Preferences → Privacy → Manage Website Data',
      'Firefox: Settings → Privacy & Security → Cookies and Site Data',
      'Edge: Settings → Cookies and site permissions',
    ],
  },
  {
    id: 'do-not-track',
    title: '6. Do Not Track',
    paragraphs: [
      'Some browsers offer a "Do Not Track" signal. There is no uniform industry standard for responding to DNT signals. We currently do not respond to DNT signals but review our practices as standards evolve.',
    ],
  },
  {
    id: 'updates-contact',
    title: '7. Updates & Contact',
    paragraphs: [
      'We may update this Cookie Policy when we change website technologies or legal requirements. Please check this page periodically for updates. For questions about cookies or data use, contact info@solvebytez.com.',
    ],
  },
]
