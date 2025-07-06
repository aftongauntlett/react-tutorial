export default function Sidebar() {
  return (
    <nav className="flex flex-col gap-4 text-[var(--color-muted)]">
      <div className="font-bold text-[var(--color-text)]">Menu</div>
      <ul className="flex flex-col gap-2 text-sm">
        <li className="hover:text-white transition">Home</li>
        <li className="hover:text-white transition">Restart</li>
        <li className="hover:text-white transition">Glossary</li>
      </ul>
    </nav>
  );
}
