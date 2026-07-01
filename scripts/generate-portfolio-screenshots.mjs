#!/usr/bin/env node
/**
 * Downloads portfolio website screenshots to public/portfolio/
 * Run: node scripts/generate-portfolio-screenshots.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '../public/portfolio')
const MANIFEST_PATH = path.join(OUT_DIR, 'manifest.json')

const projects = [
  { id: '01', slug: 'welspun-com', url: 'http://www.welspun.com/' },
  { id: '02', slug: 'crompton-co-in', url: 'https://www.crompton.co.in/' },
  { id: '03', slug: 'houbigant-parfum-com', url: 'https://www.houbigant-parfum.com/' },
  { id: '04', slug: 'bluestone-com', url: 'https://www.bluestone.com/' },
  { id: '05', slug: 'makemycanvas-in', url: 'https://makemycanvas.in/' },
  { id: '06', slug: 'makemychairs-com', url: 'https://www.makemychairs.com/' },
  { id: '07', slug: 'gurudascrafts-com', url: 'https://gurudascrafts.com/' },
  { id: '08', slug: 'blanqcanvas-co-uk', url: 'https://blanqcanvas.co.uk/' },
  { id: '09', slug: 'goodvel-com', url: 'https://goodvel.com/' },
  { id: '12', slug: 'newcountryappliances-com', url: 'https://newcountryappliances.com/' },
  { id: '13', slug: 'sahilcnc-com', url: 'https://www.sahilcnc.com/' },
  { id: '14', slug: 'onetapeindia-com', url: 'https://www.onetapeindia.com/' },
  { id: '15', slug: 'jskstelecom-com', url: 'https://jskstelecom.com/' },
  { id: '16', slug: 'larisarealtech-com', url: 'https://www.larisarealtech.com/' },
  { id: '17', slug: 'kinderbridge-ca', url: 'https://www.kinderbridge.ca/' },
  { id: '18', slug: 'autismparentsforum-com', url: 'https://www.autismparentsforum.com/' },
  { id: '19', slug: 'letshelpindia-in', url: 'https://letshelpindia.in/' },
  { id: '20', slug: 'servdyou-com', url: 'https://www.servdyou.com/' },
  { id: '21', slug: 'pressmart-presslayouts-com', url: 'https://pressmart.presslayouts.com/' },
  { id: '22', slug: 'ashvaksheik-com', url: 'https://www.ashvaksheik.com/' },
  { id: '23', slug: 'jarcindia-com', url: 'https://jarcindia.com/' },
  { id: '24', slug: 'zikra-in', url: 'https://zikra.in/' },
  { id: '25', slug: 'justhonestevents-com', url: 'https://www.justhonestevents.com/' },
  { id: '26', slug: 'alsayegh-com', url: 'https://alsayegh.com/' },
  { id: '27', slug: 'goodmonk-in', url: 'https://www.goodmonk.in/' },
  { id: '28', slug: 'amrithnoni-com', url: 'https://amrithnoni.com/' },
  { id: '29', slug: 'millex-in', url: 'https://millex.in/' },
  { id: '30', slug: 'coretria-keddist-com', url: 'https://coretria.keddist.com/' },
  { id: '31', slug: 'fotia-ai', url: 'https://fotia.ai/' },
  { id: '32', slug: 'angeltarotreading-com', url: 'https://angeltarotreading.com/' },
  { id: '33', slug: 'scicomm-in', url: 'https://scicomm.in/' },
  { id: '34', slug: 'cloudxpms-com', url: 'https://www.cloudxpms.com/' },
  { id: '35', slug: 'vsmiinstitute-com', url: 'https://vsmiinstitute.com/' },
  { id: '36', slug: 'clmratindia-000-pe', url: 'http://clmratindia.000.pe/' },
  { id: '37', slug: 'carbontattoostudio-epizy-com', url: 'https://carbontattoostudio.epizy.com/' },
  { id: '38', slug: 'nangia-com', url: 'https://nangia.com/' },
  { id: '39', slug: 'magepoint-com', url: 'https://magepoint.com/' },
  { id: '40', slug: 'securestrike-io', url: 'https://securestrike.io/' },
  { id: '41', slug: 'cotrasworld-com', url: 'https://www.cotrasworld.com/' },
  { id: '42', slug: 'icon-amsterdam-com', url: 'https://icon-amsterdam.com/' },
  { id: '43', slug: 'altaconsulting-ca', url: 'https://www.altaconsulting.ca/' },
  { id: '44', slug: 'restartlifewithravi-com', url: 'https://restartlifewithravi.com/' },
  { id: '45', slug: 'jenny-co-in', url: 'https://jenny.co.in/' },
  { id: '46', slug: 'swastikelectro-com', url: 'https://swastikelectro.com/' },
  { id: '47', slug: 'naisargikwellness-com', url: 'https://naisargikwellness.com/' },
  { id: '48', slug: 'siraacoinfratech-com', url: 'https://siraacoinfratech.com/' },
  { id: '49', slug: 'opddriving-com', url: 'https://opddriving.com/' },
  { id: '50', slug: 'sahil-cnc-ios-appstore', url: 'https://apps.apple.com/in/app/sahil-cnc/id6761299076' },
  { id: '51', slug: 'sahil-cnc-android-playstore', url: 'https://play.google.com/store/apps/details?id=com.sahilmachines.SahilCNCApp&hl=en_IN' },
  { id: '52', slug: 'muslim-compass-ios-appstore', url: 'https://apps.apple.com/in/app/muslim-compass-halal-near-me/id6754691141' },
  { id: '53', slug: 'muslim-guide-android-playstore', url: 'https://play.google.com/store/apps/details?id=com.sahin05.muslimguide&hl=en_IN' },
  { id: '54', slug: 'manvi-studio', url: 'https://www.manvi.studio/' },
  { id: '55', slug: 'sellshopee-com', url: 'https://www.sellshopee.com/' },
  { id: '56', slug: 'eliquidsamples-co-uk', url: 'https://www.eliquidsamples.co.uk/' },
  { id: '57', slug: 'maisondelgusto-com', url: 'https://www.maisondelgusto.com/' },
]

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

function isValidImage(buffer) {
  if (!buffer || buffer.length < 1000) return false
  // JPEG
  if (buffer[0] === 0xff && buffer[1] === 0xd8) return true
  // PNG
  if (buffer[0] === 0x89 && buffer[1] === 0x50) return true
  // WEBP
  if (buffer.toString('utf8', 0, 4) === 'RIFF') return true
  return buffer.length > 5000
}

async function tryMicrolink(url) {
  try {
    const api = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&viewport.width=1280&viewport.height=800`
    const res = await fetch(api, { signal: AbortSignal.timeout(45000) })
    const json = await res.json()
    const shotUrl = json?.data?.screenshot?.url
    if (!shotUrl) return null
    await sleep(500)
    const imgRes = await fetch(shotUrl, { signal: AbortSignal.timeout(30000) })
    if (!imgRes.ok) return null
    return Buffer.from(await imgRes.arrayBuffer())
  } catch {
    return null
  }
}

async function tryThumIo(url) {
  try {
    const cleanUrl = url.replace(/\/$/, '')
    const api = `https://image.thum.io/get/width/1280/crop/800/noanimate/${cleanUrl}`
    const res = await fetch(api, {
      signal: AbortSignal.timeout(60000),
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; SolvebytezBot/1.0)' },
    })
    if (!res.ok) return null
    return Buffer.from(await res.arrayBuffer())
  } catch {
    return null
  }
}

async function tryMshots(url) {
  try {
    const api = `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1280`
    const res = await fetch(api, { signal: AbortSignal.timeout(45000) })
    if (!res.ok) return null
    const buf = Buffer.from(await res.arrayBuffer())
    return isValidImage(buf) ? buf : null
  } catch {
    return null
  }
}

async function downloadScreenshot(url) {
  const providers = [
    { name: 'microlink', fn: tryMicrolink },
    { name: 'thum.io', fn: tryThumIo },
    { name: 'mshots', fn: tryMshots },
  ]

  for (const { name, fn } of providers) {
    process.stdout.write(`    trying ${name}... `)
    const buf = await fn(url)
    if (buf && isValidImage(buf)) {
      console.log(`✓ (${Math.round(buf.length / 1024)}KB)`)
      return buf
    }
    console.log('✗')
    await sleep(800)
  }
  return null
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true })
  const manifest = {}
  let ok = 0
  let fail = 0

  console.log(`Generating ${projects.length} portfolio screenshots...\n`)

  for (const p of projects) {
    const outPath = path.join(OUT_DIR, `${p.slug}.jpg`)
    console.log(`[${p.id}] ${p.slug}`)

    if (fs.existsSync(outPath) && fs.statSync(outPath).size > 5000) {
      console.log('    cached ✓')
      manifest[p.slug] = `/portfolio/${p.slug}.jpg`
      ok++
      continue
    }

    const buf = await downloadScreenshot(p.url)
    if (buf) {
      fs.writeFileSync(outPath, buf)
      manifest[p.slug] = `/portfolio/${p.slug}.jpg`
      ok++
    } else {
      console.log('    FAILED all providers')
      fail++
    }

    await sleep(1500)
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2))
  console.log(`\nDone: ${ok} saved, ${fail} failed`)
  console.log(`Manifest: ${MANIFEST_PATH}`)
}

main().catch(console.error)
