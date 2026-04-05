---
name: Media-Parser project context
description: Media buying tool — parses sites for contacts, detects pirate sites, supports multi-region targeting
type: project
---

Media-Parser — web app for media buyers (end user: Kent).

**Core purpose:** Parse media/pirate sites to find advertising placement opportunities. Extract contacts (emails, phones, socials), detect if site is pirate (only pirate sites are relevant for ad placement), generate summaries via Claude API.

**Key features:**
- Piracy detection (streaming, torrents, illegal content markers)
- Multi-region support: America, Europe, Ukraine, Israel, Cyprus, Emirates, etc.
- Query translation to target region's language via Claude API
- SimilarWeb integration for traffic data (Kent uses it manually now)
- CSV + HTML export with filters
- Next.js web app UI so Kent can use it in browser

**Why:** The team hunts different regional markets for pirate sites where they can place ads. Each region has its own language, so parser needs locale awareness.

**How to apply:** Always consider region/locale when building features. Piracy detection is a first-class feature, not an afterthought.
