export type NarratorTheme = {
  // Core terminal colors
  primary: string; // Main accent color (cursor, highlights, prompts)
  secondary: string; // Secondary accent (success messages, links)
  background: string; // Terminal background
  text: string; // Primary text color
  textMuted: string; // Secondary/dim text (comments, timestamps)
  line: string; // Border lines, separators

  // Terminal-specific colors
  cursor: string; // Blinking cursor color
  selection: string; // Text selection background
  prompt: string; // Shell prompt color ($ or >)
  command: string; // User input text color
  output: string; // Command output text
  error: string; // Error messages
  warning: string; // Warning messages
  success: string; // Success messages

  // Visual effects
  glow: string; // Text glow/shadow color
  glowIntensity: string; // CSS text-shadow value
};

export const narratorThemes: Record<string, NarratorTheme> = {
  // Stanley Parable - Windows 95 terminal aesthetic
  narrator: {
    primary: '#c0c0c0', // Windows 95 silver/gray for borders
    secondary: '#808080',
    background: '#000000', // Black terminal background
    text: '#00ff00', // Classic green terminal text
    textMuted: '#008800',
    line: '#c0c0c0', // Gray window borders

    cursor: '#00ff00',
    selection: '#00ff0040',
    prompt: '#00ff00',
    command: '#00ff00',
    output: '#00ff00',
    error: '#ff0000',
    warning: '#ffff00',
    success: '#00ff00',

    glow: 'none',
    glowIntensity: 'none',
  },

  // G-Man - Blue/cyan government terminal aesthetic
  gman: {
    primary: '#00ccff',
    secondary: '#0088cc',
    background: '#001122',
    text: '#00ccff',
    textMuted: '#0066aa',
    line: '#003366',

    cursor: '#00ddff',
    selection: '#00ccff30',
    prompt: '#00ccff',
    command: '#00ccff',
    output: '#0099cc',
    error: '#ff3366',
    warning: '#ffaa33',
    success: '#00ff88',

    glow: '#00ccff',
    glowIntensity: '0 0 5px #00ccff, 0 0 10px #00ccff40',
  },

  // Wheatley - Orange/warm Portal 2 aesthetic
  wheatley: {
    primary: '#ff6600',
    secondary: '#cc4400',
    background: '#1a0f00',
    text: '#ff8833',
    textMuted: '#cc5500',
    line: '#663300',

    cursor: '#ff7722',
    selection: '#ff660030',
    prompt: '#ff6600',
    command: '#ff8833',
    output: '#ee7711',
    error: '#ff2244',
    warning: '#ffcc00',
    success: '#66ff33',

    glow: '#ff6600',
    glowIntensity: '0 0 5px #ff6600, 0 0 10px #ff660040',
  },

  // GLaDOS - Clean white/blue Portal aesthetic
  glados: {
    primary: '#ffffff',
    secondary: '#cccccc',
    background: '#0d1117',
    text: '#ffffff',
    textMuted: '#888888',
    line: '#333333',

    cursor: '#ffffff',
    selection: '#ffffff20',
    prompt: '#ffffff',
    command: '#ffffff',
    output: '#cccccc',
    error: '#ff4757',
    warning: '#ffa502',
    success: '#2ed573',

    glow: '#ffffff',
    glowIntensity: '0 0 3px #ffffff, 0 0 6px #ffffff20',
  },
};

// Helper function to get current theme
export const getNarratorTheme = (narrator: keyof typeof narratorThemes): NarratorTheme => {
  return narratorThemes[narrator] || narratorThemes.narrator;
};

// Helper function to get shell prompt styling
