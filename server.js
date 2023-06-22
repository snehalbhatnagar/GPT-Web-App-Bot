

const express = require('express');
const app = express();

// Route to handle voice input
app.post('/voice', (req, res) => {
    // Process the voice input
  });
  
  // Route to serve the web application
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  


const port = 3000; // Choose a port number for your server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
