# SAMRIDD — Progress Tracker

> Live checklist generated from `plan.md` (IDs are identical). **Total steps: 333** across 3 sections.
> Spec: `architecture.md` · Order of work: `plan.md`

## How to use this file
1. Tick a step `- [x]` only when it meets the **Definition of Done** below, not when code is merely written.
2. Update the part's **Owner / Started / Done / PR** line when you begin and finish.
3. Tick the 🚦 **GATE** only when every step in that phase *for that section* is ticked **and** the gate statement is demonstrably true.
4. Never rename IDs. If scope changes, change `plan.md` and `architecture.md` first, then add the new IDs here and log it in the Change Log.
5. Update the dashboard counts every Friday (or let CI do it).
6. Blocked? Add a row to **Blockers** the same day.

**Status legend:** ⬜ Not started · 🟦 In progress · 🟨 Blocked · ✅ Done

**Definition of Done (every step):** code and tests merged · lint/types clean · CI green · accessibility checked (frontend) · RLS/pgTAP test added (backend/schema) · docs and `architecture.md` updated if behaviour or schema changed · PR reviewed.

## Dashboard

| Section | Phase | Name | Steps | Done | % | Status |
|---|---|---|---:|---:|---:|---|
| FRONTEND | P0 | Foundations | 5 | 0 | 0% | ⬜ |
| FRONTEND | P1 | Design system and app scaffold | 32 | 0 | 0% | ⬜ |
| FRONTEND | P2 | Public landing page | 18 | 0 | 0% | ⬜ |
| FRONTEND | P3 | Authentication | 12 | 0 | 0% | ⬜ |
| FRONTEND | P4 | Roles and financial profiles | 9 | 0 | 0% | ⬜ |
| FRONTEND | P5 | Schema and transaction engine (frontend side) | 6 | 0 | 0% | ⬜ |
| FRONTEND | P6 | Income, Categories, Transactions | 16 | 0 | 0% | ⬜ |
| FRONTEND | P7 | Home and Budget | 11 | 0 | 0% | ⬜ |
| FRONTEND | P8 | Moments | 12 | 0 | 0% | ⬜ |
| FRONTEND | P9 | Reports | 11 | 0 | 0% | ⬜ |
| FRONTEND | P10 | Settings and Admin | 11 | 0 | 0% | ⬜ |
| FRONTEND | P11 | Security, testing, optimisation | 11 | 0 | 0% | ⬜ |
| FRONTEND | P12 | Deployment and launch | 6 | 0 | 0% | ⬜ |
| BACKEND | P0 | Foundations | 8 | 0 | 0% | ⬜ |
| BACKEND | P1 | Design system and app scaffold (backend side) | 4 | 0 | 0% | ⬜ |
| BACKEND | P3 | Authentication | 14 | 0 | 0% | ⬜ |
| BACKEND | P4 | Roles and financial profiles | 9 | 0 | 0% | ⬜ |
| BACKEND | P5 | Schema and transaction engine | 15 | 0 | 0% | ⬜ |
| BACKEND | P6 | Income, Categories, Transactions | 7 | 0 | 0% | ⬜ |
| BACKEND | P7 | Home and Budget | 6 | 0 | 0% | ⬜ |
| BACKEND | P8 | Moments | 14 | 0 | 0% | ⬜ |
| BACKEND | P9 | Reports | 8 | 0 | 0% | ⬜ |
| BACKEND | P10 | Settings and Admin | 12 | 0 | 0% | ⬜ |
| BACKEND | P11 | Security, testing, optimisation | 11 | 0 | 0% | ⬜ |
| BACKEND | P12 | Deployment and launch | 7 | 0 | 0% | ⬜ |
| SHARED (SECURITY, TESTING, DEVOPS, COMPLIANCE) | P0 | Foundations | 13 | 0 | 0% | ⬜ |
| SHARED (SECURITY, TESTING, DEVOPS, COMPLIANCE) | P1 | Design system and app scaffold | 4 | 0 | 0% | ⬜ |
| SHARED (SECURITY, TESTING, DEVOPS, COMPLIANCE) | P2 | Public landing page | 2 | 0 | 0% | ⬜ |
| SHARED (SECURITY, TESTING, DEVOPS, COMPLIANCE) | P3 | Authentication | 4 | 0 | 0% | ⬜ |
| SHARED (SECURITY, TESTING, DEVOPS, COMPLIANCE) | P4 | Roles and financial profiles | 3 | 0 | 0% | ⬜ |
| SHARED (SECURITY, TESTING, DEVOPS, COMPLIANCE) | P5 | Schema and transaction engine | 3 | 0 | 0% | ⬜ |
| SHARED (SECURITY, TESTING, DEVOPS, COMPLIANCE) | P6 | Income, Categories, Transactions | 3 | 0 | 0% | ⬜ |
| SHARED (SECURITY, TESTING, DEVOPS, COMPLIANCE) | P7 | Home and Budget | 2 | 0 | 0% | ⬜ |
| SHARED (SECURITY, TESTING, DEVOPS, COMPLIANCE) | P8 | Moments | 3 | 0 | 0% | ⬜ |
| SHARED (SECURITY, TESTING, DEVOPS, COMPLIANCE) | P9 | Reports | 2 | 0 | 0% | ⬜ |
| SHARED (SECURITY, TESTING, DEVOPS, COMPLIANCE) | P10 | Settings and Admin | 3 | 0 | 0% | ⬜ |
| SHARED (SECURITY, TESTING, DEVOPS, COMPLIANCE) | P11 | Security, testing, optimisation | 10 | 0 | 0% | ⬜ |
| SHARED (SECURITY, TESTING, DEVOPS, COMPLIANCE) | P12 | Deployment and launch | 6 | 0 | 0% | ⬜ |

**Overall:** 0 / 333 steps (0%)

## Open Questions (must be closed; owner = product owner)

