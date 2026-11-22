# SAMRIDD — Architecture

> **Status:** v1.0 draft · **Owner:** Tech lead · **Audience:** whole team
> This is the single source of truth. If `plan.md` or `progress.md` disagree with this file, this file wins.

**Tag legend** used throughout:
- `[SRC]` — taken from the original tech-stack document
- `[ADD]` — added during this review (gap or fix found in the source)
- `[OPEN]` — decision still needed from the product owner

**Document structure:** §0 Overview and Audit → **Part A: Frontend** → **Part B: Backend** → **Part C: Shared (security, testing, DevOps)** → Appendices.

---

## 0. Overview

### 0.1 What SAMRIDD is `[SRC]`
A secure, responsive, **manual-first, INR-only** personal finance management web platform. Users keep multiple **independent financial profiles**, record income and expenses in one central ledger, set budgets, plan life events ("Moments") with planned costs and real payments, and view reports.

### 0.2 Non-negotiable principles `[SRC]` + `[ADD]`
1. **Single ledger.** Income and expenses live in one `transactions` table. The Income and Transactions pages are *views* of it.
2. **Independent profiles.** A financial profile owns its data completely. No query, report or foreign key may cross profiles. `[ADD]` This is enforced in the schema with composite foreign keys, not just RLS.
3. **Money is `NUMERIC(14,2)`.** Never float in the database. `[ADD]` The frontend never does money arithmetic on floats either (see §A.7).
4. **Actual vs planned.** Moment *payments* are real ledger rows. Unpaid *commitments* are never counted as expenses.
5. **Backend-enforced security.** The UI hides things for UX; Postgres RLS and Edge Functions decide.
6. **Modular monolith.** One deployable frontend, one Supabase project. Features are folders, not services.
7. **Deterministic finance.** No AI in calculations. `[SRC]`
8. **INR only, manual first.** No bank integrations, no multi-currency. `[SRC]`

### 0.3 Roles `[SRC]`
| Role | Access |
|---|---|
| `user` | Own account, own financial profiles and all data inside them |
| `admin` | Separate admin dashboard. `[ADD]` **No access to users' financial records**, only account metadata and aggregates |

New signups are always `user`. Admin is granted only by a trusted server-side process (§B.5).

### 0.4 Navigation (8 tabs) `[SRC]`
Home · Income · Budget · Transactions · Categories · Reports · Moments · Settings.
Plus: public landing page, auth screens, and a separate admin interface.

### 0.5 Open items that block or shape this document
| ID | Item | Status |
|---|---|---|
| OQ-1 | **"FAIR" architecture.** The request mentions the architecture of FAIR, but nothing in the provided material defines it. It is **not** invented here. Provide its definition (a separate product, a module, or a principle set) and a section will be added. | `[OPEN]` |
| OQ-2 | **Earlier chat decisions.** Only the tech-stack document was available. Landing page copy, auth screens, Moments details and any changes agreed in chat are marked `[ADD]` as *proposed* and must be reconciled. | `[OPEN]` |
| OQ-3 | Phone authentication in MVP? Recommendation in D-04: **defer**. | `[OPEN]` |
| OQ-4 | May a category budgets total exceed the overall budget? Recommendation: allow with a warning. | `[OPEN]` |
| OQ-5 | May a Moment item be overpaid? Recommendation: allow, flag as "over plan". | `[OPEN]` |
| OQ-6 | Financial year default: April–March (India) vs calendar year. Recommendation: user setting, default April. | `[OPEN]` |
| OQ-7 | Maximum financial profiles per user. Recommendation: 10. | `[OPEN]` |

---

## 1. Brutal audit of the source document

Severity: 🔴 will cause a bug, breach or rework · 🟠 real gap · 🟡 inconsistency or polish.

