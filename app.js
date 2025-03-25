const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
require('dotenv').config(); 

app.use(session({
    secret: process.env.SESSION_SECRET || 'your-secret-key', 
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production', 
        maxAge: 24 * 60 * 60 * 1000
    }
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const baseUrl = process.env.API_HOST;

// Import routes
const totalDataRoutes = require('./routes/dashboardRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const thresholdRoutes = require('./routes/thresholdRoutes');
const leadRoutes = require('./routes/leadRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const authRoutes = require('./routes/authRoutes');
const { Cookie } = require('express-session');

// Mount routes
app.use('/', authRoutes);
app.use('/', totalDataRoutes);
app.use('/expenses', expenseRoutes);
app.use('/threshold', thresholdRoutes);
app.use('/leads', leadRoutes);
app.use('/tickets', ticketRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { 
        title: 'Server Error', 
        message: 'Something went wrong!' 
    });
});

app.use((req, res) => {
    res.status(404).render('error', { 
        title: 'Page Not Found', 
        message: 'The page you are looking for does not exist' 
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Base URL: ${baseUrl}`);
});