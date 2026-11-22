# SAMRIDD — Execution Plan

> Companion to `architecture.md` (the spec). This file is the **what and in what order**. `progress.md` is the live checklist generated from this plan with identical IDs.
> **ID format:** `TRACK-PHASE.PART.STEP` → e.g. `BE-5.3.2` = Backend, Phase 5, Part 3, Step 2.

## How to read this plan

Work is split into **3 sections** (tracks) that run in parallel and share one set of **13 phases** (P0–P12):

1. **Section 1 — Frontend (FE)**
2. **Section 2 — Backend (BE)**
3. **Section 3 — Shared: security, testing, DevOps, compliance (SH)**

**Changes from the source development order** (source had 11 phases): added **P0 Foundations** (environments, CI, decisions — missing in source), split **P12 Deployment & Launch** from hardening, moved **admin/role schema earlier** (P4, before any financial table), and added pgTAP/RLS testing as a first-class track.

## Phase map and dependencies

| Phase | Name | Depends on | Main outcome |
|---|---|---|---|
| P0 | Foundations | — | Repos, environments, CI, decisions closed |
| P1 | Design system and app scaffold | P0 | Running React app with themed components |
| P2 | Public landing page | P1 | Pre-rendered, SEO-ready marketing site |
| P3 | Authentication | P0, P1 | Signup, login, Google, sessions |
| P4 | Roles and financial profiles | P3 | Isolated profiles, role system |
| P5 | Schema and transaction engine | P4 | Ledger, categories, RLS, tests |
| P6 | Income, Categories, Transactions | P5 | Core money features usable |
| P7 | Home and Budget | P6 | Dashboard and budgets |
| P8 | Moments | P6, P7 | Planned vs actual events |
| P9 | Reports | P6, P8 | Period reports and charts |
| P10 | Settings and Admin | P4, P9 | Account/profile management, admin dashboard |
| P11 | Security, testing, optimisation | P1–P10 | Hardened and audited |
| P12 | Deployment and launch | P11 | Production live and monitored |

**Critical path:** P0 → P3 → P4 → P5 → P6 → P8 → P9 → P11 → P12. P1–P2 run in parallel with P3–P4 backend work.

---

# SECTION 1 — FRONTEND

## Phase P0 — Foundations

**Goal:** Frontend conventions fixed before code exists.

#### Part FE-0.1 — Engineering conventions
- FE-0.1.1 Confirm Node LTS version and package manager; add `.nvmrc` and `engines`
- FE-0.1.2 Configure ESLint (typescript-eslint, react-hooks, import boundaries, ban `parseFloat` on money, ban deep cross-feature imports)
- FE-0.1.3 Configure Prettier and EditorConfig
- FE-0.1.4 Add Husky + lint-staged + commitlint (conventional commits)
- FE-0.1.5 Write `docs/frontend-conventions.md` (naming, file layout, query keys, mutation invalidation rules)

- GATE: A new developer can clone, install, lint and commit following conventions without help

## Phase P1 — Design system and app scaffold

**Goal:** Empty but production-shaped app, themed, with the shared component library.

#### Part FE-1.1 — Project scaffold
- FE-1.1.1 Create Vite + React 19 + TypeScript project with `strict` and `noUncheckedIndexedAccess`
- FE-1.1.2 Set path aliases (`@/`) in Vite and tsconfig
- FE-1.1.3 Create `src/` folder structure exactly as in architecture §A.3 with placeholder `index.ts` per feature
- FE-1.1.4 Add `lib/env.ts` validating `VITE_*` variables with Zod; add `.env.example`
- FE-1.1.5 Add React Router data router with lazy route stubs for all routes in §A.2
- FE-1.1.6 Pin versions; verify Recharts + React 19 (`react-is` override if needed)

#### Part FE-1.2 — Tailwind v4 and shadcn
- FE-1.2.1 Install Tailwind CSS v4 and configure via CSS-first `@theme`
- FE-1.2.2 Initialise shadcn/ui (React 19 + Tailwind v4 compatible) with `components/ui`
- FE-1.2.3 Add the full shadcn component inventory from §A.5
- FE-1.2.4 Add Sonner toaster and Lucide icons

#### Part FE-1.3 — Design tokens and themes
- FE-1.3.1 Define brand tokens (Burgundy, Mocha Cream, Cosmic Latte) in `styles/tokens.css`
- FE-1.3.2 Define semantic light tokens (background, surface, foreground, primary, muted, border, ring)
- FE-1.3.3 Derive dark-mode tokens including a lightened burgundy tint; record exact hex values
- FE-1.3.4 Define status colours (success, warning, danger, info) distinct from burgundy
- FE-1.3.5 Define typography, radius, spacing, shadow scales; self-host chosen fonts
- FE-1.3.6 Build `ThemeProvider` (light/dark/system) with blocking no-flash inline script
- FE-1.3.7 Write `scripts/contrast-check` and add it to CI; fix any failing pair
- FE-1.3.8 Document token usage rules (Cosmic Latte never as text colour, colour never sole signal)

