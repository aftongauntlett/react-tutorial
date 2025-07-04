import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SettingsModal from './settings/SettingsModal';

function MenuItem({
  label,
  onClick,
  disabled = false,
}: {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  const baseStyles = 'text-left font-oswald text-4xl font-semibold leading-[1.05]';
  const sharedStyle = { transform: 'scaleY(1.1) scaleX(0.92)' };

  if (disabled) {
    return (
      <span
        className={`${baseStyles} text-[var(--color-muted)] cursor-default`}
        style={sharedStyle}
      >
        {label}
      </span>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} hover:brightness-125`} style={sharedStyle}>
      {label}
    </button>
  );
}

export default function StanleyMenu() {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="flex flex-col gap-6 text-[var(--color-text)]">
      <MenuItem label="Begin Simulation" onClick={() => navigate('/recursion/sim')} />
      <MenuItem label="Options" onClick={() => setShowOptions(true)} />
      <MenuItem label="Credits" disabled />
      <MenuItem label="Quit" onClick={() => navigate('/')} />
      {showOptions && <SettingsModal onClose={() => setShowOptions(false)} />}{' '}
    </div>
  );
}
