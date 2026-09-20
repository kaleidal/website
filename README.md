# Kaleidal

The Kaleidal studio website, featuring Raffi, Limbo, Nook, and Conlanger. Built with SvelteKit, Tailwind CSS, and Cloudflare Workers.

## Development

```sh
bun install
bun run dev
```

## Verify and preview

```sh
bun run check
bun run build
bun run preview
```

The homepage is prerendered and ships without client-side JavaScript. Fonts and images are served locally. Motion respects reduced-motion preferences.

For a portable preview that opens directly in a browser without a server:

```sh
bun run preview:standalone
```

Open `preview/index.html`. Its images, styles, and fonts are embedded; the generated file is excluded from Git.

## Deployment

The production site is https://kaleid.al. The `kaleidal` Worker belongs to the Kaleidal Cloudflare account and is connected to [kaleidal/website](https://github.com/kaleidal/website).

Cloudflare Workers Builds deploys each push to `main` with these settings:

- Root directory: `/`
- Build command: `bun run check && bun run build`
- Deploy command: `bunx wrangler deploy`
- Preview deploy command: `bunx wrangler versions upload`
- Build variable: `BUN_VERSION=1.3.13`

Other branches produce preview versions without replacing production. Cloudflare manages the GitHub connection and build credentials; no GitHub Actions secrets are needed.

For a manual deployment, authenticate Wrangler and run `bun run deploy`. The account and `kaleid.al` custom domain are declared in `wrangler.jsonc`.

## Content

- `src/routes/+page.svelte` contains the studio introduction and product descriptions.
- `src/lib/components/ProductFeature.svelte` contains the product feature layouts and illustrations.
- `src/app.css` defines the shared typography, colors, and accessibility styles.
- `static/kaleidal.png` is the original brand mark.
- `static/products/raffi.webp` and `static/products/limbo.webp` are optimized screenshots from their respective repositories.

Nook and Conlanger use illustrative artwork. Conlanger links to conlanger.site.

TypeScript 7 runs the type checks through `svelte-check --tsgo`; TypeScript 6 is also installed because Svelte's tooling requires its compiler API.