- [ ] **OQ-1** Definition of **FAIR** architecture supplied and added to `architecture.md` (Appendix 3)
- [ ] **OQ-2** Earlier chat decisions (landing, auth screens, Moments, other changes) reconciled into `architecture.md`
- [ ] **OQ-3** Phone authentication in MVP? (recommended: defer)
- [ ] **OQ-4** Category budgets total may exceed overall budget? (recommended: allow with warning)
- [ ] **OQ-5** Moment items may be overpaid? (recommended: allow, flag "over plan")
- [ ] **OQ-6** Financial-year default (recommended: April–March, user setting)
- [ ] **OQ-7** Maximum financial profiles per user (recommended: 10)

## Source-document audit findings to verify as fixed

- [ ] 1 Admin role cannot be self-assigned (BE-3.3, BE-4.1, BE-4.3)
- [ ] 2 Cross-profile references impossible via composite FKs (BE-5.1, BE-5.2, BE-5.5)
- [ ] 3 All views use `security_invoker` (BE-8.3, BE-11.1.2)
- [ ] 4 Admins cannot see financial data; audit logs hold no values (BE-5.4, BE-10.2, SH-10.1)
- [ ] 5 Rate limiting implemented without Redis (BE-3.1.6, BE-10.1.2, BE-11.2)
- [ ] 6 Validation layered: Zod → Edge Function → DB constraints (FE-5.2, BE-5.2, BE-10.1)
- [ ] 7 pgTAP and RLS test harness in CI (BE-4.4, SH-0.2.2, SH-5.1)
- [ ] 8 Canonical stack list consolidated (this repo's `architecture.md` §A.1/§B.1)
- [ ] 9 Landing pre-rendered, lazy-loaded app/admin chunks (FE-2.3, FE-11.2)
- [ ] 10 Colour tokens pass contrast in light and dark (FE-1.3)
- [ ] 11 Soft delete, undo and audit logging (BE-5.2, BE-6.2, BE-5.4)
- [ ] 12 Production SMTP configured (BE-3.1.2)
- [ ] 13 Phone auth deferred and documented (BE-0.3.1)
- [ ] 14 Environments, CI, monitoring, backups exist (SH-0.2, SH-0.3, BE-11.3, SH-12.1)
- [ ] 15 DPDP-aligned consent, export, deletion (SH-2.1, SH-11.3, BE-10.3)
- [ ] 17–18 FY option and `en-IN` money formatting (FE-1.5, BE-9.2)
- [ ] 20 Server-side pagination and indexes (FE-6.3, BE-6.1)

## Blockers

| Date | ID | Blocker | Owner | Resolution | Resolved on |
|---|---|---|---|---|---|
| | | | | | |

## Change Log

| Date | Change | Files touched | By |
|---|---|---|---|
| (today) | Initial plan and progress generated; added P0 and P12 phases; moved roles before financial tables; added pgTAP track | architecture.md, plan.md, progress.md | |

---

# SECTION 1 — FRONTEND

## Phase P0 — Foundations

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Frontend conventions fixed before code exists.

#### Part FE-0.1 — Engineering conventions

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-0.1.1** Confirm Node LTS version and package manager; add `.nvmrc` and `engines`
- [ ] **FE-0.1.2** Configure ESLint (typescript-eslint, react-hooks, import boundaries, ban `parseFloat` on money, ban deep cross-feature imports)
- [ ] **FE-0.1.3** Configure Prettier and EditorConfig
- [ ] **FE-0.1.4** Add Husky + lint-staged + commitlint (conventional commits)
- [ ] **FE-0.1.5** Write `docs/frontend-conventions.md` (naming, file layout, query keys, mutation invalidation rules)

- [ ] 🚦 **GATE (P0)** A new developer can clone, install, lint and commit following conventions without help

## Phase P1 — Design system and app scaffold

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Empty but production-shaped app, themed, with the shared component library.

#### Part FE-1.1 — Project scaffold

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-1.1.1** Create Vite + React 19 + TypeScript project with `strict` and `noUncheckedIndexedAccess`
- [ ] **FE-1.1.2** Set path aliases (`@/`) in Vite and tsconfig
- [ ] **FE-1.1.3** Create `src/` folder structure exactly as in architecture §A.3 with placeholder `index.ts` per feature
- [ ] **FE-1.1.4** Add `lib/env.ts` validating `VITE_*` variables with Zod; add `.env.example`
- [ ] **FE-1.1.5** Add React Router data router with lazy route stubs for all routes in §A.2
- [ ] **FE-1.1.6** Pin versions; verify Recharts + React 19 (`react-is` override if needed)

#### Part FE-1.2 — Tailwind v4 and shadcn

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-1.2.1** Install Tailwind CSS v4 and configure via CSS-first `@theme`
- [ ] **FE-1.2.2** Initialise shadcn/ui (React 19 + Tailwind v4 compatible) with `components/ui`
- [ ] **FE-1.2.3** Add the full shadcn component inventory from §A.5
- [ ] **FE-1.2.4** Add Sonner toaster and Lucide icons

#### Part FE-1.3 — Design tokens and themes

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-1.3.1** Define brand tokens (Burgundy, Mocha Cream, Cosmic Latte) in `styles/tokens.css`
- [ ] **FE-1.3.2** Define semantic light tokens (background, surface, foreground, primary, muted, border, ring)
- [ ] **FE-1.3.3** Derive dark-mode tokens including a lightened burgundy tint; record exact hex values
- [ ] **FE-1.3.4** Define status colours (success, warning, danger, info) distinct from burgundy
- [ ] **FE-1.3.5** Define typography, radius, spacing, shadow scales; self-host chosen fonts
- [ ] **FE-1.3.6** Build `ThemeProvider` (light/dark/system) with blocking no-flash inline script
- [ ] **FE-1.3.7** Write `scripts/contrast-check` and add it to CI; fix any failing pair
- [ ] **FE-1.3.8** Document token usage rules (Cosmic Latte never as text colour, colour never sole signal)

#### Part FE-1.4 — Layouts and navigation

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-1.4.1** Build `PublicLayout` (header/footer)
- [ ] **FE-1.4.2** Build `AuthLayout`
- [ ] **FE-1.4.3** Build `AppShell` with sidebar for 8 tabs (desktop)
- [ ] **FE-1.4.4** Build mobile bottom tab bar with "More" sheet
- [ ] **FE-1.4.5** Build `AdminLayout` with distinct visual banner
- [ ] **FE-1.4.6** Build `ProfileSwitcher` shell (data wired in P4)

#### Part FE-1.5 — Core libraries and shared components

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-1.5.1** Create `lib/supabase.ts` client (single instance)
- [ ] **FE-1.5.2** Create `queryClient` with defaults (staleTime, retry rules, error handler)
- [ ] **FE-1.5.3** Build `lib/money.ts` (string ↔ paise, add/sub, format `en-IN`) with unit tests
- [ ] **FE-1.5.4** Build `lib/dates.ts` (IST today, week start, month, FY boundaries) with unit tests
- [ ] **FE-1.5.5** Build `lib/errors.ts` (Postgres/Auth error code → friendly message)
- [ ] **FE-1.5.6** Build `MoneyText`, `MoneyInput`, `EmptyState`, `ErrorState`, `ConfirmDialog`, `StatCard`
- [ ] **FE-1.5.7** Build global `ErrorBoundary` and 404 page
- [ ] **FE-1.5.8** Integrate Sentry browser SDK with PII scrubbing

- [ ] 🚦 **GATE (P1)** App runs, light and dark themes pass contrast check, all 8 nav tabs render placeholder pages on desktop and mobile

## Phase P2 — Public landing page

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Fast, accessible, SEO-ready marketing site.

#### Part FE-2.1 — Content and information architecture

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-2.1.1** Reconcile landing structure with product owner and earlier chat (OQ-2)
- [ ] **FE-2.1.2** Write copy for hero, features (8 areas), how it works, Moments, profiles, security, INR/manual-first, FAQ
- [ ] **FE-2.1.3** Prepare illustrations/screenshots (optimised AVIF/WebP) and logo assets

#### Part FE-2.2 — Build sections

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-2.2.1** Header with Login/Sign up and mobile menu
- [ ] **FE-2.2.2** Hero with primary CTA
- [ ] **FE-2.2.3** Feature grid (8 navigation areas)
- [ ] **FE-2.2.4** How-it-works (3 steps)
- [ ] **FE-2.2.5** Moments highlight section
- [ ] **FE-2.2.6** Independent profiles and security/privacy sections
- [ ] **FE-2.2.7** FAQ accordion
- [ ] **FE-2.2.8** Final CTA and footer

#### Part FE-2.3 — SEO and performance

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-2.3.1** Add build-time pre-rendering for `/`, `/terms`, `/privacy`
- [ ] **FE-2.3.2** Add title, meta description, OpenGraph/Twitter cards, canonical, JSON-LD
- [ ] **FE-2.3.3** Generate `sitemap.xml` and `robots.txt`
- [ ] **FE-2.3.4** Ensure landing chunk excludes auth/app code; verify bundle ≤ 150 KB gz
- [ ] **FE-2.3.5** Lighthouse ≥ 90 (Perf, A11y, Best Practices, SEO) on mobile profile

#### Part FE-2.4 — Legal pages

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-2.4.1** Terms of Service page (content from legal)
- [ ] **FE-2.4.2** Privacy Policy page (content from legal, DPDP-aligned)

- [ ] 🚦 **GATE (P2)** Landing deployed on a Vercel preview, Lighthouse targets met, legal pages linked in footer

## Phase P3 — Authentication

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Users can sign up, verify, log in and out securely.

#### Part FE-3.1 — Auth screens

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-3.1.1** Signup form (email, password with strength meter, confirm, consent checkbox, CAPTCHA)
- [ ] **FE-3.1.2** Login form with error handling that does not enable account enumeration
- [ ] **FE-3.1.3** Forgot-password and reset-password screens
- [ ] **FE-3.1.4** "Continue with Google" button on login and signup
- [ ] **FE-3.1.5** Email-verification pending screen with resend (rate-limited UI)

#### Part FE-3.2 — Callback and session handling

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-3.2.1** Build `/auth/callback` (OAuth code and email-link handling, expired-link states)
- [ ] **FE-3.2.2** Build `AuthProvider` using `onAuthStateChange`
- [ ] **FE-3.2.3** Build `RequireAuth` guard with return-to redirect
- [ ] **FE-3.2.4** Sign-out clears Query cache and local state
- [ ] **FE-3.2.5** Validate redirect targets (no open redirect)

#### Part FE-3.3 — Deferred phone auth

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-3.3.1** Confirm decision D-04 with product owner (OQ-3)
- [ ] **FE-3.3.2** If approved later: design phone OTP UI and linking rules (otherwise mark N/A)

- [ ] 🚦 **GATE (P3)** Full email and Google flows work on staging; unverified users cannot reach the app

## Phase P4 — Roles and financial profiles

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Every user has at least one isolated financial profile; role-aware navigation.

#### Part FE-4.1 — Onboarding

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-4.1.1** Build `/onboarding` first-profile form (name, colour, icon)
- [ ] **FE-4.1.2** Redirect logic: no profile → onboarding; else last-used profile

#### Part FE-4.2 — Profile switching and scoping

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-4.2.1** Wire `ProfileSwitcher` to profile list
- [ ] **FE-4.2.2** Implement `RequireProfile` guard validating `:profileId` against accessible profiles
- [ ] **FE-4.2.3** Persist last-used profile (`last_active_profile_id`)
- [ ] **FE-4.2.4** Confirm query keys include `profileId`; add test proving no cache reuse across profiles

#### Part FE-4.3 — Role-aware UI

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-4.3.1** Read `user_role` claim into `useRole()`
- [ ] **FE-4.3.2** Build `RequireRole` guard for `/admin`
- [ ] **FE-4.3.3** Hide admin link for non-admins (UX only; backend authoritative)

- [ ] 🚦 **GATE (P4)** Two test users with two profiles each cannot see each other's data in UI or cache

## Phase P5 — Schema and transaction engine (frontend side)

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Typed API layer and conventions ready for feature work.

#### Part FE-5.1 — Types and API layer

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-5.1.1** Generate `database.types.ts` and add npm script
- [ ] **FE-5.1.2** Define API-layer pattern (`features/*/api`) returning domain models
- [ ] **FE-5.1.3** Build row→domain mappers (numeric string → paise)

#### Part FE-5.2 — Shared schemas and keys

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-5.2.1** Zod schemas for transaction, category (mirror DB constraints)
- [ ] **FE-5.2.2** Query-key factory per feature
- [ ] **FE-5.2.3** Mutation helper with standard invalidation lists and error toasts

- [ ] 🚦 **GATE (P5)** Sample feature reads and writes through the layered pattern with full type safety

## Phase P6 — Income, Categories, Transactions

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Users can fully manage money records.

#### Part FE-6.1 — Categories

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-6.1.1** Categories page with Income/Expense tabs
- [ ] **FE-6.1.2** Create/edit dialog (name, icon, colour) with duplicate-name handling
- [ ] **FE-6.1.3** Archive/unarchive; delete only when unused
- [ ] **FE-6.1.4** `CategoryPicker` shared component

#### Part FE-6.2 — Transaction form

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-6.2.1** Add/edit dialog (type, amount, date, category, payee, method, note)
- [ ] **FE-6.2.2** Date defaults to IST today; future-date warning
- [ ] **FE-6.2.3** Quick-add from header and mobile FAB

#### Part FE-6.3 — Transactions ledger

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-6.3.1** `DataTable` with TanStack Table in manual (server-driven) mode
- [ ] **FE-6.3.2** Keyset pagination and page-size selector
- [ ] **FE-6.3.3** Filters: date range, type, categories, amount range, text search, source (URL-synced)
- [ ] **FE-6.3.4** Sorting by date/amount
- [ ] **FE-6.3.5** Row actions: edit, delete with undo toast, restore
- [ ] **FE-6.3.6** Moment-sourced rows: link to Moment, read-only
- [ ] **FE-6.3.7** CSV export of filtered set

#### Part FE-6.4 — Income view

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-6.4.1** Income page reusing ledger filtered to income
- [ ] **FE-6.4.2** Income analytics: monthly bars, category donut, totals/averages

- [ ] 🚦 **GATE (P6)** Add, edit, delete, undo, filter and export work with 10k+ seeded rows on mobile and desktop

## Phase P7 — Home and Budget

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** At-a-glance dashboard and budget tracking.

#### Part FE-7.1 — Home dashboard

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-7.1.1** Welcome header and month snapshot (income, expense, net, savings rate)
- [ ] **FE-7.1.2** Budget-used indicator
- [ ] **FE-7.1.3** Recent transactions and upcoming commitments widgets
- [ ] **FE-7.1.4** Quick Actions (add income, add expense, set budget, new Moment)
- [ ] **FE-7.1.5** Onboarding checklist with persisted completion

#### Part FE-7.2 — Budget page

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-7.2.1** Month selector
- [ ] **FE-7.2.2** Overall budget card with set/edit
- [ ] **FE-7.2.3** Category budgets list with progress bars and 80%/100% states
- [ ] **FE-7.2.4** "Copy previous month" action
- [ ] **FE-7.2.5** Show committed-unpaid separately from spent
- [ ] **FE-7.2.6** Warning (not block) when category total exceeds overall (per OQ-4)

- [ ] 🚦 **GATE (P7)** Dashboard and Budget figures match backend golden datasets exactly

## Phase P8 — Moments

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Plan events and pay for them without double counting.

#### Part FE-8.1 — List and create

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-8.1.1** Moments list with status chips and progress
- [ ] **FE-8.1.2** Create/edit Moment form
- [ ] **FE-8.1.3** Cancel/complete actions with confirmation

#### Part FE-8.2 — Detail and planned items

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-8.2.1** Moment detail layout (summary, items, payments)
- [ ] **FE-8.2.2** Add/edit/cancel planned items
- [ ] **FE-8.2.3** Commitments view (unpaid remainder per item)

#### Part FE-8.3 — Payments

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-8.3.1** Record-payment form with generated idempotency key
- [ ] **FE-8.3.2** Disable submit while pending; handle duplicate response gracefully
- [ ] **FE-8.3.3** Delete/reverse payment with confirmation
- [ ] **FE-8.3.4** Over-plan flag (per OQ-5)

#### Part FE-8.4 — Integration

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-8.4.1** Payments visible in Transactions with Moment link
- [ ] **FE-8.4.2** Invalidate dashboard, budget and reports on payment changes

- [ ] 🚦 **GATE (P8)** Double-click and retry never create duplicate expenses; totals reconcile across Moments, Transactions, Budget

## Phase P9 — Reports

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Trustworthy period reports.

#### Part FE-9.1 — Report framework

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-9.1.1** Period picker (daily/weekly/monthly/yearly; calendar or FY) with presets
- [ ] **FE-9.1.2** URL-synced report state
- [ ] **FE-9.1.3** Lazy-loaded reports chunk

#### Part FE-9.2 — Charts and tables

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-9.2.1** Income vs expense trend
- [ ] **FE-9.2.2** Category breakdown (donut + table)
- [ ] **FE-9.2.3** Net/savings over time
- [ ] **FE-9.2.4** Budget vs actual
- [ ] **FE-9.2.5** Moments spending
- [ ] **FE-9.2.6** Accessible table alternative for each chart

#### Part FE-9.3 — Export

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-9.3.1** CSV export per report
- [ ] **FE-9.3.2** Print stylesheet (PDF later, optional)

- [ ] 🚦 **GATE (P9)** Reports reconcile with Transactions totals for the same filters

## Phase P10 — Settings and Admin

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Account control and the admin dashboard.

#### Part FE-10.1 — Settings

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-10.1.1** Profiles management (create, rename, archive, default, delete with typed confirmation)
- [ ] **FE-10.1.2** Account (name, avatar upload, email, change password, linked providers)
- [ ] **FE-10.1.3** Preferences (theme, FY start, week start, date format) synced to backend
- [ ] **FE-10.1.4** Security (MFA enroll/disable, sign out everywhere)
- [ ] **FE-10.1.5** Data (export my data, delete account with re-auth)

#### Part FE-10.2 — Admin

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-10.2.1** Admin overview (aggregate counts only)
- [ ] **FE-10.2.2** Users list with search and pagination
- [ ] **FE-10.2.3** User detail (metadata) with suspend/reactivate and role change dialogs
- [ ] **FE-10.2.4** Audit log viewer with filters
- [ ] **FE-10.2.5** MFA-required gate for admin session
- [ ] **FE-10.2.6** System/health page

- [ ] 🚦 **GATE (P10)** Admin UI never displays financial values; non-admin deep links to `/admin` are rejected

## Phase P11 — Security, testing, optimisation

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Ship-quality.

#### Part FE-11.1 — Accessibility

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-11.1.1** Keyboard-only walkthrough of every flow
- [ ] **FE-11.1.2** axe checks in Playwright for every page
- [ ] **FE-11.1.3** Screen-reader pass on forms, tables, charts
- [ ] **FE-11.1.4** Fix findings and re-verify

#### Part FE-11.2 — Performance

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-11.2.1** Bundle analysis and chunk budgets enforced in CI
- [ ] **FE-11.2.2** Optimise images/fonts, memoise heavy lists
- [ ] **FE-11.2.3** Lighthouse CI on landing and key app pages

#### Part FE-11.3 — Quality

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-11.3.1** Audit loading, empty and error states on every page
- [ ] **FE-11.3.2** Cross-browser and device matrix (Chrome, Safari iOS, Firefox, Edge, low-end Android)
- [ ] **FE-11.3.3** Verify CSP does not break app; tighten
- [ ] **FE-11.3.4** Confirm no PII or amounts in Sentry events

- [ ] 🚦 **GATE (P11)** Zero critical a11y issues, budgets met, CSP enforced

## Phase P12 — Deployment and launch

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Production frontend live and watched.

#### Part FE-12.1 — Vercel

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-12.1.1** Configure production project, domain, HTTPS, redirects
- [ ] **FE-12.1.2** Configure SPA fallback and security headers
- [ ] **FE-12.1.3** Configure env vars per environment (no secrets in client)

#### Part FE-12.2 — Launch readiness

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **FE-12.2.1** Source maps to Sentry; release tagging
- [ ] **FE-12.2.2** Final smoke test on production
- [ ] **FE-12.2.3** Post-launch watch (errors, vitals) for first 7 days

- [ ] 🚦 **GATE (P12)** Production smoke test passes; rollback tested once

---

# SECTION 2 — BACKEND

## Phase P0 — Foundations

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Environments exist and migrations are reproducible.

#### Part BE-0.1 — Supabase projects

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-0.1.1** Create dev, staging, production Supabase projects (region decision recorded, e.g. Mumbai)
- [ ] **BE-0.1.2** Production on Pro plan; enable backups/PITR
- [ ] **BE-0.1.3** Restrict dashboard access; enable 2FA for all team members

#### Part BE-0.2 — Local development

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-0.2.1** Install Supabase CLI; `supabase init` and `config.toml` committed
- [ ] **BE-0.2.2** `supabase start` works for every developer; document in README
- [ ] **BE-0.2.3** Establish migration naming and review rules (forward-only)

#### Part BE-0.3 — Decisions closed

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-0.3.1** Resolve OQ-3 (phone auth), OQ-4, OQ-5, OQ-6, OQ-7 with product owner
- [ ] **BE-0.3.2** Record results in `architecture.md` §2 and ADRs

- [ ] 🚦 **GATE (P0)** `supabase db reset` rebuilds an empty database from migrations on a clean machine

## Phase P1 — Design system and app scaffold (backend side)

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Database baseline.

#### Part BE-1.1 — Baseline migration

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-1.1.1** Enable extensions (`pgcrypto`, `pg_trgm`, `citext` if used)
- [ ] **BE-1.1.2** Create enum types per §B.3.1
- [ ] **BE-1.1.3** Create generic `set_updated_at` trigger function
- [ ] **BE-1.1.4** Revoke default public privileges; set default privileges for new tables

- [ ] 🚦 **GATE (P1)** Baseline migration applies cleanly on all environments

## Phase P3 — Authentication

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Secure identity layer.

#### Part BE-3.1 — Auth configuration

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-3.1.1** Set site URL and exact redirect allow-list per environment
- [ ] **BE-3.1.2** Configure custom SMTP with SPF, DKIM, DMARC
- [ ] **BE-3.1.3** Customise email templates (confirm, reset)
- [ ] **BE-3.1.4** Enable CAPTCHA on signup and reset
- [ ] **BE-3.1.5** Set password policy (min 10, leaked-password protection) and JWT/refresh settings
- [ ] **BE-3.1.6** Tune Auth rate limits

#### Part BE-3.2 — Google provider

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-3.2.1** Create Google Cloud OAuth client (consent screen, authorised redirect URIs per environment)
- [ ] **BE-3.2.2** Enable Google provider in Supabase for each environment
- [ ] **BE-3.2.3** Verify linking behaviour for existing email accounts

#### Part BE-3.3 — User profile bootstrap

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-3.3.1** Create `user_profiles` table with constraints and RLS
- [ ] **BE-3.3.2** Create `user_roles` table with RLS (no client writes)
- [ ] **BE-3.3.3** Create trigger on `auth.users` insert → create profile and `user` role (ignore client metadata for role)
- [ ] **BE-3.3.4** Column-level protection on `user_profiles` (`status`, `email` not client-updatable)
- [ ] **BE-3.3.5** Store consent timestamp and policy version

- [ ] 🚦 **GATE (P3)** Fresh signup always yields exactly one `user_profiles` row and role `user`; role cannot be changed from the client

## Phase P4 — Roles and financial profiles

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Authorisation foundation.

#### Part BE-4.1 — Role claim

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-4.1.1** Implement custom access-token Auth Hook adding `user_role`
- [ ] **BE-4.1.2** Test claim for user, admin, and missing-role cases

#### Part BE-4.2 — Financial profiles

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-4.2.1** Create `financial_profiles` with constraints, unique indexes, one-default rule
- [ ] **BE-4.2.2** Add per-user profile limit trigger (OQ-7)
- [ ] **BE-4.2.3** Create `owns_profile()` helper (definer, `search_path=''`) and RLS policies

#### Part BE-4.3 — Admin bootstrap

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-4.3.1** Write one-off, audited procedure to create the first admin per environment
- [ ] **BE-4.3.2** Document and rehearse on staging

#### Part BE-4.4 — RLS test harness

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-4.4.1** Build pgTAP helpers to impersonate user A, user B, admin, anon
- [ ] **BE-4.4.2** Write isolation tests for `user_profiles`, `user_roles`, `financial_profiles`

- [ ] 🚦 **GATE (P4)** pgTAP proves user A cannot read or write user B's profiles; user cannot self-promote

## Phase P5 — Schema and transaction engine

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** The ledger and its integrity rules.

#### Part BE-5.1 — Categories

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-5.1.1** Create `default_categories` and seed (§B.11)
- [ ] **BE-5.1.2** Create `categories` with `UNIQUE(id, profile_id)`, name uniqueness, RLS

#### Part BE-5.2 — Transactions

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-5.2.1** Create `transactions` with checks and composite FK to categories
- [ ] **BE-5.2.2** Trigger: category type must match transaction type
- [ ] **BE-5.2.3** Trigger: protect `moment_payment` rows from direct edits
- [ ] **BE-5.2.4** RLS policies; revoke hard DELETE; soft delete via `deleted_at`
- [ ] **BE-5.2.5** Create indexes per §B.3.5 (incl. partial and trigram)

#### Part BE-5.3 — Profile RPCs

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-5.3.1** `create_financial_profile` (atomic seed of categories)
- [ ] **BE-5.3.2** `archive_financial_profile`, `delete_financial_profile`

#### Part BE-5.4 — Audit foundation

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-5.4.1** Create `audit_logs` (append-only by privileges)
- [ ] **BE-5.4.2** Generic audit trigger recording field names, not values (D-07)
- [ ] **BE-5.4.3** Attach triggers to profile, category, transaction tables

#### Part BE-5.5 — Tests and types

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-5.5.1** pgTAP: constraints (amount, dates, composite-FK cross-profile rejection, type mismatch)
- [ ] **BE-5.5.2** pgTAP: RLS for categories and transactions across users and profiles
- [ ] **BE-5.5.3** Generate TypeScript types and commit

- [ ] 🚦 **GATE (P5)** Cross-profile reference attempts fail at the database level; all RLS tests green in CI

## Phase P6 — Income, Categories, Transactions

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Query and mutation endpoints for core money features.

#### Part BE-6.1 — Listing

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-6.1.1** Implement `list_transactions` with keyset pagination, filters, search
- [ ] **BE-6.1.2** Verify query plans use indexes at 100k rows (EXPLAIN notes saved)

#### Part BE-6.2 — Mutations and rules

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-6.2.1** `soft_delete_transaction` and `restore_transaction`
- [ ] **BE-6.2.2** Category archive rule (cannot hard-delete in-use categories)
- [ ] **BE-6.2.3** Error codes mapped for the frontend (`lib/errors.ts` contract)

#### Part BE-6.3 — Income analytics

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-6.3.1** Implement `income_analytics` (series + breakdown)
- [ ] **BE-6.3.2** pgTAP golden-dataset tests for income analytics

- [ ] 🚦 **GATE (P6)** p95 list query < 150 ms on 100k transactions; golden tests green

## Phase P7 — Home and Budget

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Budgets and dashboard calculations.

#### Part BE-7.1 — Budgets

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-7.1.1** Create `budgets` with composite FK, monthly check, unique index handling null category
- [ ] **BE-7.1.2** RLS and audit triggers
- [ ] **BE-7.1.3** `copy_budget` function

#### Part BE-7.2 — Calculations

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-7.2.1** `budget_status` (budgeted, spent, remaining, pct, committed-unpaid placeholder)
- [ ] **BE-7.2.2** `dashboard_summary` (net, savings rate with null-safe division, recent, upcoming)
- [ ] **BE-7.2.3** pgTAP golden tests, including zero income, over-budget, deleted rows

- [ ] 🚦 **GATE (P7)** Calculation rules §B.6 items 1–7 each have a passing test

## Phase P8 — Moments

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Planned-vs-actual with zero duplication.

#### Part BE-8.1 — Tables

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-8.1.1** Create `moments` with date and status checks
- [ ] **BE-8.1.2** Create `moment_items` with composite FKs
- [ ] **BE-8.1.3** Create `moment_payments` with unique `transaction_id` and `idempotency_key`
- [ ] **BE-8.1.4** RLS (payments: no direct client writes) and audit triggers

#### Part BE-8.2 — Payment RPCs

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-8.2.1** `record_moment_payment` (atomic, idempotent, ownership and status checks, row lock on item)
- [ ] **BE-8.2.2** `delete_moment_payment` (soft-delete transaction, remove link, atomic)
- [ ] **BE-8.2.3** Over-plan behaviour per OQ-5

#### Part BE-8.3 — Views and integration

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-8.3.1** `v_moment_item_status` and `v_moment_summary` with `security_invoker=true`
- [ ] **BE-8.3.2** Update `budget_status` and `dashboard_summary` to include committed-unpaid separately
- [ ] **BE-8.3.3** Lifecycle rules (cancel Moment keeps paid history, cancels unpaid commitments)

#### Part BE-8.4 — Tests

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-8.4.1** pgTAP: idempotent retry returns same payment
- [ ] **BE-8.4.2** Concurrency test: two simultaneous payments cannot exceed rules or duplicate
- [ ] **BE-8.4.3** pgTAP: unpaid commitments never in expense totals; paid always once
- [ ] **BE-8.4.4** pgTAP: cross-profile item/transaction linking rejected

- [ ] 🚦 **GATE (P8)** Moment payment duplication suite green, including concurrent runs

## Phase P9 — Reports

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Fast, correct aggregate reports.

#### Part BE-9.1 — Report functions

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-9.1.1** `report_series` (day/week/month/year)
- [ ] **BE-9.1.2** `report_category_breakdown`
- [ ] **BE-9.1.3** Moments and budget-vs-actual report functions

#### Part BE-9.2 — Period logic

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-9.2.1** Financial-year and week-start handling driven by user preferences
- [ ] **BE-9.2.2** Date-range cap (e.g., 5 years) and input validation

#### Part BE-9.3 — Performance and tests

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-9.3.1** EXPLAIN review at 500k rows; add indexes if needed
- [ ] **BE-9.3.2** Evaluate materialised views only if targets missed
- [ ] **BE-9.3.3** pgTAP golden tests including FY and leap-year edges

- [ ] 🚦 **GATE (P9)** Report p95 < 400 ms at 500k rows; totals reconcile with `list_transactions` sums

## Phase P10 — Settings and Admin

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Privileged operations done safely.

#### Part BE-10.1 — Shared Edge Function toolkit

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-10.1.1** `_shared` helpers: JWT verify, role check, `aal2` check, Zod parse, error format, CORS
- [ ] **BE-10.1.2** Postgres-backed rate limiter (`rate_limits`) and cleanup job
- [ ] **BE-10.1.3** Audit helper for functions

#### Part BE-10.2 — Admin functions

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-10.2.1** `admin-list-users`, `admin-user-detail` (metadata only)
- [ ] **BE-10.2.2** `admin-set-role` with last-admin and self-demotion guards
- [ ] **BE-10.2.3** `admin-set-status` (suspend revokes sessions)
- [ ] **BE-10.2.4** `admin-stats` and `admin-audit-log`
- [ ] **BE-10.2.5** Deno tests: non-admin rejected, aal1 rejected, no financial fields in responses

#### Part BE-10.3 — User data rights

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-10.3.1** `export-my-data` (JSON/CSV, all profiles, streamed for size)
- [ ] **BE-10.3.2** `delete-my-account` (re-auth required, cascade, audit record without PII)
- [ ] **BE-10.3.3** Avatar storage bucket and policies
- [ ] **BE-10.3.4** Tests proving export contains only caller's data and deletion removes all rows

- [ ] 🚦 **GATE (P10)** Admin function suite green; export/delete verified on staging with real-shaped data

## Phase P11 — Security, testing, optimisation

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Prove the security claims.

#### Part BE-11.1 — Security review

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-11.1.1** RLS audit: every public table has RLS enabled and forced, expected policies only
- [ ] **BE-11.1.2** Automated test: all views have `security_invoker=true`
- [ ] **BE-11.1.3** Review every `security definer` function (search_path, ownership checks)
- [ ] **BE-11.1.4** Run Supabase security and performance advisors; clear all warnings
- [ ] **BE-11.1.5** Attack scenarios from §C.2 threat checklist executed and recorded

#### Part BE-11.2 — Abuse and limits

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-11.2.1** Set statement timeouts for client roles
- [ ] **BE-11.2.2** Verify page-size and range caps
- [ ] **BE-11.2.3** Load-test auth and key RPCs; tune limits

#### Part BE-11.3 — Resilience

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-11.3.1** Perform and document a full backup restore drill
- [ ] **BE-11.3.2** Verify audit log completeness against a sample of operations
- [ ] **BE-11.3.3** Review slow-query logs and indexes

- [ ] 🚦 **GATE (P11)** No open critical/high findings; restore drill succeeded within agreed RTO

## Phase P12 — Deployment and launch

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** Production backend ready and operable.

#### Part BE-12.1 — Production rollout

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-12.1.1** Apply migrations to production via approved workflow
- [ ] **BE-12.1.2** Set production secrets, SMTP, CAPTCHA, Google OAuth redirect URIs
- [ ] **BE-12.1.3** Create production admin via the audited procedure
- [ ] **BE-12.1.4** Confirm MFA enforced for admins

#### Part BE-12.2 — Operations

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **BE-12.2.1** Confirm daily backups and PITR active
- [ ] **BE-12.2.2** Write runbooks (incident, restore, key rotation, user deletion request)
- [ ] **BE-12.2.3** Configure alerts (error rate, auth failures, DB CPU/connections)

- [ ] 🚦 **GATE (P12)** Production readiness checklist signed by tech lead

---

# SECTION 3 — SHARED (SECURITY, TESTING, DEVOPS, COMPLIANCE)

## Phase P0 — Foundations

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

**Goal:** The team can ship safely from day one.

#### Part SH-0.1 — Repository and process

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **SH-0.1.1** Create GitHub repo, branch protection (required checks, review, no force-push)
- [ ] **SH-0.1.2** Add CODEOWNERS, PR template (checklist from Definition of Done), issue templates
- [ ] **SH-0.1.3** Commit `architecture.md`, `plan.md`, `progress.md` under `docs/`
- [ ] **SH-0.1.4** Agree Definition of Done and working agreements; record in `docs/`

#### Part SH-0.2 — CI skeleton

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **SH-0.2.1** GitHub Actions: install, lint, typecheck, build
- [ ] **SH-0.2.2** Add Supabase start + migrations + pgTAP job
- [ ] **SH-0.2.3** Add Dependabot/Renovate, `npm audit`, secret scanning, CodeQL
- [ ] **SH-0.2.4** Cache dependencies; keep CI under 10 minutes

#### Part SH-0.3 — Environments and secrets

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **SH-0.3.1** Define dev/staging/prod matrix (URLs, projects, keys)
- [ ] **SH-0.3.2** Store secrets in GitHub environments and Supabase secrets only
- [ ] **SH-0.3.3** Document secret rotation procedure

#### Part SH-0.4 — Open items

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **SH-0.4.1** Obtain definition of FAIR from product owner (OQ-1) and add to architecture
- [ ] **SH-0.4.2** Reconcile earlier chat decisions into architecture (OQ-2)

- [ ] 🚦 **GATE (P0)** A PR with a trivial change runs full CI and deploys a preview

## Phase P1 — Design system and app scaffold

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

#### Part SH-1.1 — Test infrastructure

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **SH-1.1.1** Configure Vitest and React Testing Library with shared render helper
- [ ] **SH-1.1.2** Configure Playwright (desktop + mobile projects, axe)
- [ ] **SH-1.1.3** Add test factories and MSW mocks
- [ ] **SH-1.1.4** Add contrast-check script to CI

- [ ] 🚦 **GATE (P1)** Sample unit, component and E2E tests run in CI

## Phase P2 — Public landing page

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

#### Part SH-2.1 — Legal and brand

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **SH-2.1.1** Engage legal for Terms and Privacy Policy (DPDP Act alignment)
- [ ] **SH-2.1.2** Domain, brand assets and email sender identity finalised

## Phase P3 — Authentication

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

#### Part SH-3.1 — Auth testing

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **SH-3.1.1** E2E: signup → verify → login → logout
- [ ] **SH-3.1.2** E2E: Google flow (mocked provider in CI, manual check on staging)
- [ ] **SH-3.1.3** E2E: unverified user blocked; expired link handling
- [ ] **SH-3.1.4** Security tests: no account enumeration, open-redirect rejection, rate-limit behaviour

## Phase P4 — Roles and financial profiles

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

#### Part SH-4.1 — Isolation tests

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **SH-4.1.1** E2E: two users, two profiles each; verify UI and API isolation
- [ ] **SH-4.1.2** E2E: role claim and admin route rejection
- [ ] **SH-4.1.3** Add isolation tests to a required CI check

## Phase P5 — Schema and transaction engine

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

#### Part SH-5.1 — Test discipline

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **SH-5.1.1** Require pgTAP tests with every schema PR
- [ ] **SH-5.1.2** Add CI step failing if a new table lacks RLS or tests
- [ ] **SH-5.1.3** Schema change checklist (types regenerated, `architecture.md` §B updated)

## Phase P6 — Income, Categories, Transactions

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

#### Part SH-6.1 — Feature verification

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **SH-6.1.1** E2E: add/edit/delete/undo transaction; category lifecycle
- [ ] **SH-6.1.2** Seed script for 100k transactions on staging; performance run
- [ ] **SH-6.1.3** Verify CSV export correctness against database totals

## Phase P7 — Home and Budget

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

#### Part SH-7.1 — Calculation verification

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **SH-7.1.1** Shared golden dataset (JSON) consumed by pgTAP and E2E
- [ ] **SH-7.1.2** E2E: budget thresholds and dashboard numbers match golden values

## Phase P8 — Moments

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

#### Part SH-8.1 — Duplication prevention verification

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **SH-8.1.1** E2E: rapid double-click, network retry, back/forward resubmit
- [ ] **SH-8.1.2** E2E: reconcile Moment totals with Transactions, Budget, Reports
- [ ] **SH-8.1.3** Manual exploratory session on Moment edge cases (cancel, overpay, delete)

## Phase P9 — Reports

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

#### Part SH-9.1 — Report verification

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **SH-9.1.1** Cross-check report totals with ledger totals in automated tests
- [ ] **SH-9.1.2** FY and week-start scenario tests

## Phase P10 — Settings and Admin

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

#### Part SH-10.1 — Privileged path tests

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **SH-10.1.1** E2E: admin cannot see financial data anywhere
- [ ] **SH-10.1.2** E2E: user cannot call admin functions directly (API-level)
- [ ] **SH-10.1.3** E2E: export and delete-account journeys

## Phase P11 — Security, testing, optimisation

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

#### Part SH-11.1 — Security sign-off

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **SH-11.1.1** Run full threat checklist (§C.2); record evidence
- [ ] **SH-11.1.2** Dependency and secret scan clean; fix or accept with ADR
- [ ] **SH-11.1.3** Independent penetration test or external review (recommended before launch)
- [ ] **SH-11.1.4** Verify CSP and security headers with an online scanner

#### Part SH-11.2 — Quality sign-off

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **SH-11.2.1** Test coverage targets met (§C.4)
- [ ] **SH-11.2.2** Full regression E2E on staging
- [ ] **SH-11.2.3** UAT with 5–10 pilot users; triage feedback

#### Part SH-11.3 — Compliance sign-off

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **SH-11.3.1** Privacy Policy and Terms published and consent flow verified
- [ ] **SH-11.3.2** Data export and deletion procedures verified end to end
- [ ] **SH-11.3.3** Incident response plan reviewed and contact points confirmed

- [ ] 🚦 **GATE (P11)** Security, quality and compliance sign-offs recorded

## Phase P12 — Deployment and launch

**Phase status:** ⬜ Not started  ·  **Lead:** ___  ·  **Target:** ___  ·  **Actual:** ___

#### Part SH-12.1 — Go-live

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **SH-12.1.1** Production deploy via approved workflow; smoke test
- [ ] **SH-12.1.2** Monitoring dashboards and alerts live (Sentry, uptime, Supabase)
- [ ] **SH-12.1.3** Rollback rehearsal (Vercel rollback, forward-fix migration drill)

#### Part SH-12.2 — Post-launch

_Owner:_ ___  ·  _Started:_ ___  ·  _Done:_ ___  ·  _PR/Link:_ ___

- [ ] **SH-12.2.1** Day-1, day-3, day-7 health reviews
- [ ] **SH-12.2.2** Triage backlog: phone auth, PWA, PDF reports, recurring transactions, attachments
- [ ] **SH-12.2.3** Retrospective and update `architecture.md` with lessons

- [ ] 🚦 **GATE (P12)** Seven days of production with no severity-1 incidents
