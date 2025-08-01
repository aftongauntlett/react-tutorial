export const GAME_CONFIG = {
  TYPING_SPEED: 50,
  TERMINAL_DELAYS: {
    BOOT: 2000,
    COMMAND: 1500,
    RESPONSE: 800,
  },
  BREAKPOINTS: {
    SMALL_SCREEN: 768,
  },
} as const;

export const THEME_COLORS = {
  background: 'var(--color-background)',
  surface: 'var(--color-surface)',
  text: 'var(--color-text)',
  muted: 'var(--color-muted)',
  line: 'var(--color-line)',
  primary: 'var(--color-primary)',
  accent: 'var(--color-accent)',
  softWhite: 'var(--color-soft-white)',
  terminalBg: 'var(--color-terminal-bg)',
} as const;

export const TERMINAL_COMMANDS = {
  HELP: 'help',
  CLEAR: 'clear',
  EXIT: 'exit',
  STATUS: 'status',
} as const;

export const ROOM_IDS = {
  ROOM_427: 'room-427',
  APERTURE_SCIENCE: 'aperture-science',
  BLACK_MESA: 'black-mesa',
  SPACE: 'space',
} as const;
