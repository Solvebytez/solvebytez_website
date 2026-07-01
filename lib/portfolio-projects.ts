export type PortfolioCategory =
  | 'All'
  | 'Enterprise'
  | 'E-Commerce'
  | 'Manufacturing'
  | 'Telecom'
  | 'Real Estate'
  | 'Healthcare & NGO'
  | 'Engineering'
  | 'Retail'
  | 'Mobile Apps'

export interface PortfolioProject {
  id: string
  name: string
  url: string
  domain: string
  category: Exclude<PortfolioCategory, 'All'>
  featured?: boolean
  region?: string
  store?: 'App Store' | 'Google Play'
  platform?: 'iOS' | 'Android'
}

export function getProjectSlug(domain: string) {
  return domain.replace(/\./g, '-')
}

export function getLocalPreviewPath(domain: string) {
  return `/portfolio/${getProjectSlug(domain)}.jpg`
}

export function getProjectSubtitle(project: PortfolioProject) {
  if (project.store && project.platform) return `${project.store} · ${project.platform}`
  return project.domain
}

export function getProjectLinkLabel(project: PortfolioProject) {
  if (project.store === 'App Store') return 'View on App Store'
  if (project.store === 'Google Play') return 'View on Google Play'
  return 'Visit live site'
}

export const portfolioCategories: PortfolioCategory[] = [
  'All',
  'Enterprise',
  'E-Commerce',
  'Manufacturing',
  'Telecom',
  'Real Estate',
  'Healthcare & NGO',
  'Engineering',
  'Retail',
  'Mobile Apps',
]

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '01',
    name: 'Welspun',
    url: 'http://www.welspun.com/',
    domain: 'welspun.com',
    category: 'Enterprise',
    featured: true,
    region: 'Global',
  },
  {
    id: '02',
    name: 'Crompton',
    url: 'https://www.crompton.co.in/',
    domain: 'crompton.co.in',
    category: 'Enterprise',
    featured: true,
    region: 'India',
  },
  {
    id: '03',
    name: 'Houbigant Parfum',
    url: 'https://www.houbigant-parfum.com/',
    domain: 'houbigant-parfum.com',
    category: 'Enterprise',
    featured: true,
    region: 'International',
  },
  {
    id: '04',
    name: 'Bluestone',
    url: 'https://www.bluestone.com/',
    domain: 'bluestone.com',
    category: 'Enterprise',
    featured: true,
    region: 'India',
  },
  {
    id: '05',
    name: 'Make My Canvas',
    url: 'https://makemycanvas.in/',
    domain: 'makemycanvas.in',
    category: 'E-Commerce',
    region: 'India',
  },
  {
    id: '06',
    name: 'Make My Chairs',
    url: 'https://www.makemychairs.com/',
    domain: 'makemychairs.com',
    category: 'E-Commerce',
    region: 'India',
  },
  {
    id: '07',
    name: 'Gurudas Crafts',
    url: 'https://gurudascrafts.com/Product_view.php?categories=10',
    domain: 'gurudascrafts.com',
    category: 'E-Commerce',
    region: 'India',
  },
  {
    id: '08',
    name: 'Blanq Canvas',
    url: 'https://blanqcanvas.co.uk/',
    domain: 'blanqcanvas.co.uk',
    category: 'E-Commerce',
    region: 'UK',
  },
  {
    id: '09',
    name: 'Goodvel',
    url: 'https://goodvel.com/',
    domain: 'goodvel.com',
    category: 'E-Commerce',
    region: 'India',
  },
  {
    id: '12',
    name: 'New Country Appliances',
    url: 'https://newcountryappliances.com/',
    domain: 'newcountryappliances.com',
    category: 'Retail',
    region: 'International',
  },
  {
    id: '13',
    name: 'Sahil CNC',
    url: 'https://www.sahilcnc.com/',
    domain: 'sahilcnc.com',
    category: 'Manufacturing',
    region: 'India',
  },
  {
    id: '14',
    name: 'One Tape India',
    url: 'https://www.onetapeindia.com/',
    domain: 'onetapeindia.com',
    category: 'Manufacturing',
    region: 'India',
  },
  {
    id: '15',
    name: 'JSKS Telecom',
    url: 'https://jskstelecom.com/',
    domain: 'jskstelecom.com',
    category: 'Telecom',
    region: 'India',
  },
  {
    id: '16',
    name: 'Larisa Realtech',
    url: 'https://www.larisarealtech.com/',
    domain: 'larisarealtech.com',
    category: 'Real Estate',
    region: 'India',
  },
  {
    id: '17',
    name: 'Kinder Bridge',
    url: 'https://www.kinderbridge.ca/',
    domain: 'kinderbridge.ca',
    category: 'Healthcare & NGO',
    region: 'Canada',
  },
  {
    id: '18',
    name: 'Autism Parents Forum',
    url: 'https://www.autismparentsforum.com/',
    domain: 'autismparentsforum.com',
    category: 'Healthcare & NGO',
    region: 'International',
  },
  {
    id: '19',
    name: "Let's Help India",
    url: 'https://letshelpindia.in/',
    domain: 'letshelpindia.in',
    category: 'Healthcare & NGO',
    region: 'India',
  },
  {
    id: '20',
    name: 'ServdYou',
    url: 'https://www.servdyou.com/',
    domain: 'servdyou.com',
    category: 'Enterprise',
    region: 'International',
  },
  {
    id: '21',
    name: 'Pressmart',
    url: 'https://pressmart.presslayouts.com/',
    domain: 'pressmart.presslayouts.com',
    category: 'Enterprise',
    region: 'International',
  },
  {
    id: '22',
    name: 'Ashvak Sheik',
    url: 'https://www.ashvaksheik.com/',
    domain: 'ashvaksheik.com',
    category: 'Enterprise',
    region: 'International',
  },
  {
    id: '23',
    name: 'JARC India',
    url: 'https://jarcindia.com/',
    domain: 'jarcindia.com',
    category: 'Engineering',
    region: 'India',
  },
  {
    id: '24',
    name: 'Zikra',
    url: 'https://zikra.in/',
    domain: 'zikra.in',
    category: 'Enterprise',
    region: 'India',
  },
  {
    id: '25',
    name: 'Just Honest Events',
    url: 'https://www.justhonestevents.com/',
    domain: 'justhonestevents.com',
    category: 'Enterprise',
    region: 'UAE',
  },
  {
    id: '26',
    name: 'Alsayegh',
    url: 'https://alsayegh.com/',
    domain: 'alsayegh.com',
    category: 'Enterprise',
    region: 'UAE',
  },
  {
    id: '27',
    name: 'Good Monk',
    url: 'https://www.goodmonk.in/',
    domain: 'goodmonk.in',
    category: 'E-Commerce',
    region: 'India',
  },
  {
    id: '28',
    name: 'Amrith Noni',
    url: 'https://amrithnoni.com/',
    domain: 'amrithnoni.com',
    category: 'E-Commerce',
    region: 'India',
  },
  {
    id: '29',
    name: 'Millex',
    url: 'https://millex.in/',
    domain: 'millex.in',
    category: 'E-Commerce',
    region: 'India',
  },
  {
    id: '30',
    name: 'Coretria',
    url: 'https://coretria.keddist.com/',
    domain: 'coretria.keddist.com',
    category: 'Enterprise',
    region: 'International',
  },
  {
    id: '31',
    name: 'Fotia',
    url: 'https://fotia.ai/',
    domain: 'fotia.ai',
    category: 'Enterprise',
    region: 'International',
  },
  {
    id: '32',
    name: 'Angel Tarot Reading',
    url: 'https://angeltarotreading.com/',
    domain: 'angeltarotreading.com',
    category: 'E-Commerce',
    region: 'International',
  },
  {
    id: '33',
    name: 'SciComm',
    url: 'https://scicomm.in/',
    domain: 'scicomm.in',
    category: 'Enterprise',
    region: 'India',
  },
  {
    id: '34',
    name: 'Cloud XPMS',
    url: 'https://www.cloudxpms.com/',
    domain: 'cloudxpms.com',
    category: 'Enterprise',
    region: 'International',
  },
  {
    id: '35',
    name: 'VSMI Institute',
    url: 'https://vsmiinstitute.com/',
    domain: 'vsmiinstitute.com',
    category: 'Enterprise',
    region: 'India',
  },
  {
    id: '36',
    name: 'CLM Rat India',
    url: 'http://clmratindia.000.pe/',
    domain: 'clmratindia.000.pe',
    category: 'Engineering',
    region: 'India',
  },
  {
    id: '37',
    name: 'Carbon Tattoo Studio',
    url: 'https://carbontattoostudio.epizy.com/',
    domain: 'carbontattoostudio.epizy.com',
    category: 'Retail',
    region: 'India',
  },
  {
    id: '38',
    name: 'Nangia & Co',
    url: 'https://nangia.com/',
    domain: 'nangia.com',
    category: 'Enterprise',
    region: 'India',
  },
  {
    id: '39',
    name: 'MagePoint',
    url: 'https://magepoint.com/',
    domain: 'magepoint.com',
    category: 'Enterprise',
    region: 'India',
  },
  {
    id: '40',
    name: 'SecureStrike',
    url: 'https://securestrike.io/',
    domain: 'securestrike.io',
    category: 'Enterprise',
    region: 'India',
  },
  {
    id: '41',
    name: 'Cotras World',
    url: 'https://www.cotrasworld.com/',
    domain: 'cotrasworld.com',
    category: 'E-Commerce',
    region: 'India',
  },
  {
    id: '42',
    name: 'ICON Amsterdam',
    url: 'https://icon-amsterdam.com/',
    domain: 'icon-amsterdam.com',
    category: 'E-Commerce',
    region: 'International',
  },
  {
    id: '43',
    name: 'ALTA Consulting',
    url: 'https://www.altaconsulting.ca/',
    domain: 'altaconsulting.ca',
    category: 'Enterprise',
    region: 'Canada',
  },
  {
    id: '44',
    name: 'Restart Life with Ravi',
    url: 'https://restartlifewithravi.com/',
    domain: 'restartlifewithravi.com',
    category: 'Healthcare & NGO',
    region: 'India',
  },
  {
    id: '45',
    name: 'Jenny',
    url: 'https://jenny.co.in/',
    domain: 'jenny.co.in',
    category: 'E-Commerce',
    region: 'India',
  },
  {
    id: '46',
    name: 'Swastik Electro',
    url: 'https://swastikelectro.com/',
    domain: 'swastikelectro.com',
    category: 'Manufacturing',
    region: 'India',
  },
  {
    id: '47',
    name: 'Naisargik Wellness',
    url: 'https://naisargikwellness.com/',
    domain: 'naisargikwellness.com',
    category: 'E-Commerce',
    region: 'India',
  },
  {
    id: '48',
    name: 'Siraaco Infratech',
    url: 'https://siraacoinfratech.com/',
    domain: 'siraacoinfratech.com',
    category: 'Engineering',
    region: 'India',
  },
  {
    id: '49',
    name: 'OPD Driving School',
    url: 'https://opddriving.com/',
    domain: 'opddriving.com',
    category: 'Enterprise',
    region: 'Canada',
  },
  {
    id: '50',
    name: 'Sahil CNC App',
    url: 'https://apps.apple.com/in/app/sahil-cnc/id6761299076',
    domain: 'sahil-cnc-ios.appstore',
    category: 'Mobile Apps',
    region: 'India',
    store: 'App Store',
    platform: 'iOS',
  },
  {
    id: '51',
    name: 'Sahil CNC App',
    url: 'https://play.google.com/store/apps/details?id=com.sahilmachines.SahilCNCApp&hl=en_IN',
    domain: 'sahil-cnc-android.playstore',
    category: 'Mobile Apps',
    region: 'India',
    store: 'Google Play',
    platform: 'Android',
  },
  {
    id: '52',
    name: 'Muslim Compass: Halal Near Me',
    url: 'https://apps.apple.com/in/app/muslim-compass-halal-near-me/id6754691141',
    domain: 'muslim-compass-ios.appstore',
    category: 'Mobile Apps',
    region: 'International',
    store: 'App Store',
    platform: 'iOS',
  },
  {
    id: '53',
    name: 'Muslim Guide',
    url: 'https://play.google.com/store/apps/details?id=com.sahin05.muslimguide&hl=en_IN',
    domain: 'muslim-guide-android.playstore',
    category: 'Mobile Apps',
    region: 'International',
    store: 'Google Play',
    platform: 'Android',
  },
  {
    id: '54',
    name: 'Manvi.studio',
    url: 'https://www.manvi.studio/',
    domain: 'manvi.studio',
    category: 'E-Commerce',
    region: 'India',
  },
  {
    id: '55',
    name: 'Sell Shopee',
    url: 'https://www.sellshopee.com/',
    domain: 'sellshopee.com',
    category: 'E-Commerce',
    region: 'India',
  },
  {
    id: '56',
    name: 'Eliquid Samples',
    url: 'https://www.eliquidsamples.co.uk/',
    domain: 'eliquidsamples.co.uk',
    category: 'E-Commerce',
    region: 'UK',
  },
  {
    id: '57',
    name: 'Maison del Gusto',
    url: 'https://www.maisondelgusto.com/',
    domain: 'maisondelgusto.com',
    category: 'E-Commerce',
    region: 'International',
  },
]

export const featuredProjects = portfolioProjects.filter((p) => p.featured)

export const homepagePortfolioProjects = (() => {
  // Home page: user-specified top 4, then fill remaining slots without duplicates.
  const pinnedDomains = ['sahilcnc.com', 'ashvaksheik.com', 'servdyou.com', 'blanqcanvas.co.uk'] as const
  const pinned = pinnedDomains
    .map((domain) => portfolioProjects.find((p) => p.domain === domain))
    .filter(Boolean)

  const pool = portfolioProjects.filter((p) => !pinnedDomains.includes(p.domain as (typeof pinnedDomains)[number]))

  const featured = pool.filter((p) => p.featured)
  const others = pool.filter((p) => !p.featured)

  return [...pinned, ...featured, ...others.slice(-4)].slice(0, 8)
})()
