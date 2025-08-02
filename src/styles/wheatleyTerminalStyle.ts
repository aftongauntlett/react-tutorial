/*
 * Classic Green Terminal Styling - Perfect for Wheatley Scenario
 * This was the original styling that had that retro green glow aesthetic
 * Save this for when we implement the Wheatley Portal 2 scenario
 */

export const wheatleyTerminalStyle = {
  container: {
    backgroundColor: '#1a1a1a',
    color: '#33ff33',
    textShadow: '0 0 5px #33ff33',
    border: '2px solid #33ff33',
    fontFamily: '"Courier New", "Lucida Console", monospace',
    fontSize: '12px',
  },

  header: {
    color: '#00ff00',
    textShadow: '0 0 5px #33ff33',
  },

  command: {
    color: '#33ff33',
    textShadow: '0 0 3px #33ff33',
  },

  output: {
    color: '#ffff00', // Amber for responses
  },

  cursor: {
    color: '#33ff33',
    textShadow: '0 0 5px #33ff33',
    character: '█', // Block cursor
  },

  prompt: {
    color: '#33ff33',
    symbol: '$',
  },

  scrollbar: {
    thumb: '#33ff33',
    thumbHover: '#44ff44',
    track: '#2a2a2a',
    glow: '0 0 3px #33ff33',
  },

  hints: {
    color: '#006600',
    opacity: 0.6,
    text: 'Try typing: git status, options, help',
  },
};

// CSS for the green terminal scrollbar
export const wheatleyScrollbarCSS = `
.wheatley-scrollbar::-webkit-scrollbar {
  width: 8px;
  background-color: #1a1a1a;
}

.wheatley-scrollbar::-webkit-scrollbar-track {
  background-color: #2a2a2a;
  border: 1px solid #333;
}

.wheatley-scrollbar::-webkit-scrollbar-thumb {
  background-color: #33ff33;
  border: 1px solid #00aa00;
  box-shadow: 0 0 3px #33ff33;
}

.wheatley-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #44ff44;
  box-shadow: 0 0 5px #33ff33;
}
`;
