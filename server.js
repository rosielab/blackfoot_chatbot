const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

// Set the port, defaulting to 8080 if not set in the environment
const port = process.env.PORT || 8080;

// Start the app and listen on all network interfaces (0.0.0.0)
app.listen(port, '0.0.0.0', () => {
  console.log(`AIS Scraper App listening at: http://localhost:${port}`);
});
