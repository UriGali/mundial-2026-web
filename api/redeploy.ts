/**
 * Vercel Serverless Function — triggered every 3 hours by the cron in vercel.json.
 *
 * Smart logic: fetches RSS before deploying. If the freshest item is older than
 * STALE_HOURS (slightly above the 3-hour cron interval), the deploy is skipped
 * to avoid burning Vercel build minutes on stale content.
 *
 * Required environment variables (Vercel dashboard > Settings > Environment Variables):
 *   CRON_SECRET      — any random string; Vercel sends it as "Authorization: Bearer <CRON_SECRET>"
 *   DEPLOY_HOOK_URL  — the Deploy Hook URL from Vercel dashboard > Settings > Git > Deploy Hooks
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
          headers: { 'User-Agent': 'Mundial26Horarios/1.0 CronCheck' },
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
    // RSS check failed — deploy anyway to stay safe
    return true;
  }
  return false;
}

export default async function handler(req: any, res: any) {
  const authHeader = (req.headers['authorization'] as string) ?? '';
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const hookUrl = process.env.DEPLOY_HOOK_URL;
  if (!hookUrl) {
    return res.status(500).json({ error: 'DEPLOY_HOOK_URL not configured' });
  }

  const fresh = await hasRecentNews();
  if (!fresh) {
    return res.status(200).json({
      ok: false,
      reason: 'no_new_content',
      skipped: new Date().toISOString(),
    });
  }

  try {
    const response = await fetch(hookUrl, { method: 'POST' });
    return res.status(200).json({
      ok: response.ok,
      triggered: new Date().toISOString(),
    });
  } catch (err) {
    return res.status(500).json({ error: String(err) });
  }
}
