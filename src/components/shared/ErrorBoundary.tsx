import { Component, type ErrorInfo, type ReactNode } from 'react';
import { cn } from '@/constants/styles';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div
            className={cn(
              'bg-[var(--color-surface)] border border-[var(--color-line)]',
              'rounded-lg shadow-sm max-w-md w-full p-6 text-center'
            )}
          >
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-xl font-heading font-bold text-[var(--color-text)] mb-4">
              Something went wrong
            </h2>
            <p className="text-[var(--color-text-muted)] mb-6">
              The application encountered an unexpected error. Please refresh the page and try
              again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className={cn(
                'w-full px-4 py-2 bg-[var(--color-primary)] text-white',
                'rounded-md hover:bg-[var(--color-primary-hover)]',
                'transition-colors duration-200 font-medium'
              )}
            >
              Refresh Page
            </button>
            {this.state.error && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-[var(--color-text-muted)]">
                  Error Details
                </summary>
                <pre className="mt-2 text-xs bg-[var(--color-surface-elevated)] p-2 rounded overflow-auto">
                  {this.state.error.message}
                  {'\n\n'}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
