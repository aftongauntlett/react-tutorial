import { useNavigate } from 'react-router-dom';
import { JSX, useState } from 'react';
import { useSimulationStore } from '@/lib/state/simulationStore';
import SettingsModal from './settings/SettingsModal';

function MenuItem({
  label,
  onClick,
  disabled = false,
}: {
  label: string | JSX.Element;
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

export default function StanleyMenu({
  terminalStarted,
  setTerminalStarted,
}: {
  terminalStarted: boolean;
  setTerminalStarted: (val: boolean) => void;
}) {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const { phase, startSimulation, openSettings } = useSimulationStore();

  const handleBeginSimulation = () => {
    if (phase === 'idle') {
      startSimulation();
      // Keep existing terminal behavior for backward compatibility
      if (!terminalStarted) setTerminalStarted(true);
    }
  };

  const handleOpenSettings = () => {
    if (phase === 'monitor-active') {
      openSettings();
    } else {
      setShowOptions(true);
    }
  };

  const getButtonLabel = () => {
    switch (phase) {
      case 'idle':
        return 'Begin Simulation';
      case 'phone-active':
        return 'Answer the phone...';
      case 'monitor-active':
        return 'Interview in progress...';
      case 'settings-active':
        return 'Exploring settings...';
      case 'assessment':
        return 'Assessment in progress...';
      case 'complete':
        return 'Interview Complete';
      default:
        return terminalStarted ? 'Simulation in progress...' : 'Begin Simulation';
    }
  };

  const isButtonDisabled = () => {
    return phase !== 'idle' && phase !== 'complete';
  };

  return (
    <div className="flex flex-col gap-6 text-[var(--color-text)]">
      <MenuItem
        label={getButtonLabel()}
        onClick={handleBeginSimulation}
        disabled={isButtonDisabled()}
      />
      <MenuItem label="Options" onClick={handleOpenSettings} />
      <MenuItem label="Credits" disabled />
      <MenuItem label="Quit" onClick={() => navigate('/')} />
      {showOptions && <SettingsModal onClose={() => setShowOptions(false)} />}
    </div>
  );
}
