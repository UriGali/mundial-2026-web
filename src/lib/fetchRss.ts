/** Centralized feed list — shared by pages and the smart-redeploy cron check. */
export const RSS_FEEDS = [
  // Targeted: convocatorias y listas (máxima relevancia en mayo-junio 2026)
  'https://news.google.com/rss/search?q=mundial+2026+%22convocatoria%22&hl=es&gl=ES&ceid=ES:es',
  'https://news.google.com/rss/search?q=mundial+2026+%22lista%22&hl=es&gl=ES&ceid=ES:es',
  'https://news.google.com/rss/search?q=%22world+cup+2026%22+%22squad%22&hl=en&gl=US&ceid=US:en',
  // Broad coverage
  'https://news.google.com/rss/search?q=mundial+2026+FIFA&hl=es&gl=ES&ceid=ES:es',
  'https://news.google.com/rss/search?q=%22world+cup+2026%22&hl=en&gl=US&ceid=US:en',
];

export interface RssItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  source: string;
  dateLabel: string;
}

function stripCdata(raw: string): string {
  return raw.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim();
}

function extractTag(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  return match ? stripCdata(match[1]).trim() : '';
}

function formatDate(pubDate: string): string {
  try {
    return new Date(pubDate).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return '';
  }
}

/**
 * Fetches and parses an RSS 2.0 feed at build time.
 * Returns an empty array on any error so the build never fails.
 */
export async function fetchRssNews(url: string, limit = 8): Promise<RssItem[]> {
  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(10_000),
      headers: { 'User-Agent': 'Mundial26Horarios/1.0 RSS-Aggregator' },
    });
    if (!res.ok) return [];

    const xml    = await res.text();
    const blocks = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];
    const items: RssItem[] = [];

    for (const block of blocks.slice(0, limit)) {
      const item  = block[1];
      const title = extractTag(item, 'title');
      if (!title) continue;

      // <link> in RSS 2.0 sits between tags; some feeds put it after <link/>
      const link =
        extractTag(item, 'link') ||
        extractTag(item, 'guid') ||
        '';

      const rawDesc   = extractTag(item, 'description');
      const cleanDesc = rawDesc.replace(/<[^>]+>/g, '').substring(0, 200);
      const pubDate   = extractTag(item, 'pubDate');
      const source    = extractTag(item, 'source') || new URL(url).hostname;

      items.push({
        title:       title.substring(0, 120),
        link:        link.trim(),
        description: cleanDesc.trim(),
        pubDate,
        source,
        dateLabel:   formatDate(pubDate),
      });
    }
    return items;
  } catch {
    return [];
  }
}

/** Fetches from multiple feeds in parallel; deduplicates by title. */
export async function fetchMultipleFeeds(
  feeds: string[],
  limitPerFeed = 4,
): Promise<RssItem[]> {
  const results = await Promise.allSettled(
    feeds.map(url => fetchRssNews(url, limitPerFeed)),
  );

  const all: RssItem[] = [];
  const seen = new Set<string>();

  for (const r of results) {
    if (r.status !== 'fulfilled') continue;
    for (const item of r.value) {
      const key = item.title.toLowerCase().substring(0, 60);
      if (!seen.has(key)) {
        seen.add(key);
        all.push(item);
      }
    }
  }

  // Sort newest-first (best effort)
  return all.sort((a, b) => {
    const da = a.pubDate ? new Date(a.pubDate).getTime() : 0;
    const db = b.pubDate ? new Date(b.pubDate).getTime() : 0;
    return db - da;
  });
}
