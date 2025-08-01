import { create } from 'zustand';

export type SimulationPhase =
  | 'idle' // Initial state - monitor off, phone gray
  | 'phone-active' // Phone red dot flashing, narrator introduction
  | 'monitor-active' // Monitor on, programming questions
  | 'settings-active' // Settings menu open, CSS learning
  | 'assessment' // Post-settings questions
  | 'complete'; // Interview complete

interface SimulationState {
  // Current phase of the simulation
  phase: SimulationPhase;

  // UI States
  isMonitorOn: boolean;
  isPhoneFlashing: boolean;
  isSettingsOpen: boolean;

  // Content state
  currentNarratorText: string;
  currentQuestion: string;
  userProgress: {
    questionsAnswered: number;
    settingsExplored: string[]; // Track which settings were touched
    assessmentScore: number;
  };

  // Actions
  setPhase: (phase: SimulationPhase) => void;
  startSimulation: () => void;
  activatePhone: () => void;
  turnOnMonitor: () => void;
  openSettings: () => void;
  closeSettings: () => void;
  completeSimulation: () => void;
  updateNarratorText: (text: string) => void;
  recordSettingExplored: (setting: string) => void;
  answerQuestion: () => void;
}

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
}));
