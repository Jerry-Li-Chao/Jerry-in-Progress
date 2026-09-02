# Jerry in Progress

A static personal publication about work, interviews, and learning in public.

## Site structure

- `index.html` — publication homepage
- `posts/google-application-2024.html` — first interactive post
- `home.css` and `home.js` — homepage presentation and motion
- `styles.css` and `script.js` — interactive timeline
- `analytics.js` — provider-neutral click event hooks
- `404.html`, `robots.txt`, `sitemap.xml`, and `_headers` — deployment essentials

## Cloudflare Pages settings

- Production branch: `main`
- Framework preset: None
- Build command: `exit 0`
- Build output directory: `.`

Enable Cloudflare Web Analytics from **Workers & Pages → Jerry in Progress → Metrics → Web Analytics**. Cloudflare injects its page-view beacon on the next deployment.

Custom interaction events are exposed through `window.jipAnalytics` and the `jip:analytics` browser event. They can be forwarded to Plausible or Google Analytics later without changing the page markup.