| # | Sev | Finding | Resolution in this architecture |
|---|---|---|---|
| 1 | 🔴 | **Admin model is unsafe by default.** The role is stored in "user profile and role records" with no design. If the role lives in a user-writable row, any user can promote themselves. | Role stored in a separate `user_roles` table with **no client write policy**, exposed to the app through a JWT claim set by an Auth Hook. Writes only via service role (§B.5). |
| 2 | 🔴 | **RLS alone does not give profile isolation.** A `transaction.profile_id` can legally point at profile A while its `category_id` belongs to profile B. That is a cross-profile leak that RLS on each table will not catch. | Composite foreign keys `(category_id, profile_id) → categories(id, profile_id)` on every child table (§B.3). |
| 3 | 🔴 | **Views bypass RLS by default** in Postgres. Reports built on plain views would expose all users' data. | All views use `security_invoker = true`. Reports run as invoker-rights RPCs. A CI test checks this (§C.4). |
| 4 | 🔴 | **Admin sees financial data?** The source says "audit logs" and "admin dashboard" but never says what admins can see. Audit logs storing before/after JSON of transactions would leak financial data to anyone with log access. | Admins see account metadata and aggregates only. Audit logs for financial entities store *who, what, which id, which fields changed*, **not values** (D-07). |
| 5 | 🔴 | **Rate limiting is listed as if it were free.** Supabase Auth has built-in limits, but PostgREST/RPC calls and Edge Functions have no per-user limiter. Redis is "excluded", yet that is the usual tool. | Postgres-backed limiter table for Edge Functions, CAPTCHA on signup/login, Auth limits tuned (§B.8). Redis stays excluded. |
| 6 | 🔴 | **Zod "server-side validation" is a contradiction.** Zod in React runs on the client and is trivially bypassed. | Validation is layered: Zod (UX) → Edge Function Zod (privileged paths) → DB `CHECK`/triggers (final authority). Schemas shared where Deno allows (§A.8, §B.3). |
| 7 | 🟠 | **No database testing.** Business logic lives in PostgreSQL functions, but the test stack is Vitest, RTL and Playwright only. Nothing tests SQL or RLS. | Add **pgTAP** via `supabase test db`, plus an RLS test harness. Mandatory in CI (§C.4). |
| 8 | 🟠 | **Stack lists are inconsistent.** MFA, HTTPS, Google OAuth, Supabase Storage and Phone Auth appear in tables but not in the "final stack" list. The copy-ready list has broken formatting. Pasted image alt-text ("Free Supabase PNG & SVG Download", "Oakstone & Github | Executive Search…") is embedded in the text. | Single canonical stack in §A.1/§B.1/§C.1. Storage and MFA are explicit. |
| 9 | 🟠 | **Landing page as a client-rendered Vite SPA hurts SEO and first paint.** A marketing page that needs a JS bundle to render is a business risk. | Pre-render public routes at build time; lazy-load the app and admin chunks (§A.11). No SSR framework needed. |
| 10 | 🟠 | **Colour system is under-specified and partly unusable.** (a) Burgundy `#722F37` on the dark theme has ~1.9:1 contrast against a near-black background. (b) Cosmic Latte `#B7A89A` as a background with burgundy text is ~4.2:1, which fails WCAG AA for body text. (c) Mocha Cream text on Cosmic Latte is ~1.6:1. (d) Burgundy resembles "danger red", colliding with the expense/error semantics. (e) `#B7A89A` is a taupe; the real "Cosmic Latte" is `#FFF8E7` (naming only). | Token system with separate dark-mode tints, usage rules, semantic colours that are *not* burgundy, and a mandatory contrast check (§A.5). |
| 11 | 🟠 | **No audit-log design, no soft delete, no edit history.** Financial apps need reversible deletion and traceability. | Soft delete on transactions, `audit_logs` table, undo flow (§B.3, §B.7). |
| 12 | 🟠 | **Default Supabase email is not production-grade.** The built-in SMTP is heavily rate-limited and not intended for production. | Custom SMTP provider required before launch (§B.5). |
| 13 | 🟠 | **Phone auth in India is a project in itself.** SMS cost, DLT registration for transactional SMS, OTP abuse, account linking between phone/email/Google. | Deferred from MVP (D-04). Email + Google first. |
| 14 | 🟠 | **No environments, CI, monitoring or backups.** Deployment is just "Vercel + Supabase Cloud". Free tier projects pause and have no PITR. | Dev/staging/prod, GitHub Actions, Sentry, backup/restore drill (§C.5–C.7). |
| 15 | 🟠 | **No privacy/compliance thinking.** Handling personal financial data in India falls under the DPDP Act, 2023. The source mentions none of: consent, data export, account deletion, retention. | Privacy policy, consent at signup, data export and delete-account flows (§C.3). Legal review required. |
| 16 | 🟠 | **"Profile" is ambiguous.** The source uses it for both the user account profile and the independent financial profile. | Naming rule: `user_profiles` (account) vs `financial_profiles` (workspaces). UI says "Profile" only for financial profiles; account lives under "Account". |
| 17 | 🟡 | **Financial year ignored.** An Indian product reporting "yearly" without an April–March option will feel wrong. | `fy_start_month` preference, default 4 (OQ-6). |
| 18 | 🟡 | **Number formatting.** INR uses lakh/crore grouping (₹12,34,567.89). Default `toLocaleString()` gives western grouping. | `Intl.NumberFormat('en-IN')` wrapper only (§A.7). |
| 19 | 🟡 | **Missing Moments detail.** The source says "planned expenses, actual payments, unpaid commitments" but defines no entities, statuses or rules. | Fully specified in §B.3 and §B.6 (proposed, OQ-2, OQ-5). |
| 20 | 🟡 | **Pagination and indexing not mentioned.** A "searchable and filterable" ledger loaded into TanStack Table client-side will not scale. | Server-side keyset pagination and filtering; TanStack Table used headless (§A.9). |
| 21 | 🟡 | **Admin in same SPA** means admin UI code ships to everyone. Not a data breach (RLS and functions still guard), but avoidable. | Lazy-loaded admin chunk, role-guarded. Separate subdomain later if needed. |
| 22 | 🟡 | **React 19 and Recharts** occasionally need dependency overrides (`react-is`). | Pin versions; note in setup (§A.1). |

---

## 2. Decision log

| ID | Decision | Why | Status |
|---|---|---|---|
| D-01 | Modular monolith on Supabase; no custom Node server | Matches source; minimal ops | Fixed `[SRC]` |
| D-02 | One `transactions` table for income and expense | Prevents duplicate records and wrong summaries | Fixed `[SRC]` |
| D-03 | Moment payment = ledger row + link row, created atomically by one RPC | Guarantees no double counting | Fixed `[SRC]`+`[ADD]` |
| D-04 | MVP auth = **email/password + Google OAuth**; phone deferred | Cost, DLT, abuse, linking complexity | Recommended, confirm (OQ-3) |
| D-05 | Roles in `user_roles`, delivered via JWT custom claim; client can never write | Prevent self-promotion | Fixed `[ADD]` |
| D-06 | Profile URL scoping: `/p/:profileId/...` | Explicit isolation, bookmarkable, cache keys include id | Fixed `[ADD]` |
| D-07 | Audit logs record metadata, not financial values | Admin log access must not leak finances | Fixed `[ADD]` |
| D-08 | Soft delete for transactions (`deleted_at`), hard delete only via account deletion | Undo and traceability | Fixed `[ADD]` |
| D-09 | Business calculations run in Postgres (RPC/views), not in the browser | One source of truth, testable with pgTAP | Fixed `[ADD]` |
| D-10 | Dates stored as `date` (no timezone), interpreted in IST by default | Avoids off-by-one-day errors at midnight | Fixed `[ADD]` |
| D-11 | Public pages pre-rendered; app and admin lazy-loaded | SEO and performance | Fixed `[ADD]` |
| D-12 | Money crosses the API as strings and is parsed to integer paise on the client | Avoids float drift | Fixed `[ADD]` |
| D-13 | Redis, queues and Express stay excluded; Postgres-backed rate limiter | Source exclusions respected | Fixed `[SRC]`+`[ADD]` |
| D-14 | Supabase paid plan (Pro) for production | PITR/backups, no pausing, leaked-password protection, SMTP | Fixed `[ADD]` |

---

## 3. System architecture

### 3.1 Context diagram
```
                       ┌──────────────────────────────────────────┐
   Browser (React SPA) │  Vercel (static hosting, CDN, previews)  │
   ───────────────────▶│  /, /login, … (pre-rendered)             │
                       │  /p/:id/*, /settings, /admin (lazy JS)   │
                       └───────────────┬──────────────────────────┘
                                       │ HTTPS (supabase-js, anon key + user JWT)
                                       ▼
 ┌─────────────────────────────── Supabase Cloud ───────────────────────────────┐
 │  Auth (email, Google, MFA)  ── Auth Hook ──▶ adds `user_role` claim to JWT   │
 │  PostgREST (auto API)  ── RLS ──▶  PostgreSQL                                │
 │  RPC (PL/pgSQL functions, invoker rights)  ── RLS ──▶ PostgreSQL             │
 │  Edge Functions (Deno/TS, service role, privileged: admin, export, delete)   │
 │  Storage (avatars, optional attachments, bucket RLS)                         │
 └───────────────────────────────────────────────────────────────────────────────┘
        ▲                                   ▲
   GitHub Actions (CI, migrations)     Sentry, uptime checks
```

