import React from 'react';
import { formatINR } from '@/lib/money';
import { getFinancialYear } from '@/lib/dates';
import { TrendingUp, TrendingDown, ArrowUpRight, Wallet, PieChart, Plus } from 'lucide-react';

export default function HomePage() {
  const fy = getFinancialYear();

  return (
    <div className="space-y-6">
      {/* Welcome & Period Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Overview</h1>
          <p className="text-sm text-[var(--foreground-muted)]">
            Primary Profile &middot; {fy.fyLabel}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3.5 py-2 rounded-lg bg-[var(--income)]/10 text-[var(--income)] text-sm font-medium hover:bg-[var(--income)]/20 flex items-center gap-1.5 transition-colors">
            <ArrowUpRight className="w-4 h-4" />
            <span>Add Income</span>
          </button>
          <button className="px-3.5 py-2 rounded-lg bg-[var(--primary)] text-white text-sm font-medium hover:opacity-90 flex items-center gap-1.5 transition-opacity shadow-sm">
            <Plus className="w-4 h-4" />
            <span>Add Expense</span>
          </button>
        </div>
      </div>

      {/* Metric Cards (Net, Income, Expense, Savings Rate §A.6) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xs">
          <div className="flex items-center justify-between text-xs text-[var(--foreground-muted)] mb-2 font-medium">
            <span>Total Income (Nov)</span>
            <TrendingUp className="w-4 h-4 text-[var(--income)]" />
          </div>
          <div className="text-2xl font-bold text-[var(--income)]">
            {formatINR(15000000)} {/* ₹1,50,000.00 */}
          </div>
          <div className="text-[11px] text-[var(--foreground-muted)] mt-1">
            Across 2 regular sources
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xs">
          <div className="flex items-center justify-between text-xs text-[var(--foreground-muted)] mb-2 font-medium">
            <span>Total Expenses (Nov)</span>
            <TrendingDown className="w-4 h-4 text-[var(--expense)]" />
          </div>
          <div className="text-2xl font-bold text-[var(--expense)]">
            {formatINR(6845050)} {/* ₹68,450.50 */}
          </div>
          <div className="text-[11px] text-[var(--foreground-muted)] mt-1">
            Includes ₹12,000 Moments payments
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xs">
          <div className="flex items-center justify-between text-xs text-[var(--foreground-muted)] mb-2 font-medium">
            <span>Net Balance (Savings)</span>
            <Wallet className="w-4 h-4 text-[var(--primary)]" />
          </div>
          <div className="text-2xl font-bold text-[var(--foreground)]">
            {formatINR(8154950)} {/* ₹81,549.50 */}
          </div>
          <div className="text-[11px] text-[var(--income)] font-semibold mt-1">
            Savings Rate: 54.4%
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xs">
          <div className="flex items-center justify-between text-xs text-[var(--foreground-muted)] mb-2 font-medium">
            <span>Budget Utilization</span>
            <PieChart className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl font-bold text-[var(--foreground)]">
            68.5%
          </div>
          <div className="w-full bg-[var(--muted)] rounded-full h-1.5 mt-2 overflow-hidden">
            <div className="bg-[var(--primary)] h-1.5 rounded-full" style={{ width: '68.5%' }}></div>
          </div>
        </div>
      </div>

      {/* Recent Ledger Rows Snapshot */}
      <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xs">
        <h2 className="text-lg font-bold mb-4">Recent Ledger Activity</h2>
        <div className="text-sm text-[var(--foreground-muted)] py-8 text-center">
          Single unified ledger active. Seed data and full query engine ready for Phase P5.
        </div>
      </div>
    </div>
  );
}