#### Part FE-1.4 — Layouts and navigation
- FE-1.4.1 Build `PublicLayout` (header/footer)
- FE-1.4.2 Build `AuthLayout`
- FE-1.4.3 Build `AppShell` with sidebar for 8 tabs (desktop)
- FE-1.4.4 Build mobile bottom tab bar with "More" sheet
- FE-1.4.5 Build `AdminLayout` with distinct visual banner
- FE-1.4.6 Build `ProfileSwitcher` shell (data wired in P4)

#### Part FE-1.5 — Core libraries and shared components
- FE-1.5.1 Create `lib/supabase.ts` client (single instance)
- FE-1.5.2 Create `queryClient` with defaults (staleTime, retry rules, error handler)
- FE-1.5.3 Build `lib/money.ts` (string ↔ paise, add/sub, format `en-IN`) with unit tests
- FE-1.5.4 Build `lib/dates.ts` (IST today, week start, month, FY boundaries) with unit tests
- FE-1.5.5 Build `lib/errors.ts` (Postgres/Auth error code → friendly message)
- FE-1.5.6 Build `MoneyText`, `MoneyInput`, `EmptyState`, `ErrorState`, `ConfirmDialog`, `StatCard`
- FE-1.5.7 Build global `ErrorBoundary` and 404 page
- FE-1.5.8 Integrate Sentry browser SDK with PII scrubbing

- GATE: App runs, light and dark themes pass contrast check, all 8 nav tabs render placeholder pages on desktop and mobile

## Phase P2 — Public landing page

**Goal:** Fast, accessible, SEO-ready marketing site.

#### Part FE-2.1 — Content and information architecture
- FE-2.1.1 Reconcile landing structure with product owner and earlier chat (OQ-2)
- FE-2.1.2 Write copy for hero, features (8 areas), how it works, Moments, profiles, security, INR/manual-first, FAQ
- FE-2.1.3 Prepare illustrations/screenshots (optimised AVIF/WebP) and logo assets

#### Part FE-2.2 — Build sections
- FE-2.2.1 Header with Login/Sign up and mobile menu
- FE-2.2.2 Hero with primary CTA
- FE-2.2.3 Feature grid (8 navigation areas)
- FE-2.2.4 How-it-works (3 steps)
- FE-2.2.5 Moments highlight section
- FE-2.2.6 Independent profiles and security/privacy sections
- FE-2.2.7 FAQ accordion
- FE-2.2.8 Final CTA and footer

#### Part FE-2.3 — SEO and performance
- FE-2.3.1 Add build-time pre-rendering for `/`, `/terms`, `/privacy`
- FE-2.3.2 Add title, meta description, OpenGraph/Twitter cards, canonical, JSON-LD
- FE-2.3.3 Generate `sitemap.xml` and `robots.txt`
- FE-2.3.4 Ensure landing chunk excludes auth/app code; verify bundle ≤ 150 KB gz
- FE-2.3.5 Lighthouse ≥ 90 (Perf, A11y, Best Practices, SEO) on mobile profile

#### Part FE-2.4 — Legal pages
- FE-2.4.1 Terms of Service page (content from legal)
- FE-2.4.2 Privacy Policy page (content from legal, DPDP-aligned)

- GATE: Landing deployed on a Vercel preview, Lighthouse targets met, legal pages linked in footer

## Phase P3 — Authentication

**Goal:** Users can sign up, verify, log in and out securely.

#### Part FE-3.1 — Auth screens
- FE-3.1.1 Signup form (email, password with strength meter, confirm, consent checkbox, CAPTCHA)
- FE-3.1.2 Login form with error handling that does not enable account enumeration
- FE-3.1.3 Forgot-password and reset-password screens
- FE-3.1.4 "Continue with Google" button on login and signup
- FE-3.1.5 Email-verification pending screen with resend (rate-limited UI)

#### Part FE-3.2 — Callback and session handling
- FE-3.2.1 Build `/auth/callback` (OAuth code and email-link handling, expired-link states)
- FE-3.2.2 Build `AuthProvider` using `onAuthStateChange`
- FE-3.2.3 Build `RequireAuth` guard with return-to redirect
- FE-3.2.4 Sign-out clears Query cache and local state
- FE-3.2.5 Validate redirect targets (no open redirect)

#### Part FE-3.3 — Deferred phone auth
- FE-3.3.1 Confirm decision D-04 with product owner (OQ-3)
- FE-3.3.2 If approved later: design phone OTP UI and linking rules (otherwise mark N/A)

