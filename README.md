# Kaleidal

The Kaleidal studio website, featuring Raffi, Nook, Conlanger, and Limbo. Built with SvelteKit, Tailwind CSS, and Cloudflare Workers.

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

## Deploy

Authenticate Wrangler with the intended Cloudflare account, then run:

```sh
bun run deploy
```

The Worker is named `kaleidal`. Add `kaleid.al` as its custom domain in Cloudflare. Canonical and social metadata use that domain.

## Content

- `src/routes/+page.svelte` contains the studio introduction and product descriptions.
- `src/lib/components/ProductFeature.svelte` contains the product feature layouts and illustrations.
- `src/app.css` defines the shared typography, colors, and accessibility styles.
- `static/kaleidal.png` is the original brand mark.
- `static/products/raffi.webp` and `static/products/limbo.webp` are optimized screenshots from their respective repositories.

Nook and Conlanger use illustrative artwork. Conlanger links to its GitHub repository.

TypeScript 7 runs the type checks through `svelte-check --tsgo`; TypeScript 6 is also installed because Svelte's tooling requires its compiler API.
