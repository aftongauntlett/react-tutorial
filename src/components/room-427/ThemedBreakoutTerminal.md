# Themed Breakout Terminal Component

A reusable terminal component that can be themed for different game scenarios in the Stanley Parable-inspired coding interview app.

## Usage

```tsx
import ThemedBreakoutTerminal from '@/components/room-427/ThemedBreakoutTerminal';

// Stanley Parable theme (retro CRT style)
<ThemedBreakoutTerminal
  theme="stanley-parable"
  isMonitorOn={true}
  autoOpen={false}
/>

// Portal theme (modern Aperture Science style)
<ThemedBreakoutTerminal
  theme="portal"
  isMonitorOn={true}
  autoOpen={false}
/>

// Half-Life theme (industrial Black Mesa style)
<ThemedBreakoutTerminal
  theme="half-life"
  isMonitorOn={true}
  autoOpen={false}
/>
```

## Available Themes

### Stanley Parable Theme (`stanley-parable`)

- **Style**: Retro CRT terminal
- **Colors**: Classic green (#33ff33) on dark background
- **Font**: Courier New monospace
- **Effects**: Text glow, scanline-inspired header
- **Animation**: Bounce scale animation
- **Window Title**: "STANLEY PARABLE - EMPLOYEE TERMINAL v1.2"

### Portal Theme (`portal`)

- **Style**: Modern Aperture Science interface
- **Colors**: Orange accents (#ff6600) on dark background
- **Font**: Segoe UI clean sans-serif
- **Effects**: Subtle glow, gradient header
- **Animation**: Smooth scale animation
- **Window Title**: "Aperture Science Terminal Interface"

### Half-Life Theme (`half-life`)

- **Style**: Industrial Black Mesa facility
- **Colors**: Amber/orange (#ff7700) on dark blue-gray
- **Font**: Consolas monospace
- **Effects**: Strong glow, textured header with warning stripes
- **Animation**: Industrial slide-down (no bounce)
- **Window Title**: "BLACK MESA RESEARCH FACILITY - SECTOR C"

## Customizable Properties

Each theme can control:

- **Visual**: Background, border colors, glow effects
- **Typography**: Font family, size, color, text shadow
- **Window**: Header style, title text, window decorations
- **Animation**: Scale vs slide animations, bounce effects
- **Interaction**: Terminal dots colors, hover effects

## Adding New Themes

To add a new theme, extend the `terminalThemes` object:

```tsx
export const terminalThemes: Record<string, TerminalTheme> = {
  // ... existing themes
  'your-game': {
    backgroundColor: '#000000',
    borderColor: '#ff0000',
    borderStyle: 'modern',
    glowColor: '#ff0000',
    fontFamily: '"Your Font", monospace',
    fontSize: '14px',
    textColor: '#ffffff',
    textShadow: '0 0 4px #ff0000',
    headerStyle: 'retro-crt',
    windowTitle: 'Your Game Terminal',
    scaleAnimation: true,
    glowAnimation: true,
    dotColors: {
      close: '#ff4444',
      minimize: '#ffaa00',
      maximize: '#44ff44',
    },
  },
};
```

## Props

- `theme`: keyof terminalThemes - Which visual theme to use
- `isMonitorOn`: boolean - Whether the monitor is active
- `autoOpen`: boolean - Whether to automatically open the terminal
- `onClose`: () => void - Optional callback when terminal is closed