- GATE: Full email and Google flows work on staging; unverified users cannot reach the app

## Phase P4 — Roles and financial profiles

**Goal:** Every user has at least one isolated financial profile; role-aware navigation.

#### Part FE-4.1 — Onboarding
- FE-4.1.1 Build `/onboarding` first-profile form (name, colour, icon)
- FE-4.1.2 Redirect logic: no profile → onboarding; else last-used profile

#### Part FE-4.2 — Profile switching and scoping
- FE-4.2.1 Wire `ProfileSwitcher` to profile list
- FE-4.2.2 Implement `RequireProfile` guard validating `:profileId` against accessible profiles
- FE-4.2.3 Persist last-used profile (`last_active_profile_id`)
- FE-4.2.4 Confirm query keys include `profileId`; add test proving no cache reuse across profiles

#### Part FE-4.3 — Role-aware UI
- FE-4.3.1 Read `user_role` claim into `useRole()`
- FE-4.3.2 Build `RequireRole` guard for `/admin`
- FE-4.3.3 Hide admin link for non-admins (UX only; backend authoritative)

- GATE: Two test users with two profiles each cannot see each other's data in UI or cache

## Phase P5 — Schema and transaction engine (frontend side)

**Goal:** Typed API layer and conventions ready for feature work.

#### Part FE-5.1 — Types and API layer
- FE-5.1.1 Generate `database.types.ts` and add npm script
- FE-5.1.2 Define API-layer pattern (`features/*/api`) returning domain models
- FE-5.1.3 Build row→domain mappers (numeric string → paise)

#### Part FE-5.2 — Shared schemas and keys
- FE-5.2.1 Zod schemas for transaction, category (mirror DB constraints)
- FE-5.2.2 Query-key factory per feature
- FE-5.2.3 Mutation helper with standard invalidation lists and error toasts

- GATE: Sample feature reads and writes through the layered pattern with full type safety

## Phase P6 — Income, Categories, Transactions

**Goal:** Users can fully manage money records.

#### Part FE-6.1 — Categories
- FE-6.1.1 Categories page with Income/Expense tabs
- FE-6.1.2 Create/edit dialog (name, icon, colour) with duplicate-name handling
- FE-6.1.3 Archive/unarchive; delete only when unused
- FE-6.1.4 `CategoryPicker` shared component

#### Part FE-6.2 — Transaction form
- FE-6.2.1 Add/edit dialog (type, amount, date, category, payee, method, note)
- FE-6.2.2 Date defaults to IST today; future-date warning
- FE-6.2.3 Quick-add from header and mobile FAB

#### Part FE-6.3 — Transactions ledger
- FE-6.3.1 `DataTable` with TanStack Table in manual (server-driven) mode
- FE-6.3.2 Keyset pagination and page-size selector
- FE-6.3.3 Filters: date range, type, categories, amount range, text search, source (URL-synced)
- FE-6.3.4 Sorting by date/amount
- FE-6.3.5 Row actions: edit, delete with undo toast, restore
- FE-6.3.6 Moment-sourced rows: link to Moment, read-only
- FE-6.3.7 CSV export of filtered set

#### Part FE-6.4 — Income view
- FE-6.4.1 Income page reusing ledger filtered to income
- FE-6.4.2 Income analytics: monthly bars, category donut, totals/averages

- GATE: Add, edit, delete, undo, filter and export work with 10k+ seeded rows on mobile and desktop

## Phase P7 — Home and Budget

**Goal:** At-a-glance dashboard and budget tracking.

#### Part FE-7.1 — Home dashboard
- FE-7.1.1 Welcome header and month snapshot (income, expense, net, savings rate)
- FE-7.1.2 Budget-used indicator
- FE-7.1.3 Recent transactions and upcoming commitments widgets
- FE-7.1.4 Quick Actions (add income, add expense, set budget, new Moment)
- FE-7.1.5 Onboarding checklist with persisted completion

#### Part FE-7.2 — Budget page
- FE-7.2.1 Month selector
- FE-7.2.2 Overall budget card with set/edit
- FE-7.2.3 Category budgets list with progress bars and 80%/100% states
- FE-7.2.4 "Copy previous month" action
- FE-7.2.5 Show committed-unpaid separately from spent
- FE-7.2.6 Warning (not block) when category total exceeds overall (per OQ-4)

- GATE: Dashboard and Budget figures match backend golden datasets exactly

## Phase P8 — Moments

**Goal:** Plan events and pay for them without double counting.

#### Part FE-8.1 — List and create
- FE-8.1.1 Moments list with status chips and progress
- FE-8.1.2 Create/edit Moment form
- FE-8.1.3 Cancel/complete actions with confirmation

