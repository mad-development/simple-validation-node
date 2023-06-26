class Validation {
  constructor(validations) {
    this.validations = validations;
  }

  validate(input) {
    let errors = [];

    for (let field in this.validations) {
      for (let validation of this.validations[field]) {
        let result = validation(input[field]);

        if (result !== true) {
          errors.push({
            field: field,
            message: result
          });
        }
      }
    }

    return errors;
  }
}

module.exports = Validation;
