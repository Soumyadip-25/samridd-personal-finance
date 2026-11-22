import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate('/p/default/home');
    }, 400);
  };

  return (
    <div>
      <h2 className="text-2xl font-black text-center mb-2 text-burgundy">Welcome Back</h2>
      <p className="text-xs text-center text-espresso-muted mb-6 font-medium">
        Sign in to access your independent financial profiles
      </p>

      {errorMsg && (
        <div className="p-3 mb-4 rounded-xl bg-danger/10 text-danger text-sm font-medium border border-danger/20">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-xs font-bold mb-1.5 text-espresso" htmlFor="login-email">Email Address</label>
          <input
            id="login-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-latte bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-burgundy"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="block text-xs font-bold text-espresso" htmlFor="login-password">Password</label>
            <Link to="/forgot-password" className="text-xs text-burgundy font-semibold hover:underline">
              Forgot password?
            </Link>
          </div>
          <input
            id="login-password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-latte bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-burgundy"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl bg-burgundy text-white font-bold text-sm hover:bg-burgundy-hover transition-all shadow-md flex items-center justify-center gap-2 ring-1 ring-burgundy-hover"
        >
          <LogIn className="w-4 h-4" />
          <span>{loading ? 'Signing in...' : 'Sign In'}</span>
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-latte text-center text-xs text-espresso-muted font-medium">
        Don&apos;t have an account?{' '}
        <Link to="/signup" className="text-burgundy font-bold hover:underline">
          Create account
        </Link>
      </div>
    </div>
  );
}
