require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'react_tutorial'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Routes
app.get('/api/tree', (req, res) => {
  const tree = {
    id: 'root',
    name: 'Root',
    children: [
      {
        id: '1',
        name: 'Node 1',
        children: [
          { id: '1.1', name: 'Node 1.1' },
          { id: '1.2', name: 'Node 1.2' }
        ]
      },
      {
        id: '2',
        name: 'Node 2',
        children: [
          { id: '2.1', name: 'Node 2.1' }
        ]
      }
    ]
  };
  res.json(tree);
});

app.get('/api/async-data', async (req, res) => {
  try {
    // Simulate async data fetching
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          message: 'Async data fetched successfully',
          timestamp: new Date().toISOString()
        });
      }, 1000);
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch async data' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
