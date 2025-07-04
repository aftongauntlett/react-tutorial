import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const { pathname } = useLocation();

  const isFullScreen = pathname.startsWith('/recursion') && !pathname.includes('/home'); // Treat all `/recursion` scenes as fullscreen

  return (
    <>
      <main className="min-h-screen text-[var(--color-text)] bg-[var(--color-background)] overflow-x-hidden">
        <Outlet />
      </main>
    </>
  );
}
