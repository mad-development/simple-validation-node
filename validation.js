export default class Validation {
  constructor(validations) {
    this.validations = validations;
    this.errors = [];
  }

  /**
   * Check if there are errors on a field
   * @param field
   * @return {boolean}
   */
  hasErrorsOnField(field) {
    return this.errors.some(error => error.field === field);
  }

  /**
   * Validate all fields and return an array of errors
   * @param input
   * @return {[{field: string, message: string}]}
   */
  validate(input) {
    for (let field in this.validations) {
      for (let validation of this.validations[field]) {
        let result = validation(input[field]);

        if (result !== true) {
          this.errors.push({
            field: field,
            message: result
          });
        }
      }
    }

    return this.errors;
  }
}
