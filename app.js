const express = require('express');
const app = express();
const methodOverride = require('method-override');

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Method override middleware to support PUT and DELETE methods in forms
app.use(methodOverride('_method'));

// Serve static files
app.use(express.static('public'));

// Set view engine (EJS)
app.set('view engine', 'ejs');

// Import routes
const totalDataRoutes = require('./routes/dashboardRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const thresholdRoutes = require('./routes/thresholdRoutes');

// Mount routes
app.use('/', totalDataRoutes);
app.use('/', expenseRoutes);
app.use('/threshold', thresholdRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { 
        title: 'Server Error', 
        message: 'Something went wrong!' 
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).render('error', { 
        title: 'Page Not Found', 
        message: 'The page you are looking for does not exist' 
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});