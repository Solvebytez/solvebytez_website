import {
  Bot,
  MessageCircle,
  Users,
  Building2,
  Mic,
  Workflow,
  BarChart3,
  Code2,
  Smartphone,
  Cloud,
  Megaphone,
  Network,
  Blocks,
  Factory,
  HeartPulse,
  Pill,
  Truck,
  GraduationCap,
  Hotel,
  ShoppingBag,
  HardHat,
  Landmark,
  Home,
  Settings,
  Zap,
  Target,
  ShieldCheck,
  LineChart,
  type LucideIcon,
} from 'lucide-react'

export const siteConfig = {
  name: 'Solvebytez',
  tagline: 'Automate Your Business. Accelerate Your Growth with AI.',
  description:
    'We help businesses eliminate manual work through AI-powered automation, custom software, intelligent workflows, WhatsApp automation, CRM, ERP, and mobile applications.',
  url: 'https://solvebytez.com',
  email: 'info@solvebytez.com',
  enquiryEmail: 'enquiry.solvebytez@gmail.com',
  phone: '+919599179795',
  phoneDisplay: '+91-9599179795',
  phoneTel: '+919599179795',
  address: 'AHS-318, Aditya High Street, Lal Kuan, Ghaziabad - U.P. 201009',
  social: {
    whatsapp:
      'https://wa.me/919599179795?text=Hello%20Solvebytez%2C%20I%20would%20like%20to%20discuss%20your%20services.',
    instagram: 'https://www.instagram.com/solve_bytez_/',
    youtube: 'https://www.youtube.com/@SolveBytez',
    linkedin: 'https://www.linkedin.com/in/solvebytez-it-company/',
    facebook: 'https://www.facebook.com/profile.php?id=61566049449530',
  },
}

export const clientLogos = [
  'Meridian Health',
  'NovaPharma',
  'Apex Logistics',
  'Vertex Retail',
  'Summit Hotels',
  'Pinnacle Mfg',
  'Horizon Edu',
  'Crest Finance',
]

export const problems: { problem: string; solution: string; icon: LucideIcon }[] = [
  {
    problem: 'Manual Processes',
    solution: 'AI workflows that run 24/7 without human intervention',
    icon: Settings,
  },
  {
    problem: 'Excel Dependency',
    solution: 'Real-time dashboards replacing spreadsheets forever',
    icon: BarChart3,
  },
  {
    problem: 'Slow Operations',
    solution: 'Automated pipelines that cut processing time by 70%',
    icon: Zap,
  },
  {
    problem: 'No CRM',
    solution: 'Custom CRM built for your exact sales process',
    icon: Users,
  },
  {
    problem: 'Lost Leads',
    solution: 'AI agents that capture and nurture every lead instantly',
    icon: Target,
  },
  {
    problem: 'Human Errors',
    solution: 'Intelligent validation eliminating costly mistakes',
    icon: ShieldCheck,
  },
  {
    problem: 'Delayed Reports',
    solution: 'Live analytics delivered to your inbox automatically',
    icon: LineChart,
  },
]

export const solutions: { title: string; description: string; icon: LucideIcon; href: string }[] = [
  { title: 'AI Chatbot', description: 'Intelligent conversational agents for customer support and sales.', icon: Bot, href: '/ai-automation' },
  { title: 'WhatsApp Automation', description: 'Automate customer communication on the world\'s most popular messaging platform.', icon: MessageCircle, href: '/whatsapp-automation' },
  { title: 'CRM Development', description: 'Custom CRM systems tailored to your unique sales workflow.', icon: Users, href: '/crm-development' },
  { title: 'ERP Solutions', description: 'Enterprise resource planning that unifies your entire operation.', icon: Building2, href: '/erp-solutions' },
  { title: 'AI Voice Agent', description: 'Natural voice AI for calls, reception, and customer service.', icon: Mic, href: '/ai-automation' },
  { title: 'Workflow Automation', description: 'End-to-end process automation connecting all your tools.', icon: Workflow, href: '/ai-automation' },
  { title: 'N8N Automation', description: 'Self-hosted workflow automation connecting 400+ apps without code.', icon: Network, href: '/n8n-automation' },
  { title: 'Business Intelligence', description: 'Real-time dashboards and predictive analytics for smarter decisions.', icon: BarChart3, href: '/ai-automation' },
  { title: 'Custom Software', description: 'Bespoke applications built to solve your specific challenges.', icon: Code2, href: '/custom-software' },
  { title: 'Mobile Apps', description: 'Native and cross-platform apps for iOS and Android.', icon: Smartphone, href: '/mobile-apps' },
  { title: 'Digital Marketing', description: 'SEO, social media, paid ads, and lead generation that drive growth.', icon: Megaphone, href: '/digital-marketing' },
  { title: 'Blockchain Solutions', description: 'Smart contracts, DApps, Web3, NFT platforms, and DeFi development.', icon: Blocks, href: '/blockchain' },
  { title: 'Cloud Solutions', description: 'Scalable cloud infrastructure and migration services.', icon: Cloud, href: '/custom-software' },
]

