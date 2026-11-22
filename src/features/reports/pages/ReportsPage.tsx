import React from 'react';
import { Download } from 'lucide-react';

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-burgundy">Financial Reports</h1>
          <p className="text-sm font-medium text-latte-dark">
            Deterministic server-aggregated period reports (Calendar or Indian FY)
          </p>
        </div>
        <button className="px-4 py-2 rounded-xl border border-latte bg-mocha text-burgundy text-sm font-bold hover:bg-mocha-surface flex items-center gap-1.5 transition-colors shadow-xs">
          <Download className="w-4 h-4" />
          <span>Export Summary</span>
        </button>
      </div>

      <div className="p-8 border border-latte rounded-2xl bg-mocha-surface text-center text-sm text-espresso-muted shadow-xs">
        Server-side report RPCs (<code className="text-xs bg-mocha border border-latte px-2 py-0.5 rounded text-burgundy font-bold">report_series</code>, <code className="text-xs bg-mocha border border-latte px-2 py-0.5 rounded text-burgundy font-bold">report_category_breakdown</code>) ready for wire-up.
      </div>
    </div>
  );
}
