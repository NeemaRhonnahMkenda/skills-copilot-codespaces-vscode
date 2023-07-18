// Create web server 
// 1. Create a web server
// 2. Create a route for the root URL
// 3. Create a route for the /user URL
// 4. Create a route for the /comments URL
// 5. Create a route for the /comments/new URL
// 6. Create a route for the /comments/:id URL
// 7. Create a route for the /comments/:id/edit URL
// 8. Create a route for the /comments/:id/delete URL
// 9. Start the web server

// 1. Create a web server
const express = require('express');
const app = express();

// 2. Create a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the homepage');
});

// 3. Create a route for the /user URL
app.get('/user', (req, res) => {
    res.send('Welcome to the user page');
});

// 4. Create a route for the /comments URL
app.get('/comments', (req, res) => {
    res.send('Welcome to the comments page');
});

// 5. Create a route for the /comments/new URL
app.get('/comments/new', (req, res) => {
    res.send('Welcome to the new comments page');
});

// 6. Create a route for the /comments/:id URL
app.get('/comments/:id', (req, res) => {
    res.send(`Welcome to the comments page ${req.params.id}`);
});

// 7. Create a route for the /comments/:id/edit URL
app.get('/comments/:id/edit', (req, res) => {
    res.send(`Welcome to the edit comments page ${req.params.id}`);
});

// 8. Create a route for the /comments/:id/delete URL
app.get('/comments/:id/delete', (req, res) => {
    res.send(`Welcome to the delete comments page ${req.params.id}`);
});

// 9. Start the web server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});