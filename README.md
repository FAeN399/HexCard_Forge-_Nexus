# HexCard Forge - Nexus

Hybrid desktop & web toolkit for building and playing a hex‑card strategy game.  
This monorepo uses **pnpm workspaces** to share code across apps and packages.

## Workspaces
- `apps/desktop-studio` – Tauri shell with React DM Studio
- `apps/web-client` – Browser client
- `packages/engine` – core game/forge logic
- `packages/schema` – Zod data models
- `packages/network` – WebSocket helpers
- `packages/ui` – shared React components

## Development
Run `pnpm install` then:

- `pnpm dev:desktop` – start the DM Studio
- `pnpm dev:web` – start the browser client

To package the desktop app run `pnpm --filter desktop-studio tauri build`.