#### Part FE-8.2 — Detail and planned items
- FE-8.2.1 Moment detail layout (summary, items, payments)
- FE-8.2.2 Add/edit/cancel planned items
- FE-8.2.3 Commitments view (unpaid remainder per item)

#### Part FE-8.3 — Payments
- FE-8.3.1 Record-payment form with generated idempotency key
- FE-8.3.2 Disable submit while pending; handle duplicate response gracefully
- FE-8.3.3 Delete/reverse payment with confirmation
- FE-8.3.4 Over-plan flag (per OQ-5)

#### Part FE-8.4 — Integration
- FE-8.4.1 Payments visible in Transactions with Moment link
- FE-8.4.2 Invalidate dashboard, budget and reports on payment changes

- GATE: Double-click and retry never create duplicate expenses; totals reconcile across Moments, Transactions, Budget

## Phase P9 — Reports

**Goal:** Trustworthy period reports.

#### Part FE-9.1 — Report framework
- FE-9.1.1 Period picker (daily/weekly/monthly/yearly; calendar or FY) with presets
- FE-9.1.2 URL-synced report state
- FE-9.1.3 Lazy-loaded reports chunk

#### Part FE-9.2 — Charts and tables
- FE-9.2.1 Income vs expense trend
- FE-9.2.2 Category breakdown (donut + table)
- FE-9.2.3 Net/savings over time
- FE-9.2.4 Budget vs actual
- FE-9.2.5 Moments spending
- FE-9.2.6 Accessible table alternative for each chart

#### Part FE-9.3 — Export
- FE-9.3.1 CSV export per report
- FE-9.3.2 Print stylesheet (PDF later, optional)

- GATE: Reports reconcile with Transactions totals for the same filters

## Phase P10 — Settings and Admin

**Goal:** Account control and the admin dashboard.

#### Part FE-10.1 — Settings
- FE-10.1.1 Profiles management (create, rename, archive, default, delete with typed confirmation)
- FE-10.1.2 Account (name, avatar upload, email, change password, linked providers)
- FE-10.1.3 Preferences (theme, FY start, week start, date format) synced to backend
- FE-10.1.4 Security (MFA enroll/disable, sign out everywhere)
- FE-10.1.5 Data (export my data, delete account with re-auth)

#### Part FE-10.2 — Admin
- FE-10.2.1 Admin overview (aggregate counts only)
- FE-10.2.2 Users list with search and pagination
- FE-10.2.3 User detail (metadata) with suspend/reactivate and role change dialogs
- FE-10.2.4 Audit log viewer with filters
- FE-10.2.5 MFA-required gate for admin session
- FE-10.2.6 System/health page

- GATE: Admin UI never displays financial values; non-admin deep links to `/admin` are rejected

## Phase P11 — Security, testing, optimisation

**Goal:** Ship-quality.

#### Part FE-11.1 — Accessibility
- FE-11.1.1 Keyboard-only walkthrough of every flow
- FE-11.1.2 axe checks in Playwright for every page
- FE-11.1.3 Screen-reader pass on forms, tables, charts
- FE-11.1.4 Fix findings and re-verify

#### Part FE-11.2 — Performance
- FE-11.2.1 Bundle analysis and chunk budgets enforced in CI
- FE-11.2.2 Optimise images/fonts, memoise heavy lists
- FE-11.2.3 Lighthouse CI on landing and key app pages

#### Part FE-11.3 — Quality
- FE-11.3.1 Audit loading, empty and error states on every page
- FE-11.3.2 Cross-browser and device matrix (Chrome, Safari iOS, Firefox, Edge, low-end Android)
- FE-11.3.3 Verify CSP does not break app; tighten
- FE-11.3.4 Confirm no PII or amounts in Sentry events

- GATE: Zero critical a11y issues, budgets met, CSP enforced

## Phase P12 — Deployment and launch

**Goal:** Production frontend live and watched.

#### Part FE-12.1 — Vercel
- FE-12.1.1 Configure production project, domain, HTTPS, redirects
- FE-12.1.2 Configure SPA fallback and security headers
- FE-12.1.3 Configure env vars per environment (no secrets in client)

#### Part FE-12.2 — Launch readiness
- FE-12.2.1 Source maps to Sentry; release tagging
- FE-12.2.2 Final smoke test on production
- FE-12.2.3 Post-launch watch (errors, vitals) for first 7 days

- GATE: Production smoke test passes; rollback tested once

---

# SECTION 2 — BACKEND

## Phase P0 — Foundations

**Goal:** Environments exist and migrations are reproducible.

#### Part BE-0.1 — Supabase projects
- BE-0.1.1 Create dev, staging, production Supabase projects (region decision recorded, e.g. Mumbai)
- BE-0.1.2 Production on Pro plan; enable backups/PITR
- BE-0.1.3 Restrict dashboard access; enable 2FA for all team members

