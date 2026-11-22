-- ==============================================================================
-- SAMRIDD — Migration: Baseline Schema & Types
-- Version: 20261122000001
-- ==============================================================================

-- 1. Enable Required Extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
CREATE EXTENSION IF NOT EXISTS "citext";

-- 2. Create Enums (§B.3.1)
CREATE TYPE public.app_role AS ENUM ('user', 'admin');
CREATE TYPE public.txn_type AS ENUM ('income', 'expense');
CREATE TYPE public.txn_source AS ENUM ('manual', 'moment_payment');
CREATE TYPE public.payment_method AS ENUM ('cash', 'upi', 'card', 'netbanking', 'cheque', 'other');
CREATE TYPE public.moment_status AS ENUM ('planning', 'active', 'completed', 'cancelled');
CREATE TYPE public.account_status AS ENUM ('active', 'suspended');
CREATE TYPE public.theme_pref AS ENUM ('light', 'dark', 'system');

-- 3. Utility Trigger: Generic set_updated_at function
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = clock_timestamp();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 4. Default Categories Table (Template seed §B.3.3)
CREATE TABLE public.default_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type public.txn_type NOT NULL,
  icon text NOT NULL,
  color text NOT NULL,
  sort_order smallint NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT clock_timestamp()
);

ALTER TABLE public.default_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.default_categories FORCE ROW LEVEL SECURITY;

-- Default categories are read-only to all authenticated users
CREATE POLICY "Default categories are viewable by all authenticated users"
  ON public.default_categories
  FOR SELECT
  TO authenticated
  USING (true);
