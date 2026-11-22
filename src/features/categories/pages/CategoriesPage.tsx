import React from 'react';
import { Plus } from 'lucide-react';

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-burgundy">Categories</h1>
          <p className="text-sm font-medium text-latte-dark">
            Custom and default expense & income tags for this profile
          </p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-burgundy text-white text-sm font-bold hover:bg-burgundy-hover flex items-center gap-1.5 shadow-md">
          <Plus className="w-4 h-4" />
          <span>New Category</span>
        </button>
      </div>

      <div className="p-8 border border-latte rounded-2xl bg-mocha-surface text-center text-sm text-espresso-muted shadow-xs">
        Default categories loaded from <code className="text-xs bg-mocha border border-latte px-2 py-0.5 rounded text-burgundy font-bold">default_categories</code> template.
      </div>
    </div>
  );
}
