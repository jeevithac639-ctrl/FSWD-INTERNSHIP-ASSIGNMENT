const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Home!');
});

app.get('/about', (req, res) => {
  res.send('Hello from About!');
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});