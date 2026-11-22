import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PublicLayout } from '@/app/layouts/PublicLayout';
import { AuthLayout } from '@/app/layouts/AuthLayout';
import { AppShell } from '@/app/layouts/AppShell';
import { AdminLayout } from '@/app/layouts/AdminLayout';

// Route-level Code Splitting (§A.11)
const LandingPage = lazy(() => import('@/features/landing/pages/LandingPage'));
const LoginPage = lazy(() => import('@/features/auth/pages/LoginPage'));
const SignupPage = lazy(() => import('@/features/auth/pages/SignupPage'));
const HomePage = lazy(() => import('@/features/home/pages/HomePage'));
const IncomePage = lazy(() => import('@/features/income/pages/IncomePage'));
const BudgetPage = lazy(() => import('@/features/budget/pages/BudgetPage'));
const TransactionsPage = lazy(() => import('@/features/transactions/pages/TransactionsPage'));
const CategoriesPage = lazy(() => import('@/features/categories/pages/CategoriesPage'));
const ReportsPage = lazy(() => import('@/features/reports/pages/ReportsPage'));
const MomentsPage = lazy(() => import('@/features/moments/pages/MomentsPage'));
const SettingsPage = lazy(() => import('@/features/settings/pages/SettingsPage'));
const AdminOverviewPage = lazy(() => import('@/features/admin/pages/AdminOverviewPage'));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] p-8">
      <div className="w-8 h-8 rounded-full border-3 border-[var(--primary)] border-t-transparent animate-spin"></div>
    </div>
  );
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Public Pre-rendered Routes (§A.2) */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/terms" element={<div className="max-w-4xl mx-auto py-12 px-4"><h1>Terms of Service</h1><p className="mt-4 text-sm text-[var(--foreground-muted)]">DPDP Act (2023) aligned legal terms.</p></div>} />
            <Route path="/privacy" element={<div className="max-w-4xl mx-auto py-12 px-4"><h1>Privacy Policy</h1><p className="mt-4 text-sm text-[var(--foreground-muted)]">Your financial data is strictly yours. Zero third-party ad tracking, no automated bank harvesting.</p></div>} />
          </Route>

          {/* Authentication Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<div className="text-center"><h2 className="text-lg font-bold mb-2">Password Recovery</h2><p className="text-xs text-[var(--foreground-muted)]">Recovery link will be sent to verified email.</p></div>} />
            <Route path="/reset-password" element={<div className="text-center"><h2 className="text-lg font-bold mb-2">Reset Password</h2></div>} />
            <Route path="/auth/callback" element={<PageLoader />} />
          </Route>

          {/* App Shell Routes (RequireAuth & Profile-scoped) */}
          <Route path="/p/:profileId" element={<AppShell />}>
            <Route path="home" element={<HomePage />} />
            <Route path="income" element={<IncomePage />} />
            <Route path="budget" element={<BudgetPage />} />
            <Route path="transactions" element={<TransactionsPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="moments" element={<MomentsPage />} />
            <Route path="moments/:momentId" element={<MomentsPage />} />
          </Route>

          {/* Settings Routes */}
          <Route path="/settings/*" element={<AppShell />}>
            <Route path="*" element={<SettingsPage />} />
          </Route>

          {/* Dedicated Admin Console Layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminOverviewPage />} />
            <Route path="users" element={<div><h2 className="text-xl font-bold mb-2">User Accounts (Metadata Only)</h2></div>} />
            <Route path="audit" element={<div><h2 className="text-xl font-bold mb-2">System Audit Logs (No Financial Values)</h2></div>} />
            <Route path="system" element={<div><h2 className="text-xl font-bold mb-2">System Health & Diagnostic Controls</h2></div>} />
          </Route>

          {/* Fallback & Catch-all */}
          <Route path="/p" element={<Navigate to="/p/default/home" replace />} />
          <Route
            path="*"
            element={
              <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-4xl font-extrabold text-[var(--primary)] mb-2">404</h1>
                <p className="text-[var(--foreground-muted)] text-sm mb-6">Page could not be found.</p>
                <a href="/" className="px-4 py-2 rounded-lg bg-[var(--primary)] text-white text-sm">Return Home</a>
              </div>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