#### Part BE-0.2 — Local development
- BE-0.2.1 Install Supabase CLI; `supabase init` and `config.toml` committed
- BE-0.2.2 `supabase start` works for every developer; document in README
- BE-0.2.3 Establish migration naming and review rules (forward-only)

#### Part BE-0.3 — Decisions closed
- BE-0.3.1 Resolve OQ-3 (phone auth), OQ-4, OQ-5, OQ-6, OQ-7 with product owner
- BE-0.3.2 Record results in `architecture.md` §2 and ADRs

- GATE: `supabase db reset` rebuilds an empty database from migrations on a clean machine

## Phase P1 — Design system and app scaffold (backend side)

**Goal:** Database baseline.

#### Part BE-1.1 — Baseline migration
- BE-1.1.1 Enable extensions (`pgcrypto`, `pg_trgm`, `citext` if used)
- BE-1.1.2 Create enum types per §B.3.1
- BE-1.1.3 Create generic `set_updated_at` trigger function
- BE-1.1.4 Revoke default public privileges; set default privileges for new tables

- GATE: Baseline migration applies cleanly on all environments

## Phase P3 — Authentication

**Goal:** Secure identity layer.

#### Part BE-3.1 — Auth configuration
- BE-3.1.1 Set site URL and exact redirect allow-list per environment
- BE-3.1.2 Configure custom SMTP with SPF, DKIM, DMARC
- BE-3.1.3 Customise email templates (confirm, reset)
- BE-3.1.4 Enable CAPTCHA on signup and reset
- BE-3.1.5 Set password policy (min 10, leaked-password protection) and JWT/refresh settings
- BE-3.1.6 Tune Auth rate limits

#### Part BE-3.2 — Google provider
- BE-3.2.1 Create Google Cloud OAuth client (consent screen, authorised redirect URIs per environment)
- BE-3.2.2 Enable Google provider in Supabase for each environment
- BE-3.2.3 Verify linking behaviour for existing email accounts

#### Part BE-3.3 — User profile bootstrap
- BE-3.3.1 Create `user_profiles` table with constraints and RLS
- BE-3.3.2 Create `user_roles` table with RLS (no client writes)
- BE-3.3.3 Create trigger on `auth.users` insert → create profile and `user` role (ignore client metadata for role)
- BE-3.3.4 Column-level protection on `user_profiles` (`status`, `email` not client-updatable)
- BE-3.3.5 Store consent timestamp and policy version

- GATE: Fresh signup always yields exactly one `user_profiles` row and role `user`; role cannot be changed from the client

## Phase P4 — Roles and financial profiles

**Goal:** Authorisation foundation.

#### Part BE-4.1 — Role claim
- BE-4.1.1 Implement custom access-token Auth Hook adding `user_role`
- BE-4.1.2 Test claim for user, admin, and missing-role cases

#### Part BE-4.2 — Financial profiles
- BE-4.2.1 Create `financial_profiles` with constraints, unique indexes, one-default rule
- BE-4.2.2 Add per-user profile limit trigger (OQ-7)
- BE-4.2.3 Create `owns_profile()` helper (definer, `search_path=''`) and RLS policies

#### Part BE-4.3 — Admin bootstrap
- BE-4.3.1 Write one-off, audited procedure to create the first admin per environment
- BE-4.3.2 Document and rehearse on staging

#### Part BE-4.4 — RLS test harness
- BE-4.4.1 Build pgTAP helpers to impersonate user A, user B, admin, anon
- BE-4.4.2 Write isolation tests for `user_profiles`, `user_roles`, `financial_profiles`

- GATE: pgTAP proves user A cannot read or write user B's profiles; user cannot self-promote

## Phase P5 — Schema and transaction engine

**Goal:** The ledger and its integrity rules.

#### Part BE-5.1 — Categories
- BE-5.1.1 Create `default_categories` and seed (§B.11)
- BE-5.1.2 Create `categories` with `UNIQUE(id, profile_id)`, name uniqueness, RLS

#### Part BE-5.2 — Transactions
- BE-5.2.1 Create `transactions` with checks and composite FK to categories
- BE-5.2.2 Trigger: category type must match transaction type
- BE-5.2.3 Trigger: protect `moment_payment` rows from direct edits
- BE-5.2.4 RLS policies; revoke hard DELETE; soft delete via `deleted_at`
- BE-5.2.5 Create indexes per §B.3.5 (incl. partial and trigram)

#### Part BE-5.3 — Profile RPCs
- BE-5.3.1 `create_financial_profile` (atomic seed of categories)
- BE-5.3.2 `archive_financial_profile`, `delete_financial_profile`