export const industries: { title: string; icon: LucideIcon; description: string }[] = [
  { title: 'Manufacturing', icon: Factory, description: 'Smart factory automation and production optimization.' },
  { title: 'Healthcare', icon: HeartPulse, description: 'Patient management and clinical workflow automation.' },
  { title: 'Pharma', icon: Pill, description: 'Compliance tracking and supply chain intelligence.' },
  { title: 'Logistics', icon: Truck, description: 'Fleet management and real-time shipment tracking.' },
  { title: 'Education', icon: GraduationCap, description: 'Student portals and administrative automation.' },
  { title: 'Hotels', icon: Hotel, description: 'Guest experience and booking automation systems.' },
  { title: 'Retail', icon: ShoppingBag, description: 'Inventory, POS, and customer engagement platforms.' },
  { title: 'Construction', icon: HardHat, description: 'Project management and resource planning tools.' },
  { title: 'Finance', icon: Landmark, description: 'Fintech solutions and automated compliance.' },
  { title: 'Real Estate', icon: Home, description: 'Property management and lead automation.' },
]

export const workflowSteps = [
  { title: 'Business Analysis', description: 'Deep dive into your processes and pain points' },
  { title: 'Automation Strategy', description: 'Custom roadmap for maximum ROI' },
  { title: 'Development', description: 'Agile build with weekly progress updates' },
  { title: 'AI Integration', description: 'Seamless AI layer across your systems' },
  { title: 'Testing', description: 'Rigorous QA ensuring flawless performance' },
  { title: 'Deployment', description: 'Zero-downtime launch and migration' },
  { title: 'Support', description: '24/7 monitoring and continuous optimization' },
]

export const products = [
  { title: 'AI Receptionist', description: '24/7 intelligent front desk handling calls and inquiries', gradient: 'from-blue-500/20 to-cyan-500/20' },
  { title: 'AI Sales Agent', description: 'Automated lead qualification and follow-up sequences', gradient: 'from-violet-500/20 to-purple-500/20' },
  { title: 'WhatsApp AI Assistant', description: 'Conversational commerce and support on WhatsApp', gradient: 'from-green-500/20 to-emerald-500/20' },
  { title: 'Inventory Automation', description: 'Smart stock management with predictive reordering', gradient: 'from-orange-500/20 to-amber-500/20' },
  { title: 'Employee Portal', description: 'Self-service HR, payroll, and attendance management', gradient: 'from-pink-500/20 to-rose-500/20' },
  { title: 'CRM Dashboard', description: '360° customer view with pipeline analytics', gradient: 'from-blue-500/20 to-indigo-500/20' },
  { title: 'ERP Dashboard', description: 'Unified operations control center', gradient: 'from-violet-500/20 to-fuchsia-500/20' },
  { title: 'Lead Management', description: 'Capture, score, and convert leads automatically', gradient: 'from-cyan-500/20 to-teal-500/20' },
  { title: 'Task Management', description: 'AI-powered project and task orchestration', gradient: 'from-yellow-500/20 to-orange-500/20' },
  { title: 'Analytics', description: 'Real-time business intelligence and forecasting', gradient: 'from-indigo-500/20 to-blue-500/20' },
]

export const features = [
  { title: 'AI Powered', description: 'Cutting-edge machine learning at the core of every solution' },
  { title: 'Cloud Based', description: 'Access your systems anywhere, anytime, on any device' },
  { title: 'Secure', description: 'Enterprise-grade encryption and compliance standards' },
  { title: 'Scalable', description: 'Grows seamlessly from startup to enterprise scale' },
  { title: 'Fast Deployment', description: 'Go live in weeks, not months, with our agile approach' },
  { title: '24×7 Support', description: 'Round-the-clock technical support and monitoring' },
  { title: 'API Integration', description: 'Connect with 500+ tools and platforms effortlessly' },
  { title: 'Real-time Analytics', description: 'Live dashboards with actionable business insights' },
]

export const whyChoose = [
  { title: '100+ Projects', description: 'Proven track record across diverse industries worldwide' },
  { title: 'Industry Expertise', description: 'Deep domain knowledge in healthcare, pharma, logistics & more' },
  { title: 'Dedicated Team', description: 'Your own squad of developers, designers, and AI specialists' },
  { title: 'Custom Development', description: 'No templates — every solution built from scratch for you' },
  { title: 'AI Specialists', description: 'Certified AI engineers with production-grade experience' },
  { title: 'Affordable Enterprise', description: 'Enterprise quality at competitive, transparent pricing' },
]

export const metrics = [
  { value: 100, suffix: '+', label: 'Projects Delivered' },
  { value: 95, suffix: '%', label: 'Client Satisfaction' },
  { value: 40, suffix: '%', label: 'Operational Cost Reduction' },
  { value: 3, suffix: 'X', label: 'Business Productivity' },
]

