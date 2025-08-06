# Backend Infrastructure - Game Data Persistence

This directory contains the backend server infrastructure for the Interactive Git Learning Platform. Built with Express.js, Node.js, and MySQL, it provides the foundation for user accounts, progress tracking, and achievements across all game scenarios.

## **Purpose in the Learning Journey**

While the frontend focuses on teaching **Git**, **CSS/Accessibility**, and **React patterns** through beloved game narratives, the backend serves as the **application infrastructure** rather than a teaching tool itself. This separation allows learners to focus on frontend concepts while having a robust, production-ready backend supporting their progress.

## **Getting Started**

### Prerequisites

- Node.js 14.17+
- Docker Desktop (for MySQL container)
- Your favorite API testing tool (Postman, Insomnia, etc.)

### Installation

1. **Install dependencies**

   ```bash
   cd server
   npm install
   ```

2. **Configure environment variables**
   Create a `.env` file in `/server` directory:

   ```bash
   # Database Configuration
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_secure_password
   DB_NAME=git_learning_platform

   # Server Configuration
   PORT=5000
   NODE_ENV=development
   ```

3. **Start MySQL database**

   ```bash
   docker-compose up -d
   ```

4. **Launch the server**

   ```bash
   # Development mode with auto-reload
   npm run dev

   # Production mode
   npm start
   ```

   Server runs on: `http://localhost:5000`

## **Technology Stack**

| Category        | Technology       | Purpose                           |
| --------------- | ---------------- | --------------------------------- |
| **Runtime**     | Node.js 14.17+   | JavaScript server environment     |
| **Framework**   | Express.js 4.18+ | Web application framework         |
| **Database**    | MySQL 8.0        | Relational data persistence       |
| **Client**      | mysql2 3.7+      | MySQL driver with Promise support |
| **Config**      | dotenv 16.3+     | Environment variable management   |
| **DevOps**      | Docker Compose   | Containerized database setup      |
| **Development** | nodemon 3.0+     | Auto-reload during development    |

## **Future Implementation Roadmap**

### Phase 1: User Authentication

- JWT-based authentication system
- User registration and login endpoints
- Password hashing with bcrypt
- Session management

### Phase 2: Progress Tracking

- Course completion tracking per scenario
- Git command mastery metrics
- Achievement unlock system
- Learning analytics dashboard

### Phase 3: Social Features

- Leaderboards for git command challenges
- Community feedback on terminal simulations
- Shared progress with friends

## **Current API Endpoints**

```bash
GET  /api/files          # File tree data (demo endpoint)
```

_Additional endpoints will be added as frontend features require backend support._

## **Testing the Setup**

Test that everything works:

```bash
curl http://localhost:5000/api/files
```

_Expected response: JSON array of file tree data._

## **Database Schema** (Future)

_Database tables will be designed based on frontend requirements:_

- `users` - User accounts and authentication
- `progress` - Learning progress tracking
- `achievements` - Unlocked achievements and badges
- `sessions` - Active user sessions

## **Learning Philosophy**

This backend follows **infrastructure-as-foundation** principles:

- **Reliable**: Solid foundation that frontend developers can depend on
- **Scalable**: Ready for thousands of learners practicing git commands
- **Maintainable**: Clean code structure for easy feature additions
- **Educational**: Well-documented for understanding production backend patterns

The goal is to provide learners with a **real-world backend experience** without overwhelming them while they focus on mastering Git, CSS, and React concepts through engaging game narratives.
