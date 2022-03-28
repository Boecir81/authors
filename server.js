const express = require("express");
const app = express();
const port = 8000;

//connect to mongodb using mongoose (as long as you see established a connection to the database you going in the right direction)
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authors_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));






app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello World" });
});









// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));