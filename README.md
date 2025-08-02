# React Git Tutorial

[![Commit Activity](https://img.shields.io/github/commit-activity/m/aftongauntlett/react-tutorial)](https://github.com/aftongauntlett/react-tutorial/commits)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/aftongauntlett/react-tutorial)

**Tech Stack:**

![React](https://img.shields.io/badge/React_19-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=flat&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript_5.8-3178C6?style=flat&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-2D3748?style=flat&logo=zustand&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)

**Frontend Focus:**

![UI/UX](https://img.shields.io/badge/UI/UX_Design-FF6B6B?style=flat&logo=figma&logoColor=white)
![Accessibility](https://img.shields.io/badge/Accessibility-A11Y-4ECDC4?style=flat&logo=webaim&logoColor=white)
![Game_Design](https://img.shields.io/badge/Game_Interface-FFE66D?style=flat&logo=unity&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive_Design-06D6A0?style=flat&logo=css3&logoColor=white)

An immersive, Stanley Parable-themed git tutorial application showcasing advanced frontend development, game-inspired UI/UX design, and accessibility-first development practices. Features interactive terminal simulations, character-based theming, and engaging narrative-driven learning experiences.

### **[Experience The Tutorial →](https://react-tutorial-demo.vercel.app)**

## Preview

### Narrator (Stanley Parable) Experience

![Tutorial Preview - Narrator Theme](./public/images/narrator-bg.png)

_Featuring immersive game-style interface, interactive git terminal, and character-driven learning narratives_

## Features

### **Game-Inspired Learning Experience**

- **Character Theming**: Four distinct themes (Narrator/Stanley, Wheatley, GLaDOS, G-Man) with unique visual styles
- **Interactive Terminal**: Fully functional git command simulation with real-time feedback and help system
- **Narrative-Driven Learning**: Stanley Parable-inspired storytelling integrated with technical education
- **Progressive Difficulty**: Structured learning path from basic concepts to advanced git workflows
- **AI-Powered Help**: Integrated chatbot assistance for git commands and concepts

### **Frontend & UI/UX Excellence**

- **Advanced State Management**: Zustand-powered game state with complex interaction flows
- **Responsive Game Interface**: Desktop-optimized experience with mobile considerations
- **Smooth Animations**: Framer Motion integration with performance-optimized transitions
- **Custom Component System**: Modular, reusable components designed for game-style interfaces
- **Typography & Visual Hierarchy**: Game-appropriate font choices with clear information architecture

### **Accessibility & Performance**

- **Keyboard Navigation**: Full keyboard support for terminal and interface interactions
- **Screen Reader Support**: Semantic HTML with proper ARIA labels and roles
- **Reduced Motion Support**: Respects user preferences for motion sensitivity
- **Error Boundaries**: Graceful error handling with user-friendly recovery options
- **Performance Optimized**: Efficient rendering and state updates for smooth interactions

## Getting Started

```bash
# Clone and install
git clone https://github.com/aftongauntlett/react-tutorial.git

cd react-tutorial

npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to begin the tutorial.

**Ready to learn git through an immersive Stanley Parable experience!**

## Technical Implementation

**Demonstrating advanced frontend development skills:**

### **React Architecture**

- **React 19**: Latest features with concurrent rendering and improved performance
- **TypeScript Integration**: Comprehensive type safety with complex game state interfaces
- **Custom Hooks**: Specialized hooks for narrator system, screen detection, and game logic
- **Component Composition**: Modular architecture supporting multiple game themes and interactions

### **UI/UX Design Patterns**

- **Game Interface Design**: Terminal aesthetics with authentic command-line experience
- **Character-Based Theming**: Dynamic CSS custom properties for theme switching
- **Micro-interactions**: Subtle animations and feedback for enhanced user engagement
- **Information Architecture**: Clear learning progression with contextual help systems

### **State Management & Logic**

- **Complex State Orchestration**: Multi-phase tutorial progression with branching narratives
- **Terminal Simulation**: Full git command parsing and response system
- **Theme Context**: Dynamic character theme switching with persistent user preferences
- **Error Recovery**: Robust error handling with contextual help and retry mechanisms

## Project Structure

```
src/
├── components/
│   ├── room-427/               # Main tutorial components
│   │   ├── BreakoutTerminal.tsx    # Interactive git terminal
│   │   ├── GitChatbot.tsx          # AI assistance interface
│   │   ├── GitTerminalPanel.tsx    # Main terminal component
│   │   ├── InteractiveMonitor.tsx  # Game-style monitor
│   │   └── ThemedBreakoutTerminal.tsx # Narrator-themed terminal
│   ├── shared/                 # Reusable UI components
│   └── LevelSelect.tsx         # Game level selection interface
├── lib/
│   ├── gitHelp.ts             # Comprehensive git documentation
│   ├── mockGitTerminal.ts     # Terminal simulation engine
│   ├── narratorThemes.ts      # Character theming system
│   └── state/                 # Zustand state management
├── content/                   # Game narratives and dialogue
├── hooks/                     # Custom React hooks
├── pages/                     # Route components
└── theme.css                  # CSS custom properties system
```

## Skills Demonstrated

**Frontend Development:** React 19, TypeScript, Advanced State Management, Component Architecture  
**UI/UX Design:** Game Interface Design, Character Theming, Accessibility-First Development  
**Performance:** Bundle Optimization, Efficient Rendering, State Management Patterns  
**Developer Experience:** Modern Tooling, TypeScript Integration, Error Handling

## Scripts

```bash
# Development
npm run dev          # Development server with HMR
npm run build        # Production build
npm run preview      # Preview production build

# Quality Assurance
npm run type-check   # TypeScript validation
npm run lint         # Code quality checks
```

## Architecture Highlights

### **Game-Inspired Interface Design**

Component-driven architecture with TypeScript interfaces, game-style state management, and CSS custom properties for dynamic theming. Demonstrates advanced frontend patterns including:

- **Terminal Simulation**: Complex command parsing and response systems
- **Character Theming**: Dynamic visual identity switching with CSS custom properties
- **Progressive Enhancement**: Graceful degradation for different device capabilities
- **Accessibility Integration**: Screen reader support with game interface challenges

### **Learning Experience Design**

- **Narrative Integration**: Technical concepts woven into engaging storylines
- **Interactive Feedback**: Real-time command validation and helpful error messages
- **Contextual Help**: AI-powered assistance integrated into the game experience
- **Progressive Complexity**: Structured learning path with clear milestones

## Performance & Accessibility

**Modern web standards with game interface considerations:**

- **Responsive Design**: Optimized for desktop tutorial experience with mobile awareness
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Semantic markup with proper ARIA implementation
- **Performance Optimized**: Efficient state updates and rendering for smooth interactions
- **Error Recovery**: User-friendly error boundaries with clear recovery paths

## Credits

**Game Inspiration:** Stanley Parable aesthetic adapted for educational technology, demonstrating creative application of game design principles to frontend development.

**Technical Implementation:** Modern React patterns, advanced TypeScript usage, and accessibility-first development practices.

## License

MIT License - Feel free to explore, learn from, and adapt the code for educational purposes.

---

Built with ⚡ by [Afton Gauntlett](https://github.com/aftongauntlett) • Frontend Engineer specializing in UI/UX and Accessibility

- DBeaver (visual database client for managing MySQL)
- ESLint & Prettier (code quality)
- ChatGPT (GPT-4o & GPT-4-turbo) — used for code reviews, teaching explanations, and architecture planning
- Windsurf — experimental AI coding environment used for code generation and scaffolding

## Learning Goals

- Practice React fundamentals: state, props, hooks, components
- Strengthen understanding of Node.js and Express API building
- Build full-stack apps with React + Express
- Write clean, maintainable code using TypeScript
- Improve frontend styling with Tailwind CSS
- Reinforce Git/GitHub usage for version control
