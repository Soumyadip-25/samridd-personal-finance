import React from 'react';
import { Plus } from 'lucide-react';

export default function MomentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-burgundy">Moments</h1>
          <p className="text-sm font-medium text-latte-dark">
            Life event planning &middot; Planned commitments vs actual payments
          </p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-burgundy text-white text-sm font-bold hover:bg-burgundy-hover flex items-center gap-1.5 shadow-md">
          <Plus className="w-4 h-4" />
          <span>Plan a Moment</span>
        </button>
      </div>

      <div className="p-8 border border-latte rounded-2xl bg-mocha-surface text-center text-sm text-espresso-muted shadow-xs">
        No active moments yet. Moments isolate planned costs from ledger expenses until an atomic payment is recorded.
      </div>
    </div>
  );
}
