var moment = require('./client/bower_components/moment/moment');

module meanformApp {

    interface UserForm {
        name: any;
        email: any;
        occupation: any;
        birthday: any;
    }

    interface UserFormFields extends UserForm {
        name: String;
        email: String;
        occupation: String;
        birthday: String;
    }

    interface UserFormErrors extends UserForm {
        name: Array<String>;
        email: Array<String>;
        occupation: Array<String>;
        birthday: Array<String>;
    }

    export class UserValidator {

        errors: UserFormErrors = {
          name: [],
          email: [],
          occupation: [],
          birthday: []
        };

        getErrors() {
          return this.errors;
        }

        validateUserForm(userForm: UserForm) {
            var occupations = ["Programmer", "Developer"];
            this.validateName(userForm.name);
            this.validateEmail(userForm.email);
            this.validateOccupation(userForm.occupation, occupations);
            this.validateBirthday(userForm.birthday);
        }

        validateString(fieldName: String, string: String, required: boolean, minLength = 0, maxLength?: Number) {
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
        }

        validateName(name: String) {
            this.errors.name = this.validateString("Name", name, true, 5, 20);
        }

        validateEmail(email: String) {
            this.errors.email = this.validateString("Email", email, true, 5, 100);
            // TODO email
        }
        validateOccupation(occupation: String, occupations: String[]) {
            this.errors.occupation = [];
            var isValid = (occupations.indexOf(occupation) >= 0);
            if (! isValid) {
                this.errors.occupation.push("Enter a valid occupation.")
            }
        }
        validateBirthday(birthday) {
            // type = date -> select a valid birthday
            // isOver18(birthday) -> you must be over 18
        }

        // please fill in all the data.
    }
}


module.exports = {
    userValidator: new meanformApp.UserValidator()
};
