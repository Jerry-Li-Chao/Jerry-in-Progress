# Jerry in Progress

A static personal publication about work, interviews, and learning in public.

## Site structure

- `index.html` — publication homepage
- `posts/google-application-2024.html` — first interactive post
- `home.css` and `home.js` — homepage presentation and motion
- `styles.css` and `script.js` — interactive timeline
- `analytics.js` — provider-neutral click event hooks
- `404.html`, `robots.txt`, `sitemap.xml`, and `_headers` — deployment essentials

## GitHub Pages deployment

GitHub Pages publishes the repository root from `main`. No framework, external deployment token, or custom deployment workflow is required. `.nojekyll` preserves the plain static files.

The custom domain is `jerryinprogress.com`. Configure the domain's DNS with four A records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. Set `www` as a CNAME to `jerry-li-chao.github.io`. Preserve unrelated email and verification records. After DNS validation and certificate issuance, enable Enforce HTTPS in repository Settings → Pages.

Only public files should be committed to the publishing repository. Keep local reference material and credentials out of Git.

Settings:

- Production branch: `main`
- Source: Deploy from a branch
- Folder: `/ (root)`

Cloudflare Web Analytics is registered for `jerryinprogress.com`; its public JavaScript beacon is installed on the homepage, post, and 404 page. No deployment API token is needed. Data will begin appearing after the domain serves the deployed pages and visitors load them. View visits, page views, countries, referrers, and browser/device statistics in the Cloudflare Web Analytics dashboard. Browser blocking can prevent some visits from being counted.

GitHub Pages does not apply the Cloudflare-specific `_headers` file. It is retained for portability, not as a claim that those HTTP headers are active. Custom response headers require a supporting host or proxy.

Custom interaction events are exposed through `window.jipAnalytics` and the `jip:analytics` browser event. They can be forwarded to Plausible or Google Analytics later without changing the page markup.
