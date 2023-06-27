const required = input => (input !== '' ? true : 'Este campo é obrigatório.');
const max = maxVal => input => (input <= maxVal ? true : `Valor máximo é ${maxVal}.`);
const min = minVal => input => (input >= minVal ? true : `Valor mínimo é ${minVal}.`);
const text = input => (typeof input === 'string' ? true : 'Este campo deve ser texto.');
const integer = input => (Number.isInteger(input) ? true : 'Este campo deve ser um número inteiro.');
const float = input => (typeof input === 'number' ? true : 'Este campo deve ser um número.');
const boolean = input => (typeof input === 'boolean' ? true : 'Este campo deve ser um booleano.');

module.exports = {
  required,
  max,
  min,
  text,
  integer,
  float,
  boolean
};
