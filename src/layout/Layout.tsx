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
      {/* Small WIP Indicator - Less intrusive */}
      <div className="absolute top-2 right-2 z-50 bg-yellow-500/90 text-black px-2 py-1 rounded text-sm font-medium backdrop-blur-sm">
        WIP - Active Development
      </div>

      <main role="main" aria-label="Main content" className="relative z-10 flex-1">
        <Outlet />
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
}