#### Part BE-5.4 — Audit foundation
- BE-5.4.1 Create `audit_logs` (append-only by privileges)
- BE-5.4.2 Generic audit trigger recording field names, not values (D-07)
- BE-5.4.3 Attach triggers to profile, category, transaction tables

#### Part BE-5.5 — Tests and types
- BE-5.5.1 pgTAP: constraints (amount, dates, composite-FK cross-profile rejection, type mismatch)
- BE-5.5.2 pgTAP: RLS for categories and transactions across users and profiles
- BE-5.5.3 Generate TypeScript types and commit

- GATE: Cross-profile reference attempts fail at the database level; all RLS tests green in CI

## Phase P6 — Income, Categories, Transactions

**Goal:** Query and mutation endpoints for core money features.

#### Part BE-6.1 — Listing
- BE-6.1.1 Implement `list_transactions` with keyset pagination, filters, search
- BE-6.1.2 Verify query plans use indexes at 100k rows (EXPLAIN notes saved)

#### Part BE-6.2 — Mutations and rules
- BE-6.2.1 `soft_delete_transaction` and `restore_transaction`
- BE-6.2.2 Category archive rule (cannot hard-delete in-use categories)
- BE-6.2.3 Error codes mapped for the frontend (`lib/errors.ts` contract)

#### Part BE-6.3 — Income analytics
- BE-6.3.1 Implement `income_analytics` (series + breakdown)
- BE-6.3.2 pgTAP golden-dataset tests for income analytics

- GATE: p95 list query < 150 ms on 100k transactions; golden tests green

## Phase P7 — Home and Budget

**Goal:** Budgets and dashboard calculations.

#### Part BE-7.1 — Budgets
- BE-7.1.1 Create `budgets` with composite FK, monthly check, unique index handling null category
- BE-7.1.2 RLS and audit triggers
- BE-7.1.3 `copy_budget` function

#### Part BE-7.2 — Calculations
- BE-7.2.1 `budget_status` (budgeted, spent, remaining, pct, committed-unpaid placeholder)
- BE-7.2.2 `dashboard_summary` (net, savings rate with null-safe division, recent, upcoming)
- BE-7.2.3 pgTAP golden tests, including zero income, over-budget, deleted rows

- GATE: Calculation rules §B.6 items 1–7 each have a passing test

## Phase P8 — Moments

**Goal:** Planned-vs-actual with zero duplication.

#### Part BE-8.1 — Tables
- BE-8.1.1 Create `moments` with date and status checks
- BE-8.1.2 Create `moment_items` with composite FKs
- BE-8.1.3 Create `moment_payments` with unique `transaction_id` and `idempotency_key`
- BE-8.1.4 RLS (payments: no direct client writes) and audit triggers

#### Part BE-8.2 — Payment RPCs
- BE-8.2.1 `record_moment_payment` (atomic, idempotent, ownership and status checks, row lock on item)
- BE-8.2.2 `delete_moment_payment` (soft-delete transaction, remove link, atomic)
- BE-8.2.3 Over-plan behaviour per OQ-5

#### Part BE-8.3 — Views and integration
- BE-8.3.1 `v_moment_item_status` and `v_moment_summary` with `security_invoker=true`
- BE-8.3.2 Update `budget_status` and `dashboard_summary` to include committed-unpaid separately
- BE-8.3.3 Lifecycle rules (cancel Moment keeps paid history, cancels unpaid commitments)

#### Part BE-8.4 — Tests
- BE-8.4.1 pgTAP: idempotent retry returns same payment
- BE-8.4.2 Concurrency test: two simultaneous payments cannot exceed rules or duplicate
- BE-8.4.3 pgTAP: unpaid commitments never in expense totals; paid always once
- BE-8.4.4 pgTAP: cross-profile item/transaction linking rejected

- GATE: Moment payment duplication suite green, including concurrent runs

## Phase P9 — Reports

**Goal:** Fast, correct aggregate reports.

#### Part BE-9.1 — Report functions
- BE-9.1.1 `report_series` (day/week/month/year)
- BE-9.1.2 `report_category_breakdown`
- BE-9.1.3 Moments and budget-vs-actual report functions

#### Part BE-9.2 — Period logic
- BE-9.2.1 Financial-year and week-start handling driven by user preferences
- BE-9.2.2 Date-range cap (e.g., 5 years) and input validation

#### Part BE-9.3 — Performance and tests
- BE-9.3.1 EXPLAIN review at 500k rows; add indexes if needed
- BE-9.3.2 Evaluate materialised views only if targets missed
- BE-9.3.3 pgTAP golden tests including FY and leap-year edges

- GATE: Report p95 < 400 ms at 500k rows; totals reconcile with `list_transactions` sums

## Phase P10 — Settings and Admin

