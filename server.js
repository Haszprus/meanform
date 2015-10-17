var express = require("express"),
    app = express(),
    validator = require("./validator");

app.get("/", function(req, res) {
    res.sendfile(__dirname + '/client/views/index.html');
});

app.get("/user", function(req, res) {
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
});

app.listen(3000, function() {
    console.log("I'm listening...");
});