import { Outlet, Link } from 'react-router-dom';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Sun, Moon, ShieldCheck } from 'lucide-react';

export function PublicLayout() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-[var(--primary)]">
            <div className="w-9 h-9 rounded-lg bg-[var(--primary)] text-white flex items-center justify-center font-extrabold text-lg shadow-sm">
              S
            </div>
            <span>SAMRIDD</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--foreground-muted)]">
            <a href="#features" className="hover:text-[var(--foreground)] transition-colors">Features</a>
            <a href="#moments" className="hover:text-[var(--foreground)] transition-colors">Moments</a>
            <a href="#security" className="hover:text-[var(--foreground)] transition-colors">Security & Privacy</a>
            <a href="#faq" className="hover:text-[var(--foreground)] transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg text-[var(--foreground-muted)] hover:bg-[var(--surface-raised)] transition-colors"
              title="Toggle theme"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link
              to="/login"
              className="text-sm font-medium px-4 py-2 rounded-lg text-[var(--foreground)] hover:bg-[var(--surface-raised)] transition-colors"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="text-sm font-medium px-4 py-2 rounded-lg bg-[var(--primary)] text-white hover:opacity-90 shadow-sm transition-all"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-12 text-sm text-[var(--foreground-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[var(--foreground)]">SAMRIDD</span>
            <span>— Deterministic, INR-only personal finance</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="hover:text-[var(--foreground)] transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-[var(--foreground)] transition-colors">Privacy Policy</Link>
            <span className="flex items-center gap-1 text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--success)]" /> DPDP Aligned
            </span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} SAMRIDD. Built for Indian financial privacy.
          </div>
        </div>
      </footer>
    </div>
  );
}
