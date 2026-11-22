import { z } from 'zod';

const envSchema = z.object({
  VITE_SUPABASE_URL: z.string().url('VITE_SUPABASE_URL must be a valid URL'),
  VITE_SUPABASE_ANON_KEY: z.string().min(1, 'VITE_SUPABASE_ANON_KEY is required'),
  VITE_APP_ENV: z.enum(['development', 'staging', 'production', 'test']).default('development'),
  VITE_SITE_URL: z.string().url().default('http://localhost:5173'),
  VITE_SENTRY_DSN: z.string().optional(),
  VITE_CAPTCHA_SITE_KEY: z.string().optional(),
});

export type Env = z.infer<typeof envSchema>;

function validateEnv(): Env {
  const env = {
    VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co',
    VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key',
    VITE_APP_ENV: import.meta.env.VITE_APP_ENV || 'development',
    VITE_SITE_URL: import.meta.env.VITE_SITE_URL || 'http://localhost:5173',
    VITE_SENTRY_DSN: import.meta.env.VITE_SENTRY_DSN,
    VITE_CAPTCHA_SITE_KEY: import.meta.env.VITE_CAPTCHA_SITE_KEY,
  };

  const parsed = envSchema.safeParse(env);
  if (!parsed.success) {
    console.error('Environment variable validation failed:', parsed.error.format());
    throw new Error('Invalid environment variables. Check .env file against .env.example');
  }

  return parsed.data;
}

export const env = validateEnv();
