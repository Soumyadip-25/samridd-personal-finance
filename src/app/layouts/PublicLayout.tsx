import { Outlet, Link } from 'react-router-dom';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Sun, Moon, ShieldCheck } from 'lucide-react';

export function PublicLayout() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-latte bg-mocha-surface/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-burgundy">
            <div className="w-9 h-9 rounded-xl bg-burgundy text-white flex items-center justify-center font-extrabold text-lg shadow-md ring-2 ring-latte/40">
              S
            </div>
            <span className="font-extrabold text-xl tracking-tight">SAMRIDD</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-espresso-muted">
            <a href="#features" className="hover:text-burgundy transition-colors">Features</a>
            <a href="#moments" className="hover:text-burgundy transition-colors">Moments</a>
            <a href="#security" className="hover:text-burgundy transition-colors">Security & Privacy</a>
            <a href="#faq" className="hover:text-burgundy transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg border border-latte bg-surface text-burgundy hover:bg-mocha transition-colors"
              title="Toggle theme"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link
              to="/login"
              className="text-sm font-bold px-4 py-2 rounded-lg text-burgundy hover:bg-mocha transition-colors"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="text-sm font-bold px-5 py-2.5 rounded-xl bg-burgundy text-white hover:bg-burgundy-hover shadow-md transition-all ring-1 ring-burgundy-hover"
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
      <footer className="border-t border-latte bg-mocha-surface py-12 text-sm text-espresso-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-burgundy">SAMRIDD</span>
            <span>&mdash; Cosmic Latte, Mocha Cream & Deep Burgundy Personal Finance</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="hover:text-burgundy transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-burgundy transition-colors">Privacy Policy</Link>
            <span className="flex items-center gap-1 text-xs text-income font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> DPDP Aligned
            </span>
          </div>
          <div className="text-xs">
            &copy; {new Date().getFullYear()} SAMRIDD. Deterministic Indian Financial Precision.
          </div>
        </div>
      </footer>
    </div>
  );
}
