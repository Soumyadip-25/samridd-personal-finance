# SAMRIDD — Frontend Engineering Conventions

## 1. Folder Structure & Feature Slicing
All application code resides in `src/`. The application is divided into feature modules:

```
src/
├── app/              # Providers, router, global layouts, route guards
├── features/         # Domain-driven feature modules
│   └── <feature>/    # e.g., transactions, moments, budget, income, auth
│       ├── api/      # Supabase queries & mutations (ONLY place touching supabase)
│       ├── components/ # Feature-specific components
│       ├── hooks/    # Custom TanStack Query query/mutation hooks
│       ├── model/    # Types and row-to-domain mappers
│       ├── pages/    # Route components (lazy-loaded default exports)
│       ├── schemas/  # Zod validation schemas
│       └── index.ts  # Public API of the feature
├── components/       # Shared UI primitives
│   ├── ui/           # Radix / shadcn primitives (Button, Input, Dialog, etc.)
│   └── shared/       # Domain-agnostic shared components (MoneyText, DataTable, etc.)
├── hooks/            # Global UI hooks (useDebounce, useMediaQuery)
├── lib/              # Utility libraries (supabase, queryClient, money, dates, errors)
├── styles/           # CSS design tokens and global styles
└── types/            # Database types (generated via `supabase gen types typescript`)
```

## 2. Import Boundary Rules
- **Encapsulation:** Features can only be imported from other features via their public `index.ts`. Direct deep imports (e.g. `import { x } from '@/features/budget/components/Card'`) are banned.
- **Supabase Access:** Only `src/lib/supabase.ts` and `src/features/*/api/*.ts` may import `@supabase/supabase-js`. Components must interact with data via hooks in `features/*/hooks/`.
- **UI Primitives:** `src/components/ui/` components must never import from `features/`.

## 3. Money & Currency Rules (INR)
- **Zero Floats:** JavaScript standard `Number` float math (e.g., `0.1 + 0.2`) introduces rounding errors. `parseFloat()` is banned via ESLint.
- **Paise Representation:** All monetary values in memory and calculations are handled as **integer paise** (1 Rupee = 100 Paise).
- **Conversion Utility:** Always use `src/lib/money.ts`:
  - `toPaise(rupeeStringOrNumber)`
  - `toRupees(paise)`
  - `addMoney(aPaise, bPaise)`, `subMoney(aPaise, bPaise)`
  - `formatINR(paise, options)`
- **Display Component:** Always render monetary values using `<MoneyText paise={amountInPaise} />`. It utilizes `Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' })`.

## 4. Dates & Timezones
- **Format:** Store and transmit dates as ISO date strings: `YYYY-MM-DD`.
- **Timezone:** SAMRIDD operates strictly in Indian Standard Time (`Asia/Kolkata`). Use helper functions in `src/lib/dates.ts` for:
  - `getTodayIST()`
  - Financial Year boundaries (`getFinancialYear(date, startMonth = 4)`).
  - Indian week start (Monday default).

## 5. State Management & TanStack Query Keys
- **Query Key Hierarchy:**
  - Profile-scoped data: `['p', profileId, '<feature>', '<resource>', params]`
    - Example: `['p', profileId, 'transactions', 'list', { page, limit }]`
  - Account-scoped data: `['account', '<resource>', params]`
  - Admin-scoped data: `['admin', '<resource>', params]`
- **Cache Eviction:**
  - Upon user logout: `queryClient.clear()` must be called to ensure complete zero-leakage cache destruction.
  - Upon profile switch: Different `profileId` query keys prevent any cross-profile data reuse.
- **Mutation Invalidation:** Every mutation hook must explicitly declare and invalidate its affected queries (e.g., adding an expense invalidates `transactions`, `dashboard`, and `budget`).
