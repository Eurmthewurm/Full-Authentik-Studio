---
description: how to deploy the application to production
---

// turbo-all
1. Build the production application
```bash
npm run build
```

2. Deploy specifically to the Cloudflare Worker with Assets
```bash
npx wrangler deploy --name full-authentik-studio
```

> [!IMPORTANT]
> This project is configured as a **Cloudflare Worker with Assets** (`full-authentik-studio`), NOT a standard Cloudflare Pages project. Standard `wrangler pages deploy` commands will fail or create redundant projects.
