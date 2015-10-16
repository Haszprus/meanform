var express = require("express"),
    app = express();

var validator = require('./validator.js');

app.get("/", function(req, res) {
    console.log(validator);
    res.send('AAA');
});

app.listen(3000, function() {
    console.log("I'm listening...");
});