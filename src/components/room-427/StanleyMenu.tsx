import { useNavigate } from 'react-router-dom';
import { type JSX, useState } from 'react';
import { useSimulationStore } from '@/lib/state/simulationStore';
import { cn, TRANSITION_FAST } from '@/constants/styles';
import SettingsModal from './settings/SettingsModal';

/**
 * Menu item component with Stanley Parable styling
 */
function MenuItem({
  label,
  onClick,
  disabled = false,
}: {
  label: string | JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
}) {
  const baseStyles = cn(
    'text-left font-oswald text-4xl font-semibold leading-[1.05]',
    TRANSITION_FAST,
    'transform scale-y-110 scale-x-92' // Stanley Parable text distortion
  );

  if (disabled) {
    return <span className={cn(baseStyles, 'text-muted cursor-default')}>{label}</span>;
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        baseStyles,
        'text-[var(--color-text)] hover:brightness-125',
        'focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]',
        'focus-visible:outline-offset-2'
      )}
      aria-label={typeof label === 'string' ? label : 'Menu option'}
    >
      {label}
    </button>
  );
}

export interface StanleyMenuProps {
  terminalStarted: boolean;
  setTerminalStarted: (val: boolean) => void;
}

/**
 * Main menu component for Room 427 Stanley Parable experience
 * Handles simulation state and user interactions
 */
export default function StanleyMenu({ terminalStarted, setTerminalStarted }: StanleyMenuProps) {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const { phase, startSimulation, openSettings } = useSimulationStore();

  /**
   * Handles starting the simulation experience
   */
  const handleBeginSimulation = () => {
    if (phase === 'idle') {
      startSimulation();
      // Maintain backward compatibility with terminal state
      if (!terminalStarted) {
        setTerminalStarted(true);
      }
    }
  };

  /**
   * Handles opening settings modal or in-simulation settings
   */
  const handleOpenSettings = () => {
    if (phase === 'monitor-active') {
      // In-simulation settings (part of the narrative)
      openSettings();
    } else {
      // Pre-simulation options modal
      setShowOptions(true);
    }
  };

  /**
   * Handles quit action with Stanley Parable style confirmation
   */
  const handleQuit = () => {
    const confirmMessage =
      'Are you sure? Your progress will be lost... you will have to start from the beginning? ' +
      "Employee 427 doesn't usually quit his work, but I suppose even the most dedicated " +
      'employees have their limits.';

    if (window.confirm(confirmMessage)) {
      navigate('/');
    }
  };

  /**
   * Returns appropriate button label based on current phase
   */
  const getButtonLabel = (): string => {
    switch (phase) {
      case 'idle':
        return 'Begin the Review';
      case 'phone-active':
        return 'Answer the phone...';
      case 'monitor-active':
        return 'PR In Progress…';
      case 'settings-active':
        return 'Exploring settings...';
      case 'assessment':
        return 'Assessment in progress...';
      case 'complete':
        return 'Interview Complete';
      default:
        return terminalStarted ? 'Simulation in progress...' : 'Begin Merge Review';
    }
  };

  /**
   * Determines if main button should be disabled
   */
  const isButtonDisabled = (): boolean => {
    return phase !== 'idle' && phase !== 'complete';
  };

  return (
    <>
      <nav
        className="flex flex-col gap-6 text-[var(--color-text)]"
        aria-label="Stanley Parable main menu"
        role="navigation"
      >
        <MenuItem
          label={getButtonLabel()}
          onClick={handleBeginSimulation}
          disabled={isButtonDisabled()}
        />
        <MenuItem label="Options" onClick={handleOpenSettings} />
        <MenuItem label="View MR" disabled />
        <MenuItem label="Quit" onClick={handleQuit} />
      </nav>

      {/* Options Modal */}
      {showOptions && <SettingsModal onClose={() => setShowOptions(false)} />}
    </>
  );
}
