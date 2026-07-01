import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const maxDuration = 60

async function tryMicrolink(url: string): Promise<Buffer | null> {
  try {
    const api = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&viewport.width=1280&viewport.height=800`
    const res = await fetch(api, { signal: AbortSignal.timeout(40000) })
    const json = await res.json()
    const shotUrl = json?.data?.screenshot?.url as string | undefined
    if (!shotUrl) return null
    const imgRes = await fetch(shotUrl, { signal: AbortSignal.timeout(25000) })
    if (!imgRes.ok) return null
    return Buffer.from(await imgRes.arrayBuffer())
  } catch {
    return null
  }
}

async function tryThumIo(url: string): Promise<Buffer | null> {
  try {
    const cleanUrl = url.replace(/\/$/, '')
    const api = `https://image.thum.io/get/width/1280/crop/800/noanimate/${cleanUrl}`
    const res = await fetch(api, {
      signal: AbortSignal.timeout(50000),
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Solvebytez/1.0)' },
    })
    if (!res.ok) return null
    const buf = Buffer.from(await res.arrayBuffer())
    return buf.length > 3000 ? buf : null
  } catch {
    return null
  }
}

async function tryMshots(url: string): Promise<Buffer | null> {
  try {
    const api = `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1280`
    const res = await fetch(api, { signal: AbortSignal.timeout(40000) })
    if (!res.ok) return null
    const buf = Buffer.from(await res.arrayBuffer())
    return buf.length > 3000 ? buf : null
  } catch {
    return null
  }
}

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url')
  if (!url) {
    return NextResponse.json({ error: 'Missing url' }, { status: 400 })
  }

  try {
    new URL(url)
  } catch {
    return NextResponse.json({ error: 'Invalid url' }, { status: 400 })
  }

  const providers = [tryMicrolink, tryThumIo, tryMshots]

  for (const provider of providers) {
    const buffer = await provider(url)
    if (buffer && buffer.length > 3000) {
      return new NextResponse(buffer, {
        headers: {
          'Content-Type': 'image/jpeg',
          'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
        },
      })
    }
  }

  return NextResponse.json({ error: 'Screenshot unavailable' }, { status: 502 })
}
