# Jerry in Progress

A static personal publication about work, interviews, and learning in public.

## Site structure

- `index.html` — publication homepage
- `posts/google-application-2024.html` — first interactive post
- `home.css` and `home.js` — homepage presentation and motion
- `styles.css` and `script.js` — interactive timeline
- `analytics.js` — provider-neutral click event hooks
- `404.html`, `robots.txt`, `sitemap.xml`, and `_headers` — deployment essentials

## Cloudflare Pages deployment

Deployment uses a Direct Upload Pages project and GitHub Actions, avoiding the native GitHub App integration. Pushes to `main` and manual workflow runs publish production through `.github/workflows/pages-deployment.yml`.

Create a Direct Upload project named `jerry-in-progress` in the Cloudflare account, then add `CLOUDFLARE_API_TOKEN` under this repository's Settings → Secrets and variables → Actions. The token needs Account → Cloudflare Pages → Edit, scoped to the deployment account. Never commit the token.

The site source remains at the repository root. The workflow copies only public site files into a temporary upload directory so documentation, workflows, and local reference material are not published.

Settings equivalent to the original native integration:

- Production branch: `main`
- Framework preset: None
- Build command: `exit 0`
- Build output directory: `.`

Enable Cloudflare Web Analytics from **Workers & Pages → Jerry in Progress → Metrics → Web Analytics**. Cloudflare injects its page-view beacon on the next deployment.

Custom interaction events are exposed through `window.jipAnalytics` and the `jip:analytics` browser event. They can be forwarded to Plausible or Google Analytics later without changing the page markup.
