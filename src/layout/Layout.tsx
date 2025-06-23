// src/layout/Layout.tsx

/**
 * Layout.tsx
 *
 * Main layout wrapper for all pages. Includes the toggleable SideNav
 * and a responsive max-width container for routed content.
 */

import { Outlet } from 'react-router-dom';
import SideNav from '../components/shared/SideNav';

export default function Layout() {
  return (
    <>
      <SideNav />
      <main className="min-h-screen px-6 py-10 md:px-10 lg:px-12 text-[var(--color-text)] bg-[var(--color-background)]">
        <div className="max-w-5xl mx-auto">
          <Outlet />
        </div>
      </main>
    </>
  );
}