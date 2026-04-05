# Media Parser

Pirate site discovery tool for media buyers. Finds pirate streaming sites by region, validates them (video players, ad networks, fingerprinting), extracts contacts (emails, phones, socials).

## Stack

- **Next.js** — frontend + API
- **Playwright** — headless Chrome for crawling & fingerprinting
- **Cheerio** — HTML parsing
- **Serper.dev** — Google search API (mirror discovery)
- **Claude API** — site analysis (optional)

## How it works

1. **Seed database** — 180+ known pirate sites across 100+ regions
2. **Mirror search** — finds current domains via Serper (e.g. egybest.run, egybest.link)
3. **Validation** — HTTP alive check + Playwright fingerprint (video players, pirate ad networks, quality labels)
4. **Snowball** — crawls validated sites for links to more pirate sites
5. **Contact extraction** — emails, phones, socials, advertising pages

## Local Setup

```bash
git clone https://github.com/AzartiksMan/Media-Parser.git
cd Media-Parser
npm install
npx playwright install chromium
```

Create `.env`:
```
SERPER_API_KEY=your_serper_key
ANTHROPIC_API_KEY=your_key_optional
```

Run:
```bash
npm run dev
# Open http://localhost:3000
```

## Deploy (Render.com)

We deploy via **Render** using Docker.

### Setup

1. Go to [render.com](https://render.com) -> Sign in with GitHub
2. **New** -> **Web Service**
3. Connect repo `AzartiksMan/Media-Parser`
4. Settings:
   - **Branch**: `main`
   - **Runtime**: `Docker`
   - **Instance Type**: Free (512MB) or Starter ($7/mo, 512MB, recommended)
5. **Environment Variables**:
   - `SERPER_API_KEY` = your serper.dev key
   - `ANTHROPIC_API_KEY` = (optional) for AI-powered site analysis
6. **Deploy**

### Current deployment

- **Platform**: Render.com (Docker)
- **URL**: https://media-parser-vk42.onrender.com
- **Auto-deploy**: pushes to `main` trigger redeploy
- **Free tier note**: instance sleeps after 15 min inactivity, first request takes ~30-50s to wake up

### If switching to paid

For better performance (Playwright needs RAM):
- **Starter** ($7/mo) — 512MB, no sleep
- **Standard** ($25/mo) — 2GB RAM, recommended for heavy use