**Goal:** Privileged operations done safely.

#### Part BE-10.1 — Shared Edge Function toolkit
- BE-10.1.1 `_shared` helpers: JWT verify, role check, `aal2` check, Zod parse, error format, CORS
- BE-10.1.2 Postgres-backed rate limiter (`rate_limits`) and cleanup job
- BE-10.1.3 Audit helper for functions

#### Part BE-10.2 — Admin functions
- BE-10.2.1 `admin-list-users`, `admin-user-detail` (metadata only)
- BE-10.2.2 `admin-set-role` with last-admin and self-demotion guards
- BE-10.2.3 `admin-set-status` (suspend revokes sessions)
- BE-10.2.4 `admin-stats` and `admin-audit-log`
- BE-10.2.5 Deno tests: non-admin rejected, aal1 rejected, no financial fields in responses

#### Part BE-10.3 — User data rights
- BE-10.3.1 `export-my-data` (JSON/CSV, all profiles, streamed for size)
- BE-10.3.2 `delete-my-account` (re-auth required, cascade, audit record without PII)
- BE-10.3.3 Avatar storage bucket and policies
- BE-10.3.4 Tests proving export contains only caller's data and deletion removes all rows

- GATE: Admin function suite green; export/delete verified on staging with real-shaped data

## Phase P11 — Security, testing, optimisation

**Goal:** Prove the security claims.

#### Part BE-11.1 — Security review
- BE-11.1.1 RLS audit: every public table has RLS enabled and forced, expected policies only
- BE-11.1.2 Automated test: all views have `security_invoker=true`
- BE-11.1.3 Review every `security definer` function (search_path, ownership checks)
- BE-11.1.4 Run Supabase security and performance advisors; clear all warnings
- BE-11.1.5 Attack scenarios from §C.2 threat checklist executed and recorded

#### Part BE-11.2 — Abuse and limits
- BE-11.2.1 Set statement timeouts for client roles
- BE-11.2.2 Verify page-size and range caps
- BE-11.2.3 Load-test auth and key RPCs; tune limits

#### Part BE-11.3 — Resilience
- BE-11.3.1 Perform and document a full backup restore drill
- BE-11.3.2 Verify audit log completeness against a sample of operations
- BE-11.3.3 Review slow-query logs and indexes

- GATE: No open critical/high findings; restore drill succeeded within agreed RTO

## Phase P12 — Deployment and launch

**Goal:** Production backend ready and operable.

#### Part BE-12.1 — Production rollout
- BE-12.1.1 Apply migrations to production via approved workflow
- BE-12.1.2 Set production secrets, SMTP, CAPTCHA, Google OAuth redirect URIs
- BE-12.1.3 Create production admin via the audited procedure
- BE-12.1.4 Confirm MFA enforced for admins

#### Part BE-12.2 — Operations
- BE-12.2.1 Confirm daily backups and PITR active
- BE-12.2.2 Write runbooks (incident, restore, key rotation, user deletion request)
- BE-12.2.3 Configure alerts (error rate, auth failures, DB CPU/connections)

- GATE: Production readiness checklist signed by tech lead

---

# SECTION 3 — SHARED (SECURITY, TESTING, DEVOPS, COMPLIANCE)

## Phase P0 — Foundations

**Goal:** The team can ship safely from day one.

#### Part SH-0.1 — Repository and process
- SH-0.1.1 Create GitHub repo, branch protection (required checks, review, no force-push)
- SH-0.1.2 Add CODEOWNERS, PR template (checklist from Definition of Done), issue templates
- SH-0.1.3 Commit `architecture.md`, `plan.md`, `progress.md` under `docs/`
- SH-0.1.4 Agree Definition of Done and working agreements; record in `docs/`

#### Part SH-0.2 — CI skeleton
- SH-0.2.1 GitHub Actions: install, lint, typecheck, build
- SH-0.2.2 Add Supabase start + migrations + pgTAP job
- SH-0.2.3 Add Dependabot/Renovate, `npm audit`, secret scanning, CodeQL
- SH-0.2.4 Cache dependencies; keep CI under 10 minutes

#### Part SH-0.3 — Environments and secrets
- SH-0.3.1 Define dev/staging/prod matrix (URLs, projects, keys)
- SH-0.3.2 Store secrets in GitHub environments and Supabase secrets only
- SH-0.3.3 Document secret rotation procedure

#### Part SH-0.4 — Open items
- SH-0.4.1 Obtain definition of FAIR from product owner (OQ-1) and add to architecture
- SH-0.4.2 Reconcile earlier chat decisions into architecture (OQ-2)

- GATE: A PR with a trivial change runs full CI and deploys a preview

## Phase P1 — Design system and app scaffold

