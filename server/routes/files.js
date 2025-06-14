/**
 * Route handler for /api/files endpoint.
 * - Handles requests related to file system nodes stored in MySQL.
 * - Demonstrates basic SQL SELECT and error handling.
 */

const express = require('express');
const router = express.Router();

/**
 * Export a function that takes database connection as parameter.
 * This allows us to reuse the same DB connection across routes.
 */
module.exports = (db) => {
  
  /**
   * GET /api/files
   * - Fetches all rows from 'file_nodes' table.
   * - Returns full file tree data as JSON.
   */
  router.get('/', (req, res) => {
    const sql = 'SELECT * FROM file_nodes'; // Simple SQL query to select all files/folders

    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        res.status(500).json({ error: 'Database query error' });
        return;
      }

      res.json(results); // Return data as JSON
    });
  });

  return router; // Return the router back to server.js
};