-- ==============================================================================
-- SAMRIDD — Seed Data: Default Categories (§B.11)
-- ==============================================================================

INSERT INTO public.default_categories (name, type, icon, color, sort_order) VALUES
  -- Expenses
  ('Food & Dining', 'expense', 'Utensils', '#f97316', 1),
  ('Groceries', 'expense', 'ShoppingCart', '#84cc16', 2),
  ('Rent & Housing', 'expense', 'Home', '#06b6d4', 3),
  ('Utilities & Bills', 'expense', 'Zap', '#eab308', 4),
  ('Transport & Fuel', 'expense', 'Car', '#3b82f6', 5),
  ('Health & Medical', 'expense', 'HeartPulse', '#ef4444', 6),
  ('Education', 'expense', 'GraduationCap', '#8b5cf6', 7),
  ('Shopping', 'expense', 'ShoppingBag', '#ec4899', 8),
  ('Entertainment', 'expense', 'Film', '#a855f7', 9),
  ('Travel', 'expense', 'Plane', '#14b8a6', 10),
  ('Insurance', 'expense', 'ShieldCheck', '#64748b', 11),
  ('EMI & Loans', 'expense', 'Landmark', '#d97706', 12),
  ('Subscriptions', 'expense', 'Repeat', '#6366f1', 13),
  ('Gifts & Donations', 'expense', 'Gift', '#f43f5e', 14),
  ('Family & Kids', 'expense', 'Users', '#10b981', 15),
  ('Personal Care', 'expense', 'Sparkles', '#f59e0b', 16),
  ('Taxes', 'expense', 'Receipt', '#475569', 17),
  ('Miscellaneous', 'expense', 'MoreHorizontal', '#94a3b8', 18),

  -- Income
  ('Salary', 'income', 'Briefcase', '#22c55e', 1),
  ('Business', 'income', 'Building', '#10b981', 2),
  ('Freelance', 'income', 'Laptop', '#06b6d4', 3),
  ('Interest & Dividends', 'income', 'TrendingUp', '#3b82f6', 4),
  ('Rental Income', 'income', 'Key', '#8b5cf6', 5),
  ('Gifts Received', 'income', 'Gift', '#ec4899', 6),
  ('Refunds', 'income', 'RotateCcw', '#eab308', 7),
  ('Other Income', 'income', 'Coins', '#64748b', 8)
ON CONFLICT DO NOTHING;
