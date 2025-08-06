import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-line bg-surface mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        <div className="flex items-center justify-between w-full text-sm">
          {/* Left - About Link */}
          <div className="flex-1">
            <Link
              to="/about"
              className="relative text-muted hover:text-primary transition-all duration-300 font-mono pb-1 border-b-2 border-transparent hover:border-primary"
            >
              About
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </div>

          {/* Center - Copyright */}
          <div className="flex-1 text-center text-muted">
            Built with ✨ by{' '}
            <a
              href="https://aftongauntlett.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover transition-colors underline decoration-primary/50 hover:decoration-primary"
            >
              Afton Gauntlett
            </a>{' '}
            © {new Date().getFullYear()}
          </div>

          {/* Right - Bug Report */}
          <div className="flex-1 text-right">
            <a
              href="https://github.com/aftongauntlett/react-tutorial/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-muted hover:text-primary transition-all duration-300 font-mono pb-1 border-b-2 border-transparent hover:border-primary"
            >
              Report Bug/Feedback
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
