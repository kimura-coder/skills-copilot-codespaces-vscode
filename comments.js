// creeate web server 
// 1. import express
const express = require('express');
// 2. create express server
const app = express();
// 3. define port number
const port = 3000;
// 4. define route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// 5. start server
app.listen(port, () => {
    console.log(`Server is running at http://



