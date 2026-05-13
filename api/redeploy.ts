/**
 * Vercel Serverless Function — triggered daily by the cron in vercel.json.
 *
 * Required environment variables (set in Vercel dashboard > Settings > Environment Variables):
 *   CRON_SECRET      — any random string; Vercel sends it as "Authorization: Bearer <CRON_SECRET>"
 *   DEPLOY_HOOK_URL  — the Deploy Hook URL from Vercel dashboard > Settings > Git > Deploy Hooks
 */
export default async function handler(req: any, res: any) {
  // Verify the request comes from Vercel's cron scheduler
  const authHeader = (req.headers['authorization'] as string) ?? '';
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const hookUrl = process.env.DEPLOY_HOOK_URL;
  if (!hookUrl) {
    return res.status(500).json({ error: 'DEPLOY_HOOK_URL not configured' });
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
