/**
 * Main entry point for backend server.
 * - Connects to MySQL database
 * - Initializes Express web server
 * - Loads API routes
 */

require('dotenv').config(); // Load environment variables from .env file

const express = require('express'); // Import Express framework for handling HTTP requests
const cors = require('cors');       // Middleware to handle Cross-Origin Resource Sharing
const mysql = require('mysql2');    // MySQL client for connecting to database

const app = express();
const port = process.env.PORT || 5000; // Use environment port or fallback to 5000

// Apply middleware
app.use(cors());         // Allow cross-origin requests
app.use(express.json()); // Parse incoming JSON requests

// Setup MySQL database connection using environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST,       // database host (usually localhost in dev)
  user: process.env.DB_USER,       // database user (e.g. root)
  password: process.env.DB_PASSWORD, // database password
  database: process.env.DB_NAME    // target database
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Import routes and inject database connection into routes
const filesRouter = require('./routes/files')(db);
app.use('/api/files', filesRouter); // Mount route under /api/files

// Start listening for HTTP requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});