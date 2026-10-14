# Haider Tutors — Integrated Front-End (Refinement Build)

Refinement and integration of the uploaded `FinalDraft` screens. **Not a redesign:**
the existing brand, colours, typography, structure and component styling are preserved.

## What's inside

| Area | Pages |
|---|---|
| Public website | `index.html` (Home, How It Works, For Parents, For Tutors, Subjects & Levels, Countries, About, FAQ, Contact, privacy/terms modals) |
| Parent / Student Portal | `parent/login.html`, `parent/dashboard.html`, `parent/submit-tuition.html`, `parent/my-requests.html`, `parent/profile.html` |
| Tutor Portal | `tutor/login.html`, `tutor/dashboard.html`, `tutor/listings.html`, `tutor/tuition-details.html`, `tutor/apply.html`, `tutor/application-confirmation.html`, `tutor/applications.html`, `tutor/profile.html` |
| Shared | `assets/ht-shared.css` (responsive shell, drawer, overflow guards), `assets/ht-app.js` (drawer, toasts, filters, demo draft saving, active nav), `assets/ht-data.js` (shared demo records) |

**The Admin Dashboard was not touched.** The uploaded archive contained no admin
files, and none were created or modified.

## How to run

Open `index.html` in a browser (internet required: Tailwind Play CDN + Google Fonts).
No build step, no backend, no database.

- Parent portal entry: `parent/login.html` (any credentials continue to the demo dashboard)
- Tutor portal entry: `tutor/login.html`
- Deep links work, e.g. `parent/my-requests.html?openDossier=HT-REQ-2025-0842`,
  `tutor/applications.html?app=APP-2025-0941`, `tutor/apply.html?ref=HT-REQ-2025-0895`

## Demo limitations (stated honestly in the UI)

- No backend, auth, or persistent storage. Drafts use `localStorage` in the
  browser only; every save control says so.
- Submitting an application navigates to a confirmation page with a locally
  generated reference — it is **not** sent to any server.
- Buttons with no backend (notifications, photo upload, downloads, feedback
  archive, etc.) show an explanatory toast instead of failing silently.
- Parent contact details are never rendered in tutor-facing views.

## QA performed (2026-10-14)

- Headless Chromium audit at **1440×900, 1280×800, 768×1024, 390×844** plus
  zoom-equivalents **1152×900 (~125%)** and **960×800 (~150%)**: no horizontal
  page overflow on any page (the off-canvas nav drawer is intentionally
  translated off-screen below 1024px).
- Fixed: public hero decorative glow overflowing at 390px; request-filter pills
  strip; search/sort row; request-card side blocks and matching-note row.
- Interaction pass: every button/link verified — modals (Escape, backdrop,
  close buttons), mobile drawer, login/register tabs, filter/search/sort,
  dossier modals, archive flow, availability day toggles, deep links.
- Document check: exactly one `<!DOCTYPE>`/`<html>`/`<head>`/`<body>` per file;
  all inline scripts and shared JS pass `node --check`.

Note: the public page carries the marketing lines from the original draft
("Vetted Tutors in 10 Countries", "99.4% Student Satisfaction"). They were kept
verbatim from the source files — replace them with verified figures before any
public launch.
