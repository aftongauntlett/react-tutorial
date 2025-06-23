/**
 * SideNav.tsx
 *
 * A responsive, theme-aware sidebar that overlays content when toggled.
 * Built using Tailwind utilities and React state. Accessible, styled with smooth transitions.
 */

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PiListBold, PiXBold } from 'react-icons/pi';
import clsx from 'clsx';

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/distance-optimization', label: 'Refuel Challenge' },
    { to: '/file-tree-explorer', label: 'File Tree Explorer' },
    { to: '/tree-traversal', label: 'Distance Between Nodes' }
  ];

  return (
    <>
      {/* Toggle Button (always accessible) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-40 p-2 rounded-md bg-[var(--color-surface)] text-[var(--color-text)] shadow focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
      >
        <PiListBold size={22} />
      </button>

      {/* Sidebar */}
      <div
        className={clsx(
          'fixed inset-0 z-50 flex transition-transform duration-300',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        {/* Sidebar panel */}
        <aside className="w-64 h-full bg-[var(--color-surface)] text-[var(--color-text)] shadow-lg flex flex-col">
          {/* Header with Close Button */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-[var(--color-line)]">
            <span className="text-sm font-semibold text-[var(--color-primary)]">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md hover:bg-[var(--color-line)] transition"
              aria-label="Close navigation menu"
            >
              <PiXBold size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2" aria-label="Main navigation">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  'block px-3 py-2 rounded-md text-sm transition-colors duration-200',
                  pathname === to
                    ? 'bg-[var(--color-line)] font-medium'
                    : 'hover:bg-[var(--color-line)]'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Backdrop (click to close) */}
        <div
          className="flex-1 bg-black/50"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      </div>
    </>
  );
}