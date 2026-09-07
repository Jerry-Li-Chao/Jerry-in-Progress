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

The free production address is `https://jerry-li-chao.github.io/Jerry-in-Progress/`. No domain purchase or DNS configuration is required. Leave Custom domain empty in repository Settings → Pages and enforce HTTPS.

Only public files should be committed to the publishing repository. Keep local reference material and credentials out of Git.

Settings:

- Production branch: `main`
- Source: Deploy from a branch
- Folder: `/ (root)`

The public Cloudflare Web Analytics beacon is installed on the homepage, post, and 404 page. Configure its hostname as `jerry-li-chao.github.io` and filter paths by `/Jerry-in-Progress/` when viewing this blog. No deployment API token is needed. Browser blocking can prevent some visits from being counted.

GitHub Pages does not apply the Cloudflare-specific `_headers` file. It is retained for portability, not as a claim that those HTTP headers are active. Custom response headers require a supporting host or proxy.

Custom interaction events are exposed through `window.jipAnalytics` and the `jip:analytics` browser event. They can be forwarded to Plausible or Google Analytics later without changing the page markup.
