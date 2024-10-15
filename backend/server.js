// Import necessary packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendQuote = require('./routes/sendQuote'); // Importing the sendQuote route

// Initialize the app
const app = express();
const port = 3000;

// Middleware
app.use(cors()); // To handle CORS (Cross-Origin Resource Sharing) issues
app.use(bodyParser.json()); // To parse incoming JSON data

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route for the homepage
app.get('/', (req, res) => {
    res.send('Hello, this is your Pressure Washing website backend!');
});

// Use the sendQuote route for handling the Free Quote form submissions
app.use('/api', sendQuote); // This connects /api/send-quote to the sendQuote.js file

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

