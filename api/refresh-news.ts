/**
 * Public endpoint — called by the client-side background script in index.astro
 * when the browser detects the build is older than 3 hours.
 *
 * Protection layers:
 *   1. Client throttles calls via localStorage (max once per browser per 3 h)
 *   2. This function checks RSS freshness before firing the deploy hook
 *      so no unnecessary builds are triggered even if called concurrently.
 *
 * Required env var: DEPLOY_HOOK_URL (same as /api/redeploy)
 */

const STALE_HOURS = 3.5;

const CHECK_FEEDS = [
  'https://news.google.com/rss/search?q=mundial+2026+%22convocatoria%22&hl=es&gl=ES&ceid=ES:es',
  'https://news.google.com/rss/search?q=mundial+2026+FIFA&hl=es&gl=ES&ceid=ES:es',
];

async function hasRecentNews(): Promise<boolean> {
  const cutoff = Date.now() - STALE_HOURS * 60 * 60 * 1000;
  try {
    const results = await Promise.allSettled(
      CHECK_FEEDS.map(url =>
        fetch(url, {
          signal: AbortSignal.timeout(8_000),
          headers: { 'User-Agent': 'Mundial26Horarios/1.0 RefreshCheck' },
        }).then(r => r.text()),
      ),
    );
    for (const r of results) {
      if (r.status !== 'fulfilled') continue;
      for (const m of r.value.matchAll(/<pubDate>([\s\S]*?)<\/pubDate>/g)) {
        if (new Date(m[1].trim()).getTime() > cutoff) return true;
      }
    }
  } catch {
    // RSS unreachable — skip deploy
  }
  return false;
}

export default async function handler(_req: any, res: any) {
  // Always return 200 — the client doesn't need to handle errors
  const hookUrl = process.env.DEPLOY_HOOK_URL;
  if (!hookUrl) return res.status(200).json({ ok: false, reason: 'not_configured' });

  const fresh = await hasRecentNews();
  if (!fresh) return res.status(200).json({ ok: false, reason: 'no_new_content' });

  try {
    await fetch(hookUrl, { method: 'POST' });
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(200).json({ ok: false, reason: 'hook_failed' });
  }
}
