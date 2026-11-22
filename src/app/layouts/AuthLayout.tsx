import { Outlet, Link } from 'react-router-dom';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Sun, Moon, ArrowLeft } from 'lucide-react';

export function AuthLayout() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-[var(--background)] text-[var(--foreground)]">
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <button
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-lg text-[var(--foreground-muted)] hover:bg-[var(--surface-raised)] transition-colors"
          title="Toggle theme"
          aria-label="Toggle theme"
        >
          {resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 font-bold text-2xl text-[var(--primary)]">
            <div className="w-10 h-10 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center font-extrabold text-xl shadow-md">
              S
            </div>
            <span>SAMRIDD</span>
          </Link>
        </div>

        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-xl p-6 sm:p-8">
          <Outlet />
        </div>

        <p className="mt-8 text-center text-xs text-[var(--foreground-muted)]">
          Manual-first, single-ledger Indian personal finance. No bank scraping.
        </p>
      </div>
    </div>
  );
}
