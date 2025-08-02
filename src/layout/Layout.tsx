import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/shared/Footer';

export default function Layout() {
  const location = useLocation();

  // Don't show footer on certain pages for better immersion
  const hideFooter = [
    '/room-427',
    '/room-427/start',
    '/aperture-science',
    '/space',
    '/black-mesa',
    '/final-boss',
  ].includes(location.pathname);

  return (
    <div className="min-h-screen w-full text-[var(--color-text)] bg-[var(--color-background)] overflow-x-hidden flex flex-col">
      <main role="main" aria-label="Main content" className="relative z-10 flex-1">
        <Outlet />
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
}
