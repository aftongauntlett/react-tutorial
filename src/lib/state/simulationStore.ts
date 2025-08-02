import { create } from 'zustand';

/**
 * Simulation phases following Stanley Parable narrative structure
 */
export type SimulationPhase =
  | 'idle' // Initial state - monitor off, phone gray
  | 'phone-active' // Phone red dot flashing, narrator introduction
  | 'monitor-active' // Monitor on, programming questions
  | 'settings-active' // Settings menu open, CSS learning
  | 'assessment' // Post-settings questions
  | 'terminal-breakout' // Terminal breaks out of monitor onto wall
  | 'terminal-restore' // Terminal returns to monitor
  | 'complete'; // Interview complete

/**
 * User progress tracking for personalized experience
 */
interface UserProgress {
  questionsAnswered: number;
  settingsExplored: string[]; // Track which settings were touched
  assessmentScore: number;
}

/**
 * Main simulation state interface
 * Manages the Room 427 Stanley Parable experience
 */
interface SimulationState {
  // Current simulation phase
  phase: SimulationPhase;

  // UI component states
  isMonitorOn: boolean;
  isPhoneFlashing: boolean;
  isSettingsOpen: boolean;

  // Content and narrative state
  currentNarratorText: string;
  currentQuestion: string;
  userProgress: UserProgress;

  // Timer management for idle states
  idleTimerId: number | null;
  idleContext: 'phone' | 'monitor' | null;

  // Core simulation actions
  setPhase: (phase: SimulationPhase) => void;
  startSimulation: () => void;
  activatePhone: () => void;
  turnOnMonitor: () => void;
  completeSimulation: () => void;

  // Settings and progress actions
  openSettings: () => void;
  closeSettings: () => void;
  recordSettingExplored: (setting: string) => void;
  answerQuestion: () => void;

  // Narrative and content actions
  updateNarratorText: (text: string) => void;

  // Terminal-specific actions
  triggerTerminalBreakout: () => void;
  triggerTerminalRestore: () => void;

  // Idle timer management
  startNarratorIdleTimer: (context: 'phone' | 'monitor') => void;
  clearNarratorIdleTimer: () => void;
}

/**
 * Zustand store for simulation state management
 * Centralized state following clean architecture principles
 */
export const useSimulationStore = create<SimulationState>((set, get) => ({
  // Initial state
  phase: 'idle',
  isMonitorOn: false,
  isPhoneFlashing: false,
  isSettingsOpen: false,
  currentNarratorText: '',
  currentQuestion: '',
  userProgress: {
    questionsAnswered: 0,
    settingsExplored: [],
    assessmentScore: 0,
  },
  idleTimerId: null,
  idleContext: null,

  // Actions
  setPhase: (phase) => set({ phase }),

  startSimulation: () => {
    set({
      phase: 'phone-active',
      isPhoneFlashing: true,
      currentNarratorText: '',
    });
  },

  activatePhone: () => {
    set({
      phase: 'phone-active',
      isPhoneFlashing: false,
      currentNarratorText:
        "Ah, Stanley. So good of you to finally pick up the phone. I do hope you're prepared for what promises to be... an enlightening interview experience.",
    });
  },

  turnOnMonitor: () => {
    set({
      phase: 'monitor-active',
      isMonitorOn: true,
      currentNarratorText:
        'Stanley stared at his monitor, which had mysteriously come to life. Perhaps now he could demonstrate the extent of his... programming prowess.',
    });
  },

  openSettings: () => {
    const state = get();
    set({
      phase: 'settings-active',
      isSettingsOpen: true,
      currentNarratorText:
        "Oh, how delightful! Stanley simply couldn't resist the allure of a settings menu. It's almost as if he finds genuine pleasure in adjusting sliders that may or may not do anything at all.",
    });
  },

  closeSettings: () => {
    const state = get();
    const exploredCount = state.userProgress.settingsExplored.length;
    let narratorText = 'Stanley closed the settings menu, ';

    if (exploredCount === 0) {
      narratorText +=
        'having accomplished absolutely nothing. Truly, a masterclass in productive procrastination.';
    } else if (exploredCount < 3) {
      narratorText += 'apparently satisfied with his minimal exploration. How... thorough of him.';
    } else {
      narratorText +=
        'having clicked every conceivable option like a caffeinated laboratory mouse. At least someone was entertained.';
    }

    set({
      phase: 'assessment',
      isSettingsOpen: false,
      isMonitorOn: true,
      currentNarratorText: narratorText,
    });
  },

  completeSimulation: () => {
    set({
      phase: 'complete',
      isMonitorOn: false,
      currentNarratorText:
        "And so Stanley's interview came to an end. Whether he had learned anything meaningful was... debatable. But at least he had clicked some buttons. That counts for something, surely.",
    });
  },

  updateNarratorText: (text) => set({ currentNarratorText: text }),

  recordSettingExplored: (setting) => {
    const state = get();
    if (!state.userProgress.settingsExplored.includes(setting)) {
      set({
        userProgress: {
          ...state.userProgress,
          settingsExplored: [...state.userProgress.settingsExplored, setting],
        },
      });
    }
  },

  answerQuestion: () => {
    const state = get();
    set({
      userProgress: {
        ...state.userProgress,
        questionsAnswered: state.userProgress.questionsAnswered + 1,
      },
    });
  },

  triggerTerminalBreakout: () => {
    set({
      phase: 'terminal-breakout',
      currentNarratorText: 'What... what are you doing, Stanley?',
    });
  },

  triggerTerminalRestore: () => {
    set({
      phase: 'terminal-restore',
      currentNarratorText: 'Finally! Stanley put the terminal back where it belongs.',
    });
  },

  startNarratorIdleTimer: (context: 'phone' | 'monitor') => {
    const state = get();
    // Clear existing timer
    if (state.idleTimerId) {
      clearTimeout(state.idleTimerId);
    }

    const timerId = setTimeout(() => {
      if (context === 'phone') {
        set({
          currentNarratorText: 'Stanley? The phone is ringing. Perhaps you should answer it?',
        });
      } else if (context === 'monitor') {
        set({
          currentNarratorText:
            'Stanley stared at the monitor. Perhaps he should type something... like "git status" or "options".',
        });
      }
    }, 20000); // 20 seconds

    set({
      idleTimerId: timerId,
      idleContext: context,
    });
  },

  clearNarratorIdleTimer: () => {
    const state = get();
    if (state.idleTimerId) {
      clearTimeout(state.idleTimerId);
      set({
        idleTimerId: null,
        idleContext: null,
      });
    }
  },
}));
