import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen w-full text-[var(--color-text)] bg-[var(--color-background)] overflow-x-hidden">
      <main role="main" aria-label="Main content" className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
}