#### Part SH-1.1 — Test infrastructure
- SH-1.1.1 Configure Vitest and React Testing Library with shared render helper
- SH-1.1.2 Configure Playwright (desktop + mobile projects, axe)
- SH-1.1.3 Add test factories and MSW mocks
- SH-1.1.4 Add contrast-check script to CI

- GATE: Sample unit, component and E2E tests run in CI

## Phase P2 — Public landing page

#### Part SH-2.1 — Legal and brand
- SH-2.1.1 Engage legal for Terms and Privacy Policy (DPDP Act alignment)
- SH-2.1.2 Domain, brand assets and email sender identity finalised

## Phase P3 — Authentication

#### Part SH-3.1 — Auth testing
- SH-3.1.1 E2E: signup → verify → login → logout
- SH-3.1.2 E2E: Google flow (mocked provider in CI, manual check on staging)
- SH-3.1.3 E2E: unverified user blocked; expired link handling
- SH-3.1.4 Security tests: no account enumeration, open-redirect rejection, rate-limit behaviour

## Phase P4 — Roles and financial profiles

#### Part SH-4.1 — Isolation tests
- SH-4.1.1 E2E: two users, two profiles each; verify UI and API isolation
- SH-4.1.2 E2E: role claim and admin route rejection
- SH-4.1.3 Add isolation tests to a required CI check

## Phase P5 — Schema and transaction engine

#### Part SH-5.1 — Test discipline
- SH-5.1.1 Require pgTAP tests with every schema PR
- SH-5.1.2 Add CI step failing if a new table lacks RLS or tests
- SH-5.1.3 Schema change checklist (types regenerated, `architecture.md` §B updated)

## Phase P6 — Income, Categories, Transactions

#### Part SH-6.1 — Feature verification
- SH-6.1.1 E2E: add/edit/delete/undo transaction; category lifecycle
- SH-6.1.2 Seed script for 100k transactions on staging; performance run
- SH-6.1.3 Verify CSV export correctness against database totals

## Phase P7 — Home and Budget

#### Part SH-7.1 — Calculation verification
- SH-7.1.1 Shared golden dataset (JSON) consumed by pgTAP and E2E
- SH-7.1.2 E2E: budget thresholds and dashboard numbers match golden values

## Phase P8 — Moments

#### Part SH-8.1 — Duplication prevention verification
- SH-8.1.1 E2E: rapid double-click, network retry, back/forward resubmit
- SH-8.1.2 E2E: reconcile Moment totals with Transactions, Budget, Reports
- SH-8.1.3 Manual exploratory session on Moment edge cases (cancel, overpay, delete)

## Phase P9 — Reports

#### Part SH-9.1 — Report verification
- SH-9.1.1 Cross-check report totals with ledger totals in automated tests
- SH-9.1.2 FY and week-start scenario tests

## Phase P10 — Settings and Admin

#### Part SH-10.1 — Privileged path tests
- SH-10.1.1 E2E: admin cannot see financial data anywhere
- SH-10.1.2 E2E: user cannot call admin functions directly (API-level)
- SH-10.1.3 E2E: export and delete-account journeys

## Phase P11 — Security, testing, optimisation

#### Part SH-11.1 — Security sign-off
- SH-11.1.1 Run full threat checklist (§C.2); record evidence
- SH-11.1.2 Dependency and secret scan clean; fix or accept with ADR
- SH-11.1.3 Independent penetration test or external review (recommended before launch)
- SH-11.1.4 Verify CSP and security headers with an online scanner

#### Part SH-11.2 — Quality sign-off
- SH-11.2.1 Test coverage targets met (§C.4)
- SH-11.2.2 Full regression E2E on staging
- SH-11.2.3 UAT with 5–10 pilot users; triage feedback

#### Part SH-11.3 — Compliance sign-off
- SH-11.3.1 Privacy Policy and Terms published and consent flow verified
- SH-11.3.2 Data export and deletion procedures verified end to end
- SH-11.3.3 Incident response plan reviewed and contact points confirmed

- GATE: Security, quality and compliance sign-offs recorded

## Phase P12 — Deployment and launch

#### Part SH-12.1 — Go-live
- SH-12.1.1 Production deploy via approved workflow; smoke test
- SH-12.1.2 Monitoring dashboards and alerts live (Sentry, uptime, Supabase)
- SH-12.1.3 Rollback rehearsal (Vercel rollback, forward-fix migration drill)

#### Part SH-12.2 — Post-launch
- SH-12.2.1 Day-1, day-3, day-7 health reviews
- SH-12.2.2 Triage backlog: phone auth, PWA, PDF reports, recurring transactions, attachments
- SH-12.2.3 Retrospective and update `architecture.md` with lessons

- GATE: Seven days of production with no severity-1 incidents