export const caseStudies = [
  {
    client: 'Meridian Health Group',
    industry: 'Healthcare',
    problem: 'Manual patient scheduling causing 40% no-show rates and staff burnout.',
    solution: 'AI-powered scheduling system with WhatsApp reminders and automated follow-ups.',
    results: '65% reduction in no-shows, 3x faster appointment booking, $2M annual savings.',
    gradient: 'from-blue-600/30 to-cyan-600/30',
  },
  {
    client: 'NovaPharma International',
    industry: 'Pharma',
    problem: 'Disconnected inventory systems leading to stockouts and compliance risks.',
    solution: 'Custom ERP with AI demand forecasting and automated compliance reporting.',
    results: '99.2% inventory accuracy, 50% faster compliance audits, zero stockouts in 12 months.',
    gradient: 'from-violet-600/30 to-purple-600/30',
  },
  {
    client: 'Apex Logistics Corp',
    industry: 'Logistics',
    problem: 'Delayed shipments and poor visibility across 200+ delivery routes.',
    solution: 'Real-time fleet tracking dashboard with AI route optimization.',
    results: '35% faster deliveries, 28% fuel cost reduction, 98% on-time delivery rate.',
    gradient: 'from-cyan-600/30 to-teal-600/30',
  },
]

export const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, Meridian Health Group',
    content:
      'Solvebytez transformed our entire patient workflow. The AI automation saved us hundreds of hours monthly and our patient satisfaction scores have never been higher.',
    rating: 5,
  },
  {
    name: 'Raj Patel',
    role: 'COO, NovaPharma International',
    content:
      'Their ERP solution is world-class. We went from spreadsheet chaos to a unified system that our entire team loves using. ROI was visible within 3 months.',
    rating: 5,
  },
  {
    name: 'Michael Torres',
    role: 'Director of Operations, Apex Logistics',
    content:
      'The WhatsApp automation alone transformed our customer communication. Response times dropped from hours to seconds. Truly enterprise-grade work.',
    rating: 5,
  },
]

export const faqs = [
  {
    question: 'How long does it take to implement AI automation?',
    answer: 'Most projects go live within 4-8 weeks depending on complexity. We use an agile approach with weekly demos so you see progress from day one.',
  },
  {
    question: 'Do you work with small businesses or only enterprises?',
    answer: 'We serve everyone from startups to Fortune 500 companies. Our solutions scale with your business — start small and expand as you grow.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We have deep expertise in healthcare, pharma, manufacturing, logistics, retail, hospitality, education, finance, and real estate.',
  },
  {
    question: 'Can you integrate with our existing software?',
    answer: 'Absolutely. We integrate with 500+ platforms including Salesforce, SAP, HubSpot, Zoho, and custom legacy systems via APIs.',
  },
  {
    question: 'What does the free consultation include?',
    answer: 'A 30-minute strategy session with our AI specialists. We analyze your current processes, identify automation opportunities, and provide a custom roadmap with ROI projections.',
  },
  {
    question: 'Do you provide ongoing support after deployment?',
    answer: 'Yes. We offer 24/7 monitoring, regular updates, performance optimization, and dedicated account management as part of our support packages.',
  },
]

export const navLinks = [
  { href: '/', label: 'Home' },
  {
    label: 'Solutions',
    children: [
      { href: '/ai-automation', label: 'AI Automation' },
      { href: '/custom-software', label: 'Custom Software' },
      { href: '/crm-development', label: 'CRM Development' },
      { href: '/erp-solutions', label: 'ERP Solutions' },
      { href: '/whatsapp-automation', label: 'WhatsApp Automation' },
      { href: '/n8n-automation', label: 'N8N Automation' },
      { href: '/mobile-apps', label: 'Mobile Apps' },
      { href: '/digital-marketing', label: 'Digital Marketing' },
      { href: '/blockchain', label: 'Blockchain' },
    ],
  },
  { href: '/industries', label: 'Industries' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export const secondaryNavItems: { href: string; label: string; icon: LucideIcon }[] = [
  { href: '/ai-automation', label: 'AI Automation', icon: Bot },
  { href: '/custom-software', label: 'Custom Software', icon: Code2 },
  { href: '/crm-development', label: 'CRM Development', icon: Users },
  { href: '/erp-solutions', label: 'ERP Solutions', icon: Building2 },
  { href: '/whatsapp-automation', label: 'WhatsApp Automation', icon: MessageCircle },
  { href: '/n8n-automation', label: 'N8N Automation', icon: Network },
  { href: '/mobile-apps', label: 'Mobile Apps', icon: Smartphone },
  { href: '/digital-marketing', label: 'Digital Marketing', icon: Megaphone },
  { href: '/blockchain', label: 'Blockchain', icon: Blocks },
]

export function isSolutionPage(pathname: string) {
  return secondaryNavItems.some(
    (item) => pathname === item.href || pathname.startsWith(`${item.href}/`)
  )
}
