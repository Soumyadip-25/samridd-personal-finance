# SAMRIDD — Definition of Done (DoD)

Every user story, task, feature, or bug fix must satisfy the following criteria before being considered **Done** and merged into `main`:

## 1. Code Quality & Standards
- [ ] Written in strict TypeScript (`strict: true`, `noUncheckedIndexedAccess: true`).
- [ ] No `any` types unless explicitly justified and documented.
- [ ] Clean linting: `npm run lint` passes with 0 warnings and 0 errors.
- [ ] Formatted with Prettier (`npm run format:check`).
- [ ] Adheres to architectural boundaries:
  - Cross-feature imports go through the feature's `index.ts`.
  - Direct `@supabase/supabase-js` imports are confined strictly to `src/lib/supabase.ts` and `src/features/*/api/`.
  - Floating-point arithmetic on currency (`parseFloat`, `/`, `*` directly on rupees) is strictly banned; all money operations use `src/lib/money.ts` (paise integer arithmetic).

## 2. Testing Requirements
- [ ] **Unit / Utility Tests:** 100% coverage on `src/lib/money.ts`, `src/lib/dates.ts`, and core validation schemas.
- [ ] **Component Tests:** Critical user interactions tested using React Testing Library.
- [ ] **Database / Schema Changes:** Any schema or migration modification MUST include corresponding **pgTAP tests** asserting:
  - Table constraints and check expressions.
  - Row Level Security (RLS) policies against multi-tenant / multi-profile isolation.
  - Function idempotency and concurrency guards.
  - Composite foreign keys `(category_id, profile_id)` validation.
- [ ] **E2E / Integration:** Happy-path and edge-case journeys tested in Playwright.

## 3. Accessibility & UX (Frontend)
- [ ] Compliant with **WCAG 2.2 AA**.
- [ ] Color contrast passes automated token verification in light and dark modes.
- [ ] Full keyboard navigation support (focus indicators, Escape key closes dialogs).
- [ ] Accessible alternative views/tables provided for data charts.
- [ ] Responsive design verified on both desktop and mobile viewports.
- [ ] Empty states, loading skeletons, and retryable error boundaries implemented for all asynchronous views.

## 4. Documentation & Tracking
- [ ] `docs/architecture.md` updated if schema, data flow, or system contracts changed.
- [ ] Corresponding item(s) checked off in `docs/progress.md`.
- [ ] Any architectural deviations or significant technical decisions recorded in an Architecture Decision Record (ADR) under `docs/adr/`.