### 3.2 Where logic lives (the rule)
| Concern | Lives in | Never in |
|---|---|---|
| Form validation, UX | Zod + React Hook Form | — |
| Authorisation | RLS policies, Edge Function checks | Frontend route guards only |
| Money maths, aggregates, reports | PostgreSQL RPC/views | Browser |
| Multi-row atomic writes (create profile, moment payment) | PL/pgSQL RPC | Multiple client calls |
| Privileged operations (role change, suspend, delete account, export) | Edge Functions with service role | Client, RPC |
| Integrity (positive amounts, type match, uniqueness) | DB constraints and triggers | Only in Zod |

### 3.3 Data flows

**Flow 1 — Sign up and first login**
```
User → /signup form (Zod) → supabase.auth.signUp (CAPTCHA token)
     → Auth creates auth.users row
     → DB trigger on auth.users: insert user_profiles + user_roles('user')
     → verification email (custom SMTP) → user clicks link → /auth/callback
     → session (JWT with user_role='user') → onboarding: create first financial profile
     → RPC create_financial_profile → inserts profile + seeds default categories (one transaction)
     → redirect /p/:profileId/home
```

**Flow 2 — Read (e.g., Transactions page)**
```
Route /p/:id/transactions → useTransactions(profileId, filters) [TanStack Query]
  key: ['p', profileId, 'transactions', filters]
  → supabase.from('transactions').select(...) with keyset cursor  (RLS: owns_profile(profile_id))
  → rows (amount as string) → mapped to domain model (paise ints) → TanStack Table renders
```

**Flow 3 — Write (add expense)**
```
Form (RHF+Zod) → amount "1,250.50" → parsed to "1250.50"
  → mutation → insert into transactions (RLS WITH CHECK owns_profile)
  → DB: CHECK amount>0, composite FK category/profile, trigger type matches category.type, audit trigger
  → onSuccess: invalidate ['p', profileId, 'transactions'|'dashboard'|'budget'|'reports']
```

**Flow 4 — Moment payment (the double-count guard)**
```
Moment detail → "Record payment" (item, amount, date, method, idempotency key)
  → RPC record_moment_payment(...)  [single DB transaction]
       1. verify owns_profile + item belongs to moment + moment not cancelled
       2. insert transactions(type='expense', source='moment_payment', category=item.category)
       3. insert moment_payments(transaction_id UNIQUE, item_id, moment_id, idempotency_key UNIQUE)
       4. audit entry
  → returns payment + updated item status (planned / paid / remaining from view)
Result: expense appears once in ledger; unpaid remainder is only "commitment" (never in transactions).
```

**Flow 5 — Reports**
```
Reports page → period + granularity + filters → RPC report_series / report_category_breakdown
  (invoker rights, RLS applies) → aggregated rows → Recharts + table.
No raw-transaction aggregation in the browser.
```

**Flow 6 — Admin**
```
/admin (lazy chunk) guarded by JWT claim user_role='admin' AND MFA aal2
  → Edge Function admin-* : verifies caller JWT, role, aal2 → service-role query
  → returns metadata/aggregates only → writes audit_logs row (actor, action, target)
```

---

# PART A — FRONTEND

## A.1 Stack `[SRC]`
| Tech | Role | Notes |
|---|---|---|
| React 19 + TypeScript (`strict`) | UI | `noUncheckedIndexedAccess` on |
| Vite | Dev server and build | Pre-render plugin for public routes `[ADD]` |
| Tailwind CSS v4 | Styling | Tokens as CSS variables (`@theme`) |
| shadcn/ui (Radix) | Component primitives | Copied into `components/ui`, owned by us |
| React Router | Routing | Data router, lazy routes |
| TanStack Query | Server state | Single QueryClient |
| React Hook Form + Zod | Forms and validation | `@hookform/resolvers/zod` |
| TanStack Table | Headless tables | Server-driven sorting/filtering/paging |
| Recharts | Charts | Pin version, check `react-is` override |
| date-fns | Dates | `en-IN` locale; no moment.js |
| Lucide React | Icons | |
| `@supabase/supabase-js` | Backend client `[ADD]` | Missing from source list |
| Sentry browser SDK `[ADD]` | Error monitoring | |
Testing: see §C.4.

## A.2 Route map
```
PUBLIC (pre-rendered)           /  /terms  /privacy
AUTH                            /login  /signup  /forgot-password  /reset-password  /auth/callback
APP (RequireAuth, role=user|admin)
  /onboarding                   first financial profile
  /p/:profileId/home
  /p/:profileId/income
  /p/:profileId/budget
  /p/:profileId/transactions
  /p/:profileId/categories
  /p/:profileId/reports
  /p/:profileId/moments        /p/:profileId/moments/:momentId
  /settings/profiles           /settings/account   /settings/preferences   /settings/security  /settings/data
ADMIN (RequireRole=admin + aal2, lazy chunk)
  /admin  /admin/users  /admin/users/:id  /admin/audit  /admin/system
FALLBACK                        *  → 404
```
Rules: `:profileId` is validated on entry by fetching the profile (RLS returns nothing for foreign ids → redirect to profile picker). Settings are account-level, not profile-scoped, except profile management.

## A.3 Folder structure
```
src/
├─ app/                      providers (Query, Theme, Auth, Router), router.tsx, layouts/, guards/
│   ├─ layouts/              PublicLayout, AuthLayout, AppShell, AdminLayout
│   └─ guards/               RequireAuth, RequireRole, RequireProfile
├─ features/                 one folder per navigation section (independent modules)
│   ├─ landing/
│   ├─ auth/
│   ├─ profiles/             financial profiles, switcher
│   ├─ home/
│   ├─ income/
│   ├─ budget/
│   ├─ transactions/
│   ├─ categories/
│   ├─ reports/
│   ├─ moments/
│   ├─ settings/
│   └─ admin/
│        each feature contains:
│        ├─ components/      feature UI
│        ├─ hooks/           useX query/mutation hooks
│        ├─ api/             Supabase calls (the ONLY place that touches the client)
│        ├─ schemas/         Zod schemas
│        ├─ model/           types, mappers (DB row → domain)
│        ├─ pages/           route components (default exports, lazy)
│        └─ index.ts         public API of the feature
├─ components/
│   ├─ ui/                   shadcn primitives
│   └─ shared/               MoneyText, MoneyInput, PeriodPicker, EmptyState, DataTable, ConfirmDialog…
├─ lib/                      supabase.ts, queryClient.ts, money.ts, dates.ts, format.ts, env.ts, errors.ts, sentry.ts
├─ hooks/                    useDebounce, useMediaQuery, useCurrentProfile…
├─ styles/                   tokens.css, globals.css
├─ types/                    database.types.ts (generated, never hand-edited)
└─ test/                     setup, factories, msw/mocks, render helpers
```
**Import rules** (enforced by ESLint boundaries):
- A feature may import from `components/`, `lib/`, `hooks/`, `types/`.
- A feature may import another feature **only through its `index.ts`**. No deep imports.
- Only `features/*/api` and `lib/supabase.ts` may import `@supabase/supabase-js`.
- `components/ui` imports nothing from features.

