import Validation from './validation';
import rules from './validation-rules';

describe('Validation', function () {
  it('should test validation without error', function () {
    const validation = new Validation({
      'campo1': [rules.required, rules.max(100), rules.min(10), rules.integer],
      'campo2': [rules.required, rules.text],
      'campo3': [rules.required, rules.float]
    });

    const input = {
      'campo1': 50,
      'campo2': 'texto',
      'campo3': 10.5
    };

    expect(validation.validate(input)).toEqual([]);
  });
  it('should test validation with error', function () {
    const validation = new Validation({
      'campo1': [rules.required, rules.max(100), rules.min(10), rules.integer],
      'campo2': [rules.required, rules.text],
      'campo3': [rules.required, rules.float]
    });

    const input = {
      'campo1': 50,
      'campo2': 10,
      'campo3': 'texto'
    };

    expect(validation.validate(input)).toEqual([
      {field: 'campo2', message: 'Este campo deve ser texto.'},
      {field: 'campo3', message: 'Este campo deve ser um número.'}
    ]);
  });

  it('should verify if a field has error', function () {
    const validation = new Validation({
      'campo1': [rules.required, rules.max(100), rules.min(10), rules.integer],
      'campo2': [rules.required, rules.text],
      'campo3': [rules.required, rules.float]
    });

    const input = {
      'campo1': 50,
      'campo2': 10,
      'campo3': 'texto'
    };

    validation.validate(input);

    expect(validation.hasErrorsOnField('campo2')).toBe(true);
    expect(validation.hasErrorsOnField('campo3')).toBe(true);
    expect(validation.hasErrorsOnField('campo1')).toBe(false);
  });
  it('should check hasError function', function () {
    const validation = new Validation({
      'campo1': [rules.required, rules.max(100), rules.min(10), rules.integer],
      'campo2': [rules.required, rules.text],
      'campo3': [rules.required, rules.float]
    });

    const input = {
      'campo1': 50,
      'campo2': 10,
      'campo3': 'texto'
    };

    validation.validate(input);

    expect(validation.hasErrors(validation.errors, 'campo2')).toBe(true);
    expect(validation.hasErrors(validation.errors, 'campo3')).toBe(true);
    expect(validation.hasErrors(validation.errors, 'campo1')).toBe(false);
  });
});

