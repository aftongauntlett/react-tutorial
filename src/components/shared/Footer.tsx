import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-[var(--color-line)] bg-[var(--color-surface)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-baseline">
            <Link
              to="/about"
              className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors font-mono border-b border-transparent hover:border-[var(--color-primary)]"
            >
              About
            </Link>
          </div>
          <div className="text-[var(--color-muted)]">
            Built with ✨ by Afton Gauntlett © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
