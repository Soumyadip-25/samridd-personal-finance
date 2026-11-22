import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    // In initial scaffold phase, redirect directly to app shell
    setTimeout(() => {
      setLoading(false);
      navigate('/p/default/home');
    }, 400);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
      <p className="text-xs text-center text-[var(--foreground-muted)] mb-6">
        Sign in to access your independent financial profiles
      </p>

      {errorMsg && (
        <div className="p-3 mb-4 rounded-lg bg-[var(--danger)]/10 text-[var(--danger)] text-sm">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold mb-1" htmlFor="login-email">Email Address</label>
          <input
            id="login-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-xs font-semibold" htmlFor="login-password">Password</label>
            <Link to="/forgot-password" className="text-xs text-[var(--primary)] hover:underline">
              Forgot password?
            </Link>
          </div>
          <input
            id="login-password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-[var(--primary)] text-white font-medium text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <LogIn className="w-4 h-4" />
          <span>{loading ? 'Signing in...' : 'Sign In'}</span>
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-[var(--border)] text-center text-xs text-[var(--foreground-muted)]">
        Don&apos;t have an account?{' '}
        <Link to="/signup" className="text-[var(--primary)] font-semibold hover:underline">
          Create account
        </Link>
      </div>
    </div>
  );
}
