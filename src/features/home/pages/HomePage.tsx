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
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-burgundy">Financial Overview</h1>
          <p className="text-sm font-medium text-latte-dark">
            Primary Profile &middot; {fy.fyLabel}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-xl bg-mocha border border-latte text-burgundy text-sm font-bold hover:bg-mocha-surface flex items-center gap-1.5 transition-colors shadow-xs">
            <ArrowUpRight className="w-4 h-4 text-income" />
            <span>Add Income</span>
          </button>
          <button className="px-4 py-2 rounded-xl bg-burgundy text-white text-sm font-bold hover:bg-burgundy-hover flex items-center gap-1.5 transition-opacity shadow-md">
            <Plus className="w-4 h-4" />
            <span>Add Expense</span>
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl border border-latte bg-mocha-surface shadow-xs">
          <div className="flex items-center justify-between text-xs text-espresso-muted mb-2 font-bold uppercase tracking-wider">
            <span>Total Income (Nov)</span>
            <TrendingUp className="w-4 h-4 text-income" />
          </div>
          <div className="text-2xl font-black text-income">
            {formatINR(15000000)}
          </div>
          <div className="text-[11px] text-latte-dark mt-1 font-medium">
            Across 2 regular sources
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-latte bg-mocha-surface shadow-xs">
          <div className="flex items-center justify-between text-xs text-espresso-muted mb-2 font-bold uppercase tracking-wider">
            <span>Total Expenses (Nov)</span>
            <TrendingDown className="w-4 h-4 text-expense" />
          </div>
          <div className="text-2xl font-black text-burgundy">
            {formatINR(6845050)}
          </div>
          <div className="text-[11px] text-latte-dark mt-1 font-medium">
            Includes ₹12,000 Moments payments
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-latte bg-mocha-surface shadow-xs">
          <div className="flex items-center justify-between text-xs text-espresso-muted mb-2 font-bold uppercase tracking-wider">
            <span>Net Balance (Savings)</span>
            <Wallet className="w-4 h-4 text-burgundy" />
          </div>
          <div className="text-2xl font-black text-espresso">
            {formatINR(8154950)}
          </div>
          <div className="text-[11px] text-income font-bold mt-1">
            Savings Rate: 54.4%
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-latte bg-mocha-surface shadow-xs">
          <div className="flex items-center justify-between text-xs text-espresso-muted mb-2 font-bold uppercase tracking-wider">
            <span>Budget Utilization</span>
            <PieChart className="w-4 h-4 text-amber-700" />
          </div>
          <div className="text-2xl font-black text-espresso">
            68.5%
          </div>
          <div className="w-full bg-latte/30 rounded-full h-2 mt-2 overflow-hidden">
            <div className="bg-burgundy h-2 rounded-full" style={{ width: '68.5%' }}></div>
          </div>
        </div>
      </div>

      {/* Recent Ledger Rows Snapshot */}
      <div className="p-6 rounded-2xl border border-latte bg-surface shadow-xs">
        <h2 className="text-lg font-bold mb-4 text-burgundy">Recent Ledger Activity</h2>
        <div className="text-sm text-espresso-muted py-8 text-center bg-mocha/20 rounded-xl border border-dashed border-latte">
          Single unified ledger active. Seed data and full query engine ready for Phase P5.
        </div>
      </div>
    </div>
  );
}
