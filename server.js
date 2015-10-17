var express = require("express"),
    app = express(),
    validator = require("./validator");

app.get("/", function(req, res) {
    res.sendfile(__dirname + '/client/views/index.html');
});

app.get("/user", function(req, res) {
    console.log(validator);
    var userForm = {
        name: 'olivér',
        email: 'asd@gmail.com',
        occupation: 'Programmer',
        birthday: ''
    };
    validator.userValidator.validateUserForm(userForm);
    console.log(validator.userValidator.getErrors());
    res.send("hello validator");
});

app.listen(3000, function() {
    console.log("I'm listening...");
});