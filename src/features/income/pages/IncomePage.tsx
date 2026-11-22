import React from 'react';
import { formatINR } from '@/lib/money';
import { Plus } from 'lucide-react';

export default function IncomePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-burgundy">Income Analytics</h1>
          <p className="text-sm font-medium text-latte-dark">
            Filtered view of the unified ledger &middot; Incomes only
          </p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-income text-white text-sm font-bold hover:opacity-90 flex items-center gap-1.5 shadow-md">
          <Plus className="w-4 h-4" />
          <span>Record Income</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl border border-latte bg-mocha-surface shadow-xs">
          <span className="text-xs text-espresso-muted font-bold uppercase tracking-wider">Monthly Average</span>
          <div className="text-2xl font-black text-income mt-1">{formatINR(14250000)}</div>
        </div>
        <div className="p-5 rounded-2xl border border-latte bg-mocha-surface shadow-xs">
          <span className="text-xs text-espresso-muted font-bold uppercase tracking-wider">Primary Source</span>
          <div className="text-2xl font-black text-burgundy mt-1">Salary (88%)</div>
        </div>
        <div className="p-5 rounded-2xl border border-latte bg-mocha-surface shadow-xs">
          <span className="text-xs text-espresso-muted font-bold uppercase tracking-wider">Active Inflow Streams</span>
          <div className="text-2xl font-black text-espresso mt-1">3 Sources</div>
        </div>
      </div>
    </div>
  );
}