## A.4 State management
| State | Tool |
|---|---|
| Server data | TanStack Query |
| Forms | React Hook Form |
| UI-local | `useState`/`useReducer` |
| URL state (filters, period, page cursor) | Search params (shareable) |
| Auth session | `AuthProvider` over supabase-js `onAuthStateChange` |
| Theme | `ThemeProvider` + `localStorage` + synced to `user_profiles.theme` |
No Redux or global store `[SRC]`.

**Query key convention:** `['p', profileId, <feature>, <resource>, params]`. Account-level: `['account', ...]`. Admin: `['admin', ...]`.
**Cache isolation:** on sign-out, `queryClient.clear()`. On profile switch, keys differ by `profileId`, so no cross-profile reuse. `[ADD]`
**Mutation convention:** every mutation declares which key prefixes it invalidates (e.g., add transaction → `transactions`, `dashboard`, `budget`, `reports`, `moments` if linked).

## A.5 Design system
**Brand tokens** `[SRC]`: Cosmic Latte `#B7A89A`, Mocha Cream `#E8DCC6`, Deep Burgundy `#722F37`.

**Measured contrast (WCAG)**
| Pair | Ratio | Use |
|---|---|---|
| Burgundy on Mocha Cream | ≈ 6.7 : 1 | ✅ text and buttons on light |
| White on Burgundy | ≈ 9.6 : 1 | ✅ primary button label |
| Burgundy on Cosmic Latte | ≈ 4.2 : 1 | ⚠ large text only |
| Mocha Cream on Cosmic Latte | ≈ 1.6 : 1 | ❌ never for text |
| Burgundy on near-black (#16110F-ish) | ≈ 1.9 : 1 | ❌ need lighter tint in dark mode |
All final token values must pass the contrast check in CI (script over `tokens.css`) `[ADD]`.

**Token structure** (`styles/tokens.css`, Tailwind v4 `@theme`):
```
--color-brand-burgundy: #722F37      --color-brand-mocha: #E8DCC6      --color-brand-latte: #B7A89A
Semantic (light):  background=mocha-tinted off-white, surface, foreground, primary=burgundy, primary-foreground=white,
                   muted=latte (borders, dividers, disabled — decorative), accent, ring
Semantic (dark):   background=warm near-black, surface, foreground=mocha cream,
                   primary=burgundy LIGHTENED to ≥4.5:1 on dark (derive and record exact hex),
                   muted/border derived from latte at low opacity
Status (must NOT be burgundy): success (green), warning (amber), danger (distinct red), info
Finance semantics: income=success hue, expense=danger-or-neutral hue; ALWAYS paired with sign/icon/label (never colour alone)
```
Typography, radius, spacing and shadow scales are defined once as tokens (family and sizes to be chosen in Phase 1). Light/dark applied via `class="dark"` on `<html>` with a blocking inline script to avoid theme flash. Default = system preference.

**Component inventory (shadcn):** Button, Input, Textarea, Select, Combobox, Checkbox, Switch, RadioGroup, Calendar/DatePicker, Dialog, AlertDialog, Sheet, Drawer, DropdownMenu, Tabs, Tooltip, Popover, Toast (sonner), Badge, Card, Table, Skeleton, Progress, Form, Pagination, Command.
**Custom shared:** `MoneyText`, `MoneyInput`, `PeriodPicker`, `ProfileSwitcher`, `CategoryPicker` (icon+colour), `StatCard`, `EmptyState`, `ErrorState`, `ConfirmDialog`, `DataTable`, `BudgetProgress`, `ChartCard`.

**Layouts:** Desktop = left sidebar with 8 tabs + profile switcher header. Mobile = bottom tab bar (5 primary + "More") and sheet-based forms. Admin layout is visually distinct (banner) to avoid confusion.

## A.6 Page specifications
Each page implements loading skeleton, empty state, error state with retry, and mobile layout.

**Landing `/`** `[ADD — reconcile with chat]` — Sections: header (logo, Login/Sign up) · hero (value proposition, CTA) · feature grid (8 areas) · how it works (3 steps) · Moments highlight · multiple independent profiles · security and privacy · INR-only/manual-first promise · FAQ · final CTA · footer (Terms, Privacy, contact). Pre-rendered, no auth code in this chunk. Targets: Lighthouse ≥ 90 on all four, LCP < 2.5 s.

**Auth** — Signup: email, password (strength meter), confirm, terms/privacy consent checkbox, CAPTCHA, "Continue with Google". Login: email, password, Google, forgot link. Forgot/reset flows. Callback handles OAuth code (PKCE) and email links with clear error states (expired link). Phone UI hidden until D-04 changes. Post-login redirect: admin → `/admin` (only if aal2 satisfied), user → last used profile, or onboarding if none.

**Home** — Welcome (name), onboarding checklist (create profile ✔ → review categories → add first transaction → set budget → plan a Moment), Quick Actions (Add income, Add expense, Set budget, New Moment), current-month snapshot (income, expense, net, savings rate), budget-used bar, last 5 transactions, upcoming Moment commitments (next due). Data from one `dashboard_summary` RPC.

**Income** — Add-income form (amount, date, source/category, note). Table = Transactions filtered to `type=income`. Analytics: income by month (bar), by category/source (donut), total for period, average per month.

**Budget** — Month selector. Overall budget card (budgeted, spent, remaining, %). Category budgets list with progress bars; amber at ≥80%, danger at ≥100%. Actions: set/edit, copy previous month, remove. Spent = actual expenses incl. Moment payments (they are expenses); commitments are shown separately as "committed, unpaid".

**Transactions** — Server-paginated table: date, type, category, note/payee, method, source (manual / Moment), amount. Filters: date range, type, categories (multi), amount range, text search, source. Sort by date/amount. Row actions: edit, delete (soft, with undo toast). Moment-sourced rows link to the Moment and are edited only through it. CSV export of the filtered set. Add-transaction dialog (shared with Income).

**Categories** — Tabs Income/Expense. Default (seeded) + custom. Create/edit name, icon, colour. Archive instead of delete when in use; delete only if unused. Case-insensitive uniqueness per profile and type. Reorder (later).

**Reports** — Granularity: daily / weekly / monthly / yearly (calendar or FY). Date-range presets. Charts: income vs expense trend, category breakdown, net/savings over time, budget vs actual, Moments spend. Summary table with totals. CSV export (PDF later).

**Moments** — List with status chips (planning, active, completed, cancelled), cards showing target, planned, paid, remaining. Create/edit Moment (title, type, dates, target budget, notes). Detail: planned items (name, category, planned amount, due date), commitments (unpaid remainder per item), payments list, progress (planned vs paid vs target), actions (record payment, edit item, cancel Moment). Payment form posts via `record_moment_payment` RPC only.

**Settings** — *Profiles:* create, rename, archive, set default, delete (typed confirmation). *Account:* name, avatar, email, change password, linked providers. *Preferences:* theme, FY start, week start, date format. *Security:* MFA enroll/disable, active sessions/sign out everywhere. *Data:* export my data (JSON/CSV), delete account.

**Admin** — Overview (aggregate counts: users, active last 7/30 days, profiles, transactions count — counts only). Users list (email, status, created, last sign-in, role; search) and detail (metadata only; suspend/reactivate, change role with confirmation). Audit log viewer (filter by actor/action/date). System page (health/links). No screen shows a user's financial values.

## A.7 Money, dates and formatting
- DB returns `numeric` as string. Parse once at the API boundary to **integer paise** (`bigint`-safe number or `bigint`) via `lib/money.ts`; convert back to a 2-dp string when sending. No `parseFloat` on money anywhere (lint rule).
- Display only through `<MoneyText />` → `Intl.NumberFormat('en-IN', { style:'currency', currency:'INR' })`. Compact notation (₹1.2L / ₹3.4Cr) allowed on charts only.
- `MoneyInput`: accepts digits and one decimal point, max 2 decimals, max 14 integer-safe digits, no negatives (type decides sign).
- Dates are `YYYY-MM-DD` strings throughout (D-10). "Today" is computed in `Asia/Kolkata`. Period helpers (week start, month, FY) live in `lib/dates.ts` and are unit-tested, including FY boundaries.

## A.8 Validation
Zod schemas live in each feature's `schemas/`. Rules mirror DB constraints: amount > 0 and ≤ 99,999,999,999.99; date not > 1 year in future (soft warning); name lengths; category required. Zod errors map to field errors; server constraint violations are translated by `lib/errors.ts` (Postgres code → user message) and never shown raw.

## A.9 Data fetching and tables
- API functions return typed domain objects; hooks wrap them with TanStack Query (`staleTime` 30 s for lists, 5 min for categories/profile).
- Lists use **keyset pagination** (`occurred_on desc, id desc`), page size 25/50/100.
- TanStack Table runs in manual mode: sorting, filtering and pagination are server-side.
- Optimistic updates only for low-risk toggles (archive category); money mutations wait for server confirmation.

## A.10 Error, loading and empty handling
Global `ErrorBoundary` (Sentry), route-level error elements, toast for transient errors, inline for forms. Skeletons not spinners for content. Every list has a purposeful empty state with a primary action. Offline: show banner; no offline writes in MVP.

## A.11 Performance and SEO
- Route-level code splitting: public, app, admin, reports (Recharts) separate chunks.
- Bundle budget: landing JS ≤ 150 KB gz; app initial ≤ 300 KB gz (tune in Phase 11).
- Pre-render `/`, `/terms`, `/privacy`, plus `<title>`, meta, OpenGraph, `sitemap.xml`, `robots.txt`.
- Self-host fonts, `font-display: swap`; images AVIF/WebP with dimensions.

## A.12 Accessibility
WCAG 2.2 AA target. Keyboard-complete flows, focus management in dialogs (Radix), visible focus ring token, labelled inputs, charts have table alternatives, colour never the sole signal, `prefers-reduced-motion` respected. axe checks in Playwright.

## A.13 Frontend environment variables
`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_SENTRY_DSN`, `VITE_APP_ENV`, `VITE_CAPTCHA_SITE_KEY`, `VITE_SITE_URL`. Validated at startup with Zod (`lib/env.ts`). The **service-role key never appears in the frontend repo or Vercel client env.**

---

# PART B — BACKEND

## B.1 Stack `[SRC]`
Supabase (PostgreSQL 15+, Auth, Edge Functions on Deno/TypeScript, Storage, PostgREST) · PL/pgSQL functions · Supabase CLI for migrations and local development `[ADD]` · pgTAP `[ADD]`.

## B.2 Conventions
- Schema `public` for app tables. Migrations are SQL files in `supabase/migrations`, forward-only, reviewed in PRs, applied by CI. No dashboard-made schema changes.
- `uuid` primary keys (`gen_random_uuid()`), `timestamptz` audit columns, `snake_case`, singular enum type names.
- Every table: RLS **enabled** and **forced**; default deny.
- Wrap `auth.uid()` as `(select auth.uid())` inside policies for plan caching.
- Functions: `security invoker` by default. `security definer` only for named helpers, with `set search_path = ''` and schema-qualified names.
- Types generated with `supabase gen types typescript` into `src/types/database.types.ts`.

## B.3 Data model

### B.3.1 Enums
`app_role('user','admin')` · `txn_type('income','expense')` · `txn_source('manual','moment_payment')` · `payment_method('cash','upi','card','netbanking','cheque','other')` · `moment_status('planning','active','completed','cancelled')` · `account_status('active','suspended')` · `theme_pref('light','dark','system')`.

### B.3.2 Entity relationship
```
auth.users 1─1 user_profiles
auth.users 1─1 user_roles
auth.users 1─* financial_profiles
financial_profiles 1─* categories
financial_profiles 1─* transactions ──* categories   (composite FK on profile)
financial_profiles 1─* budgets ──? categories        (null category = overall budget)
financial_profiles 1─* moments 1─* moment_items ──* categories
moments 1─* moment_payments ──1 transactions (UNIQUE) ; moment_payments ──? moment_items
audit_logs (append-only), rate_limits, default_categories (template)
```

### B.3.3 Tables
**`user_profiles`** — `id` PK = `auth.users.id` (ON DELETE CASCADE), `email`, `display_name`, `avatar_path`, `phone` (nullable, unused in MVP), `theme theme_pref default 'system'`, `fy_start_month smallint default 4 check 1..12`, `week_start smallint default 1 check 0..6`, `status account_status default 'active'`, `last_active_profile_id`, `created_at`, `updated_at`.
**`user_roles`** — `user_id` PK FK, `role app_role not null default 'user'`, `granted_by`, `granted_at`. *No INSERT/UPDATE/DELETE policy for any client role.*
**`financial_profiles`** — `id`, `user_id` FK, `name` (1–60), `description`, `color`, `icon`, `is_default`, `is_archived`, `created_at`, `updated_at`. Unique `(user_id, lower(name))`. Partial unique index: one `is_default` per user. Trigger limits count per user (OQ-7). `UNIQUE (id, user_id)` available for helpers.
**`default_categories`** (template) — `id`, `name`, `type txn_type`, `icon`, `color`, `sort_order`. Read-only to clients.
**`categories`** — `id`, `profile_id` FK, `name` (1–40), `type txn_type`, `icon`, `color`, `is_default`, `is_archived`, `created_at`, `updated_at`. Unique `(profile_id, type, lower(name))`. **`UNIQUE (id, profile_id)`** (target of composite FKs).
**`transactions`** — `id`, `profile_id` FK, `type txn_type`, `amount numeric(14,2) check (amount > 0 and amount <= 99999999999.99)`, `occurred_on date not null`, `category_id`, `payee text` (≤120), `note text` (≤500), `payment_method`, `source txn_source default 'manual'`, `created_by`, `created_at`, `updated_at`, `deleted_at`.
 Constraints: **FK `(category_id, profile_id) → categories(id, profile_id)`**; trigger `category.type = transactions.type`; trigger blocks edit of `source='moment_payment'` rows except via RPC. **Sign is carried by `type`, amount is always positive.**
**`budgets`** — `id`, `profile_id`, `period_start date` (first of month, check), `category_id` nullable, `amount numeric(14,2) check (amount >= 0)`, `created_at`, `updated_at`. FK `(category_id, profile_id)` when not null. Unique `(profile_id, period_start, coalesce(category_id, zero-uuid))`. Monthly only in MVP.
**`moments`** — `id`, `profile_id`, `title` (1–80), `kind` (wedding, trip, festival, birthday, education, other), `description`, `start_date`, `end_date` (≥ start), `target_budget numeric(14,2)` nullable, `status moment_status default 'planning'`, timestamps. `UNIQUE (id, profile_id)`.
**`moment_items`** — `id`, `moment_id`, `profile_id`, `name`, `category_id` (expense categories only), `planned_amount numeric(14,2) > 0`, `due_date` nullable, `is_cancelled`, `notes`, timestamps. FKs `(moment_id, profile_id) → moments(id, profile_id)` and `(category_id, profile_id)`. `UNIQUE (id, profile_id)`.
**`moment_payments`** — `id`, `profile_id`, `moment_id`, `moment_item_id` nullable, `transaction_id` **UNIQUE NOT NULL**, `idempotency_key` UNIQUE, `created_at`. FKs composite on profile. *Amount is not duplicated here; it lives only in `transactions`.*
**`audit_logs`** — `id bigint identity`, `occurred_at`, `actor_id`, `actor_role`, `action` (e.g. `txn.create`, `admin.role.set`), `entity_type`, `entity_id`, `profile_id` nullable, `meta jsonb` (field names, not values, for financial entities), `ip`, `user_agent`. Privileges: INSERT via triggers/functions only; **no UPDATE/DELETE for anyone** (revoked).
**`rate_limits`** — `key text`, `window_start timestamptz`, `count int`, PK `(key, window_start)`; cleaned by scheduled job.

### B.3.4 Derived data (views and functions, all invoker rights)
- `v_moment_item_status` — per item: planned, paid (sum of linked transaction amounts excluding soft-deleted), remaining = greatest(planned − paid, 0), overpaid = greatest(paid − planned, 0), status (`unpaid`, `partial`, `paid`, `over`, `cancelled`).
- `v_moment_summary` — per Moment: total planned, total paid, total remaining, target budget, variance.
- Views declared `with (security_invoker = true)`.

### B.3.5 Indexes
`transactions (profile_id, occurred_on desc, id desc) where deleted_at is null` · `(profile_id, category_id, occurred_on) where deleted_at is null` · `(profile_id, type, occurred_on) where deleted_at is null` · trigram index on `payee, note` for search (`pg_trgm`) · `budgets (profile_id, period_start)` · `moment_items (moment_id)` · `moment_payments (moment_id)`, `(moment_item_id)` · `audit_logs (occurred_at desc)`, `(actor_id, occurred_at desc)` · every FK column indexed.

## B.4 Row Level Security
Helper (security definer, stable, `search_path=''`):
```
owns_profile(pid uuid) → exists (select 1 from financial_profiles where id = pid and user_id = (select auth.uid()))
```
| Table | SELECT | INSERT | UPDATE | DELETE |
|---|---|---|---|---|
| user_profiles | own row | via trigger only | own row, **excluding** `status`, `email` (column privileges/trigger) | none (account deletion function) |
| user_roles | own row (read) | none | none | none |
| financial_profiles | `user_id = auth.uid()` | `user_id = auth.uid()` | same | same |
| categories, transactions, budgets, moments, moment_items | `owns_profile(profile_id)` | WITH CHECK `owns_profile(profile_id)` | USING + WITH CHECK | `owns_profile` (transactions: soft delete via UPDATE; hard DELETE revoked) |
| moment_payments | `owns_profile` | **none directly** (RPC only) | none | none (RPC only) |
| default_categories | all authenticated | none | none | none |
| audit_logs | none for users | none (triggers) | none | none |
| rate_limits | none | none | none | none |
**There are no policies granting admins access to financial tables.** Admin reads happen in Edge Functions with service role and return metadata/aggregates only.
Suspended accounts: RLS helper also checks `user_profiles.status = 'active'`.

## B.5 Authentication and authorisation
**Providers (MVP):** Email + password with email confirmation, Google OAuth (PKCE). Phone deferred (D-04); if enabled later: Twilio/MSG91-class provider, DLT registration, OTP throttling, explicit account-linking rules.
**Configuration checklist:** site URL and **exact** redirect allow-list per environment; custom SMTP (e.g., Resend/SES/Postmark) with SPF/DKIM/DMARC `[ADD]`; branded email templates; password min length ≥ 10 and leaked-password protection (Pro) ; CAPTCHA (Turnstile/hCaptcha) on signup and password reset; sessions with refresh-token rotation; JWT expiry 1 h; secure-password-change requires recent login.
**Account linking:** same verified email via Google and password links to one user (Supabase default); unverified emails are never auto-linked.
**New-user trigger** (on `auth.users` insert): create `user_profiles`, create `user_roles(role='user')`. The role never comes from client metadata.
**Role delivery:** Auth Hook (custom access token) reads `user_roles` and adds `user_role` claim. Frontend reads the claim for UX only.
**Admin bootstrap:** first admin inserted by a one-off migration/SQL run by the tech lead in each environment. Later admins via Edge Function `admin-set-role`, which requires caller role `admin` **and** MFA `aal2`, forbids self-demotion of the last admin, and logs the action.
**MFA:** TOTP available to all users, **mandatory for admins**.

## B.6 Business logic (PostgreSQL functions)
All return typed rows/JSON, run with invoker rights (RLS applies), validate inputs, and raise clear error codes.

| Function | Purpose |
|---|---|
| `create_financial_profile(name, description, color, icon)` | Atomically inserts profile (default if first) and seeds categories from `default_categories` |
| `archive_financial_profile`, `delete_financial_profile(id, confirm_name)` | Lifecycle; delete cascades (explicit, audited) |
| `list_transactions(profile_id, filters, cursor, limit)` | Keyset-paginated, filtered, searched (or PostgREST query with same indexes) |
| `soft_delete_transaction(id)`, `restore_transaction(id)` | Undo support; blocks `moment_payment` rows (use Moment RPC) |
| `dashboard_summary(profile_id, from, to)` | Income, expense, net, savings rate, budget used, recent items, upcoming commitments |
| `budget_status(profile_id, month)` | Overall + per-category: budgeted, spent, remaining, pct, committed-unpaid |
| `income_analytics(profile_id, from, to, granularity)` | Income series and breakdown |
| `report_series(profile_id, granularity, from, to, filters)` | Income/expense/net by day/week/month/year (calendar or FY) |
| `report_category_breakdown(profile_id, type, from, to)` | Totals and % per category |
| `record_moment_payment(moment_id, item_id, amount, date, method, note, idempotency_key)` | Atomic: inserts expense transaction + link; idempotent; validates ownership and status |
| `delete_moment_payment(payment_id)` | Soft-deletes the transaction, removes link in one transaction |
| `copy_budget(profile_id, from_month, to_month)` | Convenience |
| `export_profile_data(profile_id)` | Used by data-export Edge Function |

### Calculation rules (the contract tested by pgTAP)
1. **Actual income/expense** = non-deleted `transactions` in range. Moment payments are included because they *are* transactions.
2. **Net** = income − expense. **Savings rate** = net ÷ income when income > 0, else `null` (never divide by zero, never 0%).
3. **Budget spent** = actual expenses in the budget's month (and category if category budget). **Remaining** = budget − spent (may be negative → "over").
4. **Committed unpaid** = Σ `remaining` from `v_moment_item_status` for non-cancelled items in active/planning Moments. Shown beside budgets/dashboard, **never added** to expense totals.
5. **Rounding:** values are stored at 2 dp; sums are exact; percentages are computed in SQL with `round(x, 1)` and formatted by the client.
6. **Periods:** weeks start per `week_start`; financial year per `fy_start_month`; all on `date`, no timezone shifting.
7. Soft-deleted rows are excluded everywhere.

## B.7 Edge Functions (Deno + TypeScript)
Every function: validates JWT, checks role (and `aal2` for admin), validates body with Zod, applies the rate limiter, logs an audit entry, returns typed errors, never leaks internals. CORS restricted to environment origin.

| Function | Caller | What it does |
|---|---|---|
| `admin-list-users` | admin | Paginated user metadata (no finances) |
| `admin-user-detail` | admin | Metadata, counts of profiles/transactions (counts only) |
| `admin-set-role` | admin | Grant/revoke role with guards |
| `admin-set-status` | admin | Suspend/reactivate (also revokes sessions) |
| `admin-stats` | admin | Aggregate platform metrics |
| `admin-audit-log` | admin | Read audit logs (metadata only) |
| `export-my-data` | user | Builds JSON/CSV export of the caller's data |
| `delete-my-account` | user | Re-auth check, then hard-delete user and cascade; audited |
| `send-auth-email` (optional) | Auth Hook | Only if custom templating needed |

## B.8 Rate limiting and abuse
- Auth: Supabase built-in limits tuned + CAPTCHA.
- Edge Functions: `rate_limits` table, key = `fn:user_id` (or IP for anonymous), sliding/fixed window, return `429` with `Retry-After`.
- Database: statement timeout for the `authenticated` role (e.g., 8 s); per-user profile count limit; max rows per page; report date-range cap (e.g., 5 years).
- Revisit Redis only if the Postgres limiter becomes a bottleneck (D-13).

## B.9 Storage `[SRC: optional]`
Bucket `avatars` (private). Path `user_id/filename`. Policies: owner read/write only. 2 MB max, image MIME allow-list. Attachments for transactions deferred (not MVP).

## B.10 Audit logging
Triggers on `transactions`, `budgets`, `moments`, `moment_items`, `moment_payments`, `categories`, `financial_profiles` write `audit_logs` rows with **action, entity, ids, changed field names** (D-07). Edge Functions log admin actions with target user id and old/new *non-financial* values (e.g., role). Retention policy: 24 months (confirm with legal). Table is append-only by privilege revocation.

## B.11 Seed data
Default categories (`default_categories`), proposed:
- **Expense:** Food & Dining, Groceries, Rent & Housing, Utilities & Bills, Transport & Fuel, Health & Medical, Education, Shopping, Entertainment, Travel, Insurance, EMI & Loans, Subscriptions, Gifts & Donations, Family & Kids, Personal Care, Taxes, Miscellaneous.
- **Income:** Salary, Business, Freelance, Interest & Dividends, Rental Income, Gifts Received, Refunds, Other Income.
Copied into each new profile (so users can rename/archive without affecting others).

## B.12 Migrations, environments, backups
- Local: Supabase CLI + Docker; `supabase db reset` rebuilds from migrations and seed.
- Environments: `dev` (local), `staging` (Supabase project), `prod` (Supabase project). Staging has a nightly anonymised synthetic data seed. Production never receives test data.
- CI applies migrations to staging on merge to `main`; production via manually approved workflow.
- Backups: daily + PITR (Pro). Quarterly restore drill documented in the runbook.
- Secrets: service-role key and SMTP/CAPTCHA secrets only in Supabase secrets and GitHub environment secrets.

---

# PART C — SHARED (SECURITY, TESTING, DEVOPS, COMPLIANCE)

## C.1 Repository layout
```
samridd/
├─ src/                        (Part A)
├─ supabase/
│   ├─ migrations/             timestamped SQL
│   ├─ functions/              admin-*/, export-my-data/, delete-my-account/, _shared/
│   ├─ tests/                  pgTAP: rls/, calculations/, moments/, constraints/
│   ├─ seed.sql                default_categories, dev fixtures
│   └─ config.toml
├─ e2e/                        Playwright specs and fixtures
├─ docs/                       architecture.md, plan.md, progress.md, ADRs, runbooks/
├─ scripts/                    contrast-check, gen-types, seed-staging
├─ .github/
│   ├─ workflows/              ci.yml, deploy-staging.yml, deploy-prod.yml, codeql.yml
│   ├─ PULL_REQUEST_TEMPLATE.md
│   └─ CODEOWNERS
├─ package.json  vite.config.ts  tsconfig.json  eslint.config.js  .prettierrc  .env.example
```

## C.2 Security model
| Layer | Controls |
|---|---|
| Transport | HTTPS only, HSTS, secure cookies |
| Browser | CSP (restrict scripts/connect to self + Supabase + Sentry + CAPTCHA), `X-Content-Type-Options`, `Referrer-Policy`, `frame-ancestors 'none'` via Vercel headers; no `dangerouslySetInnerHTML` |
| AuthN | Supabase Auth, MFA, CAPTCHA, leaked-password protection |
| AuthZ | RLS (forced), composite FKs, role claim, admin aal2 |
| Input | Zod (client + functions), DB constraints/triggers, parameterised queries only |
| Secrets | Service role key never in client, rotated on staff change, secrets scanning in CI |
| Abuse | Rate limiter, statement timeouts, page-size caps |
| Audit | Append-only audit logs, admin action logging |
| Supply chain | Lockfile, Dependabot/Renovate, `npm audit` in CI, pinned Actions |
**Threat checklist** reviewed in Phase 11: horizontal privilege escalation (user A → B), vertical (user → admin), IDOR via profile/transaction ids, RLS bypass via views/functions, mass assignment on `user_profiles`, double-submit on Moment payment, CSRF on Edge Functions (bearer JWT only), open redirect in OAuth callback, enumeration via login errors, XSS in notes/payee.

## C.3 Privacy and compliance `[ADD]`
- Privacy Policy and Terms before launch; legal review for India's DPDP Act, 2023 (consent, purpose limitation, grievance contact, breach process).
- Consent captured at signup (timestamp and version stored).
- User rights: data export and account deletion in Settings → Data (verified by tests).
- Data minimisation: no phone, address or ID numbers collected in MVP. No third-party analytics on authenticated pages.
- Data residency: choose the Supabase region deliberately (nearest is Mumbai, `ap-south-1`) and record it.
- Incident response runbook with contact and timeline.

## C.4 Testing strategy
| Level | Tool | What |
|---|---|---|
| Unit | Vitest | `money`, `dates` (FY, week), mappers, Zod schemas, error translators |
| Component | React Testing Library | Forms, tables, guards, shared components |
| Database | **pgTAP** `[ADD]` | Constraints, triggers, calculation rules, RPC behaviour |
| Security (DB) | pgTAP RLS harness `[ADD]` | Impersonate user A/B/admin/anon and assert access per table and operation |
| Function | Deno test | Edge Function auth, validation, rate limit |
| E2E | Playwright | Signup/login/Google (mocked), onboarding, add/edit/delete transaction, budget, Moment payment, reports, admin, a11y (axe), mobile viewport |
| Static | ESLint, `tsc --noEmit`, contrast script | Boundaries, money lint, token contrast |
**Must-have test suites** (from the source, expanded): (1) **Profile isolation** — no read/write/aggregate across profiles or users, including composite-FK attempts; (2) **Transaction calculations** — golden datasets for net, savings, budgets, reports, FY edges; (3) **Moment payment duplication** — idempotency, concurrent double-click, delete/re-add, overpayment; (4) **Admin permissions** — user cannot self-promote, admin cannot read finances, aal1 admin blocked; (5) **Views use `security_invoker`** — query `pg_class.reloptions` in a test.
**Coverage targets:** unit ≥ 80% on `lib/` and schemas; 100% of RLS tables have policy tests; E2E covers every nav tab at least once.

## C.5 CI/CD
GitHub Actions on every PR: install → lint → typecheck → unit/component → `supabase start` + migrations + pgTAP → build → Playwright against preview → security scans. Vercel creates preview deployments per PR (pointing at staging backend). Merge to `main` → deploy staging → manual approval → production (Vercel promote + Supabase migration). Branch protection: required checks, 1 review, no force-push. Conventional commits; trunk-based with short-lived branches.

## C.6 Observability
Sentry (frontend + Edge Functions, source maps uploaded in CI, PII scrubbing: no amounts or notes in breadcrumbs); Supabase logs and advisors (security and performance) reviewed weekly; uptime monitor on `/` and a health Edge Function; alerts on error-rate and auth failure spikes.

## C.7 Deployment
Vercel: SPA fallback rewrite, security headers, env vars per environment, preview protection. Supabase: separate projects per environment, Pro plan for prod. Domain, DNS, email DNS records (SPF/DKIM/DMARC). Rollback: Vercel instant rollback; DB rollback = forward-fix migration (no down migrations) + PITR for disasters.

## C.8 Team conventions
Definition of Done: code + tests + a11y check + docs updated + `progress.md` ticked + PR reviewed + no new lint/type errors. Every change to schema updates §B in this file. ADRs in `docs/adr/` for any decision that overrides §2.

---

## Appendix 1 — Technologies deliberately excluded `[SRC]`
MongoDB (relational fit), Node + Express (Supabase suffices), Redux (Query + local state), Redis (revisit if limiter bottlenecks), Kafka, Kubernetes, microservices, AI APIs in calculations, bank integrations, multi-currency, native mobile apps (PWA later, optional).

## Appendix 2 — Glossary
**Financial profile** — an isolated workspace of finances owned by one user. **Account** — the login identity. **Moment** — a planned event with budget, planned items and payments. **Commitment** — planned-but-unpaid amount on a Moment item. **Ledger** — the `transactions` table. **FY** — financial year (default April–March). **Paise** — 1/100 rupee; the client's integer money unit.

## Appendix 3 — FAIR
Placeholder pending OQ-1. Once defined, this appendix will state what FAIR is, how it relates to SAMRIDD, and which sections above it affects.
