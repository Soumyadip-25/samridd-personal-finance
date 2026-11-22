import React from 'react';
import { formatINR } from '@/lib/money';
import { Plus, Copy } from 'lucide-react';

export default function BudgetPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-burgundy">Monthly Budgets</h1>
          <p className="text-sm font-medium text-latte-dark">
            Compare actual expenses with planned monthly limits &middot; November 2026
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-xl border border-latte bg-mocha text-burgundy text-sm font-bold hover:bg-mocha-surface flex items-center gap-1.5 transition-colors shadow-xs">
            <Copy className="w-4 h-4" />
            <span>Copy Prev Month</span>
          </button>
          <button className="px-4 py-2 rounded-xl bg-burgundy text-white text-sm font-bold hover:bg-burgundy-hover flex items-center gap-1.5 shadow-md">
            <Plus className="w-4 h-4" />
            <span>Set Category Budget</span>
          </button>
        </div>
      </div>

      <div className="p-6 rounded-2xl border border-latte bg-mocha-surface shadow-xs">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-bold text-burgundy">Overall Monthly Limit</span>
          <span className="text-sm font-black text-espresso">{formatINR(6845050)} of {formatINR(10000000)}</span>
        </div>
        <div className="w-full bg-latte/30 rounded-full h-3 overflow-hidden">
          <div className="bg-burgundy h-3 rounded-full" style={{ width: '68.5%' }}></div>
        </div>
      </div>
    </div>
  );
}
