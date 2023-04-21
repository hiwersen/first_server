let express = require('express');
let app = express(); // returns express object
let bodyParser = require('body-parser');
require('dotenv').config();

app.use((req, res, next) => {
    let { method, path, ip } = req;
    console.log(`${method} ${path} - ${ip}`);
    next(); // pass control to the next function
})

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});



