export interface GameState {
  terminalStarted: boolean;
  currentView: 'menu' | 'terminal' | 'settings';
  isTyping: boolean;
}

export interface TerminalCommand {
  id: string;
  command: string;
  response: string;
  timestamp: number;
}

export interface MenuOption {
  id: string;
  label: string;
  action: () => void;
}

export interface NarratorLine {
  id: number;
  text: string;
  delay?: number;
}

export interface ContentStep {
  narratorText: string;
  learningText: string;
  choices?: Choice[];
}

export interface Choice {
  id: string;
  text: string;
  nextStep: number;
}

export type ViewType = 'menu' | 'terminal' | 'settings';
export type TabType = 'General' | 'Audio' | 'Gameplay' | 'Video';
