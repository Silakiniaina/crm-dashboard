const express = require('express');
const app = express();

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (if not already added)
app.use(express.static('public'));

// Set view engine (assuming EJS)
app.set('view engine', 'ejs');

// Routes
const totalDataController = require('./routes/totalDataController');
app.use('/', totalDataController);

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});