# Backend - Express Server

This directory contains the backend server built with Express, Node.js, and MySQL.  
It serves as the API layer that handles data requests from the React frontend and connects to the MySQL database.

## Project Structure

- /server/server.js - Main Express server file
- /server/routes - API route handlers (organized by resource)
- /server/.env - Environment variables for database connection (not committed)
- /docker-compose.yml - Docker configuration to run MySQL database

## Getting Started

### Install server dependencies
```javascript
cd server
npm install
```

### Set up environment variables
Create a `.env` file inside `/server` with your database connection info:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=react
DB_NAME=react_tutorial
```

### Start the backend server
```javascript
npm run dev
```

The server will start on http://localhost:5000.

## Technologies Used
- Node.js (backend runtime)
- Express (backend web framework)
- MySQL (relational database)
- mysql2 (Node.js MySQL client)
- dotenv (for environment variables)
- Docker Desktop (to run MySQL in a local container)
- DBeaver (visual database client for managing MySQL)
- Postman (for API testing)

## Learning Goals
- Understand how backend servers handle API requests
- Practice writing Express routes and connecting to MySQL
- Learn basic SQL queries for database interaction
- Safely manage configuration using environment variables
- Use Docker to easily run and reset local databases
- Test and debug APIs using Postman

