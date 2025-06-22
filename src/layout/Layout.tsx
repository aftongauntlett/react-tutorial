import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-black text-white font-body">
      <header className="p-4 text-xl font-header">Learning the Basics</header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}