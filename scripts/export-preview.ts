import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, extname } from 'node:path';

const root = resolve('.svelte-kit/cloudflare');
const mime: Record<string, string> = {
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
};

async function dataUrl(path: string) {
  const bytes = await readFile(path);
  return `data:${mime[extname(path)]};base64,${bytes.toString('base64')}`;
}

let html = await readFile(resolve(root, 'index.html'), 'utf8');
for (const match of html.matchAll(/<link href="([^"]+)" rel="stylesheet">/g)) {
  const path = resolve(root, match[1].replace(/^\//, ''));
  let css = await readFile(path, 'utf8');
  for (const asset of css.matchAll(/url\(([^)]+)\)/g)) {
    const url = asset[1].replace(/["']/g, '');
    const file = url.startsWith('/') ? resolve(root, url.slice(1)) : resolve(path, '..', url);
    css = css.replace(asset[0], `url(${await dataUrl(file)})`);
  }
  html = html.replace(match[0], `<style>${css}</style>`);
}
for (const path of ['/kaleidal.png', '/products/raffi.webp', '/products/limbo.webp']) {
  html = html.replaceAll(`"${path}"`, `"${await dataUrl(resolve(root, path.slice(1)))}"`);
}
await mkdir('preview', { recursive: true });
await writeFile('preview/index.html', html);
console.log('Standalone preview: preview/index.html');
