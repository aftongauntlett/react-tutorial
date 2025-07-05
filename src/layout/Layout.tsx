import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <main className="min-h-screen text-[var(--color-text)] bg-[var(--color-background)] overflow-x-hidden">
        <Outlet />
      </main>
    </>
  );
}
