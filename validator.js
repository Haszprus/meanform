var moment = require('./client/bower_components/moment/moment');
var meanformApp;
(function (meanformApp) {
    var UserValidator = (function () {
        function UserValidator() {
            this.errors = {
                name: [],
                email: [],
                occupation: [],
                birthday: []
            };
        }
        UserValidator.prototype.getErrors = function () {
            return this.errors;
        };
        UserValidator.prototype.validateUserForm = function (userForm) {
            var occupations = ["Programmer", "Developer"];
            this.validateName(userForm.name);
            this.validateEmail(userForm.email);
            this.validateOccupation(userForm.occupation, occupations);
            this.validateBirthday(userForm.birthday);
        };
        UserValidator.prototype.validateString = function (fieldName, string, required, minLength, maxLength) {
            if (minLength === void 0) { minLength = 0; }
            var errors = [];
            if (required && (!string || !string.hasOwnProperty('length') || string.length === 0)) {
                errors.push(fieldName + " is required.");
            }
            if (string.length < minLength) {
                errors.push(fieldName + " should be at least " + minLength + " characters.");
            }
            if (maxLength && string.length > 20) {
                errors.push(fieldName + " should be at most " + maxLength + " characters.");
            }
            return errors;
        };
        UserValidator.prototype.validateName = function (name) {
            this.errors.name = this.validateString("Name", name, true, 5, 20);
        };
        UserValidator.prototype.validateEmail = function (email) {
            this.errors.email = this.validateString("Email", email, true, 5, 100);
            // TODO email
        };
        UserValidator.prototype.validateOccupation = function (occupation, occupations) {
            this.errors.occupation = [];
            var isValid = (occupations.indexOf(occupation) >= 0);
            if (!isValid) {
                this.errors.occupation.push("Enter a valid occupation.");
            }
        };
        UserValidator.prototype.validateBirthday = function (birthday) {
            // type = date -> select a valid birthday
            // isOver18(birthday) -> you must be over 18
        };
        return UserValidator;
    })();
    meanformApp.UserValidator = UserValidator;
})(meanformApp || (meanformApp = {}));
module.exports = {
    userValidator: new meanformApp.UserValidator()
};
//# sourceMappingURL=validator.js.map