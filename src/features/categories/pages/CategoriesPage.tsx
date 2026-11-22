import React from 'react';
import { Plus } from 'lucide-react';

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Categories</h1>
          <p className="text-sm text-[var(--foreground-muted)]">
            Custom and default expense & income tags for this profile
          </p>
        </div>
        <button className="px-3.5 py-2 rounded-lg bg-[var(--primary)] text-white text-sm font-medium hover:opacity-90 flex items-center gap-1.5 shadow-sm">
          <Plus className="w-4 h-4" />
          <span>New Category</span>
        </button>
      </div>

      <div className="p-8 border border-[var(--border)] rounded-2xl bg-[var(--surface)] text-center text-sm text-[var(--foreground-muted)]">
        Default categories loaded from <code className="text-xs bg-[var(--surface-raised)] px-2 py-0.5 rounded">default_categories</code> template.
      </div>
    </div>
  );
}
