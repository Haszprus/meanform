var express = require("express"),
    bodyParser = require('body-parser'),
    app = express(),
    validator = require("./validator");

app.use(bodyParser());

app.get("/", function(req, res) {
    res.setHeader("Access-Control-Allow-Methods", "GET,POST");
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
    res.json({ok: 'OK'});
});

app.get("/user", function(req, res) {
    console.log(req);
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
    var userForm = {
        name: 'olivér',
        email: 'asd@gmail.com',
        occupation: 'Programmer',
        birthday: '01/01/1998'
    };
    var userValidator = new validator.userValidator();
    userValidator.validate(userForm);
    console.log(userValidator.getErrors());
    console.log(userValidator.isValid());
    if (! userValidator.isValid()) {
        res.status(400);
    }
    res.json({
        isValid: userValidator.isValid(),
        errors: userValidator.getErrors()
    });
    console.log(req.body);
});

app.listen(3000, function() {
    console.log("I'm listening...");
});