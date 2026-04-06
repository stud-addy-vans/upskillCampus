const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON data and serve our static HTML files
app.use(express.json());
app.use(express.static('public'));

// A simple mock database (an array) to store our blog posts
let database = [];

// The API Route to receive the HTML from the frontend
app.post('/api/publish', (req, res) => {
    const newBlogPost = req.body.htmlContent;
    
    if (newBlogPost) {
        database.push(newBlogPost); // Save to our "database"
        console.log("New Post Received:", newBlogPost);
        console.log("Total Posts in Database:", database.length);
        
        res.status(200).send({ message: 'Blog successfully published!' });
    } else {
        res.status(400).send({ message: 'No content received.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running! Open your browser to http://localhost:${PORT}`);
});