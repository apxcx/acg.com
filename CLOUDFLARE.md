# Cloudflare Workers deployment

This site is configured as a Workers Static Assets deployment. Wrangler uploads the Vite output from `dist/public`, which contains the built `index.html`, local CSS, JavaScript, fonts and reference images.

The repository configuration is in `wrangler.toml`:

- Build command: `pnpm run build:static`
- Static assets directory: `./dist/public`
- Worker name: `acg-com`
- Compatibility date: `2026-10-27`

For local verification:

```sh
pnpm install --frozen-lockfile
pnpm run build:cloudflare
pnpm exec wrangler dev
```

For deployment from an authenticated Cloudflare CLI session:

```sh
pnpm install --frozen-lockfile
pnpm run deploy:cloudflare
```

The GitHub repository is intended to use `pnpm install --frozen-lockfile` as its install step and `pnpm run build:cloudflare` as its build step. Wrangler then uses `dist/public` from `wrangler.toml`. Cloudflare account and zone credentials are intentionally not stored in the repository.
