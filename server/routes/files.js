const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    const sql = 'SELECT * FROM file_nodes';
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        res.status(500).json({ error: 'Database query error' });
        return; 
      }
      res.json(results);
    });
  });

  return router;
};